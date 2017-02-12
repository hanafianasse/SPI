package fr.univbrest.dosi.bean;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


/**
 * The persistent class for the CANDIDAT database table.
 * 
 */
@Entity
@NamedQuery(name="Candidat.findAll", query="SELECT c FROM Candidat c")
public class Candidat implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="NO_CANDIDAT")
	private String noCandidat;

	private String adresse;

	@Column(name="CODE_POSTAL")
	private String codePostal;

	@Column(name="CONFIRMATION_CANDIDAT")
	private String confirmationCandidat;

	@Temporal(TemporalType.DATE)
	@Column(name="DATE_NAISSANCE")
	private Date dateNaissance;

	@Temporal(TemporalType.DATE)
	@Column(name="DATE_REPONSE_CANDIDAT")
	private Date dateReponseCandidat;

	private String email;

	@Column(name="LIEU_NAISSANCE")
	private String lieuNaissance;

	@Column(name="LISTE_SELECTION")
	private String listeSelection;

	private String mobile;

	private String nationalite;

	private String nom;

	@Column(name="PAYS_ORIGINE")
	private String paysOrigine;

	private String prenom;

	@Column(name="SELECTION_NO_ORDRE")
	private BigDecimal selectionNoOrdre;

	private String sexe;

	private String telephone;

	@Column(name="UNIVERSITE_ORIGINE")
	private String universiteOrigine;

	private String ville;

	//uni-directional many-to-one association to Promotion
	@ManyToOne(optional = true)
	@JoinColumns({
		@JoinColumn(name="ANNEE_UNIVERSITAIRE", referencedColumnName="ANNEE_UNIVERSITAIRE"),
		@JoinColumn(name="CODE_FORMATION", referencedColumnName="CODE_FORMATION")
		})
	private Promotion promotion;

	public Candidat() {
	}

	public String getNoCandidat() {
		return this.noCandidat;
	}

	public void setNoCandidat(String noCandidat) {
		this.noCandidat = noCandidat;
	}

	public String getAdresse() {
		return this.adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getCodePostal() {
		return this.codePostal;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}

	public String getConfirmationCandidat() {
		return this.confirmationCandidat;
	}

	public void setConfirmationCandidat(String confirmationCandidat) {
		this.confirmationCandidat = confirmationCandidat;
	}

	public Date getDateNaissance() {
		return this.dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public Date getDateReponseCandidat() {
		return this.dateReponseCandidat;
	}

	public void setDateReponseCandidat(Date dateReponseCandidat) {
		this.dateReponseCandidat = dateReponseCandidat;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLieuNaissance() {
		return this.lieuNaissance;
	}

	public void setLieuNaissance(String lieuNaissance) {
		this.lieuNaissance = lieuNaissance;
	}

	public String getListeSelection() {
		return this.listeSelection;
	}

	public void setListeSelection(String listeSelection) {
		this.listeSelection = listeSelection;
	}

	public String getMobile() {
		return this.mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getNationalite() {
		return this.nationalite;
	}

	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}

	public String getNom() {
		return this.nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPaysOrigine() {
		return this.paysOrigine;
	}

	public void setPaysOrigine(String paysOrigine) {
		this.paysOrigine = paysOrigine;
	}

	public String getPrenom() {
		return this.prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public BigDecimal getSelectionNoOrdre() {
		return this.selectionNoOrdre;
	}

	public void setSelectionNoOrdre(BigDecimal selectionNoOrdre) {
		this.selectionNoOrdre = selectionNoOrdre;
	}

	public String getSexe() {
		return this.sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getTelephone() {
		return this.telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getUniversiteOrigine() {
		return this.universiteOrigine;
	}

	public void setUniversiteOrigine(String universiteOrigine) {
		this.universiteOrigine = universiteOrigine;
	}

	public String getVille() {
		return this.ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public Promotion getPromotion() {
		return this.promotion;
	}

	public void setPromotion(Promotion promotion) {
		this.promotion = promotion;
	}

}