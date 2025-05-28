__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 60,
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 3,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 58,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 29,
                    "end": 58,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "definite": false
                }
              ],
              "declare": false
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
