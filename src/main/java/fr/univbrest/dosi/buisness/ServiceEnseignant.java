package fr.univbrest.dosi.buisness;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import fr.univbrest.dosi.bean.Enseignant;
import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.exception.SpiException;
import fr.univbrest.dosi.repositories.EnseignantRepository;

@Component
public class ServiceEnseignant implements EnseignantInterface {

	private EnseignantRepository EnseignantRepo;

	@Autowired
	public ServiceEnseignant(EnseignantRepository EnseignantRepository) {
		this.EnseignantRepo = EnseignantRepository;
	}

	@Override
	public List<Enseignant> getAllEnseignants() {
		return (List<Enseignant>) EnseignantRepo.findAll();
	}

	@Override
	public Enseignant getEnseignantByNoEnseignant(long noEnseignant) {

		return EnseignantRepo.findBynoEnseignant(noEnseignant);
	}

	@Override
	public String DeleteEnseignant(long noEnseignant) {
		Enseignant enseignantToDelete = EnseignantRepo.findBynoEnseignant(noEnseignant);
		EnseignantRepo.delete(enseignantToDelete);
		return "Done";
	}

	@Override
	public Enseignant updateEnseignant(Enseignant enseignant) {
		return EnseignantRepo.save(enseignant);
	}

	@Override
	public Enseignant ajouterEnseignant(Enseignant enseignant) {
		Enseignant unEnseignant = this.getEnseignantByNoEnseignant(enseignant.getNoEnseignant());
		if(unEnseignant == null){
			return EnseignantRepo.save(enseignant);
		}
		throw new SpiException("identifiant Enseignant existe déjà !");
	}

}
