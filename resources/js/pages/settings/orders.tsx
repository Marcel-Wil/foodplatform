import Layout from '@/layouts/main-layout';

const Orders = () => {
    return (
        <div className="mt-13">
            <div className="flex space-x-14 bg-[#FFF9EA] font-bold md:pl-84">
                <a href="/settings/profile">Profile Settings</a>
                <a href="/settings/orders" className="underline">
                    My orders
                </a>
            </div>
            <div className="mx-auto mt-20 max-w-7xl">
                <div className="mx-4 my-4 flex justify-around space-x-4 border">
                    <p>#1</p>
                    <p>Orderd id: #12314</p>
                    <p>Amount: 123.00</p>
                    <p>Paid on: 10/04/2025 14:32</p>
                </div>
                <div className="mx-4 my-4 flex justify-around space-x-4 border">
                    <p>#2</p>
                    <p>Orderd id: #12314</p>
                    <p>Amount: 123.00</p>
                    <p>Paid on: 10/04/2025 14:32</p>
                </div>
            </div>
        </div>
    );
};

Orders.layout = (page) => <Layout children={page} />;

export default Orders;
