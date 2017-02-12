package fr.univbrest.dosi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fr.univbrest.dosi.bean.Etudiant;
import fr.univbrest.dosi.bean.Promotion;
import fr.univbrest.dosi.bean.PromotionPK;
@Repository
public interface EtudiantRepository extends CrudRepository<Etudiant, String> {
	
	public List<Etudiant> findByMobile(String mobileNumber);
	
	public List<Etudiant> findByPromotion(Promotion promotion);
	
}