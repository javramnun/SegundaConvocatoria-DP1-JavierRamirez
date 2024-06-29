package org.springframework.samples.petclinic.theme;

import org.springframework.samples.petclinic.model.BaseEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "themes")
public class Theme extends BaseEntity{

    String name;
    
}