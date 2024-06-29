package org.springframework.samples.petclinic.scoreboard;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.game.Game;
import org.springframework.samples.petclinic.user.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreBoardService {
    
    ScoreBoardRepository repo;

    @Autowired
    protected UserService userService;

    @Autowired
    ScoreBoardService(ScoreBoardRepository repo){
        this.repo = repo;
    }

    public List<ScoreBoard> getScoreBoardByUser(String username) {
		return repo.getScoreBoardsByUser(username);
	}

    public ScoreBoard getScoreBoardByGameIdByUser(String username, Integer id) {
    	return repo.getScoreBoardByGameIdByUser(username, id);
    }

    public void save(ScoreBoard scores) {
    	repo.save(scores);
    }

    @Transactional
	public void increaseScore(Integer i, String username, Game game) {
		ScoreBoard sb = repo.getScoreBoardByGameIdByUser(username, game.getId());
		sb.setScore(i + sb.getScore());
		repo.save(sb);
	}
}
