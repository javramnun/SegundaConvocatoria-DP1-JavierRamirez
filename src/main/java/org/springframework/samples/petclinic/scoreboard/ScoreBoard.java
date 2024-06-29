package org.springframework.samples.petclinic.scoreboard;

import org.springframework.samples.petclinic.game.Game;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ScoreBoard extends BaseEntity{

    @NotNull
    @Min(1)
    @Max(8)
    private Integer orden;

    @NotNull
    @PositiveOrZero
    private Integer score;

    @ManyToOne(optional = false)
    private User user;

    @ManyToOne
    private Game game;
}
