__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 46,
          "end": 51
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 89,
              "end": 94
            },
            "consequent": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "start": 124,
                "end": 148
              }
            ],
            "start": 78,
            "end": 148
          },
          {
            "type": "SwitchCase",
            "test": null,
            "consequent": [],
            "start": 160,
            "end": 176
          },
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 207,
              "end": 212
            },
            "consequent": [
              {
                "type": "BlockStatement",
                "body": [],
                "start": 229,
                "end": 250
              }
            ],
            "start": 195,
            "end": 250
          }
        ],
        "start": 25,
        "end": 259
      },
      "start": 7,
      "end": 259
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 7,
  "end": 259
}
```
