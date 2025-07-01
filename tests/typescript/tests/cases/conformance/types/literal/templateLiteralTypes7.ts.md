__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 76,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 79,
                  "end": 82
                },
                "start": 79,
                "end": 82
              },
              "start": 77,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 82
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 88,
                  "end": 91
                },
                "start": 88,
                "end": 91
              },
              "start": 86,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 91
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 94,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "'C'",
                  "start": 97,
                  "end": 100
                },
                "start": 97,
                "end": 100
              },
              "start": 95,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 100
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 103,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "'D'",
                  "start": 106,
                  "end": 109
                },
                "start": 106,
                "end": 109
              },
              "start": 104,
              "end": 109
            },
            "accessibility": null,
            "static": false,
            "start": 103,
            "end": 109
          }
        ],
        "start": 72,
        "end": 111
      },
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 131,
                        "end": 132
                      },
                      "constraint": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 141,
                              "end": 142
                            },
                            "start": 141,
                            "end": 142
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 145,
                              "end": 146
                            },
                            "start": 145,
                            "end": 146
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 149,
                              "end": 150
                            },
                            "start": 149,
                            "end": 150
                          }
                        ],
                        "start": 141,
                        "end": 150
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 131,
                      "end": 150
                    }
                  ],
                  "start": 130,
                  "end": 151
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
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 155,
                            "end": 158
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 159,
                            "end": 161
                          }
                        ],
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 158,
                              "end": 159
                            },
                            "typeArguments": null,
                            "start": 158,
                            "end": 159
                          }
                        ],
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "start": 152,
                    "end": 161
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 170
                      },
                      "typeArguments": null,
                      "start": 166,
                      "end": 170
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 171,
                      "end": 172
                    },
                    "start": 166,
                    "end": 173
                  },
                  "start": 163,
                  "end": 173
                },
                "start": 130,
                "end": 173
              },
              "start": 128,
              "end": 173
            },
            "start": 127,
            "end": 173
          },
          "init": null,
          "definite": false,
          "start": 127,
          "end": 173
        }
      ],
      "declare": true,
      "start": 113,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 186,
                "end": 187
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 196,
                      "end": 197
                    },
                    "start": 196,
                    "end": 197
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 200,
                      "end": 201
                    },
                    "start": 200,
                    "end": 201
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 204,
                      "end": 205
                    },
                    "start": 204,
                    "end": 205
                  }
                ],
                "start": 196,
                "end": 205
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 186,
              "end": 205
            }
          ],
          "start": 185,
          "end": 206
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
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 210,
                    "end": 213
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 214,
                    "end": 216
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  }
                ],
                "start": 210,
                "end": 216
              },
              "start": 208,
              "end": 216
            },
            "start": 207,
            "end": 216
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
              },
              "typeArguments": null,
              "start": 221,
              "end": 225
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "typeArguments": null,
              "start": 226,
              "end": 227
            },
            "start": 221,
            "end": 228
          },
          "start": 218,
          "end": 228
        },
        "start": 185,
        "end": 228
      },
      "declare": false,
      "start": 175,
      "end": 228
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 241
                },
                "typeArguments": null,
                "start": 239,
                "end": 241
              },
              "start": 237,
              "end": 241
            },
            "start": 235,
            "end": 241
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "definite": false,
          "start": 235,
          "end": 245
        }
      ],
      "declare": false,
      "start": 229,
      "end": 246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 261
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 265,
                "end": 266
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 275,
                      "end": 276
                    },
                    "start": 275,
                    "end": 276
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 279,
                      "end": 280
                    },
                    "start": 279,
                    "end": 280
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 283,
                      "end": 284
                    },
                    "start": 283,
                    "end": 284
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 287,
                      "end": 288
                    },
                    "start": 287,
                    "end": 288
                  }
                ],
                "start": 275,
                "end": 288
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 265,
              "end": 288
            }
          ],
          "start": 264,
          "end": 289
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
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 293,
                    "end": 296
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 297,
                    "end": 299
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 297
                  }
                ],
                "start": 293,
                "end": 299
              },
              "start": 291,
              "end": 299
            },
            "start": 290,
            "end": 299
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 308
              },
              "typeArguments": null,
              "start": 304,
              "end": 308
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
              },
              "typeArguments": null,
              "start": 309,
              "end": 310
            },
            "start": 304,
            "end": 311
          },
          "start": 301,
          "end": 311
        },
        "start": 264,
        "end": 311
      },
      "declare": false,
      "start": 254,
      "end": 311
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 324
                },
                "typeArguments": null,
                "start": 322,
                "end": 324
              },
              "start": 320,
              "end": 324
            },
            "start": 318,
            "end": 324
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "definite": false,
          "start": 318,
          "end": 328
        }
      ],
      "declare": false,
      "start": 312,
      "end": 329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G3",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 347
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 351,
                "end": 352
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 361,
                      "end": 362
                    },
                    "start": 361,
                    "end": 362
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 365,
                      "end": 366
                    },
                    "start": 365,
                    "end": 366
                  }
                ],
                "start": 361,
                "end": 366
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 351,
              "end": 366
            }
          ],
          "start": 350,
          "end": 367
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
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 371,
                    "end": 374
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 375,
                    "end": 377
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 374,
                      "end": 375
                    },
                    "typeArguments": null,
                    "start": 374,
                    "end": 375
                  }
                ],
                "start": 371,
                "end": 377
              },
              "start": 369,
              "end": 377
            },
            "start": 368,
            "end": 377
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 386
              },
              "typeArguments": null,
              "start": 382,
              "end": 386
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 388
              },
              "typeArguments": null,
              "start": 387,
              "end": 388
            },
            "start": 382,
            "end": 389
          },
          "start": 379,
          "end": 389
        },
        "start": 350,
        "end": 389
      },
      "declare": false,
      "start": 340,
      "end": 389
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 402
                },
                "typeArguments": null,
                "start": 400,
                "end": 402
              },
              "start": 398,
              "end": 402
            },
            "start": 396,
            "end": 402
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "definite": false,
          "start": 396,
          "end": 406
        }
      ],
      "declare": false,
      "start": 390,
      "end": 407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 413
}
```
