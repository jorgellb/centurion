import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const serviciosCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        priceRange: z.string().optional(),
        duration: z.string().optional(),
        features: z.array(z.string()),
        metaTitle: z.string(),
        metaDescription: z.string(),
        schemaType: z.enum(['Service', 'LocalBusiness']).default('Service'),
        faq: z.array(z.object({
            question: z.string(),
            answer: z.string()
        })).optional(),
        products: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string()
        })).optional()
    })
});

const localidadesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/localidades' }),
    schema: z.object({
        nombre: z.string(),
        metaTitle: z.string(),
        metaDescription: z.string(),
        coordenadas: z.object({
            lat: z.number(),
            lng: z.number()
        }),
        areasCubiertas: z.array(z.string()),
        serviciosDestacados: z.array(z.string()),
        testimonios: z.array(z.object({
            cliente: z.string(),
            propiedad: z.string(),
            texto: z.string(),
            rating: z.number().min(1).max(5)
        })).optional(),
        imagenes: z.array(z.string()).optional()
    })
});

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.coerce.date(),
        author: z.string(),
        tags: z.array(z.string()),
        localidad: z.string().optional(),
        metaTitle: z.string(),
        metaDescription: z.string(),
        featured: z.boolean().default(false)
    })
});

const productosAluminioCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/productos-aluminio' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        features: z.array(z.string()),
        metaTitle: z.string(),
        metaDescription: z.string(),
        image: z.string().optional()
    })
});

export const collections = {
    'servicios': serviciosCollection,
    'localidades': localidadesCollection,
    'blog': blogCollection,
    'productos-aluminio': productosAluminioCollection
};
