

SELECT * FROM (
    SELECT * FROM tatvam_att_pred_004_2.future_prediction_250_2020_03_03_17_01 ORDER BY `Unnamed: 0` DESC LIMIT 10
) sub
ORDER BY `Unnamed: 0` ASC