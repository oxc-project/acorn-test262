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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 43,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 43,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 37,
            "end": 43,
            "object": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 45,
      "end": 216,
      "label": {
        "type": "Identifier",
        "start": 45,
        "end": 50,
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null
      },
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
                "decorators": [],
                "name": "user",
                "optional": false,
                "typeAnnotation": null
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "start": 95,
                  "end": 162,
                  "test": {
                    "type": "MemberExpression",
                    "start": 100,
                    "end": 106,
                    "object": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 104,
                      "decorators": [],
                      "name": "User",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
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
                          "decorators": [],
                          "name": "user",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 133,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
                            "decorators": [],
                            "name": "User",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                {
                  "type": "SwitchCase",
                  "start": 171,
                  "end": 208,
                  "test": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 182,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 180,
                      "decorators": [],
                      "name": "User",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
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
                  ]
                }
              ]
            }
          ]
        }
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
        "decorators": [],
        "name": "user",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
