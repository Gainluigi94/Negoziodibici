

using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Models.Classi;
using Repositoryy.RepositoryInterface;
using Servicee.Contract;
using Servicee.Request.Indirizzo;
using Servicee.Request.Persona;
using Servicee.Request.Utente;
using Servicee.Response.Persona;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicee.Implementazione
{
   public class PersonaService : IPersonaService
    {

        private IMapper _mapper;
        private IPersonaRepository _personarepository;
        private IIndirizzoRepository _indirizzoRepository;
        private IUtenteRepository _utenteRepository;


        public PersonaService( IMapper mapper,IPersonaRepository personaRepository,IUtenteRepository utenterepository , IIndirizzoRepository indirizzoRepository)
        {
            _mapper = mapper;
            _personarepository = personaRepository;
            _indirizzoRepository = indirizzoRepository;
            _utenteRepository = utenterepository;
        }


        public PersonaResponse Addpersona(AddPersona persona)
        {

            AddIndirizzo add = new AddIndirizzo();
            AddUtente user = new AddUtente();
            add.Cap = persona.Cap;
            add.Comune = persona.Comune;
            add.Numerocivico = persona.Numerocivico;
            add.Via = persona.Via;
            add.Trav = persona.Trav;
            user.Email = persona.Email;
            user.Passwordd = persona.passwordd;
       
            var indirizzo = _mapper.Map<Indirizzo>(add);
            var person = _mapper.Map<Persona>(persona);
            var utente = _mapper.Map<Utente>(user);
            _indirizzoRepository.Add(indirizzo);
            _personarepository.Add(person);
            _utenteRepository.Add(utente);
            PersonaResponse p = new PersonaResponse();
            p.Id = person.Id;
            p.Cap = indirizzo.Cap;
            p.Codicefiscale = person.Codicefiscale;
            p.Cognome = person.Cognome;
            p.Comune = indirizzo.Comune;
            p.Email = person.Email;
            p.Nascita = person.Nascita;
            p.Nazione = person.Nazione;
            p.Nome = person.Nome;
            p.Numerocivico = indirizzo.Numerocivico;
            p.Sesso = person.Sesso;
            p.Trav = indirizzo.Trav;
            p.Via = indirizzo.Via;
           p.Email = utente.Email;
           p.passwordd = utente.Passwordd;
            return _mapper.Map<PersonaResponse>(p);
        }

        public PersonaResponse Deletepersona(DeletePersona del)
        {

            var person = _mapper.Map<Persona>(del);
            var indirizzo = _mapper.Map<Indirizzo>(del);
            _personarepository.Delete(person);
            return _mapper.Map<PersonaResponse>(person);


        }

        public PersonaResponse Editpersona(EditPersona persona)
        {
            var person = _mapper.Map<Persona>(persona);
            _personarepository.Update(person);
            return _mapper.Map<PersonaResponse>(person);




        }

        public List<PersonaResponse> Getpersona(int persona )
        {
            var person = _personarepository.GetAll().Where(z => z.Id == persona ).ToList();
            
            return _mapper.Map<List<PersonaResponse>>(person);




        }

     
        public List<PersonaResponse> GetPersone()
        {

            var person = _personarepository.GetAll().ToList();

            return _mapper.Map<List<PersonaResponse>>(person);
        }
    }
}
