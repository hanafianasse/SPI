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
import fr.univbrest.dosi.bean.Etudiant;
import fr.univbrest.dosi.repositories.EtudiantRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = AppTestConfig.class)
public class EtudiantRepositoryTest {

	@Autowired
	private EtudiantRepository etudiantRepo;

	@Before
	public void init() {
		Etudiant etudiant1 = new Etudiant();
		etudiant1.setAdresse("4 Rue des Archive");
		etudiant1.setCodePostal("29200");
		etudiant1.setEmail("email@gmail.com");
		etudiant1.setEmailUbo("email@univ-brest.com");
		etudiant1.setDateNaissance(new Date());
		BigDecimal groupeAnglais = new BigDecimal(1);
		etudiant1.setGroupeAnglais(groupeAnglais);
		BigDecimal groupeTp = new BigDecimal(2);
		etudiant1.setGroupeTp(groupeTp);
		etudiant1.setLieuNaissance("Maroc:fes");
		etudiant1.setMobile("0613208148");
		etudiant1.setNationalite("marocaine");
		etudiant1.setNoEtudiant("231450");
		etudiant1.setNom("HANAFI");
		etudiant1.setPaysOrigine("Maroc");
		etudiant1.setPrenom("anasse");
		etudiant1.setSexe("HOMME");
		etudiant1.setTelephone("0613208148");
		etudiant1.setUniversiteOrigine("Abdel malek Essâdi");
		etudiant1.setVille("Tanger");
		etudiantRepo.save(etudiant1);
	}

	@Test
	public void doitCompterLesEtudiants() {
		long resultat = etudiantRepo.count();
		assertThat(resultat).isEqualTo(2);
	}

	@Test
	public void doitRecupererEtudiantsParMobile() {
		List<Etudiant> etudiant = etudiantRepo.findByMobile("0613208148");
		assertThat(etudiant.get(0).getMobile()).isEqualTo("0613208148");
	}
}
