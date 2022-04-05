using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicee.Response.Persona
{
  public  class PersonaResponse
    {

        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Cognome { get; set; }
        public string Nascita { get; set; }
        public string Nazione { get; set; }
        public string? Via { get; set; }
        public int? Cap { get; set; }
        public int? Numerocivico { get; set; }
        public string? Comune { get; set; }
        public string? Trav { get; set; }

        public string Sesso { get; set; }
        public string Codicefiscale { get; set; }
        public string? Email { get; set; }
      
 
    
        public string passwordd { get; set; }








    }
}
