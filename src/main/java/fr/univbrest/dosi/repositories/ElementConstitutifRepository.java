package fr.univbrest.dosi.repositories;

import org.springframework.data.repository.CrudRepository;



import org.springframework.stereotype.Repository;

import fr.univbrest.dosi.bean.ElementConstitutif;
import fr.univbrest.dosi.bean.ElementConstitutifPK;
@Repository
public interface ElementConstitutifRepository extends CrudRepository<ElementConstitutif, ElementConstitutifPK> {

}
