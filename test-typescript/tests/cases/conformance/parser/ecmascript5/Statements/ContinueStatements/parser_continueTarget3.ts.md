__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 54,
      "body": {
        "type": "LabeledStatement",
        "start": 9,
        "end": 54,
        "body": {
          "type": "WhileStatement",
          "start": 18,
          "end": 54,
          "test": {
            "type": "Literal",
            "start": 25,
            "end": 29,
            "value": true,
            "raw": "true"
          },
          "body": {
            "type": "BlockStatement",
            "start": 31,
            "end": 54,
            "body": [
              {
                "type": "ContinueStatement",
                "start": 35,
                "end": 52,
                "label": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 51,
                  "name": "target1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          }
        },
        "label": {
          "type": "Identifier",
          "start": 9,
          "end": 16,
          "name": "target2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 7,
        "name": "target1",
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
