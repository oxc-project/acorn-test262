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
        "start": 10,
        "end": 11
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
                        "start": 25,
                        "end": 29
                      },
                      "typeArguments": null,
                      "start": 25,
                      "end": 29
                    },
                    "start": 23,
                    "end": 29
                  },
                  "start": 22,
                  "end": 29
                },
                "init": null,
                "definite": false,
                "start": 22,
                "end": 29
              }
            ],
            "declare": false,
            "start": 18,
            "end": 30
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
                  "start": 39,
                  "end": 40
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "definite": false,
                "start": 39,
                "end": 51
              }
            ],
            "declare": false,
            "start": 35,
            "end": 52
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
                  "start": 61,
                  "end": 62
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
                      "start": 66,
                      "end": 70
                    },
                    "typeArguments": null,
                    "start": 66,
                    "end": 70
                  },
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "start": 65,
                  "end": 72
                },
                "definite": false,
                "start": 61,
                "end": 72
              }
            ],
            "declare": false,
            "start": 57,
            "end": 73
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 108
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 110,
              "end": 117
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "qwerty",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 139,
                "end": 146
              },
              "alternate": null,
              "start": 127,
              "end": 146
            },
            "start": 100,
            "end": 146
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 156,
              "end": 163
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "asdf",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 179
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 181,
                "end": 200
              },
              "start": 168,
              "end": 200
            },
            "finalizer": null,
            "start": 152,
            "end": 200
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 218
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
                  "start": 235,
                  "end": 241
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 255,
                    "end": 261
                  }
                ],
                "start": 230,
                "end": 261
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 291,
                    "end": 297
                  }
                ],
                "start": 270,
                "end": 297
              }
            ],
            "start": 206,
            "end": 303
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
                  "start": 313,
                  "end": 314
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
                    "start": 323,
                    "end": 327
                  },
                  "id": null,
                  "generator": false,
                  "start": 317,
                  "end": 327
                },
                "definite": false,
                "start": 313,
                "end": 327
              }
            ],
            "declare": false,
            "start": 309,
            "end": 328
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
                  "start": 337,
                  "end": 338
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
                      "start": 342,
                      "end": 346
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
                          "start": 360,
                          "end": 366
                        },
                        "start": 353,
                        "end": 366
                      }
                    ],
                    "start": 351,
                    "end": 368
                  },
                  "id": null,
                  "generator": false,
                  "start": 341,
                  "end": 368
                },
                "definite": false,
                "start": 337,
                "end": 368
              }
            ],
            "declare": false,
            "start": 333,
            "end": 369
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
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
                        "start": 401,
                        "end": 402
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 405,
                        "end": 406
                      },
                      "definite": false,
                      "start": 401,
                      "end": 406
                    }
                  ],
                  "declare": false,
                  "start": 397,
                  "end": 407
                }
              ],
              "start": 387,
              "end": 413
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 375,
            "end": 413
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
            },
            "importKind": "value",
            "start": 418,
            "end": 431
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 451
            },
            "importKind": "value",
            "start": 436,
            "end": 452
          }
        ],
        "start": 12,
        "end": 454
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
