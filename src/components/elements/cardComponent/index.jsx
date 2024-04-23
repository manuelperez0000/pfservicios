import { Card } from 'primereact/card';
// eslint-disable-next-line react/prop-types
export default function CardComponent({children,title,subtitle}) {
    return (
        <Card title={title} subTitle={subtitle} className="w-full m-4 md:w-8/12 xl:w-6/12 bg-gray-900 text-white">
            {children}
        </Card>
    )
}

