var map = {
    title: "Gradual Climb",
    song: "env2",
    maker: "Xdoomination",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([43.98, 18.450239999999997, -80.07]);
        a.p([0.06, 0.52006, -18.41], [0, 0.3, 0], [2.12, 0.46, 7.2], 3.0, 0);
        a.p([0.06, -0.40988, -7.32], [0, 0, 0], [2.12, 0.46, 16.02], 3.0, 0);
        a.p([1.67, 1.16018, -23.92], [-0.63, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
        a.p([6.03, 3.06024, -27.67], [-1.18, 0.53, -0.01], [2.12, 0.44, 7.66], 3.0, 0);
        a.p([11.69, 4.2703, -28.74], [-1.57, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
        a.p([17.59, 5.73, -28.74], [-1.57, 0.4, 0], [2.12, 0.46, 7.38], 3.0, 0);
        a.p([23.14, 6.66006, -30.48], [-1.01, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
        a.p([28.88, 6.660119999999999, -33.97], [-1.01, 0, 0.55], [2.34, 0.44, 6.96], 3.0, 0);
        a.p([34.53, 6.66018, -37.42], [-1.01, 0, -0.35], [2.34, 0.44, 6.96], 3.0, 0);
        a.p([38.92, 6.66024, -40.06], [-1.01, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
        a.p([42.78, 6.790299999999999, -44.56], [-0.4, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
        a.p([43.97, 6.66, -50.56], [0, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
        a.p([43.97, 11.80006, -64.53], [0, 0.51, 0], [2.96, 1.68, 24.96], 3.0, 0);
        a.p([43.97, 18.07012, -78.09], [0, 0, 0], [2.12, 0.46, 6.96], 3.0, 0);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.75) {
                    speed = default_speed * 0.5;
                    steer = default_steer * 1.4;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -97.09) {
                    speed = default_speed;
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.06, 0.52006, -18.41], [0, 0.3, 0], [2.12, 0.46, 7.2]);
        a.re('P1', [0.06, -0.40988, -7.32], [0, 0, 0], [2.12, 0.46, 16.02]);
        a.re('P2', [1.67, 1.16018, -23.92], [-0.63, 0, 0], [2.12, 0.46, 6.96]);
        a.re('P3', [6.03, 3.06024, -27.67], [-1.18, 0.53, -0.01], [2.12, 0.44, 7.66]);
        a.re('P4', [11.69, 4.2703, -28.74], [-1.57, 0, 0], [2.12, 0.46, 6.96]);
        a.re('P5', [17.59, 5.73, -28.74], [-1.57, 0.4, 0], [2.12, 0.46, 7.38]);
        a.re('P6', [23.14, 6.66006, -30.48], [-1.01, 0, 0], [2.12, 0.46, 6.96]);
        a.re('P7', [28.88, 6.660119999999999, -33.97], [-1.01, 0, 0.55], [2.34, 0.44, 6.96]);
        a.re('P8', [34.53, 6.66018, -37.42], [-1.01, 0, -0.35], [2.34, 0.44, 6.96]);
        a.re('P9', [38.92, 6.66024, -40.06], [-1.01, 0, 0], [2.12, 0.46, 6.96]);
        a.re('P10', [42.78, 6.790299999999999, -44.56], [-0.4, 0, 0], [2.12, 0.46, 6.96]);
        a.re('P11', [43.97, 6.66, -50.56], [0, 0, 0], [2.12, 0.46, 6.96]);
        a.re('P12', [43.97, 11.80006, -64.53], [0, 0.51, 0], [2.96, 1.68, 24.96]);
        a.re('P13', [43.97, 18.07012, -78.09], [0, 0, 0], [2.12, 0.46, 6.96]);
    },
    physics_update: function() {},
    render_update: function() {}
}