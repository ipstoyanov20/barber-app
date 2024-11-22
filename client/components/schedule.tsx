function Schedule() {
    const scheduler = {
        Monday: [
          {
            startTime: "9:00 AM",
            endTime: "10:00 AM",
          },
        ],
        Tuesday: [
          {
            startTime: "10:00 AM",
            endTime: "11:00 AM",
          },
        ],
        Wednesday: [
          {
            startTime: "11:00 AM",
            endTime: "12:00 PM",
          },
        ],
        Thursday: [
          {
            startTime: "12:00 PM",
            endTime: "1:00 PM",
          },
        ],
        Friday: [
          {
            startTime: "1:00 PM",
            endTime: "2:00 PM",
          },
        ],
        Saturday: [
          {
            startTime: "2:00 PM",
            endTime: "3:00 PM",
          },
        ],
        Sunday: [
          {
            startTime: "3:00 PM",
            endTime: "4:00 PM",
          },
        ],
      };
      
  return (
		<section className="w-screen h-screen bg-[#FAF5F1]">
			<span className="w-full  h-auto flex justify-center items-center pt-10">
				<h1 className="font-cabinet relative font-bold text-9xl text-[#AD3520]">
					Our Schedule
                <span className="h-1 top-full left-0 absolute bg-[#AD3520] w-full"></span>
				</h1>
			</span>
            <div>

            </div>
		</section>
	);
}

export default Schedule