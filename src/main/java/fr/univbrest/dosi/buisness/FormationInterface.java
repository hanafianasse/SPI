package fr.univbrest.dosi.buisness;

import java.util.List;

import fr.univbrest.dosi.bean.Formation;

public interface FormationInterface {

	public List<Formation> getAllFormations();

	public Formation getFormationByCodeFormation(String codeFormation);

	public String DeleteFormation(String codeFormation);

	public Formation updateFormation(Formation formation);
	
	public Formation ajouterFormation(Formation formation);
}
