package fr.univbrest.dosi.buisness;

import java.util.List;

import fr.univbrest.dosi.bean.Enseignant;

public interface EnseignantInterface {

				
	public List<Enseignant> getAllEnseignants();

	public Enseignant getEnseignantByNoEnseignant(long noEnseignant);

	public String DeleteEnseignant(long noEnseignant);
	
	public Enseignant updateEnseignant(Enseignant enseignant);
	
	public Enseignant ajouterEnseignant(Enseignant enseignant);
}
