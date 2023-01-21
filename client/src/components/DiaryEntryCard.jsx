const DiaryEntryCard = () => {
  // const leaderboardItems = Array(10).fill(0).map((_, i) => {
  //     return (
  //         <tr>
  //             <td>Mark{i}</td>
  //             <td>{i + 1}</td>
  //         </tr>
  //     )
  // })

  return (
    <>
      <div className="container bg-dark text-light rounded-3 m-3 ">
        <div>
          <span className="fs-2">31</span>
          <span className="fs-4"> Dec</span>
        </div>
        <div className="row">
          <strong className="fs-3">Lorem ipsum dolor sit.</strong>
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            amet ipsam qui et enim doloremque reiciendis asperiores rerum modi
            in vel, voluptatem voluptas, ducimus molestiae sapiente doloribus
            ipsum? Autem necessitatibus numquam laudantium natus, voluptas magni
            architecto fugit quaerat omnis repellendus.
          </p>
        </div>
      </div>
    </>
  );
};

export default DiaryEntryCard;
