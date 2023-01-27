export default {
    title: 'Work',
    name: 'work',
    type: 'document',
    fields: [
        {
            title: 'Project Name',
            name: 'project',
            type: 'string'
        },
        {
            title: 'Name Translation',
            name: 'name_translation',
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
            title: 'Short Description',
            name: 'short_descript',
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
            title: 'Client',
            name: 'client',
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
            title: 'Page Slug',
            name: 'page_slug',
            type: 'string'
        },
        {
            title: 'Release Date',
            name: 'release_date',
            type: 'date'
        },
        {
            title: 'Hero Image',
            name: 'hero_img',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Gallery',
            name: 'gallery',
            type: 'array',
            of: [
                {
                    title: 'Image',
                    name: 'image',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Stack',
            name: 'stack',
            type: 'array',
            of: [
                {
                    title: 'Stack Item',
                    name: 'stack_item',
                    type: 'string'
                }
            ]
        },
        {
            title: 'Quick Links',
            name: 'quick_links',
            type: 'array',
            of: [
                {
                    title: 'Official Website',
                    name: 'official_web',
                    type: 'url'
                },
                {
                    title: 'Live Demo',
                    name: 'live_demo',
                    type: 'url'
                },
                {
                    title: 'Source Code',
                    name: 'source_code',
                    type: 'url'
                }
            ]
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{
                title: 'Tag Name',
                name: 'tag_name',
                type: 'string'
            }]
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
        }
    ]
}