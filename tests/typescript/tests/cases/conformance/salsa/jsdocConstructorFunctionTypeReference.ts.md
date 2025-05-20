__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "Validator",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 16,
            "end": 59,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 59,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 39,
                  "end": 57,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 39,
                    "end": 57,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 39,
                      "end": 49,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 39,
                        "end": 43
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 49,
                        "decorators": [],
                        "name": "flags",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "raw": "\"gim\"",
                      "value": "gim"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "VFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 85,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 62,
            "end": 81,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 81,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 85,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 88,
          "end": 90,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 151,
            "decorators": [],
            "name": "validateRegExpFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 154,
            "end": 196,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 170,
              "end": 196,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 176,
                  "end": 194,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 183,
                    "end": 194,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 188,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "decorators": [],
                      "name": "flags",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 163,
                "end": 168,
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
