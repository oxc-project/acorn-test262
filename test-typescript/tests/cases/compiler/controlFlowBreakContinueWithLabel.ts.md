__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "User",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 34,
            "name": "user",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "name": "User",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 37,
            "end": 43,
            "object": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "User",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 45,
      "end": 216,
      "body": {
        "type": "WhileStatement",
        "start": 52,
        "end": 216,
        "test": {
          "type": "Literal",
          "start": 59,
          "end": 63,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 216,
          "body": [
            {
              "type": "SwitchStatement",
              "start": 71,
              "end": 214,
              "discriminant": {
                "type": "Identifier",
                "start": 79,
                "end": 83,
                "name": "user",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 120,
                        "end": 133,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 124,
                          "name": "user",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 133,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
                            "name": "User",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ContinueStatement",
                      "start": 147,
                      "end": 162,
                      "label": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 161,
                        "name": "label",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "test": {
                    "type": "MemberExpression",
                    "start": 100,
                    "end": 106,
                    "object": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 104,
                      "name": "User",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
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
                        "name": "label",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "test": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 182,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 180,
                      "name": "User",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 45,
        "end": 50,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 222,
      "expression": {
        "type": "Identifier",
        "start": 217,
        "end": 221,
        "name": "user",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
