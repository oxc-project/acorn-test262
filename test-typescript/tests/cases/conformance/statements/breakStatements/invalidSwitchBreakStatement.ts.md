invalidSwitchBreakStatement.ts
```json
{
  "type": "Program",
  "start": 47,
  "end": 90,
  "body": [
    {
      "type": "SwitchStatement",
      "start": 47,
      "end": 89,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 65,
          "end": 87,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 81,
              "end": 87,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 70,
            "end": 71,
            "raw": "5",
            "value": 5
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 55,
        "end": 57,
        "raw": "12",
        "value": 12
      }
    }
  ],
  "sourceType": "script"
}
```
