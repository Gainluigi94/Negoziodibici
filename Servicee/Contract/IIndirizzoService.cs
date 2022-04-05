

using Servicee.Request.Indirizzo;
using Servicee.Response.Indirizzo;
using Servicee.Response.Persona;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicee.Contract
{
   public interface IIndirizzoService
    {



        IndirizzoResponse DeleteIndirizzo(DeleteIndirizzo delete);

        IndirizzoResponse EditIndirizzo(EditIndirizzo edit);

        List<IndirizzoResponse> GetAllIndirizzi();

        IndirizzoResponse GetIndirizzo(int edit);



    }
}
