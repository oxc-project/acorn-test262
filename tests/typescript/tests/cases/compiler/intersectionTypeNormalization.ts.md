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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 23
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
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
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 49
          }
        ],
        "start": 38,
        "end": 51
      },
      "declare": false,
      "start": 26,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
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
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 75
          }
        ],
        "start": 64,
        "end": 77
      },
      "declare": false,
      "start": 52,
      "end": 77
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
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
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
              },
              "start": 93,
              "end": 101
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 101
          }
        ],
        "start": 90,
        "end": 103
      },
      "declare": false,
      "start": 78,
      "end": 103
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 155
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "typeArguments": null,
                "start": 159,
                "end": 160
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "typeArguments": null,
                "start": 163,
                "end": 164
              }
            ],
            "start": 159,
            "end": 164
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                },
                "typeArguments": null,
                "start": 169,
                "end": 170
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "typeArguments": null,
                "start": 173,
                "end": 174
              }
            ],
            "start": 169,
            "end": 174
          }
        ],
        "start": 158,
        "end": 175
      },
      "declare": false,
      "start": 148,
      "end": 176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 187,
                  "end": 188
                },
                "typeArguments": null,
                "start": 187,
                "end": 188
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 193
                    },
                    "typeArguments": null,
                    "start": 192,
                    "end": 193
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 197
                    },
                    "typeArguments": null,
                    "start": 196,
                    "end": 197
                  }
                ],
                "start": 192,
                "end": 197
              }
            ],
            "start": 187,
            "end": 198
          },
          {
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
                  "start": 201,
                  "end": 202
                },
                "typeArguments": null,
                "start": 201,
                "end": 202
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
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
                      "name": "D",
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
              }
            ],
            "start": 201,
            "end": 212
          }
        ],
        "start": 187,
        "end": 212
      },
      "declare": false,
      "start": 177,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 220
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "typeArguments": null,
                "start": 227,
                "end": 228
              }
            ],
            "start": 223,
            "end": 228
          },
          {
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
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "start": 231,
                "end": 232
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "typeArguments": null,
                "start": 235,
                "end": 236
              }
            ],
            "start": 231,
            "end": 236
          },
          {
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
                  "start": 239,
                  "end": 240
                },
                "typeArguments": null,
                "start": 239,
                "end": 240
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "typeArguments": null,
                "start": 243,
                "end": 244
              }
            ],
            "start": 239,
            "end": 244
          },
          {
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
                  "start": 247,
                  "end": 248
                },
                "typeArguments": null,
                "start": 247,
                "end": 248
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
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
            "start": 247,
            "end": 252
          }
        ],
        "start": 223,
        "end": 252
      },
      "declare": false,
      "start": 213,
      "end": 253
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 264
                },
                "typeArguments": null,
                "start": 262,
                "end": 264
              },
              "start": 260,
              "end": 264
            },
            "start": 259,
            "end": 264
          },
          "init": null,
          "definite": false,
          "start": 259,
          "end": 264
        }
      ],
      "declare": false,
      "start": 255,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 275
                },
                "typeArguments": null,
                "start": 273,
                "end": 275
              },
              "start": 271,
              "end": 275
            },
            "start": 270,
            "end": 275
          },
          "init": null,
          "definite": false,
          "start": 270,
          "end": 275
        }
      ],
      "declare": false,
      "start": 266,
      "end": 276
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 286
                },
                "typeArguments": null,
                "start": 284,
                "end": 286
              },
              "start": 282,
              "end": 286
            },
            "start": 281,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 286
        }
      ],
      "declare": false,
      "start": 277,
      "end": 287
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 300
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              },
              "start": 304,
              "end": 312
            },
            "accessibility": null,
            "static": false,
            "start": 303,
            "end": 312
          }
        ],
        "start": 301,
        "end": 314
      },
      "declare": false,
      "start": 289,
      "end": 314
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 326
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 332,
                "end": 338
              },
              "start": 330,
              "end": 338
            },
            "accessibility": null,
            "static": false,
            "start": 329,
            "end": 338
          }
        ],
        "start": 327,
        "end": 340
      },
      "declare": false,
      "start": 315,
      "end": 340
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y1",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 392
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "typeArguments": null,
                "start": 396,
                "end": 397
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "typeArguments": null,
                    "start": 400,
                    "end": 401
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 405
                    },
                    "typeArguments": null,
                    "start": 404,
                    "end": 405
                  }
                ],
                "start": 400,
                "end": 405
              }
            ],
            "start": 396,
            "end": 405
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
                },
                "typeArguments": null,
                "start": 410,
                "end": 411
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 415
                },
                "typeArguments": null,
                "start": 414,
                "end": 415
              }
            ],
            "start": 410,
            "end": 415
          }
        ],
        "start": 395,
        "end": 416
      },
      "declare": false,
      "start": 385,
      "end": 417
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y2",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 425
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 428,
                  "end": 429
                },
                "typeArguments": null,
                "start": 428,
                "end": 429
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 434
                    },
                    "typeArguments": null,
                    "start": 433,
                    "end": 434
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 438
                    },
                    "typeArguments": null,
                    "start": 437,
                    "end": 438
                  }
                ],
                "start": 433,
                "end": 438
              }
            ],
            "start": 428,
            "end": 439
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 443
                },
                "typeArguments": null,
                "start": 442,
                "end": 443
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "typeArguments": null,
                "start": 446,
                "end": 447
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 451,
                    "end": 452
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 456
                    },
                    "typeArguments": null,
                    "start": 455,
                    "end": 456
                  }
                ],
                "start": 451,
                "end": 456
              }
            ],
            "start": 442,
            "end": 457
          }
        ],
        "start": 428,
        "end": 457
      },
      "declare": false,
      "start": 418,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y3",
        "optional": false,
        "typeAnnotation": null,
        "start": 463,
        "end": 465
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 468,
                  "end": 469
                },
                "typeArguments": null,
                "start": 468,
                "end": 469
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 473
                },
                "typeArguments": null,
                "start": 472,
                "end": 473
              }
            ],
            "start": 468,
            "end": 473
          },
          {
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
                  "start": 476,
                  "end": 477
                },
                "typeArguments": null,
                "start": 476,
                "end": 477
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
                },
                "typeArguments": null,
                "start": 480,
                "end": 481
              }
            ],
            "start": 476,
            "end": 481
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 489
                },
                "typeArguments": null,
                "start": 488,
                "end": 489
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 493
                },
                "typeArguments": null,
                "start": 492,
                "end": 493
              }
            ],
            "start": 484,
            "end": 493
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 496,
                "end": 497
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 501
                },
                "typeArguments": null,
                "start": 500,
                "end": 501
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "typeArguments": null,
                "start": 504,
                "end": 505
              }
            ],
            "start": 496,
            "end": 505
          }
        ],
        "start": 468,
        "end": 505
      },
      "declare": false,
      "start": 458,
      "end": 506
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 517
                },
                "typeArguments": null,
                "start": 515,
                "end": 517
              },
              "start": 513,
              "end": 517
            },
            "start": 512,
            "end": 517
          },
          "init": null,
          "definite": false,
          "start": 512,
          "end": 517
        }
      ],
      "declare": false,
      "start": 508,
      "end": 518
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 528
                },
                "typeArguments": null,
                "start": 526,
                "end": 528
              },
              "start": 524,
              "end": 528
            },
            "start": 523,
            "end": 528
          },
          "init": null,
          "definite": false,
          "start": 523,
          "end": 528
        }
      ],
      "declare": false,
      "start": 519,
      "end": 529
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 539
                },
                "typeArguments": null,
                "start": 537,
                "end": 539
              },
              "start": 535,
              "end": 539
            },
            "start": 534,
            "end": 539
          },
          "init": null,
          "definite": false,
          "start": 534,
          "end": 539
        }
      ],
      "declare": false,
      "start": 530,
      "end": 540
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 553
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
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 557
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 559,
                "end": 565
              },
              "start": 557,
              "end": 565
            },
            "accessibility": null,
            "static": false,
            "start": 556,
            "end": 565
          }
        ],
        "start": 554,
        "end": 567
      },
      "declare": false,
      "start": 542,
      "end": 567
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 579
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
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 583
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 585,
                "end": 591
              },
              "start": 583,
              "end": 591
            },
            "accessibility": null,
            "static": false,
            "start": 582,
            "end": 591
          }
        ],
        "start": 580,
        "end": 593
      },
      "declare": false,
      "start": 568,
      "end": 593
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z1",
        "optional": false,
        "typeAnnotation": null,
        "start": 643,
        "end": 645
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 650
                },
                "typeArguments": null,
                "start": 649,
                "end": 650
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 653,
                    "end": 654
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 659
                        },
                        "typeArguments": null,
                        "start": 658,
                        "end": 659
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 662,
                          "end": 663
                        },
                        "typeArguments": null,
                        "start": 662,
                        "end": 663
                      }
                    ],
                    "start": 658,
                    "end": 663
                  }
                ],
                "start": 653,
                "end": 664
              }
            ],
            "start": 649,
            "end": 664
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 670
                },
                "typeArguments": null,
                "start": 669,
                "end": 670
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 674
                },
                "typeArguments": null,
                "start": 673,
                "end": 674
              }
            ],
            "start": 669,
            "end": 674
          }
        ],
        "start": 648,
        "end": 675
      },
      "declare": false,
      "start": 638,
      "end": 676
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z2",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 684
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 687,
                  "end": 688
                },
                "typeArguments": null,
                "start": 687,
                "end": 688
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 692,
                      "end": 693
                    },
                    "typeArguments": null,
                    "start": 692,
                    "end": 693
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 697
                    },
                    "typeArguments": null,
                    "start": 696,
                    "end": 697
                  }
                ],
                "start": 692,
                "end": 697
              }
            ],
            "start": 687,
            "end": 698
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 702
                },
                "typeArguments": null,
                "start": 701,
                "end": 702
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 706,
                      "end": 707
                    },
                    "typeArguments": null,
                    "start": 706,
                    "end": 707
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 710,
                      "end": 711
                    },
                    "typeArguments": null,
                    "start": 710,
                    "end": 711
                  }
                ],
                "start": 706,
                "end": 711
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 717
                    },
                    "typeArguments": null,
                    "start": 716,
                    "end": 717
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 720,
                      "end": 721
                    },
                    "typeArguments": null,
                    "start": 720,
                    "end": 721
                  }
                ],
                "start": 716,
                "end": 721
              }
            ],
            "start": 701,
            "end": 722
          }
        ],
        "start": 687,
        "end": 722
      },
      "declare": false,
      "start": 677,
      "end": 722
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z3",
        "optional": false,
        "typeAnnotation": null,
        "start": 728,
        "end": 730
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 733,
                  "end": 734
                },
                "typeArguments": null,
                "start": 733,
                "end": 734
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "typeArguments": null,
                "start": 737,
                "end": 738
              }
            ],
            "start": 733,
            "end": 738
          },
          {
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
                  "start": 741,
                  "end": 742
                },
                "typeArguments": null,
                "start": 741,
                "end": 742
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 746
                },
                "typeArguments": null,
                "start": 745,
                "end": 746
              }
            ],
            "start": 741,
            "end": 746
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 750
                },
                "typeArguments": null,
                "start": 749,
                "end": 750
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 754,
                      "end": 755
                    },
                    "typeArguments": null,
                    "start": 754,
                    "end": 755
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 758,
                      "end": 759
                    },
                    "typeArguments": null,
                    "start": 758,
                    "end": 759
                  }
                ],
                "start": 754,
                "end": 759
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 764
                },
                "typeArguments": null,
                "start": 763,
                "end": 764
              }
            ],
            "start": 749,
            "end": 764
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 768
                },
                "typeArguments": null,
                "start": 767,
                "end": 768
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 772,
                      "end": 773
                    },
                    "typeArguments": null,
                    "start": 772,
                    "end": 773
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 776,
                      "end": 777
                    },
                    "typeArguments": null,
                    "start": 776,
                    "end": 777
                  }
                ],
                "start": 772,
                "end": 777
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 782
                },
                "typeArguments": null,
                "start": 781,
                "end": 782
              }
            ],
            "start": 767,
            "end": 782
          }
        ],
        "start": 733,
        "end": 782
      },
      "declare": false,
      "start": 723,
      "end": 783
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z4",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 791
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 794,
                  "end": 795
                },
                "typeArguments": null,
                "start": 794,
                "end": 795
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 799
                },
                "typeArguments": null,
                "start": 798,
                "end": 799
              }
            ],
            "start": 794,
            "end": 799
          },
          {
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
                  "start": 802,
                  "end": 803
                },
                "typeArguments": null,
                "start": 802,
                "end": 803
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 806,
                  "end": 807
                },
                "typeArguments": null,
                "start": 806,
                "end": 807
              }
            ],
            "start": 802,
            "end": 807
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 810,
                  "end": 811
                },
                "typeArguments": null,
                "start": 810,
                "end": 811
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "typeArguments": null,
                "start": 814,
                "end": 815
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 819
                },
                "typeArguments": null,
                "start": 818,
                "end": 819
              }
            ],
            "start": 810,
            "end": 819
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 822,
                  "end": 823
                },
                "typeArguments": null,
                "start": 822,
                "end": 823
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 826,
                  "end": 827
                },
                "typeArguments": null,
                "start": 826,
                "end": 827
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 831
                },
                "typeArguments": null,
                "start": 830,
                "end": 831
              }
            ],
            "start": 822,
            "end": 831
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 835
                },
                "typeArguments": null,
                "start": 834,
                "end": 835
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 839
                },
                "typeArguments": null,
                "start": 838,
                "end": 839
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 843
                },
                "typeArguments": null,
                "start": 842,
                "end": 843
              }
            ],
            "start": 834,
            "end": 843
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 847
                },
                "typeArguments": null,
                "start": 846,
                "end": 847
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 851
                },
                "typeArguments": null,
                "start": 850,
                "end": 851
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 855
                },
                "typeArguments": null,
                "start": 854,
                "end": 855
              }
            ],
            "start": 846,
            "end": 855
          }
        ],
        "start": 794,
        "end": 855
      },
      "declare": false,
      "start": 784,
      "end": 856
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 867
                },
                "typeArguments": null,
                "start": 865,
                "end": 867
              },
              "start": 863,
              "end": 867
            },
            "start": 862,
            "end": 867
          },
          "init": null,
          "definite": false,
          "start": 862,
          "end": 867
        }
      ],
      "declare": false,
      "start": 858,
      "end": 868
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 878
                },
                "typeArguments": null,
                "start": 876,
                "end": 878
              },
              "start": 874,
              "end": 878
            },
            "start": 873,
            "end": 878
          },
          "init": null,
          "definite": false,
          "start": 873,
          "end": 878
        }
      ],
      "declare": false,
      "start": 869,
      "end": 879
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 889
                },
                "typeArguments": null,
                "start": 887,
                "end": 889
              },
              "start": 885,
              "end": 889
            },
            "start": 884,
            "end": 889
          },
          "init": null,
          "definite": false,
          "start": 884,
          "end": 889
        }
      ],
      "declare": false,
      "start": 880,
      "end": 890
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 900
                },
                "typeArguments": null,
                "start": 898,
                "end": 900
              },
              "start": 896,
              "end": 900
            },
            "start": 895,
            "end": 900
          },
          "init": null,
          "definite": false,
          "start": 895,
          "end": 900
        }
      ],
      "declare": false,
      "start": 891,
      "end": 901
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 929,
        "end": 937
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 954
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 958,
                "end": 964
              },
              "start": 956,
              "end": 964
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 946,
            "end": 965
          }
        ],
        "start": 940,
        "end": 967
      },
      "declare": false,
      "start": 924,
      "end": 967
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxedValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 984
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 989,
                  "end": 993
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "int",
                      "raw": "'int'",
                      "start": 995,
                      "end": 1000
                    },
                    "start": 995,
                    "end": 1000
                  },
                  "start": 993,
                  "end": 1000
                },
                "accessibility": null,
                "static": false,
                "start": 989,
                "end": 1001
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1005,
                  "end": 1008
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1010,
                    "end": 1016
                  },
                  "start": 1008,
                  "end": 1016
                },
                "accessibility": null,
                "static": false,
                "start": 1005,
                "end": 1016
              }
            ],
            "start": 987,
            "end": 1018
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1043
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 1045,
                      "end": 1053
                    },
                    "start": 1045,
                    "end": 1053
                  },
                  "start": 1043,
                  "end": 1053
                },
                "accessibility": null,
                "static": false,
                "start": 1039,
                "end": 1054
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1058
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1060,
                    "end": 1066
                  },
                  "start": 1058,
                  "end": 1066
                },
                "accessibility": null,
                "static": false,
                "start": 1055,
                "end": 1066
              }
            ],
            "start": 1037,
            "end": 1068
          }
        ],
        "start": 987,
        "end": 1068
      },
      "declare": false,
      "start": 969,
      "end": 1068
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntersectionFail",
        "optional": false,
        "typeAnnotation": null,
        "start": 1075,
        "end": 1091
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BoxedValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1104
            },
            "typeArguments": null,
            "start": 1094,
            "end": 1104
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ToString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1115
            },
            "typeArguments": null,
            "start": 1107,
            "end": 1115
          }
        ],
        "start": 1094,
        "end": 1115
      },
      "declare": false,
      "start": 1070,
      "end": 1115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntersectionInline",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1140
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1145,
                      "end": 1149
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "int",
                          "raw": "'int'",
                          "start": 1151,
                          "end": 1156
                        },
                        "start": 1151,
                        "end": 1156
                      },
                      "start": 1149,
                      "end": 1156
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1145,
                    "end": 1157
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1161,
                      "end": 1164
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1166,
                        "end": 1172
                      },
                      "start": 1164,
                      "end": 1172
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1161,
                    "end": 1172
                  }
                ],
                "start": 1143,
                "end": 1174
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1177,
                  "end": 1185
                },
                "typeArguments": null,
                "start": 1177,
                "end": 1185
              }
            ],
            "start": 1143,
            "end": 1185
          },
          {
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
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1214,
                      "end": 1218
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "'string'",
                          "start": 1220,
                          "end": 1228
                        },
                        "start": 1220,
                        "end": 1228
                      },
                      "start": 1218,
                      "end": 1228
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1214,
                    "end": 1229
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1230,
                      "end": 1233
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1235,
                        "end": 1241
                      },
                      "start": 1233,
                      "end": 1241
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1230,
                    "end": 1241
                  }
                ],
                "start": 1212,
                "end": 1243
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1246,
                  "end": 1254
                },
                "typeArguments": null,
                "start": 1246,
                "end": 1254
              }
            ],
            "start": 1212,
            "end": 1254
          }
        ],
        "start": 1143,
        "end": 1254
      },
      "declare": false,
      "start": 1117,
      "end": 1254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getValueAsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1281
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntersectionFail",
                "optional": false,
                "typeAnnotation": null,
                "start": 1289,
                "end": 1305
              },
              "typeArguments": null,
              "start": 1289,
              "end": 1305
            },
            "start": 1287,
            "end": 1305
          },
          "start": 1282,
          "end": 1305
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1308,
          "end": 1314
        },
        "start": 1306,
        "end": 1314
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1330
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1335
                },
                "optional": false,
                "computed": false,
                "start": 1325,
                "end": 1335
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "int",
                "raw": "'int'",
                "start": 1340,
                "end": 1345
              },
              "start": 1325,
              "end": 1345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1364,
                      "end": 1366
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1369,
                        "end": 1374
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1378
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1369,
                      "end": 1378
                    },
                    "start": 1364,
                    "end": 1378
                  },
                  "start": 1357,
                  "end": 1379
                }
              ],
              "start": 1347,
              "end": 1385
            },
            "alternate": null,
            "start": 1321,
            "end": 1385
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1397,
                "end": 1402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1403,
                "end": 1406
              },
              "optional": false,
              "computed": false,
              "start": 1397,
              "end": 1406
            },
            "start": 1390,
            "end": 1407
          }
        ],
        "start": 1315,
        "end": 1409
      },
      "expression": false,
      "start": 1256,
      "end": 1409
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enums",
        "optional": false,
        "typeAnnotation": null,
        "start": 1443,
        "end": 1448
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1473,
                "end": 1474
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1485,
                      "end": 1487
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1485,
                    "end": 1487
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1499
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1497,
                    "end": 1499
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1509,
                      "end": 1511
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1509,
                    "end": 1511
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a75",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1579
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1576,
                    "end": 1579
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a76",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1592
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1589,
                    "end": 1592
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a77",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1602,
                      "end": 1605
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1602,
                    "end": 1605
                  }
                ],
                "start": 1475,
                "end": 1612
              },
              "const": true,
              "declare": false,
              "start": 1462,
              "end": 1612
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1455,
            "end": 1612
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1636
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1647,
                      "end": 1649
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1647,
                    "end": 1649
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1659,
                      "end": 1661
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1659,
                    "end": 1661
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b86",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1726,
                      "end": 1729
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1726,
                    "end": 1729
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b87",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1742
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1739,
                    "end": 1742
                  }
                ],
                "start": 1637,
                "end": 1749
              },
              "const": true,
              "declare": false,
              "start": 1624,
              "end": 1749
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1617,
            "end": 1749
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1772,
                "end": 1773
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1784,
                      "end": 1786
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1784,
                    "end": 1786
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1796,
                      "end": 1798
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1796,
                    "end": 1798
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c210",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1863,
                      "end": 1867
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1863,
                    "end": 1867
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c211",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1877,
                      "end": 1881
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 1877,
                    "end": 1881
                  }
                ],
                "start": 1774,
                "end": 1888
              },
              "const": true,
              "declare": false,
              "start": 1761,
              "end": 1888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1754,
            "end": 1888
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Genre",
                "optional": false,
                "typeAnnotation": null,
                "start": 1905,
                "end": 1910
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1913,
                      "end": 1914
                    },
                    "typeArguments": null,
                    "start": 1913,
                    "end": 1914
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1917,
                      "end": 1918
                    },
                    "typeArguments": null,
                    "start": 1917,
                    "end": 1918
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1921,
                      "end": 1922
                    },
                    "typeArguments": null,
                    "start": 1921,
                    "end": 1922
                  }
                ],
                "start": 1913,
                "end": 1922
              },
              "declare": false,
              "start": 1900,
              "end": 1923
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1893,
            "end": 1923
          }
        ],
        "start": 1449,
        "end": 1925
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1433,
      "end": 1925
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1932,
        "end": 1935
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
              "name": "genreId",
              "optional": false,
              "typeAnnotation": null,
              "start": 1944,
              "end": 1951
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "enums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1953,
                    "end": 1958
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Genre",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1959,
                    "end": 1964
                  },
                  "start": 1953,
                  "end": 1964
                },
                "typeArguments": null,
                "start": 1953,
                "end": 1964
              },
              "start": 1951,
              "end": 1964
            },
            "accessibility": null,
            "static": false,
            "start": 1944,
            "end": 1965
          }
        ],
        "start": 1938,
        "end": 1967
      },
      "declare": false,
      "start": 1927,
      "end": 1968
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1975,
        "end": 1978
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
              "name": "genreId",
              "optional": false,
              "typeAnnotation": null,
              "start": 1987,
              "end": 1994
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "enums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1996,
                    "end": 2001
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Genre",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2002,
                    "end": 2007
                  },
                  "start": 1996,
                  "end": 2007
                },
                "typeArguments": null,
                "start": 1996,
                "end": 2007
              },
              "start": 1994,
              "end": 2007
            },
            "accessibility": null,
            "static": false,
            "start": 1987,
            "end": 2008
          }
        ],
        "start": 1981,
        "end": 2010
      },
      "declare": false,
      "start": 1970,
      "end": 2011
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2018,
        "end": 2024
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2027,
              "end": 2030
            },
            "typeArguments": null,
            "start": 2027,
            "end": 2030
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2033,
              "end": 2036
            },
            "typeArguments": null,
            "start": 2033,
            "end": 2036
          }
        ],
        "start": 2027,
        "end": 2036
      },
      "declare": false,
      "start": 2013,
      "end": 2037
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2048,
        "end": 2051
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2056,
              "end": 2059
            },
            "start": 2054,
            "end": 2059
          },
          "start": 2052,
          "end": 2059
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2073,
                  "end": 2076
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "so",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2079,
                    "end": 2081
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2085,
                      "end": 2091
                    },
                    "typeArguments": null,
                    "start": 2085,
                    "end": 2091
                  },
                  "start": 2079,
                  "end": 2091
                },
                "definite": false,
                "start": 2073,
                "end": 2091
              }
            ],
            "declare": false,
            "start": 2067,
            "end": 2092
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
                  "name": "isGenre",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2110
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2116
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "genreId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2117,
                    "end": 2124
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2113,
                  "end": 2124
                },
                "definite": false,
                "start": 2103,
                "end": 2124
              }
            ],
            "declare": false,
            "start": 2097,
            "end": 2125
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "isGenre",
              "optional": false,
              "typeAnnotation": null,
              "start": 2137,
              "end": 2144
            },
            "start": 2130,
            "end": 2145
          }
        ],
        "start": 2061,
        "end": 2147
      },
      "expression": false,
      "start": 2039,
      "end": 2147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2147
}
```
