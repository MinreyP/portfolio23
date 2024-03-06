export default {
    title: 'About',
    name: 'about',
    type: 'document',
    fields: [
        {
            title: 'Page Title',
            name: 'title',
            type: 'object',
            fields: [
                {
                    title: 'English',
                    name: 'en',
                    type: 'string'
                },
                {
                    title: 'Traditional Chinese',
                    name: 'tc',
                    type: 'string'
                }
            ]
        },
        {
            title: 'Location',
            name: 'location',
            type: 'object',
            fields: [
                {
                    title: 'English',
                    name: 'en',
                    type: 'string'
                },
                {
                    title: 'Traditional Chinese',
                    name: 'tc',
                    type: 'string'
                }
            ]
        },
        {
            title: 'Description',
            name: 'description',
            type: 'object',
            fields: [
                {
                    title: 'English',
                    name: 'en',
                    type: 'array',
                    of: [{ type: 'block' }]
                },
                {
                    title: 'Traditional Chinese',
                    name: 'tc',
                    type: 'array',
                    of: [{ type: 'block' }]
                }
            ]
        },
        {
            title: 'Gallery',
            name: 'gallery',
            type: 'array',
            description: 'square image only, size recommendation: 1000 x 1000 px',
            of: [
                {
                    title: 'Image',
                    name: 'image',
                    type: 'image'
                }
            ]
        },
    ]
}