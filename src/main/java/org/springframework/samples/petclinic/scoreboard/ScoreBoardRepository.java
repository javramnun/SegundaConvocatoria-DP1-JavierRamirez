package org.springframework.samples.petclinic.scoreboard;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

@Repository
public interface ScoreBoardRepository extends CrudRepository<ScoreBoard, Integer>{

    @Query("SELECT sb FROM ScoreBoard sb WHERE sb.user.username = :username")
    List<ScoreBoard> getScoreBoardsByUser(@Param("username") String username);
    @Query("SELECT sb FROM ScoreBoard sb WHERE sb.game.id = :id AND sb.user.username = :username")
    ScoreBoard getScoreBoardByGameIdByUser(@Param("username") String username, @Param("id") Integer id);
}
