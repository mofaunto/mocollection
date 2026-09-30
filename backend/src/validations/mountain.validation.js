const { z } = require('zod');

const createMountainSchema = z.object({
  title: z.string().min(2, "Sarlavha kamida 2 ta belgidan iborat bo'lishi kerak"),
  description: z.string().optional(),
  imageUrl: z
    .union([z.string().url("Rasm URL noto'g'ri formatda"), z.literal('')])
    .optional(),
  status: z.enum(['chiqilmagan', 'rejada', 'chiqilgan']).default('chiqilmagan'),
  rating: z.number().int().min(1).max(5).optional().nullable(),
  davlat: z.string().min(2, "Iltimos davlat nomini to'liq kiriting"),
  maslahatBeraman: z.boolean().default(true),
});

const updateMountainSchema = z.object({
  title: z.string().min(2).optional(),
  description: z.string().optional(),
  imageUrl: z
    .union([z.string().url("Rasm URL noto'g'ri formatda"), z.literal('')])
    .optional(),
  status: z.enum(['chiqilmagan', 'rejada', 'chiqilgan']).optional(),
  rating: z.number().int().min(1).max(5).optional().nullable(),
  davlat: z.string().min(2).optional(),
  maslahatBeraman: z.boolean().optional(),
});

module.exports = { createMountainSchema, updateMountainSchema };