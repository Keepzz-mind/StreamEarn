#![allow(unused)]

pub struct Job {
    pub client: String,
    pub freelancer: String,
    pub amount: u64,
    pub status: String,
}

impl Job {
    pub fn new(client: &str, freelancer: &str, amount: u64) -> Self {
        Self {
            client: client.to_string(),
            freelancer: freelancer.to_string(),
            amount,
            status: "initialized".to_string(),
        }
    }

    pub fn start(&mut self) {
        self.status = "active".to_string();
    }

    pub fn pause(&mut self) {
        self.status = "paused".to_string();
    }

    pub fn complete(&mut self) {
        self.status = "completed".to_string();
    }
}

#[cfg(test)]
mod tests {
    use super::Job;

    #[test]
    fn creates_job_in_initialized_state() {
        let job = Job::new("client", "freelancer", 1000);
        assert_eq!(job.status, "initialized");
    }

    #[test]
    fn can_pause_and_complete_job() {
        let mut job = Job::new("client", "freelancer", 1000);
        job.start();
        job.pause();
        assert_eq!(job.status, "paused");
        job.complete();
        assert_eq!(job.status, "completed");
    }
}
