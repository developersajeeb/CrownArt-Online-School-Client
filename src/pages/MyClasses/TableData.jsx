

// eslint-disable-next-line react/prop-types
const TableData = ({singleClass, index}) => {
    // eslint-disable-next-line react/prop-types
    const {className, availableSeats, price} = singleClass;

    return (
        <tr>
            <th>{index+1}</th>
            <td>{className}</td>
            <td>{availableSeats}</td>
            <td>{price}</td>
            <td className="flex gap-3">
                <button className='px-4 py-2 font-semibold bg-gray-200 rounded-full text-gray-400'>Already Admin</button>
            </td>
        </tr>
    );
};

export default TableData;