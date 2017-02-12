package fr.univbrest.dosi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fr.univbrest.dosi.bean.Candidat;

@Repository
public interface CandidatRepository extends CrudRepository<Candidat, String> {

	List<Candidat> findByUniversiteOrigine(String universiteOrigine);
}
