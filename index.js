exports.handler = async (event) => {
    if (event.httpMethod ==='GET') {
        return getItem(event);
    }
    if (event.httpMethod =='POST') {
        return createCart(event);
    }
};

    const getItem = event => {
        let item = {
            description: ' A blue pant',
            colour: ' blue',
            size: ' Large',
            price: 'RM 25'
        };
        return {
            statusCode: 200,
            body: JSON.stringify(item)
        };
    }
    
    const createCart = event => {
        let body = JSON.parse(event.body);
        console.log('This was the cart item that being passed out',body);
        return {
            statusCode:200,
            body: JSON.stringify({
                message:'The cart was created'
            })
        }
    };
    
