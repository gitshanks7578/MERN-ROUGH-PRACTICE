import express from "express";



// DEALING WITH ARRAY OF OBJECTS LOCALLY 
// we learn functions

// .find(callback)
// .splice(starting_point,elements to delete from here)
// .findIndex(callback)
// .push(object) adds element in Array

let users = [
  { id: 1, name: "Shashank" },
  { id: 2, name: "Anurag" },
];

export const getUsers = (req, res) => res.json(users);

export const getSpecifcUser = (req, res) => {
  const user = users.find((u) => {
    return u.id === Number(req.params.id);
  });
  if (!user)
    return res.status(404).json({ message: "not found", success: false });
  res.json(user, { success: true, user });
};

export const createUser = (req,res)=>{
    const name = req.params.name
    if(!name) return res.status(404).json({message : "to create u must enter",success:false})
    const newUser = {id: users.length+1 , name}
    users.push(newUser)
    return res.status(200).json({message : "success"})
}

export const updateUser = (req,res)=>{
    const userId = Number(req.params.id)
    const user = users.find((u)=>{
        return u.id === userId
    })
    if(!user) return res.status(404).json({message:"dont exist" , success:false})

    user.name = req.params.name
    return res.status(200).json({message:"updated successfully",success:true})
}

export const deleteUser = (req,res)=>{
    const userId = Number(req.params.id)
    const user = users.find((u)=>{
        return u.id === userId
    })
     if(!user) return res.status(404).json({message:"dont exist" , success:false})
    
    const index = users.findIndex(u => u.id == userId)
    users.splice(index,1)
    return res.status(200).json({message:"deleted successfully",success:true})

}