package fr.univbrest.dosi.buisness;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.exception.SpiException;
import fr.univbrest.dosi.repositories.FormationRepository;

@Component
public class ServiceFormation implements FormationInterface {

	private FormationRepository formationRepo;

	@Autowired
	public ServiceFormation(FormationRepository formationRepo) {
		this.formationRepo = formationRepo;
	}

	@Override
	public List<Formation> getAllFormations() {
		return (List<Formation>) formationRepo.findAll();
	}

	@Override
	public Formation getFormationByCodeFormation(String codeFormation) {
		return (Formation) formationRepo.findByCodeFormation(codeFormation);
	}

	@Override
	public String DeleteFormation(String codeFormation) {
		Formation formationTobeDeleted = formationRepo.findByCodeFormation(codeFormation);
		formationRepo.delete(formationTobeDeleted);
		return "Done";
	}

	@Override
	public Formation updateFormation(Formation formation) {
		return formationRepo.save(formation);
	}

	@Override
	public Formation ajouterFormation(Formation formation) {
		if(getFormationByCodeFormation(formation.getCodeFormation()) != null){
			throw new SpiException("la formation "+formation.getCodeFormation()+" existe déjà");
		}
		return formationRepo.save(formation);
	}
}
