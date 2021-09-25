
import Layout from "../../components/Layout";
import ReferencementHeaderBloc from "../../components/blocs/service_referencement/referencementHeaderBloc";
import WhatWeOfferBloc from "../../components/blocs/service_referencement/whatWeOfferBloc";
import WhyUsBloc from "../../components/blocs/service_referencement/whyUsBloc";


export default function Sitesweb() {

    return (
        <Layout currentPage="services" navbarStyle="background--blue">
            <ReferencementHeaderBloc/>
            <WhatWeOfferBloc/>
            <WhyUsBloc/>






        </Layout>
    )
}