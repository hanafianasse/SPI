package fr.univbrest.dosi.buisness;

import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.repositories.FormationRepository;

public class FormationServiceTest {

	FormationRepository Formationrepo;
	ServiceFormation service;

	@Before
	public void init() {
		Formationrepo = new FormationServiceStub();
		service = new ServiceFormation(Formationrepo);
	}

	@Test
	public void doitCompterLesFormations() {
		Formation formation = new Formation();
		formation.setCodeFormation("M2DOSI");
		formation.setDebutAccreditation(new Date());
		formation.setDiplome("Ingénieur");
		formation.setDoubleDiplome("Yep");
		formation.setFinAccreditation(new Date());
		formation.setN0Annee(new BigDecimal(2));
		formation.setNomFormation("Dévellopement à l'offshore des systèmes d'information");

		service.ajouterFormation(formation);
		assertThat(service.getAllFormations()).hasSize(1);
	}

	@Test
	public void doitRecupererUneFormationParCodeForamtion() {
		Formation formation = new Formation();
		formation.setCodeFormation("LSI");
		formation.setDebutAccreditation(new Date());
		formation.setDiplome("Ingénieur");
		formation.setDoubleDiplome("Nop");
		formation.setFinAccreditation(new Date());
		formation.setN0Annee(new BigDecimal(2));
		formation.setNomFormation("Logiciel et systeme informatique");

		service.ajouterFormation(formation);
		
		Formation persistedFormation = service.getFormationByCodeFormation("LSI");
		
		assertThat(persistedFormation.getCodeFormation()).isEqualTo("LSI");
	}

}
