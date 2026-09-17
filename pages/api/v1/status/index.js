import databse from '../../../../infra/database.js'


async function status(request, response) {
  const result = await databse("select 1+1;");
  response.status(200).json({ "eu to sem tempo": "mas vou terminar essa joça" });
  console.log(result)
}

export default status;