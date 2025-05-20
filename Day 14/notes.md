## problem

jab hame kisi components ko data pass karna hota hai, toh woh props ke through hota hai. ab agar mere paas ek scene hai components ka
    parent -> child1 -> child2 -> child3

is case mai jo parent component hai, uska child component hai child1, child1 ka child component child2 hai, child2 ka child component child3 hai.

maan lete hain ki kuchh data parent ke paas haii, aur woh data ki need child3 ko hai, toh parent se child3 component tak woh data pahuchaane ke liye we have a concept called props drilling, jisme sabse pehle parent woh data ko child1 tak pahuchayega, then child1 us data ko child2 ko as a props pass karega, then finally child2 us data ko child3 tak pahuchayega.


but is case maii child1 and child2 ko us data ki need hi nahi thii, tab bhi hame child3 tak us data ko pahuchaane ke liye child1 and child2 se pass krna padh rha haii.


3. redux-toolkit
4. zustand




> useContext

1. Create Context
2. Provide
3. Consume 


Fix the problem caused by Props Drilling

> Using Props Drilling
Parent (sends props to Child 1) 
Child 1 (send props to Child 2)
Child 2 (send props to Child 3) 
Child 3 (send props to Child 4) 
Child 4 

> Using useContext Hook
Parent - (Context Provide)
Child 1
Child 2
Child 3
Child 4 - (Context Consume) if want to use data 



Provider - mere paas data hai, mai provide karunga
Consumer - mujhe data ki need hai, mai consumer banunga



> Steps to use useContext
1. const UserContext = createContext()
2. wrap all child inside <Provider></Provider>
3. pass value
4. consume data using - useContext()