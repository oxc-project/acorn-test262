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
        "name": "target1",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 7
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "target2",
          "optional": false,
          "typeAnnotation": null,
          "start": 9,
          "end": 16
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 25,
            "end": 29
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 48
                },
                "start": 35,
                "end": 49
              }
            ],
            "start": 31,
            "end": 51
          },
          "start": 18,
          "end": 51
        },
        "start": 9,
        "end": 51
      },
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
