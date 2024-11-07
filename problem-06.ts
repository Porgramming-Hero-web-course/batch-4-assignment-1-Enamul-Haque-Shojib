//problem - 6

type Profile = {
    name: string;
    age: number;
    email: string;
  };
  
  const updateProfile =<T extends Profile>(profileData: T, updateData: Partial<T>): T =>{
    return { ...profileData, ...updateData };
  }
  
  const myProfile : Profile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));