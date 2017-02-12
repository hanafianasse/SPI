package fr.univbrest.dosi.repositories;


import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import fr.univbrest.dosi.AppTestConfig;
import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.repositories.FormationRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = AppTestConfig.class)
public class FormationRepositoryTest {

	@Autowired
	FormationRepository formationRepo;

	@Before
	public void init() {
		Formation formation = new Formation();
		formation.setCodeFormation("IX35");
		formation.setDebutAccreditation(new Date());
		formation.setDiplome("Diplome d'ingénieur");
		formation.setDoubleDiplome("Double Diplome");
		formation.setFinAccreditation(new Date());
		formation.setN0Annee(new BigDecimal(2));
		formation.setNomFormation("DOSI : Développement à l'offshor des systemes d'information");
		
		formationRepo.save(formation);
	}
	
	@Test
	public void doitCompterLesFormation(){
		List<Formation> Formations = (List<Formation>) formationRepo.findAll();
		assertThat(Formations).hasSize(1);
	}
}
