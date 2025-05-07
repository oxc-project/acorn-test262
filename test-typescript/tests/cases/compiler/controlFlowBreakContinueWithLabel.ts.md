__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 34,
            "decorators": [],
            "name": "user",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 34,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 37,
            "end": 43,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "LabeledStatement",
      "start": 45,
      "end": 216,
      "body": {
        "type": "WhileStatement",
        "start": 52,
        "end": 216,
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 216,
          "body": [
            {
              "type": "SwitchStatement",
              "start": 71,
              "end": 214,
              "cases": [
                {
                  "type": "SwitchCase",
                  "start": 95,
                  "end": 162,
                  "consequent": [
                    {
                      "type": "ExpressionStatement",
                      "start": 120,
                      "end": 134,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 120,
                        "end": 133,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 124,
                          "decorators": [],
                          "name": "user",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 133,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
                            "decorators": [],
                            "name": "User",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "ContinueStatement",
                      "start": 147,
                      "end": 162,
                      "label": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 161,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "test": {
                    "type": "MemberExpression",
                    "start": 100,
                    "end": 106,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 104,
                      "decorators": [],
                      "name": "User",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "SwitchCase",
                  "start": 171,
                  "end": 208,
                  "consequent": [
                    {
                      "type": "BreakStatement",
                      "start": 196,
                      "end": 208,
                      "label": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 207,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "test": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 182,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 180,
                      "decorators": [],
                      "name": "User",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "discriminant": {
                "type": "Identifier",
                "start": 79,
                "end": 83,
                "decorators": [],
                "name": "user",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 59,
          "end": 63,
          "raw": "true",
          "value": true,
          "regex": null,
          "bigint": null
        }
      },
      "label": {
        "type": "Identifier",
        "start": 45,
        "end": 50,
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 217,
        "end": 221,
        "decorators": [],
        "name": "user",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
