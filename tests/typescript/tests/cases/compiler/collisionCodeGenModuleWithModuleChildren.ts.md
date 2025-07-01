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
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 26,
                    "end": 27
                  },
                  "init": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 30,
                    "end": 31
                  },
                  "definite": false,
                  "start": 26,
                  "end": 31
                }
              ],
              "declare": false,
              "start": 22,
              "end": 32
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 32
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
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
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 62
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 65,
                        "end": 67
                      },
                      "definite": false,
                      "start": 61,
                      "end": 67
                    }
                  ],
                  "declare": false,
                  "start": 57,
                  "end": 68
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 86
                      },
                      "definite": false,
                      "start": 81,
                      "end": 86
                    }
                  ],
                  "declare": false,
                  "start": 77,
                  "end": 87
                }
              ],
              "start": 47,
              "end": 93
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 37,
            "end": 93
          }
        ],
        "start": 9,
        "end": 95
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 121
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 140,
                    "end": 151
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 132,
                  "end": 151
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 165
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "definite": false,
                      "start": 164,
                      "end": 169
                    }
                  ],
                  "declare": false,
                  "start": 160,
                  "end": 170
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
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 185
                      },
                      "init": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 192,
                          "end": 193
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 188,
                        "end": 195
                      },
                      "definite": false,
                      "start": 183,
                      "end": 195
                    }
                  ],
                  "declare": false,
                  "start": 179,
                  "end": 196
                }
              ],
              "start": 122,
              "end": 202
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 112,
            "end": 202
          }
        ],
        "start": 106,
        "end": 204
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 97,
      "end": 204
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 214
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 230
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 254,
                    "end": 265
                  },
                  "expression": false,
                  "start": 241,
                  "end": 265
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 279
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 283
                      },
                      "definite": false,
                      "start": 278,
                      "end": 283
                    }
                  ],
                  "declare": false,
                  "start": 274,
                  "end": 284
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
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 299
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 302,
                        "end": 305
                      },
                      "definite": false,
                      "start": 297,
                      "end": 305
                    }
                  ],
                  "declare": false,
                  "start": 293,
                  "end": 306
                }
              ],
              "start": 231,
              "end": 312
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 221,
            "end": 312
          }
        ],
        "start": 215,
        "end": 314
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 206,
      "end": 314
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 324
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 358
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 380
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 381,
                    "end": 392
                  },
                  "declare": false,
                  "start": 369,
                  "end": 392
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 406
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "definite": false,
                      "start": 405,
                      "end": 410
                    }
                  ],
                  "declare": false,
                  "start": 401,
                  "end": 411
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
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "M",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 428,
                              "end": 429
                            },
                            "typeArguments": null,
                            "start": 428,
                            "end": 429
                          },
                          "start": 426,
                          "end": 429
                        },
                        "start": 424,
                        "end": 429
                      },
                      "init": null,
                      "definite": false,
                      "start": 424,
                      "end": 429
                    }
                  ],
                  "declare": false,
                  "start": 420,
                  "end": 430
                }
              ],
              "start": 359,
              "end": 436
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 349,
            "end": 436
          }
        ],
        "start": 325,
        "end": 438
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 316,
      "end": 438
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 448
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 464
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 483
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
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 503
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 506,
                              "end": 507
                            },
                            "definite": false,
                            "start": 502,
                            "end": 507
                          }
                        ],
                        "declare": false,
                        "start": 498,
                        "end": 508
                      }
                    ],
                    "start": 484,
                    "end": 518
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 475,
                  "end": 518
                }
              ],
              "start": 465,
              "end": 524
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 455,
            "end": 524
          }
        ],
        "start": 449,
        "end": 526
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 440,
      "end": 526
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 526
}
```
