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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 72,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 25,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 25,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "WhileStatement",
            "start": 30,
            "end": 70,
            "body": {
              "type": "BlockStatement",
              "start": 43,
              "end": 70,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 53,
                  "end": 64,
                  "directive": null,
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
                      "argument": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "delegate": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 37,
              "end": 41,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
      "async": false,
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
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "WhileStatement",
            "start": 62,
            "end": 103,
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 103,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 97,
                  "directive": null,
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
                      "argument": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "delegate": true
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 69,
              "end": 73,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
