__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 51,
      "body": {
        "type": "LabeledStatement",
        "start": 9,
        "end": 51,
        "body": {
          "type": "WhileStatement",
          "start": 18,
          "end": 51,
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
            "end": 51,
            "body": [
              {
                "type": "BreakStatement",
                "start": 35,
                "end": 49,
                "label": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 48,
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
