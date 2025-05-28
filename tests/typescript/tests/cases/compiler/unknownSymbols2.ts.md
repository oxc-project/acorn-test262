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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "asdf",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 49,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 40,
                  "end": 48,
                  "left": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 54,
            "end": 70,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 58,
                "end": 69,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 62,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "expression": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "qwerty",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "asdf",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 227,
                "end": 258,
                "test": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 238,
                  "decorators": [],
                  "name": "qwerty",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 252,
                    "end": 258,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 267,
                "end": 294,
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 288,
                    "end": 294,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 306,
            "end": 325,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 310,
                "end": 324,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 314,
                  "end": 324,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 324,
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 330,
            "end": 366,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 334,
                "end": 365,
                "id": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 338,
                  "end": 365,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 343,
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
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
                          "decorators": [],
                          "name": "qwerty",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 395,
                      "end": 400,
                      "id": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 441,
              "end": 445,
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null
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
