package fr.univbrest.dosi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fr.univbrest.dosi.bean.UniteEnseignement;
import fr.univbrest.dosi.bean.UniteEnseignementPK;
@Repository
public interface UniteEnseignementRepository extends CrudRepository<UniteEnseignement,UniteEnseignementPK > {

}
