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
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 33,
                    "end": 34
                  },
                  "definite": false,
                  "start": 29,
                  "end": 34
                }
              ],
              "declare": false,
              "start": 25,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 35
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
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
                        "start": 67,
                        "end": 68
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 71,
                        "end": 73
                      },
                      "definite": false,
                      "start": 67,
                      "end": 73
                    }
                  ],
                  "declare": false,
                  "start": 63,
                  "end": 74
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
                        "start": 87,
                        "end": 88
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 92
                      },
                      "definite": false,
                      "start": 87,
                      "end": 92
                    }
                  ],
                  "declare": false,
                  "start": 83,
                  "end": 93
                }
              ],
              "start": 53,
              "end": 99
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 40,
            "end": 99
          }
        ],
        "start": 12,
        "end": 101
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
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
              "start": 131,
              "end": 133
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
                    "start": 150,
                    "end": 151
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 152,
                    "end": 163
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 144,
                  "end": 163
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
                        "start": 176,
                        "end": 177
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 181
                      },
                      "definite": false,
                      "start": 176,
                      "end": 181
                    }
                  ],
                  "declare": false,
                  "start": 172,
                  "end": 182
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
                        "start": 195,
                        "end": 197
                      },
                      "init": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 205
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 200,
                        "end": 207
                      },
                      "definite": false,
                      "start": 195,
                      "end": 207
                    }
                  ],
                  "declare": false,
                  "start": 191,
                  "end": 208
                }
              ],
              "start": 134,
              "end": 214
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 121,
            "end": 214
          }
        ],
        "start": 115,
        "end": 216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 103,
      "end": 216
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
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
              "start": 246,
              "end": 248
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
                    "start": 268,
                    "end": 269
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
                    "start": 272,
                    "end": 283
                  },
                  "expression": false,
                  "start": 259,
                  "end": 283
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
                        "start": 296,
                        "end": 297
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 301
                      },
                      "definite": false,
                      "start": 296,
                      "end": 301
                    }
                  ],
                  "declare": false,
                  "start": 292,
                  "end": 302
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
                        "start": 315,
                        "end": 317
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 321
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 320,
                        "end": 323
                      },
                      "definite": false,
                      "start": 315,
                      "end": 323
                    }
                  ],
                  "declare": false,
                  "start": 311,
                  "end": 324
                }
              ],
              "start": 249,
              "end": 330
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 236,
            "end": 330
          }
        ],
        "start": 230,
        "end": 332
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 218,
      "end": 332
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 345
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
              "start": 380,
              "end": 382
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
                    "start": 403,
                    "end": 404
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 405,
                    "end": 416
                  },
                  "declare": false,
                  "start": 393,
                  "end": 416
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
                        "start": 429,
                        "end": 430
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 433,
                        "end": 434
                      },
                      "definite": false,
                      "start": 429,
                      "end": 434
                    }
                  ],
                  "declare": false,
                  "start": 425,
                  "end": 435
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
                              "start": 452,
                              "end": 453
                            },
                            "typeArguments": null,
                            "start": 452,
                            "end": 453
                          },
                          "start": 450,
                          "end": 453
                        },
                        "start": 448,
                        "end": 453
                      },
                      "init": null,
                      "definite": false,
                      "start": 448,
                      "end": 453
                    }
                  ],
                  "declare": false,
                  "start": 444,
                  "end": 454
                }
              ],
              "start": 383,
              "end": 460
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 370,
            "end": 460
          }
        ],
        "start": 346,
        "end": 462
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 334,
      "end": 462
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 475
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
              "start": 492,
              "end": 494
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
                    "start": 515,
                    "end": 516
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
                              "start": 535,
                              "end": 536
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 539,
                              "end": 540
                            },
                            "definite": false,
                            "start": 535,
                            "end": 540
                          }
                        ],
                        "declare": false,
                        "start": 531,
                        "end": 541
                      }
                    ],
                    "start": 517,
                    "end": 551
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 505,
                  "end": 551
                }
              ],
              "start": 495,
              "end": 557
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 482,
            "end": 557
          }
        ],
        "start": 476,
        "end": 559
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 464,
      "end": 559
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
