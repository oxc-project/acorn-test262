__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 72,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 25,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 25,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 30,
            "end": 70,
            "test": {
              "type": "Literal",
              "start": 37,
              "end": 41,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 43,
              "end": 70,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 53,
                  "end": 64,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 53,
                    "end": 64,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "YieldExpression",
                      "start": 57,
                      "end": 64,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
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
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 105,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 47,
            "end": 57,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 51,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
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
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
