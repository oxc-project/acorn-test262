__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 82,
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 8,
        "end": 82,
        "test": {
          "type": "Literal",
          "start": 15,
          "end": 19,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 82,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 80,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 44,
                    "end": 76,
                    "label": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 50,
                      "decorators": [],
                      "name": "target",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "body": {
                      "type": "WhileStatement",
                      "start": 56,
                      "end": 76,
                      "test": {
                        "type": "Literal",
                        "start": 63,
                        "end": 67,
                        "value": true,
                        "raw": "true"
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 69,
                        "end": 76,
                        "body": []
                      }
                    }
                  }
                ]
              },
              "expression": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
