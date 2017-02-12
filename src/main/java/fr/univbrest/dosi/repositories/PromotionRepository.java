package fr.univbrest.dosi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fr.univbrest.dosi.bean.Promotion;
import fr.univbrest.dosi.bean.PromotionPK;
@Repository
public interface PromotionRepository extends CrudRepository<Promotion, PromotionPK> {

}
