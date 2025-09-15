__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 101
          }
        ],
        "start": 99,
        "end": 102
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "typeArguments": null,
                "start": 114,
                "end": 115
              },
              "start": 112,
              "end": 115
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 109,
            "end": 116
          }
        ],
        "start": 103,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 118
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 128
                },
                "typeArguments": null,
                "start": 127,
                "end": 128
              },
              "start": 125,
              "end": 128
            },
            "start": 124,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 128
        }
      ],
      "declare": false,
      "start": 120,
      "end": 129
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 144
                        },
                        "typeArguments": null,
                        "start": 143,
                        "end": 144
                      },
                      "start": 141,
                      "end": 144
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 140,
                    "end": 144
                  }
                ],
                "start": 138,
                "end": 146
              },
              "start": 136,
              "end": 146
            },
            "start": 135,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 146
        }
      ],
      "declare": false,
      "start": 131,
      "end": 147
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
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
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 161,
                              "end": 162
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 162
                          },
                          "start": 159,
                          "end": 162
                        },
                        "start": 158,
                        "end": 162
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 166
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 166
                      },
                      "start": 163,
                      "end": 166
                    },
                    "start": 157,
                    "end": 166
                  }
                ],
                "start": 155,
                "end": 168
              },
              "start": 153,
              "end": 168
            },
            "start": 152,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 168
        }
      ],
      "declare": false,
      "start": 148,
      "end": 169
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
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
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 184
                            },
                            "typeArguments": null,
                            "start": 183,
                            "end": 184
                          },
                          "start": 181,
                          "end": 184
                        },
                        "start": 180,
                        "end": 184
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 188
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 188
                      },
                      "start": 185,
                      "end": 188
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 179,
                    "end": 188
                  }
                ],
                "start": 177,
                "end": 190
              },
              "start": 175,
              "end": 190
            },
            "start": 174,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 174,
          "end": 190
        }
      ],
      "declare": false,
      "start": 170,
      "end": 191
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 198
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 206
                  },
                  "start": 203,
                  "end": 206
                },
                "start": 202,
                "end": 206
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 221
                            },
                            "typeArguments": null,
                            "start": 220,
                            "end": 221
                          },
                          "start": 218,
                          "end": 221
                        },
                        "start": 217,
                        "end": 221
                      },
                      "init": null,
                      "definite": false,
                      "start": 217,
                      "end": 221
                    }
                  ],
                  "declare": false,
                  "start": 213,
                  "end": 222
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 231
                  },
                  "start": 223,
                  "end": 232
                }
              ],
              "start": 211,
              "end": 234
            },
            "id": null,
            "generator": false,
            "start": 201,
            "end": 234
          },
          "definite": false,
          "start": 197,
          "end": 234
        }
      ],
      "declare": false,
      "start": 193,
      "end": 234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 246
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "typeArguments": null,
              "start": 250,
              "end": 251
            },
            "start": 248,
            "end": 251
          },
          "start": 247,
          "end": 251
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "typeArguments": null,
          "start": 254,
          "end": 255
        },
        "start": 252,
        "end": 255
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    },
                    "start": 263,
                    "end": 266
                  },
                  "start": 262,
                  "end": 266
                },
                "init": null,
                "definite": false,
                "start": 262,
                "end": 266
              }
            ],
            "declare": false,
            "start": 258,
            "end": 267
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "start": 268,
            "end": 277
          }
        ],
        "start": 256,
        "end": 279
      },
      "expression": false,
      "start": 236,
      "end": 279
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 286
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 299
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 303,
                    "end": 304
                  },
                  "start": 301,
                  "end": 304
                },
                "start": 300,
                "end": 304
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "typeArguments": null,
                "start": 307,
                "end": 308
              },
              "start": 305,
              "end": 308
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 318,
                              "end": 319
                            },
                            "typeArguments": null,
                            "start": 318,
                            "end": 319
                          },
                          "start": 316,
                          "end": 319
                        },
                        "start": 315,
                        "end": 319
                      },
                      "init": null,
                      "definite": false,
                      "start": 315,
                      "end": 319
                    }
                  ],
                  "declare": false,
                  "start": 311,
                  "end": 320
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 329
                  },
                  "start": 321,
                  "end": 330
                }
              ],
              "start": 309,
              "end": 332
            },
            "expression": false,
            "start": 289,
            "end": 332
          },
          "definite": false,
          "start": 285,
          "end": 332
        }
      ],
      "declare": false,
      "start": 281,
      "end": 332
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 341
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 351
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 352,
        "end": 355
      },
      "abstract": false,
      "declare": false,
      "start": 334,
      "end": 355
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 368
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 378
          },
          "typeArguments": null,
          "start": 377,
          "end": 378
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 379,
        "end": 381
      },
      "declare": false,
      "start": 357,
      "end": 381
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 415
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 417
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 416,
                    "end": 417
                  }
                ],
                "start": 415,
                "end": 418
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 424
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 427
                        },
                        "typeArguments": null,
                        "start": 426,
                        "end": 427
                      },
                      "start": 424,
                      "end": 427
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 421,
                    "end": 427
                  }
                ],
                "start": 419,
                "end": 429
              },
              "abstract": false,
              "declare": false,
              "start": 408,
              "end": 429
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 401,
            "end": 429
          }
        ],
        "start": 395,
        "end": 431
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 383,
      "end": 431
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 441
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 451
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 453
        },
        "optional": false,
        "computed": false,
        "start": 450,
        "end": 453
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 454,
        "end": 457
      },
      "abstract": false,
      "declare": false,
      "start": 433,
      "end": 457
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 466
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 477,
                  "end": 478
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 480
                },
                "start": 477,
                "end": 480
              },
              "typeArguments": null,
              "start": 477,
              "end": 480
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 467,
            "end": 480
          }
        ],
        "start": 466,
        "end": 481
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 482,
        "end": 485
      },
      "abstract": false,
      "declare": false,
      "start": 458,
      "end": 485
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "optional": false,
            "computed": false,
            "start": 507,
            "end": 510
          },
          "typeArguments": null,
          "start": 507,
          "end": 510
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 511,
        "end": 514
      },
      "declare": false,
      "start": 486,
      "end": 514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 525,
        "end": 526
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 528
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "typeArguments": null,
              "start": 537,
              "end": 538
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 527,
            "end": 538
          }
        ],
        "start": 526,
        "end": 539
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "typeArguments": null,
              "start": 543,
              "end": 544
            },
            "start": 541,
            "end": 544
          },
          "start": 540,
          "end": 544
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 546,
        "end": 549
      },
      "expression": false,
      "start": 516,
      "end": 549
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 560
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 562
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 574
                },
                "start": 571,
                "end": 574
              },
              "typeArguments": null,
              "start": 571,
              "end": 574
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 561,
            "end": 574
          }
        ],
        "start": 560,
        "end": 575
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 580
              },
              "typeArguments": null,
              "start": 579,
              "end": 580
            },
            "start": 577,
            "end": 580
          },
          "start": 576,
          "end": 580
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 582,
        "end": 585
      },
      "expression": false,
      "start": 550,
      "end": 585
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 592
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 597
              },
              "typeArguments": null,
              "start": 596,
              "end": 597
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 598,
              "end": 602
            },
            "start": 595,
            "end": 602
          },
          "definite": false,
          "start": 591,
          "end": 602
        }
      ],
      "declare": false,
      "start": 587,
      "end": 603
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 613,
                  "end": 614
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 616
                },
                "start": 613,
                "end": 616
              },
              "typeArguments": null,
              "start": 613,
              "end": 616
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 617,
              "end": 621
            },
            "start": 612,
            "end": 621
          },
          "definite": false,
          "start": 608,
          "end": 621
        }
      ],
      "declare": false,
      "start": 604,
      "end": 622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 622
}
```
