__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 60,
      "body": {
        "type": "WhileStatement",
        "start": 5,
        "end": 60,
        "test": {
          "type": "Literal",
          "start": 12,
          "end": 16,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 17,
          "end": 60,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 21,
              "end": 58,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 58,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 29,
                    "end": 58,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 35,
                      "end": 58,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 41,
                          "end": 54,
                          "label": {
                            "type": "Identifier",
                            "start": 50,
                            "end": 53,
                            "name": "TWO",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 3,
        "name": "TWO",
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
