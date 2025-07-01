__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 25
              }
            ],
            "declare": false,
            "start": 20,
            "end": 25
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 37,
              "end": 41
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 54
                    },
                    "right": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "start": 57,
                      "end": 64
                    },
                    "start": 53,
                    "end": 64
                  },
                  "directive": null,
                  "start": 53,
                  "end": 64
                }
              ],
              "start": 43,
              "end": 70
            },
            "start": 30,
            "end": 70
          }
        ],
        "start": 14,
        "end": 72
      },
      "expression": false,
      "start": 0,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 55,
                  "end": 57
                },
                "definite": false,
                "start": 51,
                "end": 57
              }
            ],
            "declare": false,
            "start": 47,
            "end": 57
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 69,
              "end": 73
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "right": {
                      "type": "YieldExpression",
                      "delegate": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 97
                      },
                      "start": 89,
                      "end": 97
                    },
                    "start": 85,
                    "end": 97
                  },
                  "directive": null,
                  "start": 85,
                  "end": 97
                }
              ],
              "start": 75,
              "end": 103
            },
            "start": 62,
            "end": 103
          }
        ],
        "start": 41,
        "end": 105
      },
      "expression": false,
      "start": 27,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 27,
  "end": 105
}
```
