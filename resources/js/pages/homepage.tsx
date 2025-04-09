import Layout from '../layouts/main-layout';

const homepage = () => {
    return <div className="h-screen">yo homepage</div>;
};

homepage.layout = (page) => <Layout children={page} />;

export default homepage;
