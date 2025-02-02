export const metadata = {
    title: 'TP6 - Cotización',
    description: 'Aceptar cotización - US',
}

interface Props {
    children: React.ReactNode
}

const AdminLayout: React.FC<Props> = ({children}) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default AdminLayout;