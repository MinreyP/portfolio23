export default {
    title: 'Nav',
    name: 'nav',
    type: 'document',
    fields: [
        {
            title: 'Nav name',
            name: 'nav_name',
            type: 'string',
        },
        {
            title: 'Nav Items',
            name: 'nav_items',
            type: 'array',
            of: [
                {
                    title: 'Item',
                    name: 'item',
                    type: 'object',
                    fields: [
                        {
                            title: 'Item Name',
                            name: 'item_name',
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
                            title: 'Path',
                            name: 'path',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
}