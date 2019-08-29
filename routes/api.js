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

          if(!(splittab[0] >= 2000 && splittab[0] <= 2050 && splittab[0] != 2004 && splittab[0] != 2006)){

          }else{
            id = splittab[0]
            name = splittab[1]

            arr.push(id)
            arr.push(name)
            array.push(arr)
          }

        }
        // console.log(array)
        res.send(array)
        // console.log(newline[0].split('|'))
      } catch (error) {
        console.error(error)
      }
      console.log("Backend baby");
  });

  app.post('/api/temperature', async (req, res) => {
    try{
        //console.log(req.body)

        var station = parseInt(req.body.station)
        var startDate = req.body.startDate
        startDate = startDate.substr(0, startDate.indexOf('T')).replace(/-/g,'')
        console.log(startDate)
        var endDate = req.body.endDate
        endDate = endDate.substr(0, endDate.indexOf('T')).replace(/-/g,'')
        console.log(endDate)

        api = await axios.get(
        `https://www.longpaddock.qld.gov.au/cgi-bin/silo/PatchedPointDataset.php?start=${startDate}&finish=${endDate}&station=${station}&format=json&comment=XN`)
        // console.log(api.data.data)
        data = api.data.data
        var i;
        for( i = 0; i < data.length; i++){
          console.log(data[i])

        }
        res.send(data)
    }catch (error) {
      console.log(error)

    }
  })
};
