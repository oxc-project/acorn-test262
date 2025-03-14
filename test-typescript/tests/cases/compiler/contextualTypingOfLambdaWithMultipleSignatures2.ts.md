__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
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
            "end": 59,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 59,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 13,
                    "end": 33,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14,
                        "end": 23,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15,
                          "end": 23,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 17,
                            "end": 23
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 26,
                        "end": 32
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 38,
                    "end": 57,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 39,
                        "end": 48,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 42,
                            "end": 48
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 66,
          "end": 90,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 73,
            "end": 90,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 75,
                "end": 88,
                "argument": {
                  "type": "MemberExpression",
                  "start": 82,
                  "end": 88,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "decorators": [],
                    "name": "asdf",
                    "optional": false
                  }
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "a",
              "optional": false
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
