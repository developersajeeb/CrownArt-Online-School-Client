import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const TableData = ({ singleClass, index }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, className, availableSeats, price, classStatus } = singleClass;

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{className}</td>
                <td>{availableSeats}</td>
                <td>0</td>
                <td>{price}</td>
                <td className="capitalize">{classStatus}</td>
                <td className="flex gap-4">
                    <button className="table-btn" onClick={() => window.my_modal_3.showModal()}>Feedback</button>
                    <Link to={`class/${_id}`}>
                        <button className="table-btn">Update</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default TableData;