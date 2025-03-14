unknownSymbols2.ts
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
                "definite": false,
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
                        "optional": false
                      }
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
            "type": "VariableDeclaration",
            "start": 32,
            "end": 49,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 48,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 40,
                  "end": 48,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "asdf",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "z",
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
                    "decorators": [],
                    "name": "x",
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
                      "decorators": [],
                      "name": "asdf",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 97,
            "end": 143,
            "alternate": {
              "type": "IfStatement",
              "start": 124,
              "end": 143,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 136,
                "end": 143,
                "body": []
              },
              "test": {
                "type": "Identifier",
                "start": 128,
                "end": 134,
                "decorators": [],
                "name": "qwerty",
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 107,
              "end": 114,
              "body": []
            },
            "test": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "asdf",
              "optional": false
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
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 165,
              "end": 197,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 197,
                "body": []
              },
              "param": {
                "type": "Identifier",
                "start": 172,
                "end": 176,
                "decorators": [],
                "name": "asdf",
                "optional": false
              }
            }
          },
          {
            "type": "SwitchStatement",
            "start": 203,
            "end": 300,
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
                  "decorators": [],
                  "name": "qwerty",
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
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "decorators": [],
              "name": "asdf",
              "optional": false
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 314,
                  "end": 324,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 324,
                    "decorators": [],
                    "name": "asdf",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 338,
                  "end": 365,
                  "async": false,
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
                          "optional": false
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
                      "start": 339,
                      "end": 343,
                      "decorators": [],
                      "name": "asdf",
                      "optional": false
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 372,
            "end": 407,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 399,
                        "end": 400,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "kind": "module"
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
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "N",
              "optional": false
            }
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
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 441,
              "end": 445,
              "decorators": [],
              "name": "asdf",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
