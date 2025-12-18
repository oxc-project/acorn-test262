__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QQ",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              },
              "start": 18,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 26
          }
        ],
        "start": 7,
        "end": 27
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 37,
                  "end": 40
                },
                "start": 37,
                "end": 40
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "typeArguments": null,
                  "start": 43,
                  "end": 44
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 45,
                    "end": 46
                  },
                  "start": 45,
                  "end": 46
                },
                "start": 43,
                "end": 47
              }
            ],
            "start": 37,
            "end": 47
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 56,
                  "end": 59
                },
                "start": 56,
                "end": 59
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "typeArguments": null,
                  "start": 62,
                  "end": 63
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 64,
                    "end": 65
                  },
                  "start": 64,
                  "end": 65
                },
                "start": 62,
                "end": 66
              }
            ],
            "start": 56,
            "end": 66
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 75,
                  "end": 78
                },
                "start": 75,
                "end": 78
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 81,
                  "end": 82
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 83,
                    "end": 84
                  },
                  "start": 83,
                  "end": 84
                },
                "start": 81,
                "end": 85
              }
            ],
            "start": 75,
            "end": 85
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 94,
                  "end": 97
                },
                "start": 94,
                "end": 97
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "typeArguments": null,
                  "start": 100,
                  "end": 101
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 102,
                    "end": 103
                  },
                  "start": 102,
                  "end": 103
                },
                "start": 100,
                "end": 104
              }
            ],
            "start": 94,
            "end": 104
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "e",
                  "raw": "\"e\"",
                  "start": 113,
                  "end": 116
                },
                "start": 113,
                "end": 116
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 120
                  },
                  "typeArguments": null,
                  "start": 119,
                  "end": 120
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 121,
                    "end": 122
                  },
                  "start": 121,
                  "end": 122
                },
                "start": 119,
                "end": 123
              }
            ],
            "start": 113,
            "end": 123
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 132,
                  "end": 135
                },
                "start": 132,
                "end": 135
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "typeArguments": null,
                  "start": 138,
                  "end": 139
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 140,
                    "end": 141
                  },
                  "start": 140,
                  "end": 141
                },
                "start": 138,
                "end": 142
              }
            ],
            "start": 132,
            "end": 142
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "g",
                  "raw": "\"g\"",
                  "start": 151,
                  "end": 154
                },
                "start": 151,
                "end": 154
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 158
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 159,
                    "end": 160
                  },
                  "start": 159,
                  "end": 160
                },
                "start": 157,
                "end": 161
              }
            ],
            "start": 151,
            "end": 161
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "h",
                  "raw": "\"h\"",
                  "start": 170,
                  "end": 173
                },
                "start": 170,
                "end": 173
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "typeArguments": null,
                  "start": 176,
                  "end": 177
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 178,
                    "end": 179
                  },
                  "start": 178,
                  "end": 179
                },
                "start": 176,
                "end": 180
              }
            ],
            "start": 170,
            "end": 180
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "i",
                  "raw": "\"i\"",
                  "start": 189,
                  "end": 192
                },
                "start": 189,
                "end": 192
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 195,
                    "end": 196
                  },
                  "typeArguments": null,
                  "start": 195,
                  "end": 196
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 197,
                    "end": 198
                  },
                  "start": 197,
                  "end": 198
                },
                "start": 195,
                "end": 199
              }
            ],
            "start": 189,
            "end": 199
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "j",
                  "raw": "\"j\"",
                  "start": 208,
                  "end": 211
                },
                "start": 208,
                "end": 211
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 215
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 216,
                    "end": 217
                  },
                  "start": 216,
                  "end": 217
                },
                "start": 214,
                "end": 218
              }
            ],
            "start": 208,
            "end": 218
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "k",
                  "raw": "\"k\"",
                  "start": 227,
                  "end": 230
                },
                "start": 227,
                "end": 230
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "typeArguments": null,
                  "start": 233,
                  "end": 234
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 235,
                    "end": 237
                  },
                  "start": 235,
                  "end": 237
                },
                "start": 233,
                "end": 238
              }
            ],
            "start": 227,
            "end": 238
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "l",
                  "raw": "\"l\"",
                  "start": 247,
                  "end": 250
                },
                "start": 247,
                "end": 250
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "typeArguments": null,
                  "start": 253,
                  "end": 254
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 11,
                    "raw": "11",
                    "start": 255,
                    "end": 257
                  },
                  "start": 255,
                  "end": 257
                },
                "start": 253,
                "end": 258
              }
            ],
            "start": 247,
            "end": 258
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "m",
                  "raw": "\"m\"",
                  "start": 267,
                  "end": 270
                },
                "start": 267,
                "end": 270
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "typeArguments": null,
                  "start": 273,
                  "end": 274
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 275,
                    "end": 277
                  },
                  "start": 275,
                  "end": 277
                },
                "start": 273,
                "end": 278
              }
            ],
            "start": 267,
            "end": 278
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "n",
                  "raw": "\"n\"",
                  "start": 287,
                  "end": 290
                },
                "start": 287,
                "end": 290
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "typeArguments": null,
                  "start": 293,
                  "end": 294
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 13,
                    "raw": "13",
                    "start": 295,
                    "end": 297
                  },
                  "start": 295,
                  "end": 297
                },
                "start": 293,
                "end": 298
              }
            ],
            "start": 287,
            "end": 298
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "q",
                  "raw": "\"q\"",
                  "start": 307,
                  "end": 310
                },
                "start": 307,
                "end": 310
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  },
                  "typeArguments": null,
                  "start": 313,
                  "end": 314
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 14,
                    "raw": "14",
                    "start": 315,
                    "end": 317
                  },
                  "start": 315,
                  "end": 317
                },
                "start": 313,
                "end": 318
              }
            ],
            "start": 307,
            "end": 318
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "p",
                  "raw": "\"p\"",
                  "start": 327,
                  "end": 330
                },
                "start": 327,
                "end": 330
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 333,
                  "end": 334
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 15,
                    "raw": "15",
                    "start": 335,
                    "end": 337
                  },
                  "start": 335,
                  "end": 337
                },
                "start": 333,
                "end": 338
              }
            ],
            "start": 327,
            "end": 338
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "q",
                  "raw": "\"q\"",
                  "start": 347,
                  "end": 350
                },
                "start": 347,
                "end": 350
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 354
                  },
                  "typeArguments": null,
                  "start": 353,
                  "end": 354
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 16,
                    "raw": "16",
                    "start": 355,
                    "end": 357
                  },
                  "start": 355,
                  "end": 357
                },
                "start": 353,
                "end": 358
              }
            ],
            "start": 347,
            "end": 358
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "r",
                  "raw": "\"r\"",
                  "start": 367,
                  "end": 370
                },
                "start": 367,
                "end": 370
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  },
                  "typeArguments": null,
                  "start": 373,
                  "end": 374
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 17,
                    "raw": "17",
                    "start": 375,
                    "end": 377
                  },
                  "start": 375,
                  "end": 377
                },
                "start": 373,
                "end": 378
              }
            ],
            "start": 367,
            "end": 378
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 387,
                  "end": 390
                },
                "start": 387,
                "end": 390
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "typeArguments": null,
                  "start": 393,
                  "end": 394
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 18,
                    "raw": "18",
                    "start": 395,
                    "end": 397
                  },
                  "start": 395,
                  "end": 397
                },
                "start": 393,
                "end": 398
              }
            ],
            "start": 387,
            "end": 398
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "\"t\"",
                  "start": 407,
                  "end": 410
                },
                "start": 407,
                "end": 410
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 414
                  },
                  "typeArguments": null,
                  "start": 413,
                  "end": 414
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 19,
                    "raw": "19",
                    "start": 415,
                    "end": 417
                  },
                  "start": 415,
                  "end": 417
                },
                "start": 413,
                "end": 418
              }
            ],
            "start": 407,
            "end": 418
          }
        ],
        "start": 34,
        "end": 419
      },
      "declare": false,
      "start": 0,
      "end": 420
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Update",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 467
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
                "name": "update_id",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 483
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 485,
                  "end": 491
                },
                "start": 483,
                "end": 491
              },
              "accessibility": null,
              "static": false,
              "start": 474,
              "end": 492
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 505
              },
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
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 517
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 519,
                          "end": 525
                        },
                        "start": 517,
                        "end": 525
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 510,
                      "end": 525
                    }
                  ],
                  "start": 508,
                  "end": 527
                },
                "start": 506,
                "end": 527
              },
              "accessibility": null,
              "static": false,
              "start": 498,
              "end": 528
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "edited_message",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 547
              },
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
                        "name": "edited_message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 566
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 568,
                          "end": 574
                        },
                        "start": 566,
                        "end": 574
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 552,
                      "end": 574
                    }
                  ],
                  "start": 550,
                  "end": 576
                },
                "start": 548,
                "end": 576
              },
              "accessibility": null,
              "static": false,
              "start": 533,
              "end": 577
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "channel_post",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 594
              },
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
                        "name": "channel_post",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 611
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 613,
                          "end": 619
                        },
                        "start": 611,
                        "end": 619
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 599,
                      "end": 619
                    }
                  ],
                  "start": 597,
                  "end": 621
                },
                "start": 595,
                "end": 621
              },
              "accessibility": null,
              "static": false,
              "start": 582,
              "end": 622
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "edited_channel_post",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 646
              },
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
                        "name": "edited_channel_post",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 670
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 672,
                          "end": 678
                        },
                        "start": 670,
                        "end": 678
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 651,
                      "end": 678
                    }
                  ],
                  "start": 649,
                  "end": 680
                },
                "start": 647,
                "end": 680
              },
              "accessibility": null,
              "static": false,
              "start": 627,
              "end": 681
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message_reaction",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 702
              },
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
                        "name": "message_reaction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 723
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 725,
                          "end": 731
                        },
                        "start": 723,
                        "end": 731
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 707,
                      "end": 731
                    }
                  ],
                  "start": 705,
                  "end": 733
                },
                "start": 703,
                "end": 733
              },
              "accessibility": null,
              "static": false,
              "start": 686,
              "end": 734
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message_reaction_count",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 761
              },
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
                        "name": "message_reaction_count",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 766,
                        "end": 788
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 790,
                          "end": 796
                        },
                        "start": 788,
                        "end": 796
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 766,
                      "end": 796
                    }
                  ],
                  "start": 764,
                  "end": 798
                },
                "start": 762,
                "end": 798
              },
              "accessibility": null,
              "static": false,
              "start": 739,
              "end": 799
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inline_query",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 816
              },
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
                        "name": "inline_query",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 833
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 835,
                          "end": 841
                        },
                        "start": 833,
                        "end": 841
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 821,
                      "end": 841
                    }
                  ],
                  "start": 819,
                  "end": 843
                },
                "start": 817,
                "end": 843
              },
              "accessibility": null,
              "static": false,
              "start": 804,
              "end": 844
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "chosen_inline_result",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 869
              },
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
                        "name": "chosen_inline_result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 894
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 896,
                          "end": 902
                        },
                        "start": 894,
                        "end": 902
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 874,
                      "end": 902
                    }
                  ],
                  "start": 872,
                  "end": 904
                },
                "start": 870,
                "end": 904
              },
              "accessibility": null,
              "static": false,
              "start": 849,
              "end": 905
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback_query",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 924
              },
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
                        "name": "callback_query",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 929,
                        "end": 943
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 945,
                          "end": 951
                        },
                        "start": 943,
                        "end": 951
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 929,
                      "end": 951
                    }
                  ],
                  "start": 927,
                  "end": 953
                },
                "start": 925,
                "end": 953
              },
              "accessibility": null,
              "static": false,
              "start": 910,
              "end": 954
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "shipping_query",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 973
              },
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
                        "name": "shipping_query",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 992
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 994,
                          "end": 1000
                        },
                        "start": 992,
                        "end": 1000
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 978,
                      "end": 1000
                    }
                  ],
                  "start": 976,
                  "end": 1002
                },
                "start": 974,
                "end": 1002
              },
              "accessibility": null,
              "static": false,
              "start": 959,
              "end": 1003
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pre_checkout_query",
                "optional": false,
                "typeAnnotation": null,
                "start": 1008,
                "end": 1026
              },
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
                        "name": "pre_checkout_query",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1049
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1051,
                          "end": 1057
                        },
                        "start": 1049,
                        "end": 1057
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1031,
                      "end": 1057
                    }
                  ],
                  "start": 1029,
                  "end": 1059
                },
                "start": 1027,
                "end": 1059
              },
              "accessibility": null,
              "static": false,
              "start": 1008,
              "end": 1060
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "poll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1065,
                "end": 1069
              },
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
                        "name": "poll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1078
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1080,
                          "end": 1086
                        },
                        "start": 1078,
                        "end": 1086
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1074,
                      "end": 1086
                    }
                  ],
                  "start": 1072,
                  "end": 1088
                },
                "start": 1070,
                "end": 1088
              },
              "accessibility": null,
              "static": false,
              "start": 1065,
              "end": 1089
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "poll_answer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1105
              },
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
                        "name": "poll_answer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1110,
                        "end": 1121
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1123,
                          "end": 1129
                        },
                        "start": 1121,
                        "end": 1129
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1110,
                      "end": 1129
                    }
                  ],
                  "start": 1108,
                  "end": 1131
                },
                "start": 1106,
                "end": 1131
              },
              "accessibility": null,
              "static": false,
              "start": 1094,
              "end": 1132
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "my_chat_member",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1151
              },
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
                        "name": "my_chat_member",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1156,
                        "end": 1170
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1172,
                          "end": 1178
                        },
                        "start": 1170,
                        "end": 1178
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1156,
                      "end": 1178
                    }
                  ],
                  "start": 1154,
                  "end": 1180
                },
                "start": 1152,
                "end": 1180
              },
              "accessibility": null,
              "static": false,
              "start": 1137,
              "end": 1181
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "chat_member",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1197
              },
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
                        "name": "chat_member",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1202,
                        "end": 1213
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1215,
                          "end": 1221
                        },
                        "start": 1213,
                        "end": 1221
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1202,
                      "end": 1221
                    }
                  ],
                  "start": 1200,
                  "end": 1223
                },
                "start": 1198,
                "end": 1223
              },
              "accessibility": null,
              "static": false,
              "start": 1186,
              "end": 1224
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "chat_join_request",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1246
              },
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
                        "name": "chat_join_request",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1251,
                        "end": 1268
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1270,
                          "end": 1276
                        },
                        "start": 1268,
                        "end": 1276
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1251,
                      "end": 1276
                    }
                  ],
                  "start": 1249,
                  "end": 1278
                },
                "start": 1247,
                "end": 1278
              },
              "accessibility": null,
              "static": false,
              "start": 1229,
              "end": 1279
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "chat_boost",
                "optional": false,
                "typeAnnotation": null,
                "start": 1284,
                "end": 1294
              },
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
                        "name": "chat_boost",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1299,
                        "end": 1309
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1311,
                          "end": 1317
                        },
                        "start": 1309,
                        "end": 1317
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1299,
                      "end": 1317
                    }
                  ],
                  "start": 1297,
                  "end": 1319
                },
                "start": 1295,
                "end": 1319
              },
              "accessibility": null,
              "static": false,
              "start": 1284,
              "end": 1320
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removed_chat_boost",
                "optional": false,
                "typeAnnotation": null,
                "start": 1325,
                "end": 1343
              },
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
                        "name": "removed_chat_boost",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1348,
                        "end": 1366
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1368,
                          "end": 1374
                        },
                        "start": 1366,
                        "end": 1374
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1348,
                      "end": 1374
                    }
                  ],
                  "start": 1346,
                  "end": 1376
                },
                "start": 1344,
                "end": 1376
              },
              "accessibility": null,
              "static": false,
              "start": 1325,
              "end": 1377
            }
          ],
          "start": 468,
          "end": 1379
        },
        "declare": false,
        "start": 451,
        "end": 1379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 444,
      "end": 1379
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1400
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1401,
              "end": 1402
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1417
              },
              "typeArguments": null,
              "start": 1411,
              "end": 1417
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1401,
            "end": 1417
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1419,
              "end": 1420
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1429,
                "end": 1430
              },
              "typeArguments": null,
              "start": 1429,
              "end": 1430
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1419,
            "end": 1430
          }
        ],
        "start": 1400,
        "end": 1431
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "up",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1440
                },
                "typeArguments": null,
                "start": 1439,
                "end": 1440
              },
              "start": 1437,
              "end": 1440
            },
            "start": 1435,
            "end": 1440
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "up",
              "optional": false,
              "typeAnnotation": null,
              "start": 1445,
              "end": 1447
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1451,
                  "end": 1452
                },
                "typeArguments": null,
                "start": 1451,
                "end": 1452
              },
              "start": 1451,
              "end": 1452
            },
            "start": 1445,
            "end": 1452
          },
          "start": 1442,
          "end": 1452
        },
        "start": 1434,
        "end": 1452
      },
      "declare": false,
      "start": 1381,
      "end": 1453
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "matchFilter",
          "optional": false,
          "typeAnnotation": null,
          "start": 1471,
          "end": 1482
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1484
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Update",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1499
                },
                "typeArguments": null,
                "start": 1493,
                "end": 1499
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1483,
              "end": 1499
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1502
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FilterQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1522
                },
                "typeArguments": null,
                "start": 1511,
                "end": 1522
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1501,
              "end": 1522
            }
          ],
          "start": 1482,
          "end": 1523
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1537,
                      "end": 1538
                    },
                    "typeArguments": null,
                    "start": 1537,
                    "end": 1538
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1541,
                        "end": 1542
                      },
                      "typeArguments": null,
                      "start": 1541,
                      "end": 1542
                    },
                    "start": 1541,
                    "end": 1544
                  }
                ],
                "start": 1537,
                "end": 1544
              },
              "start": 1535,
              "end": 1544
            },
            "start": 1529,
            "end": 1544
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FilterFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1563
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1564,
                    "end": 1565
                  },
                  "typeArguments": null,
                  "start": 1564,
                  "end": 1565
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1567,
                    "end": 1573
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1574,
                          "end": 1575
                        },
                        "typeArguments": null,
                        "start": 1574,
                        "end": 1575
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Q",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1577,
                          "end": 1578
                        },
                        "typeArguments": null,
                        "start": 1577,
                        "end": 1578
                      }
                    ],
                    "start": 1573,
                    "end": 1579
                  },
                  "start": 1567,
                  "end": 1579
                }
              ],
              "start": 1563,
              "end": 1580
            },
            "start": 1549,
            "end": 1580
          },
          "start": 1547,
          "end": 1580
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1605,
                    "end": 1612
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1613,
                    "end": 1616
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1605,
                  "end": 1616
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Matching",
                    "raw": "\"Matching\"",
                    "start": 1617,
                    "end": 1627
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1629,
                    "end": 1635
                  }
                ],
                "optional": false,
                "start": 1605,
                "end": 1636
              },
              "directive": null,
              "start": 1605,
              "end": 1637
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "up",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1654,
                          "end": 1655
                        },
                        "typeArguments": null,
                        "start": 1654,
                        "end": 1655
                      },
                      "start": 1652,
                      "end": 1655
                    },
                    "start": 1650,
                    "end": 1655
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "up",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1658,
                      "end": 1660
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1664,
                          "end": 1670
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1671,
                                "end": 1672
                              },
                              "typeArguments": null,
                              "start": 1671,
                              "end": 1672
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Q",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1674,
                                "end": 1675
                              },
                              "typeArguments": null,
                              "start": 1674,
                              "end": 1675
                            }
                          ],
                          "start": 1670,
                          "end": 1676
                        },
                        "start": 1664,
                        "end": 1676
                      },
                      "start": 1664,
                      "end": 1676
                    },
                    "start": 1658,
                    "end": 1676
                  },
                  "start": 1656,
                  "end": 1676
                },
                "body": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "up",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1684
                    },
                    "prefix": true,
                    "start": 1681,
                    "end": 1684
                  },
                  "prefix": true,
                  "start": 1680,
                  "end": 1684
                },
                "id": null,
                "generator": false,
                "start": 1649,
                "end": 1684
              },
              "start": 1642,
              "end": 1685
            }
          ],
          "start": 1581,
          "end": 1687
        },
        "expression": false,
        "start": 1462,
        "end": 1687
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1455,
      "end": 1687
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterQuery",
          "optional": false,
          "typeAnnotation": null,
          "start": 1769,
          "end": 1780
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 1789,
              "end": 1793
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Update",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1794,
                    "end": 1800
                  },
                  "typeArguments": null,
                  "start": 1794,
                  "end": 1800
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "update_id",
                    "raw": "\"update_id\"",
                    "start": 1802,
                    "end": 1813
                  },
                  "start": 1802,
                  "end": 1813
                }
              ],
              "start": 1793,
              "end": 1814
            },
            "start": 1789,
            "end": 1814
          },
          "start": 1783,
          "end": 1814
        },
        "declare": false,
        "start": 1764,
        "end": 1815
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1757,
      "end": 1815
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Filter",
          "optional": false,
          "typeAnnotation": null,
          "start": 1889,
          "end": 1895
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1896,
                "end": 1897
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Update",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1906,
                  "end": 1912
                },
                "typeArguments": null,
                "start": 1906,
                "end": 1912
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1896,
              "end": 1912
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 1914,
                "end": 1915
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FilterQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1924,
                  "end": 1935
                },
                "typeArguments": null,
                "start": 1924,
                "end": 1935
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1914,
              "end": 1935
            }
          ],
          "start": 1895,
          "end": 1936
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PerformQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 1939,
            "end": 1951
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1957,
                  "end": 1958
                },
                "typeArguments": null,
                "start": 1957,
                "end": 1958
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RunQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1964,
                  "end": 1972
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1973,
                        "end": 1974
                      },
                      "typeArguments": null,
                      "start": 1973,
                      "end": 1974
                    }
                  ],
                  "start": 1972,
                  "end": 1975
                },
                "start": 1964,
                "end": 1975
              }
            ],
            "start": 1951,
            "end": 1977
          },
          "start": 1939,
          "end": 1977
        },
        "declare": false,
        "start": 1884,
        "end": 1978
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1877,
      "end": 1978
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RunQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 2074,
        "end": 2082
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 2083,
              "end": 2084
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2093,
              "end": 2099
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2083,
            "end": 2099
          }
        ],
        "start": 2082,
        "end": 2100
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Combine",
          "optional": false,
          "typeAnnotation": null,
          "start": 2103,
          "end": 2110
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L1Fragment",
                "optional": false,
                "typeAnnotation": null,
                "start": 2111,
                "end": 2121
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2122,
                      "end": 2123
                    },
                    "typeArguments": null,
                    "start": 2122,
                    "end": 2123
                  }
                ],
                "start": 2121,
                "end": 2124
              },
              "start": 2111,
              "end": 2124
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 2126,
                "end": 2127
              },
              "typeArguments": null,
              "start": 2126,
              "end": 2127
            }
          ],
          "start": 2110,
          "end": 2128
        },
        "start": 2103,
        "end": 2128
      },
      "declare": false,
      "start": 2069,
      "end": 2129
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L1Fragment",
        "optional": false,
        "typeAnnotation": null,
        "start": 2199,
        "end": 2209
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2211
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2220,
              "end": 2226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2210,
            "end": 2226
          }
        ],
        "start": 2209,
        "end": 2227
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 2230,
            "end": 2231
          },
          "typeArguments": null,
          "start": 2230,
          "end": 2231
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 2240,
          "end": 2247
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 2250,
            "end": 2256
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2257,
                  "end": 2258
                },
                "typeArguments": null,
                "start": 2257,
                "end": 2258
              },
              {
                "type": "TSObjectKeyword",
                "start": 2260,
                "end": 2266
              }
            ],
            "start": 2256,
            "end": 2267
          },
          "start": 2250,
          "end": 2267
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2274,
          "end": 2279
        },
        "start": 2230,
        "end": 2279
      },
      "declare": false,
      "start": 2194,
      "end": 2280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Combine",
        "optional": false,
        "typeAnnotation": null,
        "start": 2355,
        "end": 2362
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2363,
              "end": 2364
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2363,
            "end": 2364
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2366,
              "end": 2367
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2376,
              "end": 2382
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2366,
            "end": 2382
          }
        ],
        "start": 2362,
        "end": 2383
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2386,
            "end": 2387
          },
          "typeArguments": null,
          "start": 2386,
          "end": 2387
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 2396,
          "end": 2403
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2410,
                "end": 2411
              },
              "typeArguments": null,
              "start": 2410,
              "end": 2411
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 2414,
                "end": 2421
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2422,
                      "end": 2428
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2429,
                            "end": 2436
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2437,
                                  "end": 2438
                                },
                                "typeArguments": null,
                                "start": 2437,
                                "end": 2438
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2446,
                                    "end": 2447
                                  },
                                  "typeArguments": null,
                                  "start": 2446,
                                  "end": 2447
                                },
                                "start": 2440,
                                "end": 2447
                              }
                            ],
                            "start": 2436,
                            "end": 2448
                          },
                          "start": 2429,
                          "end": 2448
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2450,
                          "end": 2459
                        }
                      ],
                      "start": 2428,
                      "end": 2460
                    },
                    "start": 2422,
                    "end": 2460
                  }
                ],
                "start": 2421,
                "end": 2461
              },
              "start": 2414,
              "end": 2461
            }
          ],
          "start": 2410,
          "end": 2461
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2468,
          "end": 2473
        },
        "start": 2386,
        "end": 2473
      },
      "declare": false,
      "start": 2350,
      "end": 2474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PerformQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 2598,
        "end": 2610
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2611,
              "end": 2612
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null,
                "start": 2621,
                "end": 2627
              },
              "typeArguments": null,
              "start": 2621,
              "end": 2627
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2611,
            "end": 2627
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 2629,
              "end": 2630
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 2639,
              "end": 2645
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2629,
            "end": 2645
          }
        ],
        "start": 2610,
        "end": 2646
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 2649,
            "end": 2650
          },
          "typeArguments": null,
          "start": 2649,
          "end": 2650
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 2659,
          "end": 2666
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FilteredEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 2673,
            "end": 2686
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2687,
                  "end": 2688
                },
                "typeArguments": null,
                "start": 2687,
                "end": 2688
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Update",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2690,
                      "end": 2696
                    },
                    "typeArguments": null,
                    "start": 2690,
                    "end": 2696
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2699,
                      "end": 2700
                    },
                    "typeArguments": null,
                    "start": 2699,
                    "end": 2700
                  }
                ],
                "start": 2690,
                "end": 2700
              }
            ],
            "start": 2686,
            "end": 2701
          },
          "start": 2673,
          "end": 2701
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2708,
          "end": 2713
        },
        "start": 2649,
        "end": 2713
      },
      "declare": false,
      "start": 2593,
      "end": 2714
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilteredEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 2789,
        "end": 2802
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 2803,
              "end": 2804
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null,
                "start": 2813,
                "end": 2819
              },
              "typeArguments": null,
              "start": 2813,
              "end": 2819
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2803,
            "end": 2819
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2821,
              "end": 2822
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null,
                "start": 2831,
                "end": 2837
              },
              "typeArguments": null,
              "start": 2831,
              "end": 2837
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2821,
            "end": 2837
          }
        ],
        "start": 2802,
        "end": 2838
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 2847,
              "end": 2848
            },
            "typeArguments": null,
            "start": 2847,
            "end": 2848
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 2855,
              "end": 2859
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2860,
                    "end": 2861
                  },
                  "typeArguments": null,
                  "start": 2860,
                  "end": 2861
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "update_id",
                    "raw": "\"update_id\"",
                    "start": 2863,
                    "end": 2874
                  },
                  "start": 2863,
                  "end": 2874
                }
              ],
              "start": 2859,
              "end": 2875
            },
            "start": 2855,
            "end": 2875
          }
        ],
        "start": 2845,
        "end": 2875
      },
      "declare": false,
      "start": 2784,
      "end": 2876
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Middleware",
        "optional": false,
        "typeAnnotation": null,
        "start": 2883,
        "end": 2893
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2894,
              "end": 2895
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null,
                "start": 2904,
                "end": 2910
              },
              "typeArguments": null,
              "start": 2904,
              "end": 2910
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2894,
            "end": 2910
          }
        ],
        "start": 2893,
        "end": 2911
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ctx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2920,
                  "end": 2921
                },
                "typeArguments": null,
                "start": 2920,
                "end": 2921
              },
              "start": 2918,
              "end": 2921
            },
            "start": 2915,
            "end": 2921
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSUnknownKeyword",
                "start": 2926,
                "end": 2933
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2936,
                  "end": 2943
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 2944,
                      "end": 2951
                    }
                  ],
                  "start": 2943,
                  "end": 2952
                },
                "start": 2936,
                "end": 2952
              }
            ],
            "start": 2926,
            "end": 2952
          },
          "start": 2923,
          "end": 2952
        },
        "start": 2914,
        "end": 2952
      },
      "declare": false,
      "start": 2878,
      "end": 2953
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventHub",
        "optional": false,
        "typeAnnotation": null,
        "start": 2960,
        "end": 2968
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2969,
              "end": 2970
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null,
                "start": 2979,
                "end": 2985
              },
              "typeArguments": null,
              "start": 2979,
              "end": 2985
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2969,
            "end": 2985
          }
        ],
        "start": 2968,
        "end": 2986
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 2993,
              "end": 2996
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "middleware",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3000,
                    "end": 3010
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3012,
                        "end": 3017
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Middleware",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3018,
                              "end": 3028
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3029,
                                    "end": 3030
                                  },
                                  "typeArguments": null,
                                  "start": 3029,
                                  "end": 3030
                                }
                              ],
                              "start": 3028,
                              "end": 3031
                            },
                            "start": 3018,
                            "end": 3031
                          }
                        ],
                        "start": 3017,
                        "end": 3032
                      },
                      "start": 3012,
                      "end": 3032
                    },
                    "start": 3010,
                    "end": 3032
                  },
                  "value": null,
                  "start": 2997,
                  "end": 3032
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventHub",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3035,
                    "end": 3043
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3044,
                          "end": 3045
                        },
                        "typeArguments": null,
                        "start": 3044,
                        "end": 3045
                      }
                    ],
                    "start": 3043,
                    "end": 3046
                  },
                  "start": 3035,
                  "end": 3046
                },
                "start": 3033,
                "end": 3046
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3057,
                          "end": 3064
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3065,
                          "end": 3068
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3057,
                        "end": 3068
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Adding",
                          "raw": "\"Adding\"",
                          "start": 3069,
                          "end": 3077
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3079,
                            "end": 3089
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3090,
                            "end": 3096
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3079,
                          "end": 3096
                        },
                        {
                          "type": "Literal",
                          "value": "generic handlers",
                          "raw": "\"generic handlers\"",
                          "start": 3098,
                          "end": 3116
                        }
                      ],
                      "optional": false,
                      "start": 3057,
                      "end": 3117
                    },
                    "directive": null,
                    "start": 3057,
                    "end": 3118
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 3134,
                      "end": 3138
                    },
                    "start": 3127,
                    "end": 3139
                  }
                ],
                "start": 3047,
                "end": 3145
              },
              "expression": false,
              "start": 2996,
              "end": 3145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2993,
            "end": 3145
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 3150,
              "end": 3152
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3153,
                      "end": 3154
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterQuery",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3163,
                        "end": 3174
                      },
                      "typeArguments": null,
                      "start": 3163,
                      "end": 3174
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3153,
                    "end": 3174
                  }
                ],
                "start": 3152,
                "end": 3175
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3193,
                            "end": 3194
                          },
                          "typeArguments": null,
                          "start": 3193,
                          "end": 3194
                        },
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Q",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3197,
                              "end": 3198
                            },
                            "typeArguments": null,
                            "start": 3197,
                            "end": 3198
                          },
                          "start": 3197,
                          "end": 3200
                        }
                      ],
                      "start": 3193,
                      "end": 3200
                    },
                    "start": 3191,
                    "end": 3200
                  },
                  "start": 3185,
                  "end": 3200
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "middleware",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3213,
                    "end": 3223
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3225,
                        "end": 3230
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Middleware",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3231,
                              "end": 3241
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Filter",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3242,
                                    "end": 3248
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3249,
                                          "end": 3250
                                        },
                                        "typeArguments": null,
                                        "start": 3249,
                                        "end": 3250
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Q",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3252,
                                          "end": 3253
                                        },
                                        "typeArguments": null,
                                        "start": 3252,
                                        "end": 3253
                                      }
                                    ],
                                    "start": 3248,
                                    "end": 3254
                                  },
                                  "start": 3242,
                                  "end": 3254
                                }
                              ],
                              "start": 3241,
                              "end": 3255
                            },
                            "start": 3231,
                            "end": 3255
                          }
                        ],
                        "start": 3230,
                        "end": 3256
                      },
                      "start": 3225,
                      "end": 3256
                    },
                    "start": 3223,
                    "end": 3256
                  },
                  "value": null,
                  "start": 3210,
                  "end": 3256
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventHub",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3307,
                    "end": 3315
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3316,
                          "end": 3322
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3323,
                                "end": 3324
                              },
                              "typeArguments": null,
                              "start": 3323,
                              "end": 3324
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Q",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3326,
                                "end": 3327
                              },
                              "typeArguments": null,
                              "start": 3326,
                              "end": 3327
                            }
                          ],
                          "start": 3322,
                          "end": 3328
                        },
                        "start": 3316,
                        "end": 3328
                      }
                    ],
                    "start": 3315,
                    "end": 3329
                  },
                  "start": 3307,
                  "end": 3329
                },
                "start": 3305,
                "end": 3329
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3340,
                          "end": 3347
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3348,
                          "end": 3351
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3340,
                        "end": 3351
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Adding",
                          "raw": "\"Adding\"",
                          "start": 3352,
                          "end": 3360
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3362,
                            "end": 3372
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3373,
                            "end": 3379
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3362,
                          "end": 3379
                        },
                        {
                          "type": "Literal",
                          "value": "handlers for",
                          "raw": "\"handlers for\"",
                          "start": 3381,
                          "end": 3395
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3397,
                          "end": 3403
                        }
                      ],
                      "optional": false,
                      "start": 3340,
                      "end": 3404
                    },
                    "directive": null,
                    "start": 3340,
                    "end": 3405
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EventHub",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3425,
                        "end": 3433
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3434,
                              "end": 3440
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3441,
                                    "end": 3442
                                  },
                                  "typeArguments": null,
                                  "start": 3441,
                                  "end": 3442
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Q",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3444,
                                    "end": 3445
                                  },
                                  "typeArguments": null,
                                  "start": 3444,
                                  "end": 3445
                                }
                              ],
                              "start": 3440,
                              "end": 3446
                            },
                            "start": 3434,
                            "end": 3446
                          }
                        ],
                        "start": 3433,
                        "end": 3447
                      },
                      "arguments": [],
                      "start": 3421,
                      "end": 3449
                    },
                    "start": 3414,
                    "end": 3450
                  }
                ],
                "start": 3330,
                "end": 3456
              },
              "expression": false,
              "start": 3152,
              "end": 3456
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3150,
            "end": 3456
          }
        ],
        "start": 2987,
        "end": 3458
      },
      "abstract": false,
      "declare": false,
      "start": 2954,
      "end": 3458
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3458
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "QQ",
    "start": 5,
    "end": 7,
    "range": [
      5,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10,
    "end": 17,
    "range": [
      10,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 37,
    "end": 40,
    "range": [
      37,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 151,
    "end": 154,
    "range": [
      151,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "String",
    "value": "\"h\"",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "String",
    "value": "\"i\"",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "String",
    "value": "\"j\"",
    "start": 208,
    "end": 211,
    "range": [
      208,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "String",
    "value": "\"k\"",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "String",
    "value": "\"l\"",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 267,
    "end": 270,
    "range": [
      267,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 275,
    "end": 277,
    "range": [
      275,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 287,
    "end": 290,
    "range": [
      287,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 295,
    "end": 297,
    "range": [
      295,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 315,
    "end": 317,
    "range": [
      315,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "String",
    "value": "\"p\"",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 335,
    "end": 337,
    "range": [
      335,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 355,
    "end": 357,
    "range": [
      355,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "String",
    "value": "\"r\"",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 375,
    "end": 377,
    "range": [
      375,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 395,
    "end": 397,
    "range": [
      395,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "String",
    "value": "\"t\"",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 415,
    "end": 417,
    "range": [
      415,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 451,
    "end": 460,
    "range": [
      451,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "update_id",
    "start": 474,
    "end": 483,
    "range": [
      474,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 498,
    "end": 505,
    "range": [
      498,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 510,
    "end": 517,
    "range": [
      510,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525,
    "range": [
      519,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "edited_message",
    "start": 533,
    "end": 547,
    "range": [
      533,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "edited_message",
    "start": 552,
    "end": 566,
    "range": [
      552,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "channel_post",
    "start": 582,
    "end": 594,
    "range": [
      582,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "channel_post",
    "start": 599,
    "end": 611,
    "range": [
      599,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "edited_channel_post",
    "start": 627,
    "end": 646,
    "range": [
      627,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "edited_channel_post",
    "start": 651,
    "end": 670,
    "range": [
      651,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 672,
    "end": 678,
    "range": [
      672,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "message_reaction",
    "start": 686,
    "end": 702,
    "range": [
      686,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "message_reaction",
    "start": 707,
    "end": 723,
    "range": [
      707,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 725,
    "end": 731,
    "range": [
      725,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "message_reaction_count",
    "start": 739,
    "end": 761,
    "range": [
      739,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "message_reaction_count",
    "start": 766,
    "end": 788,
    "range": [
      766,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 790,
    "end": 796,
    "range": [
      790,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "inline_query",
    "start": 804,
    "end": 816,
    "range": [
      804,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "inline_query",
    "start": 821,
    "end": 833,
    "range": [
      821,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 835,
    "end": 841,
    "range": [
      835,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "chosen_inline_result",
    "start": 849,
    "end": 869,
    "range": [
      849,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "chosen_inline_result",
    "start": 874,
    "end": 894,
    "range": [
      874,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 896,
    "end": 902,
    "range": [
      896,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "callback_query",
    "start": 910,
    "end": 924,
    "range": [
      910,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "callback_query",
    "start": 929,
    "end": 943,
    "range": [
      929,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951,
    "range": [
      945,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "shipping_query",
    "start": 959,
    "end": 973,
    "range": [
      959,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "shipping_query",
    "start": 978,
    "end": 992,
    "range": [
      978,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 994,
    "end": 1000,
    "range": [
      994,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "pre_checkout_query",
    "start": 1008,
    "end": 1026,
    "range": [
      1008,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "pre_checkout_query",
    "start": 1031,
    "end": 1049,
    "range": [
      1031,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1051,
    "end": 1057,
    "range": [
      1051,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "poll",
    "start": 1065,
    "end": 1069,
    "range": [
      1065,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "poll",
    "start": 1074,
    "end": 1078,
    "range": [
      1074,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1080,
    "end": 1086,
    "range": [
      1080,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "poll_answer",
    "start": 1094,
    "end": 1105,
    "range": [
      1094,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "poll_answer",
    "start": 1110,
    "end": 1121,
    "range": [
      1110,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1123,
    "end": 1129,
    "range": [
      1123,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "my_chat_member",
    "start": 1137,
    "end": 1151,
    "range": [
      1137,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "my_chat_member",
    "start": 1156,
    "end": 1170,
    "range": [
      1156,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1172,
    "end": 1178,
    "range": [
      1172,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "chat_member",
    "start": 1186,
    "end": 1197,
    "range": [
      1186,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "chat_member",
    "start": 1202,
    "end": 1213,
    "range": [
      1202,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1215,
    "end": 1221,
    "range": [
      1215,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "chat_join_request",
    "start": 1229,
    "end": 1246,
    "range": [
      1229,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "chat_join_request",
    "start": 1251,
    "end": 1268,
    "range": [
      1251,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1270,
    "end": 1276,
    "range": [
      1270,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "chat_boost",
    "start": 1284,
    "end": 1294,
    "range": [
      1284,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "chat_boost",
    "start": 1299,
    "end": 1309,
    "range": [
      1299,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1311,
    "end": 1317,
    "range": [
      1311,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "removed_chat_boost",
    "start": 1325,
    "end": 1343,
    "range": [
      1325,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "removed_chat_boost",
    "start": 1348,
    "end": 1366,
    "range": [
      1348,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1368,
    "end": 1374,
    "range": [
      1368,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1381,
    "end": 1385,
    "range": [
      1381,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterFunction",
    "start": 1386,
    "end": 1400,
    "range": [
      1386,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1403,
    "end": 1410,
    "range": [
      1403,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 1411,
    "end": 1417,
    "range": [
      1411,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1421,
    "end": 1428,
    "range": [
      1421,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 1435,
    "end": 1437,
    "range": [
      1435,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1442,
    "end": 1444,
    "range": [
      1442,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 1445,
    "end": 1447,
    "range": [
      1445,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1448,
    "end": 1450,
    "range": [
      1448,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1455,
    "end": 1461,
    "range": [
      1455,
      1461
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1462,
    "end": 1470,
    "range": [
      1462,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "matchFilter",
    "start": 1471,
    "end": 1482,
    "range": [
      1471,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1485,
    "end": 1492,
    "range": [
      1485,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 1493,
    "end": 1499,
    "range": [
      1493,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1503,
    "end": 1510,
    "range": [
      1503,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterQuery",
    "start": 1511,
    "end": 1522,
    "range": [
      1511,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1529,
    "end": 1535,
    "range": [
      1529,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterFunction",
    "start": 1549,
    "end": 1563,
    "range": [
      1549,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 1567,
    "end": 1573,
    "range": [
      1567,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1605,
    "end": 1612,
    "range": [
      1605,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1613,
    "end": 1616,
    "range": [
      1613,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "String",
    "value": "\"Matching\"",
    "start": 1617,
    "end": 1627,
    "range": [
      1617,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1629,
    "end": 1635,
    "range": [
      1629,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1642,
    "end": 1648,
    "range": [
      1642,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 1650,
    "end": 1652,
    "range": [
      1650,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 1658,
    "end": 1660,
    "range": [
      1658,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1661,
    "end": 1663,
    "range": [
      1661,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 1664,
    "end": 1670,
    "range": [
      1664,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1677,
    "end": 1679,
    "range": [
      1677,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 1682,
    "end": 1684,
    "range": [
      1682,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1764,
    "end": 1768,
    "range": [
      1764,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterQuery",
    "start": 1769,
    "end": 1780,
    "range": [
      1769,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1783,
    "end": 1788,
    "range": [
      1783,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1789,
    "end": 1793,
    "range": [
      1789,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 1794,
    "end": 1800,
    "range": [
      1794,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "String",
    "value": "\"update_id\"",
    "start": 1802,
    "end": 1813,
    "range": [
      1802,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1877,
    "end": 1883,
    "range": [
      1877,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1884,
    "end": 1888,
    "range": [
      1884,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 1889,
    "end": 1895,
    "range": [
      1889,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1898,
    "end": 1905,
    "range": [
      1898,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 1906,
    "end": 1912,
    "range": [
      1906,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1916,
    "end": 1923,
    "range": [
      1916,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterQuery",
    "start": 1924,
    "end": 1935,
    "range": [
      1924,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "PerformQuery",
    "start": 1939,
    "end": 1951,
    "range": [
      1939,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "RunQuery",
    "start": 1964,
    "end": 1972,
    "range": [
      1964,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2069,
    "end": 2073,
    "range": [
      2069,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "RunQuery",
    "start": 2074,
    "end": 2082,
    "range": [
      2074,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2085,
    "end": 2092,
    "range": [
      2085,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2093,
    "end": 2099,
    "range": [
      2093,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "Combine",
    "start": 2103,
    "end": 2110,
    "range": [
      2103,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "L1Fragment",
    "start": 2111,
    "end": 2121,
    "range": [
      2111,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2194,
    "end": 2198,
    "range": [
      2194,
      2198
    ]
  },
  {
    "type": "Identifier",
    "value": "L1Fragment",
    "start": 2199,
    "end": 2209,
    "range": [
      2199,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2212,
    "end": 2219,
    "range": [
      2212,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2220,
    "end": 2226,
    "range": [
      2220,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2232,
    "end": 2239,
    "range": [
      2232,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2240,
    "end": 2247,
    "range": [
      2240,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2250,
    "end": 2256,
    "range": [
      2250,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2260,
    "end": 2266,
    "range": [
      2260,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2274,
    "end": 2279,
    "range": [
      2274,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2350,
    "end": 2354,
    "range": [
      2350,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "Combine",
    "start": 2355,
    "end": 2362,
    "range": [
      2355,
      2362
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2368,
    "end": 2375,
    "range": [
      2368,
      2375
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2376,
    "end": 2382,
    "range": [
      2376,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2388,
    "end": 2395,
    "range": [
      2388,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2396,
    "end": 2403,
    "range": [
      2396,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 2414,
    "end": 2421,
    "range": [
      2414,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2422,
    "end": 2428,
    "range": [
      2422,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 2429,
    "end": 2436,
    "range": [
      2429,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2440,
    "end": 2445,
    "range": [
      2440,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2450,
    "end": 2459,
    "range": [
      2450,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2468,
    "end": 2473,
    "range": [
      2468,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2593,
    "end": 2597,
    "range": [
      2593,
      2597
    ]
  },
  {
    "type": "Identifier",
    "value": "PerformQuery",
    "start": 2598,
    "end": 2610,
    "range": [
      2598,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2613,
    "end": 2620,
    "range": [
      2613,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 2621,
    "end": 2627,
    "range": [
      2621,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2631,
    "end": 2638,
    "range": [
      2631,
      2638
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2639,
    "end": 2645,
    "range": [
      2639,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2651,
    "end": 2658,
    "range": [
      2651,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2659,
    "end": 2666,
    "range": [
      2659,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "FilteredEvent",
    "start": 2673,
    "end": 2686,
    "range": [
      2673,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 2690,
    "end": 2696,
    "range": [
      2690,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2708,
    "end": 2713,
    "range": [
      2708,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2784,
    "end": 2788,
    "range": [
      2784,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "FilteredEvent",
    "start": 2789,
    "end": 2802,
    "range": [
      2789,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2805,
    "end": 2812,
    "range": [
      2805,
      2812
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 2813,
    "end": 2819,
    "range": [
      2813,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2823,
    "end": 2830,
    "range": [
      2823,
      2830
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 2831,
    "end": 2837,
    "range": [
      2831,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 2855,
    "end": 2859,
    "range": [
      2855,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "String",
    "value": "\"update_id\"",
    "start": 2863,
    "end": 2874,
    "range": [
      2863,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2878,
    "end": 2882,
    "range": [
      2878,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "Middleware",
    "start": 2883,
    "end": 2893,
    "range": [
      2883,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2896,
    "end": 2903,
    "range": [
      2896,
      2903
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 2904,
    "end": 2910,
    "range": [
      2904,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2914,
    "end": 2915,
    "range": [
      2914,
      2915
    ]
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 2915,
    "end": 2918,
    "range": [
      2915,
      2918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2923,
    "end": 2925,
    "range": [
      2923,
      2925
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2926,
    "end": 2933,
    "range": [
      2926,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2936,
    "end": 2943,
    "range": [
      2936,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2944,
    "end": 2951,
    "range": [
      2944,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2954,
    "end": 2959,
    "range": [
      2954,
      2959
    ]
  },
  {
    "type": "Identifier",
    "value": "EventHub",
    "start": 2960,
    "end": 2968,
    "range": [
      2960,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2971,
    "end": 2978,
    "range": [
      2971,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "Update",
    "start": 2979,
    "end": 2985,
    "range": [
      2979,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2993,
    "end": 2996,
    "range": [
      2993,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2997,
    "end": 3000,
    "range": [
      2997,
      3000
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 3000,
    "end": 3010,
    "range": [
      3000,
      3010
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3012,
    "end": 3017,
    "range": [
      3012,
      3017
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "Middleware",
    "start": 3018,
    "end": 3028,
    "range": [
      3018,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Identifier",
    "value": "EventHub",
    "start": 3035,
    "end": 3043,
    "range": [
      3035,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3057,
    "end": 3064,
    "range": [
      3057,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3065,
    "end": 3068,
    "range": [
      3065,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "String",
    "value": "\"Adding\"",
    "start": 3069,
    "end": 3077,
    "range": [
      3069,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 3079,
    "end": 3089,
    "range": [
      3079,
      3089
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3089,
    "end": 3090,
    "range": [
      3089,
      3090
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3090,
    "end": 3096,
    "range": [
      3090,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "String",
    "value": "\"generic handlers\"",
    "start": 3098,
    "end": 3116,
    "range": [
      3098,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3127,
    "end": 3133,
    "range": [
      3127,
      3133
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3134,
    "end": 3138,
    "range": [
      3134,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 3150,
    "end": 3152,
    "range": [
      3150,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3155,
    "end": 3162,
    "range": [
      3155,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterQuery",
    "start": 3163,
    "end": 3174,
    "range": [
      3163,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 3185,
    "end": 3191,
    "range": [
      3185,
      3191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3191,
    "end": 3192,
    "range": [
      3191,
      3192
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3200,
    "end": 3201,
    "range": [
      3200,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3210,
    "end": 3213,
    "range": [
      3210,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 3213,
    "end": 3223,
    "range": [
      3213,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3225,
    "end": 3230,
    "range": [
      3225,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Identifier",
    "value": "Middleware",
    "start": 3231,
    "end": 3241,
    "range": [
      3231,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 3242,
    "end": 3248,
    "range": [
      3242,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3253,
    "end": 3254,
    "range": [
      3253,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Identifier",
    "value": "EventHub",
    "start": 3307,
    "end": 3315,
    "range": [
      3307,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 3316,
    "end": 3322,
    "range": [
      3316,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3340,
    "end": 3347,
    "range": [
      3340,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3348,
    "end": 3351,
    "range": [
      3348,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "String",
    "value": "\"Adding\"",
    "start": 3352,
    "end": 3360,
    "range": [
      3352,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3360,
    "end": 3361,
    "range": [
      3360,
      3361
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 3362,
    "end": 3372,
    "range": [
      3362,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3373,
    "end": 3379,
    "range": [
      3373,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "String",
    "value": "\"handlers for\"",
    "start": 3381,
    "end": 3395,
    "range": [
      3381,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 3397,
    "end": 3403,
    "range": [
      3397,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3403,
    "end": 3404,
    "range": [
      3403,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3414,
    "end": 3420,
    "range": [
      3414,
      3420
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3421,
    "end": 3424,
    "range": [
      3421,
      3424
    ]
  },
  {
    "type": "Identifier",
    "value": "EventHub",
    "start": 3425,
    "end": 3433,
    "range": [
      3425,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 3434,
    "end": 3440,
    "range": [
      3434,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3445,
    "end": 3446,
    "range": [
      3445,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3447,
    "end": 3448,
    "range": [
      3447,
      3448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3448,
    "end": 3449,
    "range": [
      3448,
      3449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3449,
    "end": 3450,
    "range": [
      3449,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3457,
    "end": 3458,
    "range": [
      3457,
      3458
    ]
  }
]
```
