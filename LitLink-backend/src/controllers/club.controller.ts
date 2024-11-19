import Club from '../models/club.model';
import UserRole from '../models/userRole.model';
import Role from '../models/role.model';
import { Request, Response } from 'express';

const createClub = async (req: Request, res: Response) => {

    try {
        const { title, description, location } = req.body;
        const userId = req.user?.id;
        const email = req.user?.email;

        if (!userId) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        if (!title || !description) {
            res.status(400).json({ message: 'Title and description are required' });
            return;
        }

        const newClub = await Club.create({
            title,
            description,
            location,
            created_by: email || 'system',
        });

        // Asignar el rol de administrador al creador del club
        const adminRole = await Role.findOne({ where: { name: 'ClubAdministrator' } });

        if (!adminRole) {
            res.status(500).json({ message: 'ClubAdministrator role not found' });
            return;
        }

        const userRole = await UserRole.create({
            role_id: adminRole.role_id,
            club_id: newClub.club_id,
            appUser_id: userId
        });

        res.status(201).json({
            message: 'Club created successfully',
            club: newClub,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const joinClub = async (req: Request, res: Response) => {
    try {
        const { clubId } = req.body;
        const userId = req.user?.id;
        const email = req.user?.email;

        if (!userId) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        if (!clubId) {
            res.status(400).json({ message: 'Club ID is required' });
            return;
        }

        // Verificar si el club existe
        const club = await Club.findOne({ where: { club_id: clubId } });

        if (!club) {
            res.status(404).json({ message: 'Club not found' });
            return;
        }

        // Asignar el rol de Reader al usuario
        const readerRole = await Role.findOne({ where: { name: 'Reader' } });

        if (!readerRole) {
            res.status(500).json({ message: 'Reader role not found' });
            return;
        }

        // Verificar si ya tiene el rol en este club
        const existingRole = await UserRole.findOne({
            where: { appUser_id: userId, club_id: clubId },
        });

        if (existingRole) {
            res.status(400).json({ message: 'User is already a member of this club' });
            return;
        }

        const userRole = await UserRole.create({
            appUser_id: userId,
            role_id: readerRole.role_id,
            club_id: clubId,
        });

        res.status(201).json({
            message: 'User successfully joined the club',
        });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        return;
    }
};

export default { createClub, joinClub };
