package org.springframework.samples.petclinic.card;

import jakarta.persistence.Table;

import org.springframework.samples.petclinic.model.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Setter;
import lombok.Getter;

@Getter
@Setter
@Entity
@Table(name = "cards")
public class Card extends BaseEntity{
    
    String name;

    String design;
}
