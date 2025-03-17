__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 448,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 448,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 448,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 26,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 22,
                      "end": 26,
                      "typeName": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 26,
                        "name": "asdf",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 49,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 40,
                  "end": 48,
                  "left": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "name": "asdf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 54,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 58,
                "end": 69,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 62,
                  "end": 69,
                  "expression": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "name": "asdf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 97,
            "end": 143,
            "test": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "name": "asdf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 107,
              "end": 114,
              "body": []
            },
            "alternate": {
              "type": "IfStatement",
              "start": 124,
              "end": 143,
              "test": {
                "type": "Identifier",
                "start": 128,
                "end": 134,
                "name": "qwerty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 136,
                "end": 143,
                "body": []
              },
              "alternate": null
            }
          },
          {
            "type": "TryStatement",
            "start": 149,
            "end": 197,
            "block": {
              "type": "BlockStatement",
              "start": 153,
              "end": 160,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 165,
              "end": 197,
              "param": {
                "type": "Identifier",
                "start": 172,
                "end": 176,
                "name": "asdf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 197,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "SwitchStatement",
            "start": 203,
            "end": 300,
            "discriminant": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "name": "asdf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 227,
                "end": 258,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 252,
                    "end": 258,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 238,
                  "name": "qwerty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 267,
                "end": 294,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 288,
                    "end": 294,
                    "label": null
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 306,
            "end": 325,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 310,
                "end": 324,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 314,
                  "end": 324,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 324,
                    "name": "asdf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 330,
            "end": 366,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 334,
                "end": 365,
                "id": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 338,
                  "end": 365,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 343,
                      "name": "asdf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 348,
                    "end": 365,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 350,
                        "end": 363,
                        "argument": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 363,
                          "name": "qwerty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 372,
            "end": 407,
            "id": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 381,
              "end": 407,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 391,
                  "end": 401,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 395,
                      "end": 400,
                      "id": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 399,
                        "end": 400,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 412,
            "end": 425,
            "id": {
              "type": "Identifier",
              "start": 419,
              "end": 420,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 430,
            "end": 446,
            "id": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 441,
              "end": 445,
              "name": "asdf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
