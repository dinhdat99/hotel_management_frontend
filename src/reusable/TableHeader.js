import React from 'react';

const TableHeader = (props) => {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2> <b>{props.title}</b></h2>
                </div>
                <div className="col-sm-6">
                    <button type="button" className="btn btn-primary" onClick={()=>props.headerAction()}> Thêm</button>
                </div>
            </div>
        </div>
    )
}
export default TableHeader;