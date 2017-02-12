package fr.univbrest.dosi.bean;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the UNITE_ENSEIGNEMENT database table.
 * 
 */
@Embeddable
public class UniteEnseignementPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="CODE_FORMATION", insertable=false, updatable=false)
	private String codeFormation;

	@Column(name="CODE_UE")
	private String codeUe;

	public UniteEnseignementPK() {
	}
	public String getCodeFormation() {
		return this.codeFormation;
	}
	public void setCodeFormation(String codeFormation) {
		this.codeFormation = codeFormation;
	}
	public String getCodeUe() {
		return this.codeUe;
	}
	public void setCodeUe(String codeUe) {
		this.codeUe = codeUe;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof UniteEnseignementPK)) {
			return false;
		}
		UniteEnseignementPK castOther = (UniteEnseignementPK)other;
		return 
			this.codeFormation.equals(castOther.codeFormation)
			&& this.codeUe.equals(castOther.codeUe);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.codeFormation.hashCode();
		hash = hash * prime + this.codeUe.hashCode();
		
		return hash;
	}
}