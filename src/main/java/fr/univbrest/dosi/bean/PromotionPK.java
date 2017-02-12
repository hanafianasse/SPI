package fr.univbrest.dosi.bean;

import java.io.Serializable;

import javax.persistence.*;

/**
 * The primary key class for the PROMOTION database table.
 * 
 */
@Embeddable
public class PromotionPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="ANNEE_UNIVERSITAIRE")
	private String anneeUniversitaire;

	@Column(name="CODE_FORMATION", insertable=false, updatable=false)
	private String codeFormation;

	public PromotionPK() {
	}
	public PromotionPK(String anneeUniversitaire, String codeFormation) {
		super();
		this.anneeUniversitaire = anneeUniversitaire;
		this.codeFormation = codeFormation;
	}
	public String getAnneeUniversitaire() {
		return this.anneeUniversitaire;
	}
	public void setAnneeUniversitaire(String anneeUniversitaire) {
		this.anneeUniversitaire = anneeUniversitaire;
	}
	public String getCodeFormation() {
		return this.codeFormation;
	}
	public void setCodeFormation(String codeFormation) {
		this.codeFormation = codeFormation;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof PromotionPK)) {
			return false;
		}
		PromotionPK castOther = (PromotionPK)other;
		return 
			this.anneeUniversitaire.equals(castOther.anneeUniversitaire)
			&& this.codeFormation.equals(castOther.codeFormation);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.anneeUniversitaire.hashCode();
		hash = hash * prime + this.codeFormation.hashCode();
		
		return hash;
	}
}