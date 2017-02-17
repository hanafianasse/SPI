package fr.univbrest.dosi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.Enseignant;
import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.buisness.EnseignantInterface;

@RestController
@RequestMapping(value = "/enseignant")
public class EnseignantController {

	private EnseignantInterface service;

	@Autowired
	public EnseignantController(EnseignantInterface enseignantService) {
		this.service = enseignantService;
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Enseignant> getAllEnseignant() {
		return this.service.getAllEnseignants();
	}

	@RequestMapping(value = "/{noEnseignant}", method = RequestMethod.GET)
	public Enseignant getByNoEnseignant(
			@PathVariable("noEnseignant") final long noEnseignant) {
		return this.service.getEnseignantByNoEnseignant(noEnseignant);
	}

	@RequestMapping(value = "/nombre", method = RequestMethod.GET)
	public int getNombreEnseignant() {
		return this.service.getAllEnseignants().size();
	}

	@RequestMapping(value = "/delete/{noEnseignant}", method = RequestMethod.DELETE)
	public void deleteEnseignant(
			@PathVariable("noEnseignant") final long noEnseignant) {
		this.service.DeleteEnseignant(noEnseignant);
	}

	@RequestMapping(value = "/ajouter", method = RequestMethod.POST)
	public Enseignant ajouterEnseignant(@RequestBody Enseignant enseignant) {
		return this.service.ajouterEnseignant(enseignant);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public Enseignant updateEnseignant(@RequestBody Enseignant enseignant) {
		return this.service.updateEnseignant(enseignant);
	}

}