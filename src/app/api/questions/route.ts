export async function GET(req: Request) {
  // fetch data from db then return
  const x =   {
    id : 1,
    src : "/ImageOfWord/listening.jpg",
    alt : "listening",
    question : "What is this Pictures?",
    answer : "Listening",
    choice1 : "Reading",
    choice2 : "Drinking",
    choice3 : "Listening",
    choice4 : "Seeing",
    descriptionChoice1 : "Reading about books",
    descriptionChoice2 : "Drinking about drinks",
    descriptionChoice3 : "Listening about hearing",
    descriptionChoice4 : "Viewing about vision"
  }
  console.log('hello')
  return Response.json(x)
}