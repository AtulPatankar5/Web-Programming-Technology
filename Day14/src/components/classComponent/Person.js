const   Person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error("Something went wrong");
    }
    return (
        <h2>Hi Person</h2>
    )
};
export default Person;