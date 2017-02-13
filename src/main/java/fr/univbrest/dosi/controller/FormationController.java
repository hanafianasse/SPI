package fr.univbrest.dosi.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.buisness.FormationInterface;

@RestController
@RequestMapping(value = "/formations")
public class FormationController {

	private FormationInterface service;

	@Autowired
	public FormationController(FormationInterface formationService) {
		this.service = formationService;
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Formation> getAllFormation() {
		return this.service.getAllFormations();
	}

	@RequestMapping(value = "/{codeFormation}", method = RequestMethod.GET)
	public Formation getByCodeFormation(
			@PathVariable("codeFormation") final String codeFormation) {
		return this.service.getFormationByCodeFormation(codeFormation);
	}

	@RequestMapping(value = "/delete/{codeFormation}", method = RequestMethod.DELETE)
	public Object deleteFormation(
			@PathVariable("codeFormation") final String codeFormation) {
		this.service.DeleteFormation(codeFormation);
		return "Formation " + codeFormation + " was deleted ";
	}
	
	//: /{codeFormation}/{nomFormation}/{diplome}/{doubleDiplome}/{n0Anne}/{dateDebutAccreditation}/{dateFinAccreditation}
	@RequestMapping(value = "/ajouter", method = RequestMethod.POST)
	public Formation ajouterFormation(
			@RequestParam(value = "codeFormation", required = true) String codeFormation,
			@RequestParam(value = "nomFormation", required = true) String nomFormation,
			@RequestParam(value = "diplome", required = true) String diplome,
			@RequestParam(value = "doubleDiplome", required = true) String doubleDiplome,
			@RequestParam(value = "n0Annee", required = true) String n0Annee,
			@RequestParam(value = "dateDebutAccreditation", required = true) String dateDebutAccreditation,
			@RequestParam(value = "dateFinAccreditation", required = true) String dateFinAccreditation) {
		Formation nouvelleFormation = new Formation();
		nouvelleFormation.setCodeFormation(codeFormation);
		nouvelleFormation.setNomFormation(nomFormation);
		nouvelleFormation.setDiplome(diplome);
		nouvelleFormation.setDoubleDiplome(doubleDiplome);
		nouvelleFormation.setN0Annee(new BigDecimal(n0Annee));
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MMM-dd");
		try {
			Date debutAccreditation = formatter.parse(dateDebutAccreditation);
			Date finAccreditation = formatter.parse(dateFinAccreditation);
			nouvelleFormation.setDebutAccreditation(debutAccreditation);
			nouvelleFormation.setFinAccreditation(finAccreditation);
		} catch (Exception e) {
			//throw new Exception(e.getMessage());
		}
		return this.service.ajouterFormation(nouvelleFormation);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public Formation updateFormation(
			@RequestBody Formation updatedFormation) {
		System.out.println(updatedFormation);
		return this.service.updateFormation(updatedFormation.getCodeFormation(),updatedFormation);
	}
}
