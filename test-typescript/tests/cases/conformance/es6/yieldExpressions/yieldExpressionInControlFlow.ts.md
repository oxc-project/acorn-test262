__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 47,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 51,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 55,
                  "end": 57,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 62,
            "end": 103,
            "test": {
              "type": "Literal",
              "start": 69,
              "end": 73,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 103,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 97,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 85,
                    "end": 97,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "YieldExpression",
                      "start": 89,
                      "end": 97,
                      "delegate": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
