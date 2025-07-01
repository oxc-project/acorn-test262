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
