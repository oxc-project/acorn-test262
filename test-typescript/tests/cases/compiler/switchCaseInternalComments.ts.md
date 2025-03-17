__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 7,
  "end": 259,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 7,
      "end": 259,
      "body": {
        "type": "SwitchStatement",
        "start": 25,
        "end": 259,
        "discriminant": {
          "type": "Literal",
          "start": 46,
          "end": 51,
          "value": false,
          "raw": "false"
        },
        "cases": [
          {
            "type": "SwitchCase",
            "start": 78,
            "end": 148,
            "consequent": [
              {
                "type": "BreakStatement",
                "start": 124,
                "end": 148,
                "label": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 140,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "test": {
              "type": "Literal",
              "start": 89,
              "end": 94,
              "value": false,
              "raw": "false"
            }
          },
          {
            "type": "SwitchCase",
            "start": 160,
            "end": 176,
            "consequent": [],
            "test": null
          },
          {
            "type": "SwitchCase",
            "start": 195,
            "end": 250,
            "consequent": [
              {
                "type": "BlockStatement",
                "start": 229,
                "end": 250,
                "body": []
              }
            ],
            "test": {
              "type": "Literal",
              "start": 207,
              "end": 212,
              "value": false,
              "raw": "false"
            }
          }
        ]
      },
      "label": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
