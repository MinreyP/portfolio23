export default {
    title: 'Category',
    name: 'category',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Works',
            name: 'works',
            type: 'array',
            of: [
                {
                    title: 'Work',
                    name: 'work',
                    type: 'reference',
                    to: [{ type: 'work' }]
                }
            ]
        }
    ]
}