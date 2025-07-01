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
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 47
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
              "start": 48,
              "end": 49
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 49
          }
        ],
        "start": 47,
        "end": 50
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 70
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              }
            ],
            "start": 70,
            "end": 73
          },
          "start": 59,
          "end": 73
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 74,
        "end": 77
      },
      "declare": false,
      "start": 29,
      "end": 77
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 125
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TR",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 126,
            "end": 128
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 132
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 130,
            "end": 132
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TN",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UR",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 142,
            "end": 144
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 148
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UN",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 152
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 152
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VR",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 158,
            "end": 160
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 162,
            "end": 164
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VN",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 166,
            "end": 168
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SR",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 180
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 178,
            "end": 180
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SN",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 184
          }
        ],
        "start": 125,
        "end": 185
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 200
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 203,
                    "end": 208
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 197,
                  "end": 208
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 216,
                    "end": 221
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 210,
                  "end": 221
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 226
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 229,
                    "end": 234
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 223,
                  "end": 234
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 247
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 250,
                    "end": 255
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 244,
                  "end": 255
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 260
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 263,
                    "end": 268
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 257,
                  "end": 268
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 273
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 276,
                    "end": 281
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 270,
                  "end": 281
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 294
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 297,
                    "end": 302
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 291,
                  "end": 302
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 307
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 310,
                    "end": 315
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 304,
                  "end": 315
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 323,
                    "end": 328
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 317,
                  "end": 328
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 341
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 344,
                    "end": 349
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 338,
                  "end": 349
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 354
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 357,
                    "end": 362
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 351,
                  "end": 362
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 367
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 370,
                    "end": 375
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 364,
                  "end": 375
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 388
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 391,
                    "end": 396
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 385,
                  "end": 396
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 401
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 404,
                    "end": 409
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 398,
                  "end": 409
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 414
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 417,
                    "end": 422
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 411,
                  "end": 422
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 435
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 438,
                    "end": 443
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 432,
                  "end": 443
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 448
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 451,
                    "end": 456
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 445,
                  "end": 456
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 461
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 464,
                    "end": 469
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 458,
                  "end": 469
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 482
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 485,
                    "end": 490
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 479,
                  "end": 490
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 495
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 498,
                    "end": 503
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 492,
                  "end": 503
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 508
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 511,
                    "end": 516
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 505,
                  "end": 516
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 529
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 532,
                    "end": 537
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 526,
                  "end": 537
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 542
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 545,
                    "end": 550
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 539,
                  "end": 550
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 555
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 558,
                    "end": 563
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 552,
                  "end": 563
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 576
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 579,
                    "end": 584
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 573,
                  "end": 584
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 586,
                    "end": 589
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 592,
                    "end": 597
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 586,
                  "end": 597
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 602
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 605,
                    "end": 610
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 599,
                  "end": 610
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 623
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 626,
                    "end": 631
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 620,
                  "end": 631
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 636
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 639,
                    "end": 644
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 633,
                  "end": 644
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 649
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 652,
                    "end": 657
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 646,
                  "end": 657
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 670
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 673,
                    "end": 678
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 667,
                  "end": 678
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 683
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 686,
                    "end": 691
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 680,
                  "end": 691
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 696
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 699,
                    "end": 704
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 693,
                  "end": 704
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 714,
                    "end": 717
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 720,
                    "end": 725
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 714,
                  "end": 725
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 730
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 733,
                    "end": 738
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 727,
                  "end": 738
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 743
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 746,
                    "end": 751
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 740,
                  "end": 751
                }
              ],
              "start": 196,
              "end": 752
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 784
                            },
                            "typeArguments": null,
                            "start": 782,
                            "end": 784
                          },
                          "start": 780,
                          "end": 784
                        },
                        "start": 779,
                        "end": 784
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 789,
                              "end": 791
                            },
                            "typeArguments": null,
                            "start": 789,
                            "end": 791
                          },
                          "start": 787,
                          "end": 791
                        },
                        "start": 786,
                        "end": 791
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 796,
                              "end": 798
                            },
                            "typeArguments": null,
                            "start": 796,
                            "end": 798
                          },
                          "start": 794,
                          "end": 798
                        },
                        "start": 793,
                        "end": 798
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 803,
                          "end": 804
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 806,
                                "end": 808
                              },
                              "typeArguments": null,
                              "start": 806,
                              "end": 808
                            },
                            "start": 806,
                            "end": 810
                          },
                          "start": 804,
                          "end": 810
                        },
                        "value": null,
                        "start": 800,
                        "end": 810
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 826
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 827,
                                    "end": 830
                                  },
                                  "typeArguments": null,
                                  "start": 827,
                                  "end": 830
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 832,
                                    "end": 835
                                  },
                                  "typeArguments": null,
                                  "start": 832,
                                  "end": 835
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 837,
                                    "end": 840
                                  },
                                  "typeArguments": null,
                                  "start": 837,
                                  "end": 840
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 858,
                                    "end": 861
                                  },
                                  "typeArguments": null,
                                  "start": 858,
                                  "end": 861
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 863,
                                    "end": 866
                                  },
                                  "typeArguments": null,
                                  "start": 863,
                                  "end": 866
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 868,
                                    "end": 871
                                  },
                                  "typeArguments": null,
                                  "start": 868,
                                  "end": 871
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 889,
                                    "end": 892
                                  },
                                  "typeArguments": null,
                                  "start": 889,
                                  "end": 892
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 894,
                                    "end": 897
                                  },
                                  "typeArguments": null,
                                  "start": 894,
                                  "end": 897
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 899,
                                    "end": 902
                                  },
                                  "typeArguments": null,
                                  "start": 899,
                                  "end": 902
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 920,
                                    "end": 923
                                  },
                                  "typeArguments": null,
                                  "start": 920,
                                  "end": 923
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 925,
                                    "end": 928
                                  },
                                  "typeArguments": null,
                                  "start": 925,
                                  "end": 928
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 930,
                                    "end": 933
                                  },
                                  "typeArguments": null,
                                  "start": 930,
                                  "end": 933
                                }
                              ],
                              "start": 826,
                              "end": 934
                            },
                            "start": 815,
                            "end": 934
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 937,
                              "end": 945
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 946,
                                    "end": 949
                                  },
                                  "typeArguments": null,
                                  "start": 946,
                                  "end": 949
                                }
                              ],
                              "start": 945,
                              "end": 950
                            },
                            "start": 937,
                            "end": 950
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 956
                            },
                            "typeArguments": null,
                            "start": 953,
                            "end": 956
                          }
                        ],
                        "start": 815,
                        "end": 956
                      },
                      "start": 812,
                      "end": 956
                    },
                    "start": 778,
                    "end": 956
                  },
                  "start": 776,
                  "end": 956
                },
                "start": 766,
                "end": 956
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 986,
                              "end": 988
                            },
                            "typeArguments": null,
                            "start": 986,
                            "end": 988
                          },
                          "start": 984,
                          "end": 988
                        },
                        "start": 983,
                        "end": 988
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 993,
                              "end": 995
                            },
                            "typeArguments": null,
                            "start": 993,
                            "end": 995
                          },
                          "start": 991,
                          "end": 995
                        },
                        "start": 990,
                        "end": 995
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1000,
                              "end": 1002
                            },
                            "typeArguments": null,
                            "start": 1000,
                            "end": 1002
                          },
                          "start": 998,
                          "end": 1002
                        },
                        "start": 997,
                        "end": 1002
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1008
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1010,
                                "end": 1012
                              },
                              "typeArguments": null,
                              "start": 1010,
                              "end": 1012
                            },
                            "start": 1010,
                            "end": 1014
                          },
                          "start": 1008,
                          "end": 1014
                        },
                        "value": null,
                        "start": 1004,
                        "end": 1014
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1019,
                              "end": 1030
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1031,
                                    "end": 1034
                                  },
                                  "typeArguments": null,
                                  "start": 1031,
                                  "end": 1034
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1036,
                                    "end": 1039
                                  },
                                  "typeArguments": null,
                                  "start": 1036,
                                  "end": 1039
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1041,
                                    "end": 1044
                                  },
                                  "typeArguments": null,
                                  "start": 1041,
                                  "end": 1044
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1062,
                                    "end": 1065
                                  },
                                  "typeArguments": null,
                                  "start": 1062,
                                  "end": 1065
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1067,
                                    "end": 1070
                                  },
                                  "typeArguments": null,
                                  "start": 1067,
                                  "end": 1070
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1072,
                                    "end": 1075
                                  },
                                  "typeArguments": null,
                                  "start": 1072,
                                  "end": 1075
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1093,
                                    "end": 1096
                                  },
                                  "typeArguments": null,
                                  "start": 1093,
                                  "end": 1096
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1098,
                                    "end": 1101
                                  },
                                  "typeArguments": null,
                                  "start": 1098,
                                  "end": 1101
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1103,
                                    "end": 1106
                                  },
                                  "typeArguments": null,
                                  "start": 1103,
                                  "end": 1106
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1124,
                                    "end": 1127
                                  },
                                  "typeArguments": null,
                                  "start": 1124,
                                  "end": 1127
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1129,
                                    "end": 1132
                                  },
                                  "typeArguments": null,
                                  "start": 1129,
                                  "end": 1132
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1134,
                                    "end": 1137
                                  },
                                  "typeArguments": null,
                                  "start": 1134,
                                  "end": 1137
                                }
                              ],
                              "start": 1030,
                              "end": 1138
                            },
                            "start": 1019,
                            "end": 1138
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1141,
                              "end": 1149
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1150,
                                    "end": 1153
                                  },
                                  "typeArguments": null,
                                  "start": 1150,
                                  "end": 1153
                                }
                              ],
                              "start": 1149,
                              "end": 1154
                            },
                            "start": 1141,
                            "end": 1154
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1157,
                              "end": 1160
                            },
                            "typeArguments": null,
                            "start": 1157,
                            "end": 1160
                          }
                        ],
                        "start": 1019,
                        "end": 1160
                      },
                      "start": 1016,
                      "end": 1160
                    },
                    "start": 982,
                    "end": 1160
                  },
                  "start": 980,
                  "end": 1160
                },
                "start": 970,
                "end": 1160
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1194,
                              "end": 1196
                            },
                            "typeArguments": null,
                            "start": 1194,
                            "end": 1196
                          },
                          "start": 1192,
                          "end": 1196
                        },
                        "start": 1191,
                        "end": 1196
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1201,
                              "end": 1203
                            },
                            "typeArguments": null,
                            "start": 1201,
                            "end": 1203
                          },
                          "start": 1199,
                          "end": 1203
                        },
                        "start": 1198,
                        "end": 1203
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1208,
                              "end": 1210
                            },
                            "typeArguments": null,
                            "start": 1208,
                            "end": 1210
                          },
                          "start": 1206,
                          "end": 1210
                        },
                        "start": 1205,
                        "end": 1210
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1215,
                          "end": 1216
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1218,
                                "end": 1220
                              },
                              "typeArguments": null,
                              "start": 1218,
                              "end": 1220
                            },
                            "start": 1218,
                            "end": 1222
                          },
                          "start": 1216,
                          "end": 1222
                        },
                        "value": null,
                        "start": 1212,
                        "end": 1222
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1227,
                              "end": 1238
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1239,
                                    "end": 1242
                                  },
                                  "typeArguments": null,
                                  "start": 1239,
                                  "end": 1242
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1244,
                                    "end": 1247
                                  },
                                  "typeArguments": null,
                                  "start": 1244,
                                  "end": 1247
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1249,
                                    "end": 1252
                                  },
                                  "typeArguments": null,
                                  "start": 1249,
                                  "end": 1252
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1270,
                                    "end": 1273
                                  },
                                  "typeArguments": null,
                                  "start": 1270,
                                  "end": 1273
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1275,
                                    "end": 1278
                                  },
                                  "typeArguments": null,
                                  "start": 1275,
                                  "end": 1278
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1280,
                                    "end": 1283
                                  },
                                  "typeArguments": null,
                                  "start": 1280,
                                  "end": 1283
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1301,
                                    "end": 1304
                                  },
                                  "typeArguments": null,
                                  "start": 1301,
                                  "end": 1304
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1306,
                                    "end": 1309
                                  },
                                  "typeArguments": null,
                                  "start": 1306,
                                  "end": 1309
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1311,
                                    "end": 1314
                                  },
                                  "typeArguments": null,
                                  "start": 1311,
                                  "end": 1314
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1332,
                                    "end": 1335
                                  },
                                  "typeArguments": null,
                                  "start": 1332,
                                  "end": 1335
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1337,
                                    "end": 1340
                                  },
                                  "typeArguments": null,
                                  "start": 1337,
                                  "end": 1340
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1342,
                                    "end": 1345
                                  },
                                  "typeArguments": null,
                                  "start": 1342,
                                  "end": 1345
                                }
                              ],
                              "start": 1238,
                              "end": 1346
                            },
                            "start": 1227,
                            "end": 1346
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1349,
                              "end": 1357
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1358,
                                    "end": 1361
                                  },
                                  "typeArguments": null,
                                  "start": 1358,
                                  "end": 1361
                                }
                              ],
                              "start": 1357,
                              "end": 1362
                            },
                            "start": 1349,
                            "end": 1362
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1365,
                              "end": 1368
                            },
                            "typeArguments": null,
                            "start": 1365,
                            "end": 1368
                          }
                        ],
                        "start": 1227,
                        "end": 1368
                      },
                      "start": 1224,
                      "end": 1368
                    },
                    "start": 1190,
                    "end": 1368
                  },
                  "start": 1188,
                  "end": 1368
                },
                "start": 1174,
                "end": 1368
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1382
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1383,
                            "end": 1386
                          },
                          "typeArguments": null,
                          "start": 1383,
                          "end": 1386
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1389,
                            "end": 1392
                          },
                          "typeArguments": null,
                          "start": 1389,
                          "end": 1392
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1395,
                            "end": 1398
                          },
                          "typeArguments": null,
                          "start": 1395,
                          "end": 1398
                        }
                      ],
                      "start": 1383,
                      "end": 1398
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1400,
                            "end": 1403
                          },
                          "typeArguments": null,
                          "start": 1400,
                          "end": 1403
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1406,
                            "end": 1409
                          },
                          "typeArguments": null,
                          "start": 1406,
                          "end": 1409
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1412,
                            "end": 1415
                          },
                          "typeArguments": null,
                          "start": 1412,
                          "end": 1415
                        }
                      ],
                      "start": 1400,
                      "end": 1415
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1417,
                            "end": 1420
                          },
                          "typeArguments": null,
                          "start": 1417,
                          "end": 1420
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1423,
                            "end": 1426
                          },
                          "typeArguments": null,
                          "start": 1423,
                          "end": 1426
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1429,
                            "end": 1432
                          },
                          "typeArguments": null,
                          "start": 1429,
                          "end": 1432
                        }
                      ],
                      "start": 1417,
                      "end": 1432
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1442,
                            "end": 1445
                          },
                          "typeArguments": null,
                          "start": 1442,
                          "end": 1445
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1448,
                            "end": 1451
                          },
                          "typeArguments": null,
                          "start": 1448,
                          "end": 1451
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1454,
                            "end": 1457
                          },
                          "typeArguments": null,
                          "start": 1454,
                          "end": 1457
                        }
                      ],
                      "start": 1442,
                      "end": 1457
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1459,
                            "end": 1462
                          },
                          "typeArguments": null,
                          "start": 1459,
                          "end": 1462
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1465,
                            "end": 1468
                          },
                          "typeArguments": null,
                          "start": 1465,
                          "end": 1468
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1471,
                            "end": 1474
                          },
                          "typeArguments": null,
                          "start": 1471,
                          "end": 1474
                        }
                      ],
                      "start": 1459,
                      "end": 1474
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1476,
                            "end": 1479
                          },
                          "typeArguments": null,
                          "start": 1476,
                          "end": 1479
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1482,
                            "end": 1485
                          },
                          "typeArguments": null,
                          "start": 1482,
                          "end": 1485
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1488,
                            "end": 1491
                          },
                          "typeArguments": null,
                          "start": 1488,
                          "end": 1491
                        }
                      ],
                      "start": 1476,
                      "end": 1491
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1501,
                            "end": 1504
                          },
                          "typeArguments": null,
                          "start": 1501,
                          "end": 1504
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1507,
                            "end": 1510
                          },
                          "typeArguments": null,
                          "start": 1507,
                          "end": 1510
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1513,
                            "end": 1516
                          },
                          "typeArguments": null,
                          "start": 1513,
                          "end": 1516
                        }
                      ],
                      "start": 1501,
                      "end": 1516
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1518,
                            "end": 1521
                          },
                          "typeArguments": null,
                          "start": 1518,
                          "end": 1521
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1527
                          },
                          "typeArguments": null,
                          "start": 1524,
                          "end": 1527
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1530,
                            "end": 1533
                          },
                          "typeArguments": null,
                          "start": 1530,
                          "end": 1533
                        }
                      ],
                      "start": 1518,
                      "end": 1533
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1535,
                            "end": 1538
                          },
                          "typeArguments": null,
                          "start": 1535,
                          "end": 1538
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1541,
                            "end": 1544
                          },
                          "typeArguments": null,
                          "start": 1541,
                          "end": 1544
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1547,
                            "end": 1550
                          },
                          "typeArguments": null,
                          "start": 1547,
                          "end": 1550
                        }
                      ],
                      "start": 1535,
                      "end": 1550
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1560,
                            "end": 1563
                          },
                          "typeArguments": null,
                          "start": 1560,
                          "end": 1563
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1566,
                            "end": 1569
                          },
                          "typeArguments": null,
                          "start": 1566,
                          "end": 1569
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1572,
                            "end": 1575
                          },
                          "typeArguments": null,
                          "start": 1572,
                          "end": 1575
                        }
                      ],
                      "start": 1560,
                      "end": 1575
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1577,
                            "end": 1580
                          },
                          "typeArguments": null,
                          "start": 1577,
                          "end": 1580
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1583,
                            "end": 1586
                          },
                          "typeArguments": null,
                          "start": 1583,
                          "end": 1586
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1589,
                            "end": 1592
                          },
                          "typeArguments": null,
                          "start": 1589,
                          "end": 1592
                        }
                      ],
                      "start": 1577,
                      "end": 1592
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1594,
                            "end": 1597
                          },
                          "typeArguments": null,
                          "start": 1594,
                          "end": 1597
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1600,
                            "end": 1603
                          },
                          "typeArguments": null,
                          "start": 1600,
                          "end": 1603
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1606,
                            "end": 1609
                          },
                          "typeArguments": null,
                          "start": 1606,
                          "end": 1609
                        }
                      ],
                      "start": 1594,
                      "end": 1609
                    }
                  ],
                  "start": 1382,
                  "end": 1610
                },
                "start": 1371,
                "end": 1610
              },
              "start": 1369,
              "end": 1610
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 192,
            "end": 1611
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1620
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1621,
                    "end": 1624
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1627,
                    "end": 1632
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1621,
                  "end": 1632
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1634,
                    "end": 1637
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1640,
                    "end": 1645
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1634,
                  "end": 1645
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1647,
                    "end": 1650
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1653,
                    "end": 1658
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1647,
                  "end": 1658
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1668,
                    "end": 1671
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1674,
                    "end": 1679
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1668,
                  "end": 1679
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1681,
                    "end": 1684
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1687,
                    "end": 1692
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1681,
                  "end": 1692
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1694,
                    "end": 1697
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1700,
                    "end": 1705
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1694,
                  "end": 1705
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1715,
                    "end": 1718
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1721,
                    "end": 1726
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1715,
                  "end": 1726
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1728,
                    "end": 1731
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1734,
                    "end": 1739
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1728,
                  "end": 1739
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1741,
                    "end": 1744
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1747,
                    "end": 1752
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1741,
                  "end": 1752
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1762,
                    "end": 1765
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1768,
                    "end": 1773
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1762,
                  "end": 1773
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1778
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1781,
                    "end": 1786
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1775,
                  "end": 1786
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1788,
                    "end": 1791
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1794,
                    "end": 1799
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1788,
                  "end": 1799
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1812
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1815,
                    "end": 1820
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1809,
                  "end": 1820
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1822,
                    "end": 1825
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1828,
                    "end": 1833
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1822,
                  "end": 1833
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1835,
                    "end": 1838
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1841,
                    "end": 1846
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1835,
                  "end": 1846
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1859
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1862,
                    "end": 1867
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1856,
                  "end": 1867
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1869,
                    "end": 1872
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1875,
                    "end": 1880
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1869,
                  "end": 1880
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1882,
                    "end": 1885
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1888,
                    "end": 1893
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1882,
                  "end": 1893
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1903,
                    "end": 1906
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1909,
                    "end": 1914
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1903,
                  "end": 1914
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1916,
                    "end": 1919
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1922,
                    "end": 1927
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1916,
                  "end": 1927
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1929,
                    "end": 1932
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1935,
                    "end": 1940
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1929,
                  "end": 1940
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1950,
                    "end": 1953
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1956,
                    "end": 1961
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1950,
                  "end": 1961
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1963,
                    "end": 1966
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1969,
                    "end": 1974
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1963,
                  "end": 1974
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1976,
                    "end": 1979
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1982,
                    "end": 1987
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1976,
                  "end": 1987
                }
              ],
              "start": 1620,
              "end": 1988
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2014,
                    "end": 2018
                  },
                  "start": 2012,
                  "end": 2018
                },
                "start": 2002,
                "end": 2018
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2048,
                              "end": 2050
                            },
                            "typeArguments": null,
                            "start": 2048,
                            "end": 2050
                          },
                          "start": 2046,
                          "end": 2050
                        },
                        "start": 2045,
                        "end": 2050
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2055,
                              "end": 2057
                            },
                            "typeArguments": null,
                            "start": 2055,
                            "end": 2057
                          },
                          "start": 2053,
                          "end": 2057
                        },
                        "start": 2052,
                        "end": 2057
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2062,
                              "end": 2064
                            },
                            "typeArguments": null,
                            "start": 2062,
                            "end": 2064
                          },
                          "start": 2060,
                          "end": 2064
                        },
                        "start": 2059,
                        "end": 2064
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2069,
                          "end": 2070
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2072,
                                "end": 2074
                              },
                              "typeArguments": null,
                              "start": 2072,
                              "end": 2074
                            },
                            "start": 2072,
                            "end": 2076
                          },
                          "start": 2070,
                          "end": 2076
                        },
                        "value": null,
                        "start": 2066,
                        "end": 2076
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2081,
                              "end": 2092
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2093,
                                    "end": 2096
                                  },
                                  "typeArguments": null,
                                  "start": 2093,
                                  "end": 2096
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2098,
                                    "end": 2101
                                  },
                                  "typeArguments": null,
                                  "start": 2098,
                                  "end": 2101
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2103,
                                    "end": 2106
                                  },
                                  "typeArguments": null,
                                  "start": 2103,
                                  "end": 2106
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2124,
                                    "end": 2127
                                  },
                                  "typeArguments": null,
                                  "start": 2124,
                                  "end": 2127
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2129,
                                    "end": 2132
                                  },
                                  "typeArguments": null,
                                  "start": 2129,
                                  "end": 2132
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2134,
                                    "end": 2137
                                  },
                                  "typeArguments": null,
                                  "start": 2134,
                                  "end": 2137
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2155,
                                    "end": 2158
                                  },
                                  "typeArguments": null,
                                  "start": 2155,
                                  "end": 2158
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2160,
                                    "end": 2163
                                  },
                                  "typeArguments": null,
                                  "start": 2160,
                                  "end": 2163
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2165,
                                    "end": 2168
                                  },
                                  "typeArguments": null,
                                  "start": 2165,
                                  "end": 2168
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2186,
                                    "end": 2189
                                  },
                                  "typeArguments": null,
                                  "start": 2186,
                                  "end": 2189
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2191,
                                    "end": 2194
                                  },
                                  "typeArguments": null,
                                  "start": 2191,
                                  "end": 2194
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2196,
                                    "end": 2199
                                  },
                                  "typeArguments": null,
                                  "start": 2196,
                                  "end": 2199
                                }
                              ],
                              "start": 2092,
                              "end": 2200
                            },
                            "start": 2081,
                            "end": 2200
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2203,
                              "end": 2211
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2212,
                                    "end": 2215
                                  },
                                  "typeArguments": null,
                                  "start": 2212,
                                  "end": 2215
                                }
                              ],
                              "start": 2211,
                              "end": 2216
                            },
                            "start": 2203,
                            "end": 2216
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2219,
                              "end": 2222
                            },
                            "typeArguments": null,
                            "start": 2219,
                            "end": 2222
                          }
                        ],
                        "start": 2081,
                        "end": 2222
                      },
                      "start": 2078,
                      "end": 2222
                    },
                    "start": 2044,
                    "end": 2222
                  },
                  "start": 2042,
                  "end": 2222
                },
                "start": 2032,
                "end": 2222
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2256,
                              "end": 2258
                            },
                            "typeArguments": null,
                            "start": 2256,
                            "end": 2258
                          },
                          "start": 2254,
                          "end": 2258
                        },
                        "start": 2253,
                        "end": 2258
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2263,
                              "end": 2265
                            },
                            "typeArguments": null,
                            "start": 2263,
                            "end": 2265
                          },
                          "start": 2261,
                          "end": 2265
                        },
                        "start": 2260,
                        "end": 2265
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2270,
                              "end": 2272
                            },
                            "typeArguments": null,
                            "start": 2270,
                            "end": 2272
                          },
                          "start": 2268,
                          "end": 2272
                        },
                        "start": 2267,
                        "end": 2272
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2277,
                          "end": 2278
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2280,
                                "end": 2282
                              },
                              "typeArguments": null,
                              "start": 2280,
                              "end": 2282
                            },
                            "start": 2280,
                            "end": 2284
                          },
                          "start": 2278,
                          "end": 2284
                        },
                        "value": null,
                        "start": 2274,
                        "end": 2284
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2289,
                              "end": 2300
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2301,
                                    "end": 2304
                                  },
                                  "typeArguments": null,
                                  "start": 2301,
                                  "end": 2304
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2306,
                                    "end": 2309
                                  },
                                  "typeArguments": null,
                                  "start": 2306,
                                  "end": 2309
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2311,
                                    "end": 2314
                                  },
                                  "typeArguments": null,
                                  "start": 2311,
                                  "end": 2314
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2332,
                                    "end": 2335
                                  },
                                  "typeArguments": null,
                                  "start": 2332,
                                  "end": 2335
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2337,
                                    "end": 2340
                                  },
                                  "typeArguments": null,
                                  "start": 2337,
                                  "end": 2340
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2342,
                                    "end": 2345
                                  },
                                  "typeArguments": null,
                                  "start": 2342,
                                  "end": 2345
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2363,
                                    "end": 2366
                                  },
                                  "typeArguments": null,
                                  "start": 2363,
                                  "end": 2366
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2368,
                                    "end": 2371
                                  },
                                  "typeArguments": null,
                                  "start": 2368,
                                  "end": 2371
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2373,
                                    "end": 2376
                                  },
                                  "typeArguments": null,
                                  "start": 2373,
                                  "end": 2376
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2394,
                                    "end": 2397
                                  },
                                  "typeArguments": null,
                                  "start": 2394,
                                  "end": 2397
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2399,
                                    "end": 2402
                                  },
                                  "typeArguments": null,
                                  "start": 2399,
                                  "end": 2402
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2404,
                                    "end": 2407
                                  },
                                  "typeArguments": null,
                                  "start": 2404,
                                  "end": 2407
                                }
                              ],
                              "start": 2300,
                              "end": 2408
                            },
                            "start": 2289,
                            "end": 2408
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2411,
                              "end": 2419
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2420,
                                    "end": 2423
                                  },
                                  "typeArguments": null,
                                  "start": 2420,
                                  "end": 2423
                                }
                              ],
                              "start": 2419,
                              "end": 2424
                            },
                            "start": 2411,
                            "end": 2424
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2427,
                              "end": 2430
                            },
                            "typeArguments": null,
                            "start": 2427,
                            "end": 2430
                          }
                        ],
                        "start": 2289,
                        "end": 2430
                      },
                      "start": 2286,
                      "end": 2430
                    },
                    "start": 2252,
                    "end": 2430
                  },
                  "start": 2250,
                  "end": 2430
                },
                "start": 2236,
                "end": 2430
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2433,
                  "end": 2444
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2445,
                            "end": 2448
                          },
                          "typeArguments": null,
                          "start": 2445,
                          "end": 2448
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2451,
                            "end": 2454
                          },
                          "typeArguments": null,
                          "start": 2451,
                          "end": 2454
                        }
                      ],
                      "start": 2445,
                      "end": 2454
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2456,
                            "end": 2459
                          },
                          "typeArguments": null,
                          "start": 2456,
                          "end": 2459
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2462,
                            "end": 2465
                          },
                          "typeArguments": null,
                          "start": 2462,
                          "end": 2465
                        }
                      ],
                      "start": 2456,
                      "end": 2465
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2467,
                            "end": 2470
                          },
                          "typeArguments": null,
                          "start": 2467,
                          "end": 2470
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2473,
                            "end": 2476
                          },
                          "typeArguments": null,
                          "start": 2473,
                          "end": 2476
                        }
                      ],
                      "start": 2467,
                      "end": 2476
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2486,
                            "end": 2489
                          },
                          "typeArguments": null,
                          "start": 2486,
                          "end": 2489
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2492,
                            "end": 2495
                          },
                          "typeArguments": null,
                          "start": 2492,
                          "end": 2495
                        }
                      ],
                      "start": 2486,
                      "end": 2495
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2497,
                            "end": 2500
                          },
                          "typeArguments": null,
                          "start": 2497,
                          "end": 2500
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2503,
                            "end": 2506
                          },
                          "typeArguments": null,
                          "start": 2503,
                          "end": 2506
                        }
                      ],
                      "start": 2497,
                      "end": 2506
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2508,
                            "end": 2511
                          },
                          "typeArguments": null,
                          "start": 2508,
                          "end": 2511
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2514,
                            "end": 2517
                          },
                          "typeArguments": null,
                          "start": 2514,
                          "end": 2517
                        }
                      ],
                      "start": 2508,
                      "end": 2517
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2527,
                            "end": 2530
                          },
                          "typeArguments": null,
                          "start": 2527,
                          "end": 2530
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2533,
                            "end": 2536
                          },
                          "typeArguments": null,
                          "start": 2533,
                          "end": 2536
                        }
                      ],
                      "start": 2527,
                      "end": 2536
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2538,
                            "end": 2541
                          },
                          "typeArguments": null,
                          "start": 2538,
                          "end": 2541
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2544,
                            "end": 2547
                          },
                          "typeArguments": null,
                          "start": 2544,
                          "end": 2547
                        }
                      ],
                      "start": 2538,
                      "end": 2547
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2549,
                            "end": 2552
                          },
                          "typeArguments": null,
                          "start": 2549,
                          "end": 2552
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2555,
                            "end": 2558
                          },
                          "typeArguments": null,
                          "start": 2555,
                          "end": 2558
                        }
                      ],
                      "start": 2549,
                      "end": 2558
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2568,
                            "end": 2571
                          },
                          "typeArguments": null,
                          "start": 2568,
                          "end": 2571
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2574,
                            "end": 2577
                          },
                          "typeArguments": null,
                          "start": 2574,
                          "end": 2577
                        }
                      ],
                      "start": 2568,
                      "end": 2577
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2579,
                            "end": 2582
                          },
                          "typeArguments": null,
                          "start": 2579,
                          "end": 2582
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2585,
                            "end": 2588
                          },
                          "typeArguments": null,
                          "start": 2585,
                          "end": 2588
                        }
                      ],
                      "start": 2579,
                      "end": 2588
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2590,
                            "end": 2593
                          },
                          "typeArguments": null,
                          "start": 2590,
                          "end": 2593
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2596,
                            "end": 2599
                          },
                          "typeArguments": null,
                          "start": 2596,
                          "end": 2599
                        }
                      ],
                      "start": 2590,
                      "end": 2599
                    }
                  ],
                  "start": 2444,
                  "end": 2600
                },
                "start": 2433,
                "end": 2600
              },
              "start": 2431,
              "end": 2600
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1616,
            "end": 2601
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 2606,
              "end": 2610
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2611,
                    "end": 2614
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2617,
                    "end": 2622
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2611,
                  "end": 2622
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2624,
                    "end": 2627
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2630,
                    "end": 2635
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2624,
                  "end": 2635
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2640
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2643,
                    "end": 2648
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2637,
                  "end": 2648
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2658,
                    "end": 2661
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2664,
                    "end": 2669
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2658,
                  "end": 2669
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2671,
                    "end": 2674
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2677,
                    "end": 2682
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2671,
                  "end": 2682
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2684,
                    "end": 2687
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2690,
                    "end": 2695
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2684,
                  "end": 2695
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2705,
                    "end": 2708
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2711,
                    "end": 2716
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2705,
                  "end": 2716
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2721
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2724,
                    "end": 2729
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2718,
                  "end": 2729
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2731,
                    "end": 2734
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2737,
                    "end": 2742
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2731,
                  "end": 2742
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2752,
                    "end": 2755
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2758,
                    "end": 2763
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2752,
                  "end": 2763
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2765,
                    "end": 2768
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2771,
                    "end": 2776
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2765,
                  "end": 2776
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2778,
                    "end": 2781
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2784,
                    "end": 2789
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2778,
                  "end": 2789
                }
              ],
              "start": 2610,
              "end": 2790
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2816,
                    "end": 2820
                  },
                  "start": 2814,
                  "end": 2820
                },
                "start": 2804,
                "end": 2820
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2846,
                    "end": 2850
                  },
                  "start": 2844,
                  "end": 2850
                },
                "start": 2834,
                "end": 2850
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2885,
                              "end": 2887
                            },
                            "typeArguments": null,
                            "start": 2885,
                            "end": 2887
                          },
                          "start": 2883,
                          "end": 2887
                        },
                        "start": 2882,
                        "end": 2887
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2892,
                              "end": 2894
                            },
                            "typeArguments": null,
                            "start": 2892,
                            "end": 2894
                          },
                          "start": 2890,
                          "end": 2894
                        },
                        "start": 2889,
                        "end": 2894
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2899,
                              "end": 2901
                            },
                            "typeArguments": null,
                            "start": 2899,
                            "end": 2901
                          },
                          "start": 2897,
                          "end": 2901
                        },
                        "start": 2896,
                        "end": 2901
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2906,
                          "end": 2907
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2909,
                                "end": 2911
                              },
                              "typeArguments": null,
                              "start": 2909,
                              "end": 2911
                            },
                            "start": 2909,
                            "end": 2913
                          },
                          "start": 2907,
                          "end": 2913
                        },
                        "value": null,
                        "start": 2903,
                        "end": 2913
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2918,
                              "end": 2929
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2930,
                                    "end": 2933
                                  },
                                  "typeArguments": null,
                                  "start": 2930,
                                  "end": 2933
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2935,
                                    "end": 2938
                                  },
                                  "typeArguments": null,
                                  "start": 2935,
                                  "end": 2938
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2940,
                                    "end": 2943
                                  },
                                  "typeArguments": null,
                                  "start": 2940,
                                  "end": 2943
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2961,
                                    "end": 2964
                                  },
                                  "typeArguments": null,
                                  "start": 2961,
                                  "end": 2964
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2966,
                                    "end": 2969
                                  },
                                  "typeArguments": null,
                                  "start": 2966,
                                  "end": 2969
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2971,
                                    "end": 2974
                                  },
                                  "typeArguments": null,
                                  "start": 2971,
                                  "end": 2974
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2992,
                                    "end": 2995
                                  },
                                  "typeArguments": null,
                                  "start": 2992,
                                  "end": 2995
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2997,
                                    "end": 3000
                                  },
                                  "typeArguments": null,
                                  "start": 2997,
                                  "end": 3000
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3002,
                                    "end": 3005
                                  },
                                  "typeArguments": null,
                                  "start": 3002,
                                  "end": 3005
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3023,
                                    "end": 3026
                                  },
                                  "typeArguments": null,
                                  "start": 3023,
                                  "end": 3026
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3028,
                                    "end": 3031
                                  },
                                  "typeArguments": null,
                                  "start": 3028,
                                  "end": 3031
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3033,
                                    "end": 3036
                                  },
                                  "typeArguments": null,
                                  "start": 3033,
                                  "end": 3036
                                }
                              ],
                              "start": 2929,
                              "end": 3037
                            },
                            "start": 2918,
                            "end": 3037
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3040,
                              "end": 3048
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3049,
                                    "end": 3052
                                  },
                                  "typeArguments": null,
                                  "start": 3049,
                                  "end": 3052
                                }
                              ],
                              "start": 3048,
                              "end": 3053
                            },
                            "start": 3040,
                            "end": 3053
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3056,
                              "end": 3059
                            },
                            "typeArguments": null,
                            "start": 3056,
                            "end": 3059
                          }
                        ],
                        "start": 2918,
                        "end": 3059
                      },
                      "start": 2915,
                      "end": 3059
                    },
                    "start": 2881,
                    "end": 3059
                  },
                  "start": 2879,
                  "end": 3059
                },
                "start": 2864,
                "end": 3059
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3062,
                  "end": 3073
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3074,
                        "end": 3077
                      },
                      "typeArguments": null,
                      "start": 3074,
                      "end": 3077
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3079,
                        "end": 3082
                      },
                      "typeArguments": null,
                      "start": 3079,
                      "end": 3082
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ANP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3084,
                        "end": 3087
                      },
                      "typeArguments": null,
                      "start": 3084,
                      "end": 3087
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3097,
                        "end": 3100
                      },
                      "typeArguments": null,
                      "start": 3097,
                      "end": 3100
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3102,
                        "end": 3105
                      },
                      "typeArguments": null,
                      "start": 3102,
                      "end": 3105
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BNP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3107,
                        "end": 3110
                      },
                      "typeArguments": null,
                      "start": 3107,
                      "end": 3110
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3120,
                        "end": 3123
                      },
                      "typeArguments": null,
                      "start": 3120,
                      "end": 3123
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3125,
                        "end": 3128
                      },
                      "typeArguments": null,
                      "start": 3125,
                      "end": 3128
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CNP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3130,
                        "end": 3133
                      },
                      "typeArguments": null,
                      "start": 3130,
                      "end": 3133
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3143,
                        "end": 3146
                      },
                      "typeArguments": null,
                      "start": 3143,
                      "end": 3146
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3148,
                        "end": 3151
                      },
                      "typeArguments": null,
                      "start": 3148,
                      "end": 3151
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RNP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3153,
                        "end": 3156
                      },
                      "typeArguments": null,
                      "start": 3153,
                      "end": 3156
                    }
                  ],
                  "start": 3073,
                  "end": 3157
                },
                "start": 3062,
                "end": 3157
              },
              "start": 3060,
              "end": 3157
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2606,
            "end": 3158
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 3163,
              "end": 3167
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3168,
                    "end": 3171
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3174,
                    "end": 3179
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3168,
                  "end": 3179
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3181,
                    "end": 3184
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3187,
                    "end": 3192
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3181,
                  "end": 3192
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3194,
                    "end": 3197
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3200,
                    "end": 3205
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3194,
                  "end": 3205
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3215,
                    "end": 3218
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3221,
                    "end": 3226
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3215,
                  "end": 3226
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3228,
                    "end": 3231
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3234,
                    "end": 3239
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3228,
                  "end": 3239
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3241,
                    "end": 3244
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3247,
                    "end": 3252
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3241,
                  "end": 3252
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3262,
                    "end": 3265
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3268,
                    "end": 3273
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3262,
                  "end": 3273
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3275,
                    "end": 3278
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3281,
                    "end": 3286
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3275,
                  "end": 3286
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3288,
                    "end": 3291
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3294,
                    "end": 3299
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3288,
                  "end": 3299
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3309,
                    "end": 3312
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3315,
                    "end": 3320
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3309,
                  "end": 3320
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3322,
                    "end": 3325
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3328,
                    "end": 3333
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3322,
                  "end": 3333
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3335,
                    "end": 3338
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3341,
                    "end": 3346
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3335,
                  "end": 3346
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3356,
                    "end": 3359
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3362,
                    "end": 3367
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3356,
                  "end": 3367
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3369,
                    "end": 3372
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3375,
                    "end": 3380
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3369,
                  "end": 3380
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3382,
                    "end": 3385
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3388,
                    "end": 3393
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3382,
                  "end": 3393
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3403,
                    "end": 3406
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3409,
                    "end": 3414
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3403,
                  "end": 3414
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3416,
                    "end": 3419
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3422,
                    "end": 3427
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3416,
                  "end": 3427
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3429,
                    "end": 3432
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3435,
                    "end": 3440
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3429,
                  "end": 3440
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3450,
                    "end": 3453
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3456,
                    "end": 3461
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3450,
                  "end": 3461
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3463,
                    "end": 3466
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3469,
                    "end": 3474
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3463,
                  "end": 3474
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3476,
                    "end": 3479
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3482,
                    "end": 3487
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3476,
                  "end": 3487
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3497,
                    "end": 3500
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3503,
                    "end": 3508
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3497,
                  "end": 3508
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3510,
                    "end": 3513
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3516,
                    "end": 3521
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3510,
                  "end": 3521
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3523,
                    "end": 3526
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3529,
                    "end": 3534
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3523,
                  "end": 3534
                }
              ],
              "start": 3167,
              "end": 3535
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3565,
                              "end": 3567
                            },
                            "typeArguments": null,
                            "start": 3565,
                            "end": 3567
                          },
                          "start": 3563,
                          "end": 3567
                        },
                        "start": 3562,
                        "end": 3567
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3572,
                              "end": 3574
                            },
                            "typeArguments": null,
                            "start": 3572,
                            "end": 3574
                          },
                          "start": 3570,
                          "end": 3574
                        },
                        "start": 3569,
                        "end": 3574
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3579,
                              "end": 3581
                            },
                            "typeArguments": null,
                            "start": 3579,
                            "end": 3581
                          },
                          "start": 3577,
                          "end": 3581
                        },
                        "start": 3576,
                        "end": 3581
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3586,
                          "end": 3587
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3589,
                                "end": 3591
                              },
                              "typeArguments": null,
                              "start": 3589,
                              "end": 3591
                            },
                            "start": 3589,
                            "end": 3593
                          },
                          "start": 3587,
                          "end": 3593
                        },
                        "value": null,
                        "start": 3583,
                        "end": 3593
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3598,
                              "end": 3609
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3610,
                                    "end": 3613
                                  },
                                  "typeArguments": null,
                                  "start": 3610,
                                  "end": 3613
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3615,
                                    "end": 3618
                                  },
                                  "typeArguments": null,
                                  "start": 3615,
                                  "end": 3618
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3620,
                                    "end": 3623
                                  },
                                  "typeArguments": null,
                                  "start": 3620,
                                  "end": 3623
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3641,
                                    "end": 3644
                                  },
                                  "typeArguments": null,
                                  "start": 3641,
                                  "end": 3644
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3646,
                                    "end": 3649
                                  },
                                  "typeArguments": null,
                                  "start": 3646,
                                  "end": 3649
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3651,
                                    "end": 3654
                                  },
                                  "typeArguments": null,
                                  "start": 3651,
                                  "end": 3654
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3672,
                                    "end": 3675
                                  },
                                  "typeArguments": null,
                                  "start": 3672,
                                  "end": 3675
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3677,
                                    "end": 3680
                                  },
                                  "typeArguments": null,
                                  "start": 3677,
                                  "end": 3680
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3682,
                                    "end": 3685
                                  },
                                  "typeArguments": null,
                                  "start": 3682,
                                  "end": 3685
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3703,
                                    "end": 3706
                                  },
                                  "typeArguments": null,
                                  "start": 3703,
                                  "end": 3706
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3708,
                                    "end": 3711
                                  },
                                  "typeArguments": null,
                                  "start": 3708,
                                  "end": 3711
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3713,
                                    "end": 3716
                                  },
                                  "typeArguments": null,
                                  "start": 3713,
                                  "end": 3716
                                }
                              ],
                              "start": 3609,
                              "end": 3717
                            },
                            "start": 3598,
                            "end": 3717
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3720,
                              "end": 3728
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3729,
                                    "end": 3732
                                  },
                                  "typeArguments": null,
                                  "start": 3729,
                                  "end": 3732
                                }
                              ],
                              "start": 3728,
                              "end": 3733
                            },
                            "start": 3720,
                            "end": 3733
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3736,
                              "end": 3739
                            },
                            "typeArguments": null,
                            "start": 3736,
                            "end": 3739
                          }
                        ],
                        "start": 3598,
                        "end": 3739
                      },
                      "start": 3595,
                      "end": 3739
                    },
                    "start": 3561,
                    "end": 3739
                  },
                  "start": 3559,
                  "end": 3739
                },
                "start": 3549,
                "end": 3739
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3769,
                              "end": 3771
                            },
                            "typeArguments": null,
                            "start": 3769,
                            "end": 3771
                          },
                          "start": 3767,
                          "end": 3771
                        },
                        "start": 3766,
                        "end": 3771
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3776,
                              "end": 3778
                            },
                            "typeArguments": null,
                            "start": 3776,
                            "end": 3778
                          },
                          "start": 3774,
                          "end": 3778
                        },
                        "start": 3773,
                        "end": 3778
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3783,
                              "end": 3785
                            },
                            "typeArguments": null,
                            "start": 3783,
                            "end": 3785
                          },
                          "start": 3781,
                          "end": 3785
                        },
                        "start": 3780,
                        "end": 3785
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3790,
                          "end": 3791
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3793,
                                "end": 3795
                              },
                              "typeArguments": null,
                              "start": 3793,
                              "end": 3795
                            },
                            "start": 3793,
                            "end": 3797
                          },
                          "start": 3791,
                          "end": 3797
                        },
                        "value": null,
                        "start": 3787,
                        "end": 3797
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3802,
                              "end": 3813
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3814,
                                    "end": 3817
                                  },
                                  "typeArguments": null,
                                  "start": 3814,
                                  "end": 3817
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3819,
                                    "end": 3822
                                  },
                                  "typeArguments": null,
                                  "start": 3819,
                                  "end": 3822
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3824,
                                    "end": 3827
                                  },
                                  "typeArguments": null,
                                  "start": 3824,
                                  "end": 3827
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3845,
                                    "end": 3848
                                  },
                                  "typeArguments": null,
                                  "start": 3845,
                                  "end": 3848
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3850,
                                    "end": 3853
                                  },
                                  "typeArguments": null,
                                  "start": 3850,
                                  "end": 3853
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3855,
                                    "end": 3858
                                  },
                                  "typeArguments": null,
                                  "start": 3855,
                                  "end": 3858
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3876,
                                    "end": 3879
                                  },
                                  "typeArguments": null,
                                  "start": 3876,
                                  "end": 3879
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3881,
                                    "end": 3884
                                  },
                                  "typeArguments": null,
                                  "start": 3881,
                                  "end": 3884
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3886,
                                    "end": 3889
                                  },
                                  "typeArguments": null,
                                  "start": 3886,
                                  "end": 3889
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3907,
                                    "end": 3910
                                  },
                                  "typeArguments": null,
                                  "start": 3907,
                                  "end": 3910
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3912,
                                    "end": 3915
                                  },
                                  "typeArguments": null,
                                  "start": 3912,
                                  "end": 3915
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3917,
                                    "end": 3920
                                  },
                                  "typeArguments": null,
                                  "start": 3917,
                                  "end": 3920
                                }
                              ],
                              "start": 3813,
                              "end": 3921
                            },
                            "start": 3802,
                            "end": 3921
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3924,
                              "end": 3932
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3933,
                                    "end": 3936
                                  },
                                  "typeArguments": null,
                                  "start": 3933,
                                  "end": 3936
                                }
                              ],
                              "start": 3932,
                              "end": 3937
                            },
                            "start": 3924,
                            "end": 3937
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3940,
                              "end": 3943
                            },
                            "typeArguments": null,
                            "start": 3940,
                            "end": 3943
                          }
                        ],
                        "start": 3802,
                        "end": 3943
                      },
                      "start": 3799,
                      "end": 3943
                    },
                    "start": 3765,
                    "end": 3943
                  },
                  "start": 3763,
                  "end": 3943
                },
                "start": 3753,
                "end": 3943
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 3974,
                    "end": 3978
                  },
                  "start": 3972,
                  "end": 3978
                },
                "start": 3957,
                "end": 3978
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3981,
                  "end": 3992
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3993,
                            "end": 3996
                          },
                          "typeArguments": null,
                          "start": 3993,
                          "end": 3996
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3999,
                            "end": 4002
                          },
                          "typeArguments": null,
                          "start": 3999,
                          "end": 4002
                        }
                      ],
                      "start": 3993,
                      "end": 4002
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4004,
                            "end": 4007
                          },
                          "typeArguments": null,
                          "start": 4004,
                          "end": 4007
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4010,
                            "end": 4013
                          },
                          "typeArguments": null,
                          "start": 4010,
                          "end": 4013
                        }
                      ],
                      "start": 4004,
                      "end": 4013
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4015,
                            "end": 4018
                          },
                          "typeArguments": null,
                          "start": 4015,
                          "end": 4018
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4021,
                            "end": 4024
                          },
                          "typeArguments": null,
                          "start": 4021,
                          "end": 4024
                        }
                      ],
                      "start": 4015,
                      "end": 4024
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4034,
                            "end": 4037
                          },
                          "typeArguments": null,
                          "start": 4034,
                          "end": 4037
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4040,
                            "end": 4043
                          },
                          "typeArguments": null,
                          "start": 4040,
                          "end": 4043
                        }
                      ],
                      "start": 4034,
                      "end": 4043
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4045,
                            "end": 4048
                          },
                          "typeArguments": null,
                          "start": 4045,
                          "end": 4048
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4051,
                            "end": 4054
                          },
                          "typeArguments": null,
                          "start": 4051,
                          "end": 4054
                        }
                      ],
                      "start": 4045,
                      "end": 4054
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4056,
                            "end": 4059
                          },
                          "typeArguments": null,
                          "start": 4056,
                          "end": 4059
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4062,
                            "end": 4065
                          },
                          "typeArguments": null,
                          "start": 4062,
                          "end": 4065
                        }
                      ],
                      "start": 4056,
                      "end": 4065
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4075,
                            "end": 4078
                          },
                          "typeArguments": null,
                          "start": 4075,
                          "end": 4078
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4081,
                            "end": 4084
                          },
                          "typeArguments": null,
                          "start": 4081,
                          "end": 4084
                        }
                      ],
                      "start": 4075,
                      "end": 4084
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4086,
                            "end": 4089
                          },
                          "typeArguments": null,
                          "start": 4086,
                          "end": 4089
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4092,
                            "end": 4095
                          },
                          "typeArguments": null,
                          "start": 4092,
                          "end": 4095
                        }
                      ],
                      "start": 4086,
                      "end": 4095
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4097,
                            "end": 4100
                          },
                          "typeArguments": null,
                          "start": 4097,
                          "end": 4100
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4103,
                            "end": 4106
                          },
                          "typeArguments": null,
                          "start": 4103,
                          "end": 4106
                        }
                      ],
                      "start": 4097,
                      "end": 4106
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4116,
                            "end": 4119
                          },
                          "typeArguments": null,
                          "start": 4116,
                          "end": 4119
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4122,
                            "end": 4125
                          },
                          "typeArguments": null,
                          "start": 4122,
                          "end": 4125
                        }
                      ],
                      "start": 4116,
                      "end": 4125
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4127,
                            "end": 4130
                          },
                          "typeArguments": null,
                          "start": 4127,
                          "end": 4130
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4133,
                            "end": 4136
                          },
                          "typeArguments": null,
                          "start": 4133,
                          "end": 4136
                        }
                      ],
                      "start": 4127,
                      "end": 4136
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4138,
                            "end": 4141
                          },
                          "typeArguments": null,
                          "start": 4138,
                          "end": 4141
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4144,
                            "end": 4147
                          },
                          "typeArguments": null,
                          "start": 4144,
                          "end": 4147
                        }
                      ],
                      "start": 4138,
                      "end": 4147
                    }
                  ],
                  "start": 3992,
                  "end": 4148
                },
                "start": 3981,
                "end": 4148
              },
              "start": 3979,
              "end": 4148
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3163,
            "end": 4149
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 4154,
              "end": 4158
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4159,
                    "end": 4162
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4165,
                    "end": 4170
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4159,
                  "end": 4170
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4172,
                    "end": 4175
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4178,
                    "end": 4183
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4172,
                  "end": 4183
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4185,
                    "end": 4188
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4191,
                    "end": 4196
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4185,
                  "end": 4196
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4206,
                    "end": 4209
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4212,
                    "end": 4217
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4206,
                  "end": 4217
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4219,
                    "end": 4222
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4225,
                    "end": 4230
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4219,
                  "end": 4230
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4232,
                    "end": 4235
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4238,
                    "end": 4243
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4232,
                  "end": 4243
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4253,
                    "end": 4256
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4259,
                    "end": 4264
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4253,
                  "end": 4264
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4266,
                    "end": 4269
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4272,
                    "end": 4277
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4266,
                  "end": 4277
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4279,
                    "end": 4282
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4285,
                    "end": 4290
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4279,
                  "end": 4290
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4300,
                    "end": 4303
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4306,
                    "end": 4311
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4300,
                  "end": 4311
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4313,
                    "end": 4316
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4319,
                    "end": 4324
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4313,
                  "end": 4324
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4326,
                    "end": 4329
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4332,
                    "end": 4337
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4326,
                  "end": 4337
                }
              ],
              "start": 4158,
              "end": 4338
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 4364,
                    "end": 4368
                  },
                  "start": 4362,
                  "end": 4368
                },
                "start": 4352,
                "end": 4368
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4398,
                              "end": 4400
                            },
                            "typeArguments": null,
                            "start": 4398,
                            "end": 4400
                          },
                          "start": 4396,
                          "end": 4400
                        },
                        "start": 4395,
                        "end": 4400
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4405,
                              "end": 4407
                            },
                            "typeArguments": null,
                            "start": 4405,
                            "end": 4407
                          },
                          "start": 4403,
                          "end": 4407
                        },
                        "start": 4402,
                        "end": 4407
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4412,
                              "end": 4414
                            },
                            "typeArguments": null,
                            "start": 4412,
                            "end": 4414
                          },
                          "start": 4410,
                          "end": 4414
                        },
                        "start": 4409,
                        "end": 4414
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4419,
                          "end": 4420
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4422,
                                "end": 4424
                              },
                              "typeArguments": null,
                              "start": 4422,
                              "end": 4424
                            },
                            "start": 4422,
                            "end": 4426
                          },
                          "start": 4420,
                          "end": 4426
                        },
                        "value": null,
                        "start": 4416,
                        "end": 4426
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4431,
                              "end": 4442
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4443,
                                    "end": 4446
                                  },
                                  "typeArguments": null,
                                  "start": 4443,
                                  "end": 4446
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4448,
                                    "end": 4451
                                  },
                                  "typeArguments": null,
                                  "start": 4448,
                                  "end": 4451
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4453,
                                    "end": 4456
                                  },
                                  "typeArguments": null,
                                  "start": 4453,
                                  "end": 4456
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4474,
                                    "end": 4477
                                  },
                                  "typeArguments": null,
                                  "start": 4474,
                                  "end": 4477
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4479,
                                    "end": 4482
                                  },
                                  "typeArguments": null,
                                  "start": 4479,
                                  "end": 4482
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4484,
                                    "end": 4487
                                  },
                                  "typeArguments": null,
                                  "start": 4484,
                                  "end": 4487
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4505,
                                    "end": 4508
                                  },
                                  "typeArguments": null,
                                  "start": 4505,
                                  "end": 4508
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4510,
                                    "end": 4513
                                  },
                                  "typeArguments": null,
                                  "start": 4510,
                                  "end": 4513
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4515,
                                    "end": 4518
                                  },
                                  "typeArguments": null,
                                  "start": 4515,
                                  "end": 4518
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4536,
                                    "end": 4539
                                  },
                                  "typeArguments": null,
                                  "start": 4536,
                                  "end": 4539
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4541,
                                    "end": 4544
                                  },
                                  "typeArguments": null,
                                  "start": 4541,
                                  "end": 4544
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4546,
                                    "end": 4549
                                  },
                                  "typeArguments": null,
                                  "start": 4546,
                                  "end": 4549
                                }
                              ],
                              "start": 4442,
                              "end": 4550
                            },
                            "start": 4431,
                            "end": 4550
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4553,
                              "end": 4561
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4562,
                                    "end": 4565
                                  },
                                  "typeArguments": null,
                                  "start": 4562,
                                  "end": 4565
                                }
                              ],
                              "start": 4561,
                              "end": 4566
                            },
                            "start": 4553,
                            "end": 4566
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4569,
                              "end": 4572
                            },
                            "typeArguments": null,
                            "start": 4569,
                            "end": 4572
                          }
                        ],
                        "start": 4431,
                        "end": 4572
                      },
                      "start": 4428,
                      "end": 4572
                    },
                    "start": 4394,
                    "end": 4572
                  },
                  "start": 4392,
                  "end": 4572
                },
                "start": 4382,
                "end": 4572
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 4603,
                    "end": 4607
                  },
                  "start": 4601,
                  "end": 4607
                },
                "start": 4586,
                "end": 4607
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4610,
                  "end": 4621
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4622,
                        "end": 4625
                      },
                      "typeArguments": null,
                      "start": 4622,
                      "end": 4625
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4627,
                        "end": 4630
                      },
                      "typeArguments": null,
                      "start": 4627,
                      "end": 4630
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ANF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4632,
                        "end": 4635
                      },
                      "typeArguments": null,
                      "start": 4632,
                      "end": 4635
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4645,
                        "end": 4648
                      },
                      "typeArguments": null,
                      "start": 4645,
                      "end": 4648
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4650,
                        "end": 4653
                      },
                      "typeArguments": null,
                      "start": 4650,
                      "end": 4653
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BNF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4655,
                        "end": 4658
                      },
                      "typeArguments": null,
                      "start": 4655,
                      "end": 4658
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4668,
                        "end": 4671
                      },
                      "typeArguments": null,
                      "start": 4668,
                      "end": 4671
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4673,
                        "end": 4676
                      },
                      "typeArguments": null,
                      "start": 4673,
                      "end": 4676
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CNF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4678,
                        "end": 4681
                      },
                      "typeArguments": null,
                      "start": 4678,
                      "end": 4681
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4691,
                        "end": 4694
                      },
                      "typeArguments": null,
                      "start": 4691,
                      "end": 4694
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4696,
                        "end": 4699
                      },
                      "typeArguments": null,
                      "start": 4696,
                      "end": 4699
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RNF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4701,
                        "end": 4704
                      },
                      "typeArguments": null,
                      "start": 4701,
                      "end": 4704
                    }
                  ],
                  "start": 4621,
                  "end": 4705
                },
                "start": 4610,
                "end": 4705
              },
              "start": 4608,
              "end": 4705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4154,
            "end": 4706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 4711,
              "end": 4715
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4716,
                    "end": 4719
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4722,
                    "end": 4727
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4716,
                  "end": 4727
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4729,
                    "end": 4732
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4735,
                    "end": 4740
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4729,
                  "end": 4740
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4742,
                    "end": 4745
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4748,
                    "end": 4753
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4742,
                  "end": 4753
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4763,
                    "end": 4766
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4769,
                    "end": 4774
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4763,
                  "end": 4774
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4776,
                    "end": 4779
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4782,
                    "end": 4787
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4776,
                  "end": 4787
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4789,
                    "end": 4792
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4795,
                    "end": 4800
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4789,
                  "end": 4800
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4810,
                    "end": 4813
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4816,
                    "end": 4821
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4810,
                  "end": 4821
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4823,
                    "end": 4826
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4829,
                    "end": 4834
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4823,
                  "end": 4834
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4836,
                    "end": 4839
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4842,
                    "end": 4847
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4836,
                  "end": 4847
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4857,
                    "end": 4860
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4863,
                    "end": 4868
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4857,
                  "end": 4868
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4870,
                    "end": 4873
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4876,
                    "end": 4881
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4870,
                  "end": 4881
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4883,
                    "end": 4886
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4889,
                    "end": 4894
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4883,
                  "end": 4894
                }
              ],
              "start": 4715,
              "end": 4895
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4925,
                              "end": 4927
                            },
                            "typeArguments": null,
                            "start": 4925,
                            "end": 4927
                          },
                          "start": 4923,
                          "end": 4927
                        },
                        "start": 4922,
                        "end": 4927
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4932,
                              "end": 4934
                            },
                            "typeArguments": null,
                            "start": 4932,
                            "end": 4934
                          },
                          "start": 4930,
                          "end": 4934
                        },
                        "start": 4929,
                        "end": 4934
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4939,
                              "end": 4941
                            },
                            "typeArguments": null,
                            "start": 4939,
                            "end": 4941
                          },
                          "start": 4937,
                          "end": 4941
                        },
                        "start": 4936,
                        "end": 4941
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4946,
                          "end": 4947
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4949,
                                "end": 4951
                              },
                              "typeArguments": null,
                              "start": 4949,
                              "end": 4951
                            },
                            "start": 4949,
                            "end": 4953
                          },
                          "start": 4947,
                          "end": 4953
                        },
                        "value": null,
                        "start": 4943,
                        "end": 4953
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4958,
                              "end": 4969
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4970,
                                    "end": 4973
                                  },
                                  "typeArguments": null,
                                  "start": 4970,
                                  "end": 4973
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4975,
                                    "end": 4978
                                  },
                                  "typeArguments": null,
                                  "start": 4975,
                                  "end": 4978
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4980,
                                    "end": 4983
                                  },
                                  "typeArguments": null,
                                  "start": 4980,
                                  "end": 4983
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5001,
                                    "end": 5004
                                  },
                                  "typeArguments": null,
                                  "start": 5001,
                                  "end": 5004
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5006,
                                    "end": 5009
                                  },
                                  "typeArguments": null,
                                  "start": 5006,
                                  "end": 5009
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5011,
                                    "end": 5014
                                  },
                                  "typeArguments": null,
                                  "start": 5011,
                                  "end": 5014
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5032,
                                    "end": 5035
                                  },
                                  "typeArguments": null,
                                  "start": 5032,
                                  "end": 5035
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5037,
                                    "end": 5040
                                  },
                                  "typeArguments": null,
                                  "start": 5037,
                                  "end": 5040
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5042,
                                    "end": 5045
                                  },
                                  "typeArguments": null,
                                  "start": 5042,
                                  "end": 5045
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5063,
                                    "end": 5066
                                  },
                                  "typeArguments": null,
                                  "start": 5063,
                                  "end": 5066
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5068,
                                    "end": 5071
                                  },
                                  "typeArguments": null,
                                  "start": 5068,
                                  "end": 5071
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5073,
                                    "end": 5076
                                  },
                                  "typeArguments": null,
                                  "start": 5073,
                                  "end": 5076
                                }
                              ],
                              "start": 4969,
                              "end": 5077
                            },
                            "start": 4958,
                            "end": 5077
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5080,
                              "end": 5088
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5089,
                                    "end": 5092
                                  },
                                  "typeArguments": null,
                                  "start": 5089,
                                  "end": 5092
                                }
                              ],
                              "start": 5088,
                              "end": 5093
                            },
                            "start": 5080,
                            "end": 5093
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5096,
                              "end": 5099
                            },
                            "typeArguments": null,
                            "start": 5096,
                            "end": 5099
                          }
                        ],
                        "start": 4958,
                        "end": 5099
                      },
                      "start": 4955,
                      "end": 5099
                    },
                    "start": 4921,
                    "end": 5099
                  },
                  "start": 4919,
                  "end": 5099
                },
                "start": 4909,
                "end": 5099
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 5126,
                    "end": 5130
                  },
                  "start": 5124,
                  "end": 5130
                },
                "start": 5113,
                "end": 5130
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 5161,
                    "end": 5165
                  },
                  "start": 5159,
                  "end": 5165
                },
                "start": 5144,
                "end": 5165
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5168,
                  "end": 5179
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5180,
                        "end": 5183
                      },
                      "typeArguments": null,
                      "start": 5180,
                      "end": 5183
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5185,
                        "end": 5188
                      },
                      "typeArguments": null,
                      "start": 5185,
                      "end": 5188
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5190,
                        "end": 5193
                      },
                      "typeArguments": null,
                      "start": 5190,
                      "end": 5193
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5203,
                        "end": 5206
                      },
                      "typeArguments": null,
                      "start": 5203,
                      "end": 5206
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5208,
                        "end": 5211
                      },
                      "typeArguments": null,
                      "start": 5208,
                      "end": 5211
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5213,
                        "end": 5216
                      },
                      "typeArguments": null,
                      "start": 5213,
                      "end": 5216
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5226,
                        "end": 5229
                      },
                      "typeArguments": null,
                      "start": 5226,
                      "end": 5229
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5231,
                        "end": 5234
                      },
                      "typeArguments": null,
                      "start": 5231,
                      "end": 5234
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5236,
                        "end": 5239
                      },
                      "typeArguments": null,
                      "start": 5236,
                      "end": 5239
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5249,
                        "end": 5252
                      },
                      "typeArguments": null,
                      "start": 5249,
                      "end": 5252
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5254,
                        "end": 5257
                      },
                      "typeArguments": null,
                      "start": 5254,
                      "end": 5257
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5259,
                        "end": 5262
                      },
                      "typeArguments": null,
                      "start": 5259,
                      "end": 5262
                    }
                  ],
                  "start": 5179,
                  "end": 5263
                },
                "start": 5168,
                "end": 5263
              },
              "start": 5166,
              "end": 5263
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4711,
            "end": 5264
          }
        ],
        "start": 186,
        "end": 5266
      },
      "declare": false,
      "start": 104,
      "end": 5266
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5278,
        "end": 5286
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TR",
              "optional": false,
              "typeAnnotation": null,
              "start": 5287,
              "end": 5289
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5287,
            "end": 5289
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 5291,
              "end": 5293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5291,
            "end": 5293
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TN",
              "optional": false,
              "typeAnnotation": null,
              "start": 5295,
              "end": 5297
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5295,
            "end": 5297
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UR",
              "optional": false,
              "typeAnnotation": null,
              "start": 5303,
              "end": 5305
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5303,
            "end": 5305
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 5307,
              "end": 5309
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5307,
            "end": 5309
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UN",
              "optional": false,
              "typeAnnotation": null,
              "start": 5311,
              "end": 5313
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5311,
            "end": 5313
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VR",
              "optional": false,
              "typeAnnotation": null,
              "start": 5319,
              "end": 5321
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5319,
            "end": 5321
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 5323,
              "end": 5325
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5323,
            "end": 5325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VN",
              "optional": false,
              "typeAnnotation": null,
              "start": 5327,
              "end": 5329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5327,
            "end": 5329
          }
        ],
        "start": 5286,
        "end": 5330
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 5339,
            "end": 5350
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5351,
                  "end": 5353
                },
                "typeArguments": null,
                "start": 5351,
                "end": 5353
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TJ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5355,
                  "end": 5357
                },
                "typeArguments": null,
                "start": 5355,
                "end": 5357
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5359,
                  "end": 5361
                },
                "typeArguments": null,
                "start": 5359,
                "end": 5361
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5367,
                  "end": 5369
                },
                "typeArguments": null,
                "start": 5367,
                "end": 5369
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UJ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5371,
                  "end": 5373
                },
                "typeArguments": null,
                "start": 5371,
                "end": 5373
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5375,
                  "end": 5377
                },
                "typeArguments": null,
                "start": 5375,
                "end": 5377
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5383,
                  "end": 5385
                },
                "typeArguments": null,
                "start": 5383,
                "end": 5385
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VJ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5387,
                  "end": 5389
                },
                "typeArguments": null,
                "start": 5387,
                "end": 5389
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5391,
                  "end": 5393
                },
                "typeArguments": null,
                "start": 5391,
                "end": 5393
              },
              {
                "type": "TSNeverKeyword",
                "start": 5399,
                "end": 5404
              },
              {
                "type": "TSNeverKeyword",
                "start": 5406,
                "end": 5411
              },
              {
                "type": "TSNeverKeyword",
                "start": 5413,
                "end": 5418
              }
            ],
            "start": 5350,
            "end": 5419
          },
          "start": 5339,
          "end": 5419
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5420,
        "end": 5423
      },
      "declare": false,
      "start": 5268,
      "end": 5423
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5430,
        "end": 5431
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 5434,
          "end": 5441
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5442,
                "end": 5450
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 5451,
                    "end": 5457
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5459,
                      "end": 5464
                    },
                    "typeArguments": null,
                    "start": 5459,
                    "end": 5464
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 5466,
                    "end": 5472
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 5474,
                    "end": 5476
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 5478,
                    "end": 5484
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 5486,
                    "end": 5493
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 5495,
                    "end": 5498
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5500,
                      "end": 5507
                    },
                    "typeArguments": null,
                    "start": 5500,
                    "end": 5507
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 5509,
                    "end": 5514
                  }
                ],
                "start": 5450,
                "end": 5515
              },
              "start": 5442,
              "end": 5515
            }
          ],
          "start": 5441,
          "end": 5516
        },
        "start": 5434,
        "end": 5516
      },
      "declare": false,
      "start": 5425,
      "end": 5517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 5527
}
```
