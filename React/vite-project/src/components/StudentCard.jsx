const StudentCard = (props) => {
    console.log(props);
    const { fname, lname, age } = props;
    return (<>
        <div className="border p-4 rounded shadow-md">
            Firstname: {fname} <br />
            Lastname: {lname} <br />
            Fullname: {fname} {lname}<br />
            Age:{age}
        </div>
    </>
    );
}
export default StudentCard;