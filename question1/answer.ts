interface Car {
    make: string;
    color: string;
    registration: string;
    owner: string;
  }
  
  interface Bicycle {
    make: string;
    color: string;
    owner: string;
  }
  
  type Transporter = Car | Bicycle;
  
  const database: Transporter[] = [
   {   // Car
      make: "Toyota Yaris",
      color: "Red",
      registration: "231WD1234",
      owner: "Jane Smith",
   },
   {    // Car
      make: "Suzuki Swift",
      color: "Blue",
      registration: "241WD4321",
      owner: "Paul O Regan",
   },
   {   // Car
      make: "Ford Puma",
      color: "Blue",
      registration: "241WD1212",
      owner: "Eileen Silk",
   },
   {   // Bicycle
      make: "Revel Rascal XO",
      color: "Blue",
      owner: "Cindy Tamoka",
   },
   {    // Bicycle
      make: "Yeti SB140 LR",
      color: "Red",
      owner: " ",
   },
  ];

  /*function getMatches(
    transporter : Transporter[],
    filter: (f1: Transporter) => boolean) : string[] {
        const filtered = transporter.filter(filter)
        const result: string[] = filtered.map((t) => t.color)
        return result
    }

    console.log(getMat((t) => t.color === "Blue"))*/
    function getMatches<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
        return data.find((criteria))
    }

    console.log(getMatches<Transporter>(database,(t) => t.color === "Blue"  ))
    console.log(getMatches<Transporter>(database, (t) => t.color === "Red" && "registration" in t))
    console.log(getMatches<Transporter>(database, (t) => t.make.startsWith("Fo") && "registration" in t))
    