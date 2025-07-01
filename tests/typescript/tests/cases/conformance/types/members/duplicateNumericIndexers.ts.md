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
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 97
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "type": "TSNumberKeyword",
                    "start": 108,
                    "end": 114
                  },
                  "start": 106,
                  "end": 114
                },
                "start": 105,
                "end": 114
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 104,
            "end": 124
          },
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
                    "type": "TSNumberKeyword",
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 130,
                "end": 139
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 129,
            "end": 149
          }
        ],
        "start": 98,
        "end": 151
      },
      "declare": false,
      "start": 81,
      "end": 151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "String",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 169
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "type": "TSNumberKeyword",
                    "start": 180,
                    "end": 186
                  },
                  "start": 178,
                  "end": 186
                },
                "start": 177,
                "end": 186
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 189,
                "end": 195
              },
              "start": 187,
              "end": 195
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 176,
            "end": 196
          },
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
                    "type": "TSNumberKeyword",
                    "start": 205,
                    "end": 211
                  },
                  "start": 203,
                  "end": 211
                },
                "start": 202,
                "end": 211
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 214,
                "end": 220
              },
              "start": 212,
              "end": 220
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 201,
            "end": 221
          }
        ],
        "start": 170,
        "end": 223
      },
      "declare": false,
      "start": 153,
      "end": 223
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 240
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
              "start": 241,
              "end": 242
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 241,
            "end": 242
          }
        ],
        "start": 240,
        "end": 243
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  "start": 252,
                  "end": 260
                },
                "start": 251,
                "end": 260
              }
            ],
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
                  "start": 263,
                  "end": 264
                },
                "typeArguments": null,
                "start": 263,
                "end": 264
              },
              "start": 261,
              "end": 264
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 250,
            "end": 265
          },
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
                    "type": "TSNumberKeyword",
                    "start": 274,
                    "end": 280
                  },
                  "start": 272,
                  "end": 280
                },
                "start": 271,
                "end": 280
              }
            ],
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
                  "start": 283,
                  "end": 284
                },
                "typeArguments": null,
                "start": 283,
                "end": 284
              },
              "start": 281,
              "end": 284
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 270,
            "end": 285
          }
        ],
        "start": 244,
        "end": 287
      },
      "declare": false,
      "start": 225,
      "end": 287
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 296
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "type": "TSNumberKeyword",
                    "start": 307,
                    "end": 313
                  },
                  "start": 305,
                  "end": 313
                },
                "start": 304,
                "end": 313
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              },
              "start": 314,
              "end": 322
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 303,
            "end": 323
          },
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
                    "type": "TSNumberKeyword",
                    "start": 332,
                    "end": 338
                  },
                  "start": 330,
                  "end": 338
                },
                "start": 329,
                "end": 338
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 341,
                "end": 347
              },
              "start": 339,
              "end": 347
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 328,
            "end": 348
          }
        ],
        "start": 297,
        "end": 350
      },
      "abstract": false,
      "declare": false,
      "start": 289,
      "end": 350
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 363
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "type": "TSNumberKeyword",
                    "start": 374,
                    "end": 380
                  },
                  "start": 372,
                  "end": 380
                },
                "start": 371,
                "end": 380
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 383,
                "end": 389
              },
              "start": 381,
              "end": 389
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 370,
            "end": 390
          },
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
                    "type": "TSNumberKeyword",
                    "start": 399,
                    "end": 405
                  },
                  "start": 397,
                  "end": 405
                },
                "start": 396,
                "end": 405
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 408,
                "end": 414
              },
              "start": 406,
              "end": 414
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 395,
            "end": 415
          }
        ],
        "start": 364,
        "end": 417
      },
      "declare": false,
      "start": 352,
      "end": 417
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
                            "type": "TSNumberKeyword",
                            "start": 436,
                            "end": 442
                          },
                          "start": 434,
                          "end": 442
                        },
                        "start": 433,
                        "end": 442
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 445,
                        "end": 451
                      },
                      "start": 443,
                      "end": 451
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 432,
                    "end": 452
                  },
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
                            "type": "TSNumberKeyword",
                            "start": 461,
                            "end": 467
                          },
                          "start": 459,
                          "end": 467
                        },
                        "start": 458,
                        "end": 467
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 470,
                        "end": 476
                      },
                      "start": 468,
                      "end": 476
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 457,
                    "end": 477
                  }
                ],
                "start": 426,
                "end": 479
              },
              "start": 424,
              "end": 479
            },
            "start": 423,
            "end": 479
          },
          "init": null,
          "definite": false,
          "start": 423,
          "end": 479
        }
      ],
      "declare": false,
      "start": 419,
      "end": 479
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 81,
  "end": 480
}
```
