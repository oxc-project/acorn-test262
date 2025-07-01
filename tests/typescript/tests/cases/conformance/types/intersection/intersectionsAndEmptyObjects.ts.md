__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 123
          }
        ],
        "start": 112,
        "end": 125
      },
      "declare": false,
      "start": 103,
      "end": 126
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
      "typeParameters": null,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 138,
            "end": 147
          }
        ],
        "start": 136,
        "end": 149
      },
      "declare": false,
      "start": 127,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 157
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 160,
        "end": 162
      },
      "declare": false,
      "start": 151,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x01",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "typeArguments": null,
                    "start": 178,
                    "end": 179
                  }
                ],
                "start": 174,
                "end": 179
              },
              "start": 172,
              "end": 179
            },
            "start": 169,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 179
        }
      ],
      "declare": false,
      "start": 165,
      "end": 180
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x02",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 191
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 195
                    },
                    "typeArguments": null,
                    "start": 194,
                    "end": 195
                  }
                ],
                "start": 190,
                "end": 195
              },
              "start": 188,
              "end": 195
            },
            "start": 185,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 195
        }
      ],
      "declare": false,
      "start": 181,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x03",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 206,
                    "end": 207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 210,
                    "end": 211
                  }
                ],
                "start": 206,
                "end": 211
              },
              "start": 204,
              "end": 211
            },
            "start": 201,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 211
        }
      ],
      "declare": false,
      "start": 197,
      "end": 212
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x04",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 222,
                    "end": 223
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 227
                    },
                    "typeArguments": null,
                    "start": 226,
                    "end": 227
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "typeArguments": null,
                    "start": 230,
                    "end": 231
                  }
                ],
                "start": 222,
                "end": 231
              },
              "start": 220,
              "end": 231
            },
            "start": 217,
            "end": 231
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 231
        }
      ],
      "declare": false,
      "start": 213,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x05",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 242,
                    "end": 248
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 252
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 252
                  }
                ],
                "start": 242,
                "end": 252
              },
              "start": 240,
              "end": 252
            },
            "start": 237,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 237,
          "end": 252
        }
      ],
      "declare": false,
      "start": 233,
      "end": 253
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x06",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 264
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 264
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  }
                ],
                "start": 263,
                "end": 273
              },
              "start": 261,
              "end": 273
            },
            "start": 258,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 258,
          "end": 273
        }
      ],
      "declare": false,
      "start": 254,
      "end": 274
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x07",
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
                  "start": 284,
                  "end": 285
                },
                "typeArguments": null,
                "start": 284,
                "end": 285
              },
              "start": 282,
              "end": 285
            },
            "start": 279,
            "end": 285
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 285
        }
      ],
      "declare": false,
      "start": 275,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x08",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 297
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 300,
                    "end": 302
                  }
                ],
                "start": 296,
                "end": 302
              },
              "start": 294,
              "end": 302
            },
            "start": 291,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 302
        }
      ],
      "declare": false,
      "start": 287,
      "end": 303
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x09",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 313,
                    "end": 315
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 319
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 322,
                    "end": 324
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 327,
                    "end": 328
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 331,
                    "end": 333
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 336,
                    "end": 337
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 340,
                    "end": 342
                  }
                ],
                "start": 313,
                "end": 342
              },
              "start": 311,
              "end": 342
            },
            "start": 308,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 308,
          "end": 342
        }
      ],
      "declare": false,
      "start": 304,
      "end": 343
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 356
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 357,
        "end": 359
      },
      "declare": false,
      "start": 345,
      "end": 359
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 371
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 372,
        "end": 374
      },
      "declare": false,
      "start": 360,
      "end": 374
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 386
                    },
                    "typeArguments": null,
                    "start": 385,
                    "end": 386
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 390
                    },
                    "typeArguments": null,
                    "start": 389,
                    "end": 390
                  }
                ],
                "start": 385,
                "end": 390
              },
              "start": 383,
              "end": 390
            },
            "start": 380,
            "end": 390
          },
          "init": null,
          "definite": false,
          "start": 380,
          "end": 390
        }
      ],
      "declare": false,
      "start": 376,
      "end": 391
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 402
                    },
                    "typeArguments": null,
                    "start": 401,
                    "end": 402
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 406
                    },
                    "typeArguments": null,
                    "start": 405,
                    "end": 406
                  }
                ],
                "start": 401,
                "end": 406
              },
              "start": 399,
              "end": 406
            },
            "start": 396,
            "end": 406
          },
          "init": null,
          "definite": false,
          "start": 396,
          "end": 406
        }
      ],
      "declare": false,
      "start": 392,
      "end": 407
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 418
                    },
                    "typeArguments": null,
                    "start": 417,
                    "end": 418
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 422
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 422
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 426
                    },
                    "typeArguments": null,
                    "start": 425,
                    "end": 426
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 429,
                      "end": 430
                    },
                    "typeArguments": null,
                    "start": 429,
                    "end": 430
                  }
                ],
                "start": 417,
                "end": 430
              },
              "start": 415,
              "end": 430
            },
            "start": 412,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 412,
          "end": 430
        }
      ],
      "declare": false,
      "start": 408,
      "end": 431
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 442
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 442
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 446
                    },
                    "typeArguments": null,
                    "start": 445,
                    "end": 446
                  }
                ],
                "start": 441,
                "end": 446
              },
              "start": 439,
              "end": 446
            },
            "start": 436,
            "end": 446
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 446
        }
      ],
      "declare": false,
      "start": 432,
      "end": 447
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 457,
                      "end": 458
                    },
                    "typeArguments": null,
                    "start": 457,
                    "end": 458
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 462
                    },
                    "typeArguments": null,
                    "start": 461,
                    "end": 462
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 465,
                    "end": 466
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 470
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 470
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  }
                ],
                "start": 457,
                "end": 474
              },
              "start": 455,
              "end": 474
            },
            "start": 452,
            "end": 474
          },
          "init": null,
          "definite": false,
          "start": 452,
          "end": 474
        }
      ],
      "declare": false,
      "start": 448,
      "end": 475
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 514
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 526,
                    "end": 532
                  },
                  "start": 524,
                  "end": 532
                },
                "start": 520,
                "end": 532
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 535,
                "end": 541
              },
              "start": 533,
              "end": 541
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 519,
            "end": 541
          }
        ],
        "start": 517,
        "end": 543
      },
      "declare": false,
      "start": 499,
      "end": 544
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
            "name": "intersectDictionaries",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 573
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 579
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 588,
                      "end": 598
                    },
                    "typeArguments": null,
                    "start": 588,
                    "end": 598
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 577,
                  "end": 598
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 602
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 621
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 621
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 600,
                  "end": 621
                }
              ],
              "start": 576,
              "end": 622
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 632
                    },
                    "typeArguments": null,
                    "start": 630,
                    "end": 632
                  },
                  "start": 628,
                  "end": 632
                },
                "start": 626,
                "end": 632
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 640,
                      "end": 642
                    },
                    "typeArguments": null,
                    "start": 640,
                    "end": 642
                  },
                  "start": 638,
                  "end": 642
                },
                "start": 636,
                "end": 642
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 649
                    },
                    "typeArguments": null,
                    "start": 647,
                    "end": 649
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 652,
                    "end": 654
                  }
                ],
                "start": 647,
                "end": 654
              },
              "start": 645,
              "end": 654
            },
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 664
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 671
                },
                "optional": false,
                "computed": false,
                "start": 658,
                "end": 671
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 672,
                  "end": 674
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 678
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 682
                }
              ],
              "optional": false,
              "start": 658,
              "end": 683
            },
            "id": null,
            "generator": false,
            "start": 576,
            "end": 683
          },
          "definite": false,
          "start": 552,
          "end": 683
        }
      ],
      "declare": false,
      "start": 546,
      "end": 684
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
            "name": "testDictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 706
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 710,
                    "end": 711
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 720,
                      "end": 730
                    },
                    "typeArguments": null,
                    "start": 720,
                    "end": 730
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 710,
                  "end": 730
                }
              ],
              "start": 709,
              "end": 731
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_value",
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
                      "start": 740,
                      "end": 741
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 741
                  },
                  "start": 738,
                  "end": 741
                },
                "start": 732,
                "end": 741
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 746,
              "end": 749
            },
            "id": null,
            "generator": false,
            "start": 709,
            "end": 749
          },
          "definite": false,
          "start": 692,
          "end": 749
        }
      ],
      "declare": false,
      "start": 686,
      "end": 750
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 760
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 763,
            "end": 765
          },
          "definite": false,
          "start": 758,
          "end": 765
        }
      ],
      "declare": false,
      "start": 752,
      "end": 766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 767,
          "end": 781
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 784
          }
        ],
        "optional": false,
        "start": 767,
        "end": 785
      },
      "directive": null,
      "start": 767,
      "end": 786
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 795
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 819
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 822
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 826
              }
            ],
            "optional": false,
            "start": 798,
            "end": 827
          },
          "definite": false,
          "start": 793,
          "end": 827
        }
      ],
      "declare": false,
      "start": 787,
      "end": 828
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 843
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 844,
            "end": 846
          }
        ],
        "optional": false,
        "start": 829,
        "end": 847
      },
      "directive": null,
      "start": 829,
      "end": 848
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 858
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 866
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 868,
                  "end": 870
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 865,
                "end": 870
              }
            ],
            "start": 861,
            "end": 873
          },
          "definite": false,
          "start": 856,
          "end": 873
        }
      ],
      "declare": false,
      "start": 850,
      "end": 874
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 889
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 892
          }
        ],
        "optional": false,
        "start": 875,
        "end": 893
      },
      "directive": null,
      "start": 875,
      "end": 894
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 903
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 927
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 930
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 934
              }
            ],
            "optional": false,
            "start": 906,
            "end": 935
          },
          "definite": false,
          "start": 901,
          "end": 935
        }
      ],
      "declare": false,
      "start": 895,
      "end": 936
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 937,
          "end": 951
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 954
          }
        ],
        "optional": false,
        "start": 937,
        "end": 955
      },
      "directive": null,
      "start": 937,
      "end": 956
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
            "name": "d5",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 965
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 989
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 992
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 996
              }
            ],
            "optional": false,
            "start": 968,
            "end": 997
          },
          "definite": false,
          "start": 963,
          "end": 997
        }
      ],
      "declare": false,
      "start": 957,
      "end": 998
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 999,
          "end": 1013
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1016
          }
        ],
        "optional": false,
        "start": 999,
        "end": 1017
      },
      "directive": null,
      "start": 999,
      "end": 1018
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
            "name": "d6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1027
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1051
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1054
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1058
              }
            ],
            "optional": false,
            "start": 1030,
            "end": 1059
          },
          "definite": false,
          "start": 1025,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1060
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1075
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1078
          }
        ],
        "optional": false,
        "start": 1061,
        "end": 1079
      },
      "directive": null,
      "start": 1061,
      "end": 1080
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "choices",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IChoiceList",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1128
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1149,
                          "end": 1155
                        },
                        "start": 1147,
                        "end": 1155
                      },
                      "start": 1144,
                      "end": 1155
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1158,
                      "end": 1165
                    },
                    "start": 1156,
                    "end": 1165
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1143,
                  "end": 1166
                }
              ],
              "start": 1137,
              "end": 1168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1117,
            "end": 1168
          }
        ],
        "start": 1116,
        "end": 1169
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IChoiceList",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1183
            },
            "typeArguments": null,
            "start": 1172,
            "end": 1183
          },
          {
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
                  "name": "shoes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1192,
                  "end": 1197
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1198,
                    "end": 1205
                  },
                  "start": 1197,
                  "end": 1205
                },
                "accessibility": null,
                "static": false,
                "start": 1192,
                "end": 1206
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "food",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1211,
                  "end": 1215
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1216,
                    "end": 1223
                  },
                  "start": 1215,
                  "end": 1223
                },
                "accessibility": null,
                "static": false,
                "start": 1211,
                "end": 1224
              }
            ],
            "start": 1186,
            "end": 1226
          }
        ],
        "start": 1172,
        "end": 1226
      },
      "declare": false,
      "start": 1104,
      "end": 1227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMyChoiceList",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1247
      },
      "typeParameters": null,
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
              "name": "car",
              "optional": false,
              "typeAnnotation": null,
              "start": 1256,
              "end": 1259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1261,
                  "end": 1265
                },
                "start": 1261,
                "end": 1265
              },
              "start": 1259,
              "end": 1265
            },
            "accessibility": null,
            "static": false,
            "start": 1256,
            "end": 1265
          }
        ],
        "start": 1250,
        "end": 1267
      },
      "declare": false,
      "start": 1229,
      "end": 1268
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IUnknownChoiceList",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1293
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 1296,
        "end": 1298
      },
      "declare": false,
      "start": 1270,
      "end": 1299
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
            "name": "defaultChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1328
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1329,
                      "end": 1331
                    }
                  ],
                  "start": 1328,
                  "end": 1332
                },
                "start": 1321,
                "end": 1332
              },
              "start": 1319,
              "end": 1332
            },
            "start": 1305,
            "end": 1332
          },
          "init": null,
          "definite": false,
          "start": 1305,
          "end": 1332
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1333
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
            "name": "defaultChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1369
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1370,
                          "end": 1372
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1375,
                          "end": 1377
                        }
                      ],
                      "start": 1370,
                      "end": 1377
                    }
                  ],
                  "start": 1369,
                  "end": 1378
                },
                "start": 1362,
                "end": 1378
              },
              "start": 1360,
              "end": 1378
            },
            "start": 1338,
            "end": 1378
          },
          "init": null,
          "definite": false,
          "start": 1338,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1334,
      "end": 1379
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
            "name": "myChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1403
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IMyChoiceList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1417
                      },
                      "typeArguments": null,
                      "start": 1404,
                      "end": 1417
                    }
                  ],
                  "start": 1403,
                  "end": 1418
                },
                "start": 1396,
                "end": 1418
              },
              "start": 1394,
              "end": 1418
            },
            "start": 1385,
            "end": 1418
          },
          "init": null,
          "definite": false,
          "start": 1385,
          "end": 1418
        }
      ],
      "declare": false,
      "start": 1381,
      "end": 1419
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
            "name": "myChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1450
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IMyChoiceList",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1451,
                            "end": 1464
                          },
                          "typeArguments": null,
                          "start": 1451,
                          "end": 1464
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1467,
                          "end": 1469
                        }
                      ],
                      "start": 1451,
                      "end": 1469
                    }
                  ],
                  "start": 1450,
                  "end": 1470
                },
                "start": 1443,
                "end": 1470
              },
              "start": 1441,
              "end": 1470
            },
            "start": 1424,
            "end": 1470
          },
          "init": null,
          "definite": false,
          "start": 1424,
          "end": 1470
        }
      ],
      "declare": false,
      "start": 1420,
      "end": 1471
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
            "name": "unknownChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1500
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IUnknownChoiceList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1501,
                        "end": 1519
                      },
                      "typeArguments": null,
                      "start": 1501,
                      "end": 1519
                    }
                  ],
                  "start": 1500,
                  "end": 1520
                },
                "start": 1493,
                "end": 1520
              },
              "start": 1491,
              "end": 1520
            },
            "start": 1477,
            "end": 1520
          },
          "init": null,
          "definite": false,
          "start": 1477,
          "end": 1520
        }
      ],
      "declare": false,
      "start": 1473,
      "end": 1521
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
            "name": "unknownChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1550,
                  "end": 1557
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IUnknownChoiceList",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1558,
                            "end": 1576
                          },
                          "typeArguments": null,
                          "start": 1558,
                          "end": 1576
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1579,
                          "end": 1581
                        }
                      ],
                      "start": 1558,
                      "end": 1581
                    }
                  ],
                  "start": 1557,
                  "end": 1582
                },
                "start": 1550,
                "end": 1582
              },
              "start": 1548,
              "end": 1582
            },
            "start": 1526,
            "end": 1582
          },
          "init": null,
          "definite": false,
          "start": 1526,
          "end": 1582
        }
      ],
      "declare": false,
      "start": 1522,
      "end": 1583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1612,
        "end": 1616
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "start": 1621,
                  "end": 1622
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1624,
                    "end": 1630
                  },
                  "start": 1622,
                  "end": 1630
                },
                "accessibility": null,
                "static": false,
                "start": 1621,
                "end": 1630
              }
            ],
            "start": 1619,
            "end": 1632
          },
          {
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
                        "start": 1641,
                        "end": 1647
                      },
                      "start": 1639,
                      "end": 1647
                    },
                    "start": 1638,
                    "end": 1647
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1650,
                      "end": 1654
                    },
                    "typeArguments": null,
                    "start": 1650,
                    "end": 1654
                  },
                  "start": 1648,
                  "end": 1654
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 1637,
                "end": 1654
              }
            ],
            "start": 1635,
            "end": 1656
          }
        ],
        "start": 1619,
        "end": 1656
      },
      "declare": false,
      "start": 1607,
      "end": 1657
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1667
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "start": 1672,
                  "end": 1673
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1675,
                    "end": 1681
                  },
                  "start": 1673,
                  "end": 1681
                },
                "accessibility": null,
                "static": false,
                "start": 1672,
                "end": 1681
              }
            ],
            "start": 1670,
            "end": 1683
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1689,
              "end": 1690
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1694,
              "end": 1700
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1703,
                "end": 1707
              },
              "typeArguments": null,
              "start": 1703,
              "end": 1707
            },
            "optional": false,
            "readonly": null,
            "start": 1686,
            "end": 1709
          }
        ],
        "start": 1670,
        "end": 1709
      },
      "declare": false,
      "start": 1658,
      "end": 1710
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mock",
        "optional": false,
        "typeAnnotation": null,
        "start": 1751,
        "end": 1755
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1757
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1756,
            "end": 1757
          }
        ],
        "start": 1755,
        "end": 1758
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1762,
                "end": 1769
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1770,
                      "end": 1771
                    },
                    "typeArguments": null,
                    "start": 1770,
                    "end": 1771
                  }
                ],
                "start": 1769,
                "end": 1772
              },
              "start": 1762,
              "end": 1772
            },
            "start": 1760,
            "end": 1772
          },
          "start": 1759,
          "end": 1772
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 1775,
              "end": 1777
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1781
              },
              "typeArguments": null,
              "start": 1780,
              "end": 1781
            }
          ],
          "start": 1775,
          "end": 1781
        },
        "start": 1773,
        "end": 1781
      },
      "body": null,
      "expression": false,
      "start": 1734,
      "end": 1782
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mock",
          "optional": false,
          "typeAnnotation": null,
          "start": 1783,
          "end": 1787
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./ex",
              "raw": "'./ex'",
              "start": 1795,
              "end": 1801
            },
            "options": null,
            "phase": null,
            "start": 1788,
            "end": 1802
          }
        ],
        "optional": false,
        "start": 1783,
        "end": 1803
      },
      "directive": null,
      "start": 1783,
      "end": 1803
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 103,
  "end": 1804
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
