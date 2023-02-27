export default {
    title: 'Selected Works',
    name: 'selected_works',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'Name on the collection card'
        },
        {
            title: 'Work',
            name: 'work',
            type: 'reference',
            to: [{ type: 'work' }]
        }
    ]
}