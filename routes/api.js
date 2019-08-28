const axios = require('axios')
module.exports = app => {
  app.get('/api/silo', async (req, res) => {
      try {

        ret = await axios.get('https://www.longpaddock.qld.gov.au/cgi-bin/silo/PatchedPointDataset.php?format=name&nameFrag=_');
        newline = ret.data.split('\n')
        var array = []
        for(i = 0; i<newline.length; i++){
          var arr = []
          splittab = newline[i].split('|')
          id = splittab[0]
          name = splittab[1]

          arr.push(id)
          arr.push(name)
          array.push(arr)
        }
        // console.log(array)
        res.send(array)
        // console.log(newline[0].split('|'))
      } catch (error) {
        console.error(error)
      }
      console.log("Backend baby");
  });
  app.get('/api/temp', async (req, res) => {
    try{
      
    }catch (error) {

    }
  })
};
