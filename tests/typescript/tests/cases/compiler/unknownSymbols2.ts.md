__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asdf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 22,
                        "end": 26
                      },
                      "typeArguments": null,
                      "start": 22,
                      "end": 26
                    },
                    "start": 20,
                    "end": 26
                  },
                  "start": 19,
                  "end": 26
                },
                "init": null,
                "definite": false,
                "start": 19,
                "end": 26
              }
            ],
            "declare": false,
            "start": 15,
            "end": 27
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 37
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "definite": false,
                "start": 36,
                "end": 48
              }
            ],
            "declare": false,
            "start": 32,
            "end": 49
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 67
                    },
                    "typeArguments": null,
                    "start": 63,
                    "end": 67
                  },
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 69
                  },
                  "start": 62,
                  "end": 69
                },
                "definite": false,
                "start": 58,
                "end": 69
              }
            ],
            "declare": false,
            "start": 54,
            "end": 70
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 107,
              "end": 114
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "qwerty",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 134
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 136,
                "end": 143
              },
              "alternate": null,
              "start": 124,
              "end": 143
            },
            "start": 97,
            "end": 143
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 153,
              "end": 160
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "asdf",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 176
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 178,
                "end": 197
              },
              "start": 165,
              "end": 197
            },
            "finalizer": null,
            "start": 149,
            "end": 197
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qwerty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 238
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 252,
                    "end": 258
                  }
                ],
                "start": 227,
                "end": 258
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 288,
                    "end": 294
                  }
                ],
                "start": 267,
                "end": 294
              }
            ],
            "start": 203,
            "end": 300
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 324
                  },
                  "id": null,
                  "generator": false,
                  "start": 314,
                  "end": 324
                },
                "definite": false,
                "start": 310,
                "end": 324
              }
            ],
            "declare": false,
            "start": 306,
            "end": 325
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 335
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 339,
                      "end": 343
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "qwerty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 363
                        },
                        "start": 350,
                        "end": 363
                      }
                    ],
                    "start": 348,
                    "end": 365
                  },
                  "id": null,
                  "generator": false,
                  "start": 338,
                  "end": 365
                },
                "definite": false,
                "start": 334,
                "end": 365
              }
            ],
            "declare": false,
            "start": 330,
            "end": 366
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 380
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 396
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 399,
                        "end": 400
                      },
                      "definite": false,
                      "start": 395,
                      "end": 400
                    }
                  ],
                  "declare": false,
                  "start": 391,
                  "end": 401
                }
              ],
              "start": 381,
              "end": 407
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 372,
            "end": 407
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 420
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "importKind": "value",
            "start": 412,
            "end": 425
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 438
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 445
            },
            "importKind": "value",
            "start": 430,
            "end": 446
          }
        ],
        "start": 9,
        "end": 448
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 448
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 448
}
```
