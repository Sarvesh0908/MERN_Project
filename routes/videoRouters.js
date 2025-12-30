const pool = require("../db/pool")
const result = require("../utils/result")
const express = require("express")
const router = express.Router()

router.get("/my-videos/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const sql = "select * from video where course_id = ?"

    pool.query(sql, [courseId], (err, data) => {
        if (err) {
            res.send(result.createResult(err, null))
        }

        data.forEach(v => {
            if (v.added_at) {
                v.added_at = new Date(v.added_at)
                    .toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })
            }
        })

        res.send(result.createResult(null, data))
    })
});

router.get("/all-videos", (req, res) => {
    const sql = ` SELECT v.video_id,c.course_name,v.title,v.description,v.youtube_url FROM video v JOIN courses c ON v.course_id = c.course_id`;


    pool.query(sql, (err, data) => {
        if (err) {
            res.send(result.createResult(err, null))
        }

        data.forEach(v => {
            if (v.added_at) {
                v.added_at = new Date(v.added_at)
                    .toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })
            }
        })


        res.send(result.createResult(null, data))
    })
});

router.post("/add", (req, res) => {
    let { course_id, title, youtube_url, description } = req.body
    console.log(youtube_url)


    const sql = "insert into video(course_id, title, youtube_url,description,added_at) values(?,?,?,?,CURDATE())"
    pool.query(sql, [course_id, title, youtube_url, description], (err, data) => {
        if (err) {
            res.send(result.createResult(err, null))
        }
        res.send(result.createResult(null, data))
    })
});

router.delete("/delete/:video_id", (req, res) => {
    const video_id = req.params.video_id
    const sql = `DELETE FROM video WHERE video_id=?`
    pool.query(sql, [video_id], (err, data) => {
        if (err) throw err;
        res.send("data deleted")
    })
});

router.put("/update/:video_id", (req, res) => {
  const video_id = req.params.video_id;
  const { course_id, title, youtube_url, description } = req.body;

  console.log("UPDATE video_id:", video_id);
  console.log("UPDATE BODY:", req.body);

  const sql = `UPDATE video SET course_id=?, title=?, youtube_url=?, description=? WHERE video_id=? `;

  pool.query(
    sql,[course_id, title, youtube_url, description, video_id],(err, data) => {
      if (err) {
        return res.send({ status: "error", error: err });
      }

      if (data.affectedRows === 0) {
        return res.send({
          status: "error",
          message: "No video updated (invalid video_id)"
        });
      }

      return res.send({
        status: "success",
        data: "data updated"
      });
    }
  );
});

module.exports = router;
