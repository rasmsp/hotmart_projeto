import "./style.css";
import { Breadcrumb } from 'react-bootstrap';

export  default function  Routine_name  ({menu,menu_1,menu_2})  {

  return (

    <Breadcrumb>
      <Breadcrumb.Item active className="breadcrum-disabled">{menu}</Breadcrumb.Item>
      <Breadcrumb.Item active className="breadcrum-disabled">{menu_1}</Breadcrumb.Item>
      <Breadcrumb.Item active className="breadcrum-enabled">{menu_2}</Breadcrumb.Item>
    </Breadcrumb>
 
  );
};