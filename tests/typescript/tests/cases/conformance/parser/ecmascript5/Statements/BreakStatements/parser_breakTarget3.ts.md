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
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 7,
        "decorators": [],
        "name": "target1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "LabeledStatement",
        "start": 9,
        "end": 51,
        "label": {
          "type": "Identifier",
          "start": 9,
          "end": 16,
          "decorators": [],
          "name": "target2",
          "optional": false,
          "typeAnnotation": null
        },
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
                  "decorators": [],
                  "name": "target1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
