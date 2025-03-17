__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 5527,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 47,
        "name": "Thenable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 59,
          "end": 73,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 70,
            "name": "PromiseLike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 70,
            "end": 73,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 47,
        "end": 50,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 49,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 5266,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 125,
        "name": "PromiseBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 125,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 126,
            "end": 128,
            "name": {
              "type": "Identifier",
              "start": 126,
              "end": 128,
              "name": "TR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 132,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "name": "TJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "name": "TN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 142,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "name": "UR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 148,
              "name": "UJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 152,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 152,
              "name": "UN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 160,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 160,
              "name": "VR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 164,
              "name": "VJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 168,
              "name": "VN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 176,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 176,
              "name": "SR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 178,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 178,
              "end": 180,
              "name": "SJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 184,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 184,
              "name": "SN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 186,
        "end": 5266,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 192,
            "end": 1611,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 196,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 196,
              "end": 752,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 197,
                  "end": 208,
                  "name": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 200,
                    "name": "ARD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 203,
                    "end": 208
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 210,
                  "end": 221,
                  "name": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 213,
                    "name": "AJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 216,
                    "end": 221
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 223,
                  "end": 234,
                  "name": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 226,
                    "name": "AND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 229,
                    "end": 234
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 244,
                  "end": 255,
                  "name": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 247,
                    "name": "BRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 250,
                    "end": 255
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 257,
                  "end": 268,
                  "name": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 260,
                    "name": "BJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 263,
                    "end": 268
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 270,
                  "end": 281,
                  "name": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 273,
                    "name": "BND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 276,
                    "end": 281
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 291,
                  "end": 302,
                  "name": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 294,
                    "name": "CRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 297,
                    "end": 302
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 304,
                  "end": 315,
                  "name": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 307,
                    "name": "CJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 310,
                    "end": 315
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 317,
                  "end": 328,
                  "name": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "name": "CND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 323,
                    "end": 328
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 338,
                  "end": 349,
                  "name": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 341,
                    "name": "RRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 344,
                    "end": 349
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 351,
                  "end": 362,
                  "name": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 354,
                    "name": "RJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 357,
                    "end": 362
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 364,
                  "end": 375,
                  "name": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 367,
                    "name": "RND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 370,
                    "end": 375
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 385,
                  "end": 396,
                  "name": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 388,
                    "name": "ARF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 391,
                    "end": 396
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 398,
                  "end": 409,
                  "name": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 401,
                    "name": "AJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 404,
                    "end": 409
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 411,
                  "end": 422,
                  "name": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 414,
                    "name": "ANF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 417,
                    "end": 422
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 432,
                  "end": 443,
                  "name": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 435,
                    "name": "BRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 438,
                    "end": 443
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 445,
                  "end": 456,
                  "name": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 448,
                    "name": "BJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 451,
                    "end": 456
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 458,
                  "end": 469,
                  "name": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 461,
                    "name": "BNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 464,
                    "end": 469
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 479,
                  "end": 490,
                  "name": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 482,
                    "name": "CRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 485,
                    "end": 490
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 492,
                  "end": 503,
                  "name": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 495,
                    "name": "CJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 498,
                    "end": 503
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 505,
                  "end": 516,
                  "name": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 508,
                    "name": "CNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 511,
                    "end": 516
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 526,
                  "end": 537,
                  "name": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 529,
                    "name": "RRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 532,
                    "end": 537
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 539,
                  "end": 550,
                  "name": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 542,
                    "name": "RJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 545,
                    "end": 550
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 552,
                  "end": 563,
                  "name": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 555,
                    "name": "RNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 558,
                    "end": 563
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 573,
                  "end": 584,
                  "name": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 576,
                    "name": "ARP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 579,
                    "end": 584
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 586,
                  "end": 597,
                  "name": {
                    "type": "Identifier",
                    "start": 586,
                    "end": 589,
                    "name": "AJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 592,
                    "end": 597
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 599,
                  "end": 610,
                  "name": {
                    "type": "Identifier",
                    "start": 599,
                    "end": 602,
                    "name": "ANP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 605,
                    "end": 610
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 620,
                  "end": 631,
                  "name": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 623,
                    "name": "BRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 626,
                    "end": 631
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 633,
                  "end": 644,
                  "name": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 636,
                    "name": "BJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 639,
                    "end": 644
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 646,
                  "end": 657,
                  "name": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 649,
                    "name": "BNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 652,
                    "end": 657
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 667,
                  "end": 678,
                  "name": {
                    "type": "Identifier",
                    "start": 667,
                    "end": 670,
                    "name": "CRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 673,
                    "end": 678
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 680,
                  "end": 691,
                  "name": {
                    "type": "Identifier",
                    "start": 680,
                    "end": 683,
                    "name": "CJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 686,
                    "end": 691
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 693,
                  "end": 704,
                  "name": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 696,
                    "name": "CNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 699,
                    "end": 704
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 714,
                  "end": 725,
                  "name": {
                    "type": "Identifier",
                    "start": 714,
                    "end": 717,
                    "name": "RRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 720,
                    "end": 725
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 727,
                  "end": 738,
                  "name": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 730,
                    "name": "RJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 733,
                    "end": 738
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 740,
                  "end": 751,
                  "name": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 743,
                    "name": "RNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 746,
                    "end": 751
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 766,
                "end": 956,
                "name": "doneFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 776,
                  "end": 956,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 778,
                    "end": 956,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 779,
                        "end": 784,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 780,
                          "end": 784,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 782,
                            "end": 784,
                            "typeName": {
                              "type": "Identifier",
                              "start": 782,
                              "end": 784,
                              "name": "TR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 786,
                        "end": 791,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 787,
                          "end": 791,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 789,
                            "end": 791,
                            "typeName": {
                              "type": "Identifier",
                              "start": 789,
                              "end": 791,
                              "name": "UR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 793,
                        "end": 798,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 794,
                          "end": 798,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 796,
                            "end": 798,
                            "typeName": {
                              "type": "Identifier",
                              "start": 796,
                              "end": 798,
                              "name": "VR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 800,
                        "end": 810,
                        "argument": {
                          "type": "Identifier",
                          "start": 803,
                          "end": 804,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 804,
                          "end": 810,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 806,
                            "end": 810,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 806,
                              "end": 808,
                              "typeName": {
                                "type": "Identifier",
                                "start": 806,
                                "end": 808,
                                "name": "SR",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 812,
                      "end": 956,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 815,
                        "end": 956,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 815,
                            "end": 934,
                            "typeName": {
                              "type": "Identifier",
                              "start": 815,
                              "end": 826,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 826,
                              "end": 934,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 827,
                                  "end": 830,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 827,
                                    "end": 830,
                                    "name": "ARD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 832,
                                  "end": 835,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 832,
                                    "end": 835,
                                    "name": "AJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 837,
                                  "end": 840,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 837,
                                    "end": 840,
                                    "name": "AND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 858,
                                  "end": 861,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 858,
                                    "end": 861,
                                    "name": "BRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 863,
                                  "end": 866,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 863,
                                    "end": 866,
                                    "name": "BJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 868,
                                  "end": 871,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 868,
                                    "end": 871,
                                    "name": "BND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 889,
                                  "end": 892,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 889,
                                    "end": 892,
                                    "name": "CRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 894,
                                  "end": 897,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 894,
                                    "end": 897,
                                    "name": "CJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 899,
                                  "end": 902,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 899,
                                    "end": 902,
                                    "name": "CND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 920,
                                  "end": 923,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 920,
                                    "end": 923,
                                    "name": "RRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 925,
                                  "end": 928,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 925,
                                    "end": 928,
                                    "name": "RJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 930,
                                  "end": 933,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 930,
                                    "end": 933,
                                    "name": "RND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 937,
                            "end": 950,
                            "typeName": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 945,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 945,
                              "end": 950,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 946,
                                  "end": 949,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 946,
                                    "end": 949,
                                    "name": "ARD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 953,
                            "end": 956,
                            "typeName": {
                              "type": "Identifier",
                              "start": 953,
                              "end": 956,
                              "name": "ARD",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 970,
                "end": 1160,
                "name": "failFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 980,
                  "end": 1160,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 982,
                    "end": 1160,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 983,
                        "end": 988,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 984,
                          "end": 988,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 986,
                            "end": 988,
                            "typeName": {
                              "type": "Identifier",
                              "start": 986,
                              "end": 988,
                              "name": "TJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 990,
                        "end": 995,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 991,
                          "end": 995,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 993,
                            "end": 995,
                            "typeName": {
                              "type": "Identifier",
                              "start": 993,
                              "end": 995,
                              "name": "UJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 997,
                        "end": 1002,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 998,
                          "end": 1002,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1000,
                            "end": 1002,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1000,
                              "end": 1002,
                              "name": "VJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 1004,
                        "end": 1014,
                        "argument": {
                          "type": "Identifier",
                          "start": 1007,
                          "end": 1008,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1008,
                          "end": 1014,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1010,
                            "end": 1014,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 1010,
                              "end": 1012,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1010,
                                "end": 1012,
                                "name": "SJ",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1016,
                      "end": 1160,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1019,
                        "end": 1160,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1019,
                            "end": 1138,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1019,
                              "end": 1030,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1030,
                              "end": 1138,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1031,
                                  "end": 1034,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1031,
                                    "end": 1034,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1036,
                                  "end": 1039,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1036,
                                    "end": 1039,
                                    "name": "AJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1041,
                                  "end": 1044,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1041,
                                    "end": 1044,
                                    "name": "ANF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1062,
                                  "end": 1065,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1062,
                                    "end": 1065,
                                    "name": "BRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1067,
                                  "end": 1070,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1067,
                                    "end": 1070,
                                    "name": "BJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1072,
                                  "end": 1075,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1072,
                                    "end": 1075,
                                    "name": "BNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1093,
                                  "end": 1096,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1093,
                                    "end": 1096,
                                    "name": "CRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1098,
                                  "end": 1101,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1098,
                                    "end": 1101,
                                    "name": "CJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1103,
                                  "end": 1106,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1103,
                                    "end": 1106,
                                    "name": "CNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1124,
                                  "end": 1127,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1124,
                                    "end": 1127,
                                    "name": "RRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1129,
                                  "end": 1132,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1129,
                                    "end": 1132,
                                    "name": "RJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1134,
                                  "end": 1137,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1134,
                                    "end": 1137,
                                    "name": "RNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1141,
                            "end": 1154,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1141,
                              "end": 1149,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1149,
                              "end": 1154,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1150,
                                  "end": 1153,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1150,
                                    "end": 1153,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1157,
                            "end": 1160,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1157,
                              "end": 1160,
                              "name": "ARF",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1174,
                "end": 1368,
                "name": "progressFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1188,
                  "end": 1368,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1190,
                    "end": 1368,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1191,
                        "end": 1196,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1192,
                          "end": 1196,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1194,
                            "end": 1196,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1194,
                              "end": 1196,
                              "name": "TN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1198,
                        "end": 1203,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1199,
                          "end": 1203,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1201,
                            "end": 1203,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1201,
                              "end": 1203,
                              "name": "UN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1205,
                        "end": 1210,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1206,
                          "end": 1210,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1208,
                            "end": 1210,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1208,
                              "end": 1210,
                              "name": "VN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 1212,
                        "end": 1222,
                        "argument": {
                          "type": "Identifier",
                          "start": 1215,
                          "end": 1216,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1216,
                          "end": 1222,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1218,
                            "end": 1222,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 1218,
                              "end": 1220,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1218,
                                "end": 1220,
                                "name": "SN",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1224,
                      "end": 1368,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1227,
                        "end": 1368,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1227,
                            "end": 1346,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1227,
                              "end": 1238,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1238,
                              "end": 1346,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1239,
                                  "end": 1242,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1239,
                                    "end": 1242,
                                    "name": "ARP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1244,
                                  "end": 1247,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1244,
                                    "end": 1247,
                                    "name": "AJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1249,
                                  "end": 1252,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1249,
                                    "end": 1252,
                                    "name": "ANP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1270,
                                  "end": 1273,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1270,
                                    "end": 1273,
                                    "name": "BRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1275,
                                  "end": 1278,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1275,
                                    "end": 1278,
                                    "name": "BJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1280,
                                  "end": 1283,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1280,
                                    "end": 1283,
                                    "name": "BNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1301,
                                  "end": 1304,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1301,
                                    "end": 1304,
                                    "name": "CRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1306,
                                  "end": 1309,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1306,
                                    "end": 1309,
                                    "name": "CJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1311,
                                  "end": 1314,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1311,
                                    "end": 1314,
                                    "name": "CNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1332,
                                  "end": 1335,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1332,
                                    "end": 1335,
                                    "name": "RRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1337,
                                  "end": 1340,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1337,
                                    "end": 1340,
                                    "name": "RJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1342,
                                  "end": 1345,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1342,
                                    "end": 1345,
                                    "name": "RNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1349,
                            "end": 1362,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1349,
                              "end": 1357,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1357,
                              "end": 1362,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1358,
                                  "end": 1361,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1358,
                                    "end": 1361,
                                    "name": "ANP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1365,
                            "end": 1368,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1365,
                              "end": 1368,
                              "name": "ANP",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1369,
              "end": 1610,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1371,
                "end": 1610,
                "typeName": {
                  "type": "Identifier",
                  "start": 1371,
                  "end": 1382,
                  "name": "PromiseBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1382,
                  "end": 1610,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1383,
                      "end": 1398,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1383,
                          "end": 1386,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1383,
                            "end": 1386,
                            "name": "ARD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1389,
                          "end": 1392,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1389,
                            "end": 1392,
                            "name": "ARF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1395,
                          "end": 1398,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1395,
                            "end": 1398,
                            "name": "ARP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1400,
                      "end": 1415,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1400,
                          "end": 1403,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1400,
                            "end": 1403,
                            "name": "AJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1406,
                          "end": 1409,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1406,
                            "end": 1409,
                            "name": "AJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1412,
                          "end": 1415,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1412,
                            "end": 1415,
                            "name": "AJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1417,
                      "end": 1432,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1417,
                          "end": 1420,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1417,
                            "end": 1420,
                            "name": "AND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1423,
                          "end": 1426,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1423,
                            "end": 1426,
                            "name": "ANF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1429,
                          "end": 1432,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1429,
                            "end": 1432,
                            "name": "ANP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1442,
                      "end": 1457,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1442,
                          "end": 1445,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1442,
                            "end": 1445,
                            "name": "BRD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1448,
                          "end": 1451,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1448,
                            "end": 1451,
                            "name": "BRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1454,
                          "end": 1457,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1454,
                            "end": 1457,
                            "name": "BRP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1459,
                      "end": 1474,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1459,
                          "end": 1462,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1459,
                            "end": 1462,
                            "name": "BJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1465,
                          "end": 1468,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1465,
                            "end": 1468,
                            "name": "BJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1471,
                          "end": 1474,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1471,
                            "end": 1474,
                            "name": "BJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1476,
                      "end": 1491,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1476,
                          "end": 1479,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1476,
                            "end": 1479,
                            "name": "BND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1482,
                          "end": 1485,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1482,
                            "end": 1485,
                            "name": "BNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1488,
                          "end": 1491,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1488,
                            "end": 1491,
                            "name": "BNP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1501,
                      "end": 1516,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1501,
                          "end": 1504,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1501,
                            "end": 1504,
                            "name": "CRD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1507,
                          "end": 1510,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1507,
                            "end": 1510,
                            "name": "CRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1513,
                          "end": 1516,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1513,
                            "end": 1516,
                            "name": "CRP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1518,
                      "end": 1533,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1518,
                          "end": 1521,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1518,
                            "end": 1521,
                            "name": "CJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1524,
                          "end": 1527,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1524,
                            "end": 1527,
                            "name": "CJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1530,
                          "end": 1533,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1530,
                            "end": 1533,
                            "name": "CJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1535,
                      "end": 1550,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1535,
                          "end": 1538,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1535,
                            "end": 1538,
                            "name": "CND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1541,
                          "end": 1544,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1541,
                            "end": 1544,
                            "name": "CNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1547,
                          "end": 1550,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1547,
                            "end": 1550,
                            "name": "CNP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1560,
                      "end": 1575,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1560,
                          "end": 1563,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1560,
                            "end": 1563,
                            "name": "RRD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1566,
                          "end": 1569,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1566,
                            "end": 1569,
                            "name": "RRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1572,
                          "end": 1575,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1572,
                            "end": 1575,
                            "name": "RRP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1577,
                      "end": 1592,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1577,
                          "end": 1580,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1577,
                            "end": 1580,
                            "name": "RJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1583,
                          "end": 1586,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1583,
                            "end": 1586,
                            "name": "RJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1589,
                          "end": 1592,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1589,
                            "end": 1592,
                            "name": "RJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 1594,
                      "end": 1609,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1594,
                          "end": 1597,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1594,
                            "end": 1597,
                            "name": "RND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1600,
                          "end": 1603,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1600,
                            "end": 1603,
                            "name": "RNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1606,
                          "end": 1609,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1606,
                            "end": 1609,
                            "name": "RNP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1616,
            "end": 2601,
            "key": {
              "type": "Identifier",
              "start": 1616,
              "end": 1620,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1620,
              "end": 1988,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1621,
                  "end": 1632,
                  "name": {
                    "type": "Identifier",
                    "start": 1621,
                    "end": 1624,
                    "name": "ARF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1627,
                    "end": 1632
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1634,
                  "end": 1645,
                  "name": {
                    "type": "Identifier",
                    "start": 1634,
                    "end": 1637,
                    "name": "AJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1640,
                    "end": 1645
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1647,
                  "end": 1658,
                  "name": {
                    "type": "Identifier",
                    "start": 1647,
                    "end": 1650,
                    "name": "ANF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1653,
                    "end": 1658
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1668,
                  "end": 1679,
                  "name": {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1671,
                    "name": "BRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1674,
                    "end": 1679
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1681,
                  "end": 1692,
                  "name": {
                    "type": "Identifier",
                    "start": 1681,
                    "end": 1684,
                    "name": "BJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1687,
                    "end": 1692
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1694,
                  "end": 1705,
                  "name": {
                    "type": "Identifier",
                    "start": 1694,
                    "end": 1697,
                    "name": "BNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1700,
                    "end": 1705
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1715,
                  "end": 1726,
                  "name": {
                    "type": "Identifier",
                    "start": 1715,
                    "end": 1718,
                    "name": "CRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1721,
                    "end": 1726
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1728,
                  "end": 1739,
                  "name": {
                    "type": "Identifier",
                    "start": 1728,
                    "end": 1731,
                    "name": "CJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1734,
                    "end": 1739
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1741,
                  "end": 1752,
                  "name": {
                    "type": "Identifier",
                    "start": 1741,
                    "end": 1744,
                    "name": "CNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1747,
                    "end": 1752
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1762,
                  "end": 1773,
                  "name": {
                    "type": "Identifier",
                    "start": 1762,
                    "end": 1765,
                    "name": "RRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1768,
                    "end": 1773
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1775,
                  "end": 1786,
                  "name": {
                    "type": "Identifier",
                    "start": 1775,
                    "end": 1778,
                    "name": "RJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1781,
                    "end": 1786
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1788,
                  "end": 1799,
                  "name": {
                    "type": "Identifier",
                    "start": 1788,
                    "end": 1791,
                    "name": "RNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1794,
                    "end": 1799
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1809,
                  "end": 1820,
                  "name": {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1812,
                    "name": "ARP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1815,
                    "end": 1820
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1822,
                  "end": 1833,
                  "name": {
                    "type": "Identifier",
                    "start": 1822,
                    "end": 1825,
                    "name": "AJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1828,
                    "end": 1833
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1835,
                  "end": 1846,
                  "name": {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1838,
                    "name": "ANP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1841,
                    "end": 1846
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1856,
                  "end": 1867,
                  "name": {
                    "type": "Identifier",
                    "start": 1856,
                    "end": 1859,
                    "name": "BRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1862,
                    "end": 1867
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1869,
                  "end": 1880,
                  "name": {
                    "type": "Identifier",
                    "start": 1869,
                    "end": 1872,
                    "name": "BJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1875,
                    "end": 1880
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1882,
                  "end": 1893,
                  "name": {
                    "type": "Identifier",
                    "start": 1882,
                    "end": 1885,
                    "name": "BNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1888,
                    "end": 1893
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1903,
                  "end": 1914,
                  "name": {
                    "type": "Identifier",
                    "start": 1903,
                    "end": 1906,
                    "name": "CRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1909,
                    "end": 1914
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1916,
                  "end": 1927,
                  "name": {
                    "type": "Identifier",
                    "start": 1916,
                    "end": 1919,
                    "name": "CJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1922,
                    "end": 1927
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1929,
                  "end": 1940,
                  "name": {
                    "type": "Identifier",
                    "start": 1929,
                    "end": 1932,
                    "name": "CNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1935,
                    "end": 1940
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1950,
                  "end": 1961,
                  "name": {
                    "type": "Identifier",
                    "start": 1950,
                    "end": 1953,
                    "name": "RRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1956,
                    "end": 1961
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1963,
                  "end": 1974,
                  "name": {
                    "type": "Identifier",
                    "start": 1963,
                    "end": 1966,
                    "name": "RJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1969,
                    "end": 1974
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1976,
                  "end": 1987,
                  "name": {
                    "type": "Identifier",
                    "start": 1976,
                    "end": 1979,
                    "name": "RNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1982,
                    "end": 1987
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2002,
                "end": 2018,
                "name": "doneFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2012,
                  "end": 2018,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2014,
                    "end": 2018
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2032,
                "end": 2222,
                "name": "failFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2042,
                  "end": 2222,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2044,
                    "end": 2222,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2045,
                        "end": 2050,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2046,
                          "end": 2050,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2048,
                            "end": 2050,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2048,
                              "end": 2050,
                              "name": "TJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2052,
                        "end": 2057,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2053,
                          "end": 2057,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2055,
                            "end": 2057,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2055,
                              "end": 2057,
                              "name": "UJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2059,
                        "end": 2064,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2060,
                          "end": 2064,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2062,
                            "end": 2064,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2062,
                              "end": 2064,
                              "name": "VJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 2066,
                        "end": 2076,
                        "argument": {
                          "type": "Identifier",
                          "start": 2069,
                          "end": 2070,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2070,
                          "end": 2076,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 2072,
                            "end": 2076,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 2072,
                              "end": 2074,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2072,
                                "end": 2074,
                                "name": "SJ",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2078,
                      "end": 2222,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2081,
                        "end": 2222,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2081,
                            "end": 2200,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2081,
                              "end": 2092,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2092,
                              "end": 2200,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2093,
                                  "end": 2096,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2093,
                                    "end": 2096,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2098,
                                  "end": 2101,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2098,
                                    "end": 2101,
                                    "name": "AJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2103,
                                  "end": 2106,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2103,
                                    "end": 2106,
                                    "name": "ANF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2124,
                                  "end": 2127,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2124,
                                    "end": 2127,
                                    "name": "BRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2129,
                                  "end": 2132,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2129,
                                    "end": 2132,
                                    "name": "BJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2134,
                                  "end": 2137,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2134,
                                    "end": 2137,
                                    "name": "BNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2155,
                                  "end": 2158,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2155,
                                    "end": 2158,
                                    "name": "CRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2160,
                                  "end": 2163,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2160,
                                    "end": 2163,
                                    "name": "CJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2165,
                                  "end": 2168,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2165,
                                    "end": 2168,
                                    "name": "CNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2186,
                                  "end": 2189,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2186,
                                    "end": 2189,
                                    "name": "RRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2191,
                                  "end": 2194,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2191,
                                    "end": 2194,
                                    "name": "RJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2196,
                                  "end": 2199,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2196,
                                    "end": 2199,
                                    "name": "RNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2203,
                            "end": 2216,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2203,
                              "end": 2211,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2211,
                              "end": 2216,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2212,
                                  "end": 2215,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2212,
                                    "end": 2215,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2219,
                            "end": 2222,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2219,
                              "end": 2222,
                              "name": "ARF",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2236,
                "end": 2430,
                "name": "progressFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2250,
                  "end": 2430,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2252,
                    "end": 2430,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2253,
                        "end": 2258,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2254,
                          "end": 2258,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2256,
                            "end": 2258,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2256,
                              "end": 2258,
                              "name": "TN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2260,
                        "end": 2265,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2261,
                          "end": 2265,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2263,
                            "end": 2265,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2263,
                              "end": 2265,
                              "name": "UN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2267,
                        "end": 2272,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2268,
                          "end": 2272,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2270,
                            "end": 2272,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2270,
                              "end": 2272,
                              "name": "VN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 2274,
                        "end": 2284,
                        "argument": {
                          "type": "Identifier",
                          "start": 2277,
                          "end": 2278,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2278,
                          "end": 2284,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 2280,
                            "end": 2284,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 2280,
                              "end": 2282,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2280,
                                "end": 2282,
                                "name": "SN",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2286,
                      "end": 2430,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2289,
                        "end": 2430,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2289,
                            "end": 2408,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2289,
                              "end": 2300,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2300,
                              "end": 2408,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2301,
                                  "end": 2304,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2301,
                                    "end": 2304,
                                    "name": "ARP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2306,
                                  "end": 2309,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2306,
                                    "end": 2309,
                                    "name": "AJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2311,
                                  "end": 2314,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2311,
                                    "end": 2314,
                                    "name": "ANP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2332,
                                  "end": 2335,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2332,
                                    "end": 2335,
                                    "name": "BRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2337,
                                  "end": 2340,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2337,
                                    "end": 2340,
                                    "name": "BJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2342,
                                  "end": 2345,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2342,
                                    "end": 2345,
                                    "name": "BNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2363,
                                  "end": 2366,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2363,
                                    "end": 2366,
                                    "name": "CRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2368,
                                  "end": 2371,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2368,
                                    "end": 2371,
                                    "name": "CJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2373,
                                  "end": 2376,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2373,
                                    "end": 2376,
                                    "name": "CNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2394,
                                  "end": 2397,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2394,
                                    "end": 2397,
                                    "name": "RRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2399,
                                  "end": 2402,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2399,
                                    "end": 2402,
                                    "name": "RJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2404,
                                  "end": 2407,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2404,
                                    "end": 2407,
                                    "name": "RNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2411,
                            "end": 2424,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2411,
                              "end": 2419,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2419,
                              "end": 2424,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2420,
                                  "end": 2423,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2420,
                                    "end": 2423,
                                    "name": "ANP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2427,
                            "end": 2430,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2427,
                              "end": 2430,
                              "name": "ANP",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2431,
              "end": 2600,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2433,
                "end": 2600,
                "typeName": {
                  "type": "Identifier",
                  "start": 2433,
                  "end": 2444,
                  "name": "PromiseBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2444,
                  "end": 2600,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 2445,
                      "end": 2454,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2445,
                          "end": 2448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2445,
                            "end": 2448,
                            "name": "ARF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2451,
                          "end": 2454,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2451,
                            "end": 2454,
                            "name": "ARP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2456,
                      "end": 2465,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2456,
                          "end": 2459,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2456,
                            "end": 2459,
                            "name": "AJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2462,
                          "end": 2465,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2462,
                            "end": 2465,
                            "name": "AJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2467,
                      "end": 2476,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2467,
                          "end": 2470,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2467,
                            "end": 2470,
                            "name": "ANF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2473,
                          "end": 2476,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2473,
                            "end": 2476,
                            "name": "ANP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2486,
                      "end": 2495,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2486,
                          "end": 2489,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2486,
                            "end": 2489,
                            "name": "BRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2492,
                          "end": 2495,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2492,
                            "end": 2495,
                            "name": "BRP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2497,
                      "end": 2506,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2497,
                          "end": 2500,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2497,
                            "end": 2500,
                            "name": "BJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2503,
                          "end": 2506,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2503,
                            "end": 2506,
                            "name": "BJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2508,
                      "end": 2517,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2508,
                          "end": 2511,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2508,
                            "end": 2511,
                            "name": "BNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2514,
                          "end": 2517,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2514,
                            "end": 2517,
                            "name": "BNP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2527,
                      "end": 2536,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2527,
                          "end": 2530,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2527,
                            "end": 2530,
                            "name": "CRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2533,
                          "end": 2536,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2533,
                            "end": 2536,
                            "name": "CRP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2538,
                      "end": 2547,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2538,
                          "end": 2541,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2538,
                            "end": 2541,
                            "name": "CJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2544,
                          "end": 2547,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2544,
                            "end": 2547,
                            "name": "CJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2549,
                      "end": 2558,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2549,
                          "end": 2552,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2549,
                            "end": 2552,
                            "name": "CNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2555,
                          "end": 2558,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2555,
                            "end": 2558,
                            "name": "CNP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2568,
                      "end": 2577,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2568,
                          "end": 2571,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2568,
                            "end": 2571,
                            "name": "RRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2574,
                          "end": 2577,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2574,
                            "end": 2577,
                            "name": "RRP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2579,
                      "end": 2588,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2579,
                          "end": 2582,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2579,
                            "end": 2582,
                            "name": "RJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2585,
                          "end": 2588,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2585,
                            "end": 2588,
                            "name": "RJP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 2590,
                      "end": 2599,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2590,
                          "end": 2593,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2590,
                            "end": 2593,
                            "name": "RNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2596,
                          "end": 2599,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2596,
                            "end": 2599,
                            "name": "RNP",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2606,
            "end": 3158,
            "key": {
              "type": "Identifier",
              "start": 2606,
              "end": 2610,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2610,
              "end": 2790,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2611,
                  "end": 2622,
                  "name": {
                    "type": "Identifier",
                    "start": 2611,
                    "end": 2614,
                    "name": "ARP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2617,
                    "end": 2622
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2624,
                  "end": 2635,
                  "name": {
                    "type": "Identifier",
                    "start": 2624,
                    "end": 2627,
                    "name": "AJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2630,
                    "end": 2635
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2637,
                  "end": 2648,
                  "name": {
                    "type": "Identifier",
                    "start": 2637,
                    "end": 2640,
                    "name": "ANP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2643,
                    "end": 2648
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2658,
                  "end": 2669,
                  "name": {
                    "type": "Identifier",
                    "start": 2658,
                    "end": 2661,
                    "name": "BRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2664,
                    "end": 2669
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2671,
                  "end": 2682,
                  "name": {
                    "type": "Identifier",
                    "start": 2671,
                    "end": 2674,
                    "name": "BJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2677,
                    "end": 2682
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2684,
                  "end": 2695,
                  "name": {
                    "type": "Identifier",
                    "start": 2684,
                    "end": 2687,
                    "name": "BNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2690,
                    "end": 2695
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2705,
                  "end": 2716,
                  "name": {
                    "type": "Identifier",
                    "start": 2705,
                    "end": 2708,
                    "name": "CRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2711,
                    "end": 2716
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2718,
                  "end": 2729,
                  "name": {
                    "type": "Identifier",
                    "start": 2718,
                    "end": 2721,
                    "name": "CJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2724,
                    "end": 2729
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2731,
                  "end": 2742,
                  "name": {
                    "type": "Identifier",
                    "start": 2731,
                    "end": 2734,
                    "name": "CNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2737,
                    "end": 2742
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2752,
                  "end": 2763,
                  "name": {
                    "type": "Identifier",
                    "start": 2752,
                    "end": 2755,
                    "name": "RRP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2758,
                    "end": 2763
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2765,
                  "end": 2776,
                  "name": {
                    "type": "Identifier",
                    "start": 2765,
                    "end": 2768,
                    "name": "RJP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2771,
                    "end": 2776
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2778,
                  "end": 2789,
                  "name": {
                    "type": "Identifier",
                    "start": 2778,
                    "end": 2781,
                    "name": "RNP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2784,
                    "end": 2789
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2804,
                "end": 2820,
                "name": "doneFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2814,
                  "end": 2820,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2816,
                    "end": 2820
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2834,
                "end": 2850,
                "name": "failFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2844,
                  "end": 2850,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2846,
                    "end": 2850
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2864,
                "end": 3059,
                "name": "progressFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2879,
                  "end": 3059,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2881,
                    "end": 3059,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2882,
                        "end": 2887,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2883,
                          "end": 2887,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2885,
                            "end": 2887,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2885,
                              "end": 2887,
                              "name": "TN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2889,
                        "end": 2894,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2890,
                          "end": 2894,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2892,
                            "end": 2894,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2892,
                              "end": 2894,
                              "name": "UN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2896,
                        "end": 2901,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2897,
                          "end": 2901,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2899,
                            "end": 2901,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2899,
                              "end": 2901,
                              "name": "VN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 2903,
                        "end": 2913,
                        "argument": {
                          "type": "Identifier",
                          "start": 2906,
                          "end": 2907,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2907,
                          "end": 2913,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 2909,
                            "end": 2913,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 2909,
                              "end": 2911,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2909,
                                "end": 2911,
                                "name": "SN",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2915,
                      "end": 3059,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2918,
                        "end": 3059,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2918,
                            "end": 3037,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2918,
                              "end": 2929,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2929,
                              "end": 3037,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2930,
                                  "end": 2933,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2930,
                                    "end": 2933,
                                    "name": "ARP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2935,
                                  "end": 2938,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2935,
                                    "end": 2938,
                                    "name": "AJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2940,
                                  "end": 2943,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2940,
                                    "end": 2943,
                                    "name": "ANP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2961,
                                  "end": 2964,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2961,
                                    "end": 2964,
                                    "name": "BRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2966,
                                  "end": 2969,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2966,
                                    "end": 2969,
                                    "name": "BJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2971,
                                  "end": 2974,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2971,
                                    "end": 2974,
                                    "name": "BNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2992,
                                  "end": 2995,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2992,
                                    "end": 2995,
                                    "name": "CRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2997,
                                  "end": 3000,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2997,
                                    "end": 3000,
                                    "name": "CJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3002,
                                  "end": 3005,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3002,
                                    "end": 3005,
                                    "name": "CNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3023,
                                  "end": 3026,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3023,
                                    "end": 3026,
                                    "name": "RRP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3028,
                                  "end": 3031,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3028,
                                    "end": 3031,
                                    "name": "RJP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3033,
                                  "end": 3036,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3033,
                                    "end": 3036,
                                    "name": "RNP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3040,
                            "end": 3053,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3040,
                              "end": 3048,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3048,
                              "end": 3053,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3049,
                                  "end": 3052,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3049,
                                    "end": 3052,
                                    "name": "ANP",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3056,
                            "end": 3059,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3056,
                              "end": 3059,
                              "name": "ANP",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3060,
              "end": 3157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3062,
                "end": 3157,
                "typeName": {
                  "type": "Identifier",
                  "start": 3062,
                  "end": 3073,
                  "name": "PromiseBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3073,
                  "end": 3157,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3074,
                      "end": 3077,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3074,
                        "end": 3077,
                        "name": "ARP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3079,
                      "end": 3082,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3079,
                        "end": 3082,
                        "name": "AJP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3084,
                      "end": 3087,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3084,
                        "end": 3087,
                        "name": "ANP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3097,
                      "end": 3100,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3097,
                        "end": 3100,
                        "name": "BRP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3102,
                      "end": 3105,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3102,
                        "end": 3105,
                        "name": "BJP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3107,
                      "end": 3110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3107,
                        "end": 3110,
                        "name": "BNP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3120,
                      "end": 3123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3120,
                        "end": 3123,
                        "name": "CRP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3125,
                      "end": 3128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3125,
                        "end": 3128,
                        "name": "CJP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3130,
                      "end": 3133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3130,
                        "end": 3133,
                        "name": "CNP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3143,
                      "end": 3146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3143,
                        "end": 3146,
                        "name": "RRP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3148,
                      "end": 3151,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3148,
                        "end": 3151,
                        "name": "RJP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3153,
                      "end": 3156,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3153,
                        "end": 3156,
                        "name": "RNP",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3163,
            "end": 4149,
            "key": {
              "type": "Identifier",
              "start": 3163,
              "end": 3167,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3167,
              "end": 3535,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3168,
                  "end": 3179,
                  "name": {
                    "type": "Identifier",
                    "start": 3168,
                    "end": 3171,
                    "name": "ARD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3174,
                    "end": 3179
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3181,
                  "end": 3192,
                  "name": {
                    "type": "Identifier",
                    "start": 3181,
                    "end": 3184,
                    "name": "AJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3187,
                    "end": 3192
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3194,
                  "end": 3205,
                  "name": {
                    "type": "Identifier",
                    "start": 3194,
                    "end": 3197,
                    "name": "AND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3200,
                    "end": 3205
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3215,
                  "end": 3226,
                  "name": {
                    "type": "Identifier",
                    "start": 3215,
                    "end": 3218,
                    "name": "BRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3221,
                    "end": 3226
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3228,
                  "end": 3239,
                  "name": {
                    "type": "Identifier",
                    "start": 3228,
                    "end": 3231,
                    "name": "BJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3234,
                    "end": 3239
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3241,
                  "end": 3252,
                  "name": {
                    "type": "Identifier",
                    "start": 3241,
                    "end": 3244,
                    "name": "BND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3247,
                    "end": 3252
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3262,
                  "end": 3273,
                  "name": {
                    "type": "Identifier",
                    "start": 3262,
                    "end": 3265,
                    "name": "CRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3268,
                    "end": 3273
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3275,
                  "end": 3286,
                  "name": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3278,
                    "name": "CJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3281,
                    "end": 3286
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3288,
                  "end": 3299,
                  "name": {
                    "type": "Identifier",
                    "start": 3288,
                    "end": 3291,
                    "name": "CND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3294,
                    "end": 3299
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3309,
                  "end": 3320,
                  "name": {
                    "type": "Identifier",
                    "start": 3309,
                    "end": 3312,
                    "name": "RRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3315,
                    "end": 3320
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3322,
                  "end": 3333,
                  "name": {
                    "type": "Identifier",
                    "start": 3322,
                    "end": 3325,
                    "name": "RJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3328,
                    "end": 3333
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3335,
                  "end": 3346,
                  "name": {
                    "type": "Identifier",
                    "start": 3335,
                    "end": 3338,
                    "name": "RND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3341,
                    "end": 3346
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3356,
                  "end": 3367,
                  "name": {
                    "type": "Identifier",
                    "start": 3356,
                    "end": 3359,
                    "name": "ARF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3362,
                    "end": 3367
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3369,
                  "end": 3380,
                  "name": {
                    "type": "Identifier",
                    "start": 3369,
                    "end": 3372,
                    "name": "AJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3375,
                    "end": 3380
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3382,
                  "end": 3393,
                  "name": {
                    "type": "Identifier",
                    "start": 3382,
                    "end": 3385,
                    "name": "ANF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3388,
                    "end": 3393
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3403,
                  "end": 3414,
                  "name": {
                    "type": "Identifier",
                    "start": 3403,
                    "end": 3406,
                    "name": "BRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3409,
                    "end": 3414
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3416,
                  "end": 3427,
                  "name": {
                    "type": "Identifier",
                    "start": 3416,
                    "end": 3419,
                    "name": "BJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3422,
                    "end": 3427
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3429,
                  "end": 3440,
                  "name": {
                    "type": "Identifier",
                    "start": 3429,
                    "end": 3432,
                    "name": "BNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3435,
                    "end": 3440
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3450,
                  "end": 3461,
                  "name": {
                    "type": "Identifier",
                    "start": 3450,
                    "end": 3453,
                    "name": "CRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3456,
                    "end": 3461
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3463,
                  "end": 3474,
                  "name": {
                    "type": "Identifier",
                    "start": 3463,
                    "end": 3466,
                    "name": "CJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3469,
                    "end": 3474
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3476,
                  "end": 3487,
                  "name": {
                    "type": "Identifier",
                    "start": 3476,
                    "end": 3479,
                    "name": "CNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3482,
                    "end": 3487
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3497,
                  "end": 3508,
                  "name": {
                    "type": "Identifier",
                    "start": 3497,
                    "end": 3500,
                    "name": "RRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3503,
                    "end": 3508
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3510,
                  "end": 3521,
                  "name": {
                    "type": "Identifier",
                    "start": 3510,
                    "end": 3513,
                    "name": "RJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3516,
                    "end": 3521
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3523,
                  "end": 3534,
                  "name": {
                    "type": "Identifier",
                    "start": 3523,
                    "end": 3526,
                    "name": "RNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3529,
                    "end": 3534
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3549,
                "end": 3739,
                "name": "doneFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3559,
                  "end": 3739,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3561,
                    "end": 3739,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3562,
                        "end": 3567,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3563,
                          "end": 3567,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3565,
                            "end": 3567,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3565,
                              "end": 3567,
                              "name": "TR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3569,
                        "end": 3574,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3570,
                          "end": 3574,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3572,
                            "end": 3574,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3572,
                              "end": 3574,
                              "name": "UR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3576,
                        "end": 3581,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3577,
                          "end": 3581,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3579,
                            "end": 3581,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3579,
                              "end": 3581,
                              "name": "VR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 3583,
                        "end": 3593,
                        "argument": {
                          "type": "Identifier",
                          "start": 3586,
                          "end": 3587,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3587,
                          "end": 3593,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 3589,
                            "end": 3593,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 3589,
                              "end": 3591,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3589,
                                "end": 3591,
                                "name": "SR",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3595,
                      "end": 3739,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 3598,
                        "end": 3739,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 3598,
                            "end": 3717,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3598,
                              "end": 3609,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3609,
                              "end": 3717,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3610,
                                  "end": 3613,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3610,
                                    "end": 3613,
                                    "name": "ARD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3615,
                                  "end": 3618,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3615,
                                    "end": 3618,
                                    "name": "AJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3620,
                                  "end": 3623,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3620,
                                    "end": 3623,
                                    "name": "AND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3641,
                                  "end": 3644,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3641,
                                    "end": 3644,
                                    "name": "BRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3646,
                                  "end": 3649,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3646,
                                    "end": 3649,
                                    "name": "BJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3651,
                                  "end": 3654,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3651,
                                    "end": 3654,
                                    "name": "BND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3672,
                                  "end": 3675,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3672,
                                    "end": 3675,
                                    "name": "CRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3677,
                                  "end": 3680,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3677,
                                    "end": 3680,
                                    "name": "CJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3682,
                                  "end": 3685,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3682,
                                    "end": 3685,
                                    "name": "CND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3703,
                                  "end": 3706,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3703,
                                    "end": 3706,
                                    "name": "RRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3708,
                                  "end": 3711,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3708,
                                    "end": 3711,
                                    "name": "RJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3713,
                                  "end": 3716,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3713,
                                    "end": 3716,
                                    "name": "RND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3720,
                            "end": 3733,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3720,
                              "end": 3728,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3728,
                              "end": 3733,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3729,
                                  "end": 3732,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3729,
                                    "end": 3732,
                                    "name": "ARD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3736,
                            "end": 3739,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3736,
                              "end": 3739,
                              "name": "ARD",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3753,
                "end": 3943,
                "name": "failFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3763,
                  "end": 3943,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3765,
                    "end": 3943,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3766,
                        "end": 3771,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3767,
                          "end": 3771,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3769,
                            "end": 3771,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3769,
                              "end": 3771,
                              "name": "TJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3773,
                        "end": 3778,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3774,
                          "end": 3778,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3776,
                            "end": 3778,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3776,
                              "end": 3778,
                              "name": "UJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3780,
                        "end": 3785,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3781,
                          "end": 3785,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3783,
                            "end": 3785,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3783,
                              "end": 3785,
                              "name": "VJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 3787,
                        "end": 3797,
                        "argument": {
                          "type": "Identifier",
                          "start": 3790,
                          "end": 3791,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3791,
                          "end": 3797,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 3793,
                            "end": 3797,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 3793,
                              "end": 3795,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3793,
                                "end": 3795,
                                "name": "SJ",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3799,
                      "end": 3943,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 3802,
                        "end": 3943,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 3802,
                            "end": 3921,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3802,
                              "end": 3813,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3813,
                              "end": 3921,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3814,
                                  "end": 3817,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3814,
                                    "end": 3817,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3819,
                                  "end": 3822,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3819,
                                    "end": 3822,
                                    "name": "AJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3824,
                                  "end": 3827,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3824,
                                    "end": 3827,
                                    "name": "ANF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3845,
                                  "end": 3848,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3845,
                                    "end": 3848,
                                    "name": "BRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3850,
                                  "end": 3853,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3850,
                                    "end": 3853,
                                    "name": "BJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3855,
                                  "end": 3858,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3855,
                                    "end": 3858,
                                    "name": "BNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3876,
                                  "end": 3879,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3876,
                                    "end": 3879,
                                    "name": "CRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3881,
                                  "end": 3884,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3881,
                                    "end": 3884,
                                    "name": "CJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3886,
                                  "end": 3889,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3886,
                                    "end": 3889,
                                    "name": "CNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3907,
                                  "end": 3910,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3907,
                                    "end": 3910,
                                    "name": "RRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3912,
                                  "end": 3915,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3912,
                                    "end": 3915,
                                    "name": "RJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3917,
                                  "end": 3920,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3917,
                                    "end": 3920,
                                    "name": "RNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3924,
                            "end": 3937,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3924,
                              "end": 3932,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3932,
                              "end": 3937,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3933,
                                  "end": 3936,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3933,
                                    "end": 3936,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3940,
                            "end": 3943,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3940,
                              "end": 3943,
                              "name": "ARF",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3957,
                "end": 3978,
                "name": "progressFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3972,
                  "end": 3978,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 3974,
                    "end": 3978
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3979,
              "end": 4148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3981,
                "end": 4148,
                "typeName": {
                  "type": "Identifier",
                  "start": 3981,
                  "end": 3992,
                  "name": "PromiseBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3992,
                  "end": 4148,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 3993,
                      "end": 4002,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 3993,
                          "end": 3996,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3993,
                            "end": 3996,
                            "name": "ARD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3999,
                          "end": 4002,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3999,
                            "end": 4002,
                            "name": "ARF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4004,
                      "end": 4013,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4004,
                          "end": 4007,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4004,
                            "end": 4007,
                            "name": "AJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4010,
                          "end": 4013,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4010,
                            "end": 4013,
                            "name": "AJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4015,
                      "end": 4024,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4015,
                          "end": 4018,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4015,
                            "end": 4018,
                            "name": "AND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4021,
                          "end": 4024,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4021,
                            "end": 4024,
                            "name": "ANF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4034,
                      "end": 4043,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4034,
                          "end": 4037,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4034,
                            "end": 4037,
                            "name": "BRD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4040,
                          "end": 4043,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4040,
                            "end": 4043,
                            "name": "BRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4045,
                      "end": 4054,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4045,
                          "end": 4048,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4045,
                            "end": 4048,
                            "name": "BJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4051,
                          "end": 4054,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4051,
                            "end": 4054,
                            "name": "BJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4056,
                      "end": 4065,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4056,
                          "end": 4059,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4056,
                            "end": 4059,
                            "name": "BND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4062,
                          "end": 4065,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4062,
                            "end": 4065,
                            "name": "BNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4075,
                      "end": 4084,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4075,
                          "end": 4078,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4075,
                            "end": 4078,
                            "name": "CRD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4081,
                          "end": 4084,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4081,
                            "end": 4084,
                            "name": "CRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4086,
                      "end": 4095,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4086,
                          "end": 4089,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4086,
                            "end": 4089,
                            "name": "CJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4092,
                          "end": 4095,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4092,
                            "end": 4095,
                            "name": "CJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4097,
                      "end": 4106,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4097,
                          "end": 4100,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4097,
                            "end": 4100,
                            "name": "CND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4103,
                          "end": 4106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4103,
                            "end": 4106,
                            "name": "CNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4116,
                      "end": 4125,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4116,
                          "end": 4119,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4116,
                            "end": 4119,
                            "name": "RRD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4122,
                          "end": 4125,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4122,
                            "end": 4125,
                            "name": "RRF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4127,
                      "end": 4136,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4127,
                          "end": 4130,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4127,
                            "end": 4130,
                            "name": "RJD",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4133,
                          "end": 4136,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4133,
                            "end": 4136,
                            "name": "RJF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 4138,
                      "end": 4147,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 4138,
                          "end": 4141,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4138,
                            "end": 4141,
                            "name": "RND",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4144,
                          "end": 4147,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4144,
                            "end": 4147,
                            "name": "RNF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 4154,
            "end": 4706,
            "key": {
              "type": "Identifier",
              "start": 4154,
              "end": 4158,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4158,
              "end": 4338,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4159,
                  "end": 4170,
                  "name": {
                    "type": "Identifier",
                    "start": 4159,
                    "end": 4162,
                    "name": "ARF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4165,
                    "end": 4170
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4172,
                  "end": 4183,
                  "name": {
                    "type": "Identifier",
                    "start": 4172,
                    "end": 4175,
                    "name": "AJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4178,
                    "end": 4183
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4185,
                  "end": 4196,
                  "name": {
                    "type": "Identifier",
                    "start": 4185,
                    "end": 4188,
                    "name": "ANF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4191,
                    "end": 4196
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4206,
                  "end": 4217,
                  "name": {
                    "type": "Identifier",
                    "start": 4206,
                    "end": 4209,
                    "name": "BRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4212,
                    "end": 4217
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4219,
                  "end": 4230,
                  "name": {
                    "type": "Identifier",
                    "start": 4219,
                    "end": 4222,
                    "name": "BJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4225,
                    "end": 4230
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4232,
                  "end": 4243,
                  "name": {
                    "type": "Identifier",
                    "start": 4232,
                    "end": 4235,
                    "name": "BNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4238,
                    "end": 4243
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4253,
                  "end": 4264,
                  "name": {
                    "type": "Identifier",
                    "start": 4253,
                    "end": 4256,
                    "name": "CRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4259,
                    "end": 4264
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4266,
                  "end": 4277,
                  "name": {
                    "type": "Identifier",
                    "start": 4266,
                    "end": 4269,
                    "name": "CJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4272,
                    "end": 4277
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4279,
                  "end": 4290,
                  "name": {
                    "type": "Identifier",
                    "start": 4279,
                    "end": 4282,
                    "name": "CNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4285,
                    "end": 4290
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4300,
                  "end": 4311,
                  "name": {
                    "type": "Identifier",
                    "start": 4300,
                    "end": 4303,
                    "name": "RRF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4306,
                    "end": 4311
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4313,
                  "end": 4324,
                  "name": {
                    "type": "Identifier",
                    "start": 4313,
                    "end": 4316,
                    "name": "RJF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4319,
                    "end": 4324
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4326,
                  "end": 4337,
                  "name": {
                    "type": "Identifier",
                    "start": 4326,
                    "end": 4329,
                    "name": "RNF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4332,
                    "end": 4337
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 4352,
                "end": 4368,
                "name": "doneFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4362,
                  "end": 4368,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 4364,
                    "end": 4368
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4382,
                "end": 4572,
                "name": "failFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4392,
                  "end": 4572,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4394,
                    "end": 4572,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4395,
                        "end": 4400,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4396,
                          "end": 4400,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4398,
                            "end": 4400,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4398,
                              "end": 4400,
                              "name": "TJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4402,
                        "end": 4407,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4403,
                          "end": 4407,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4405,
                            "end": 4407,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4405,
                              "end": 4407,
                              "name": "UJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4409,
                        "end": 4414,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4410,
                          "end": 4414,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4412,
                            "end": 4414,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4412,
                              "end": 4414,
                              "name": "VJ",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 4416,
                        "end": 4426,
                        "argument": {
                          "type": "Identifier",
                          "start": 4419,
                          "end": 4420,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4420,
                          "end": 4426,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 4422,
                            "end": 4426,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 4422,
                              "end": 4424,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4422,
                                "end": 4424,
                                "name": "SJ",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4428,
                      "end": 4572,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4431,
                        "end": 4572,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 4431,
                            "end": 4550,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4431,
                              "end": 4442,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 4442,
                              "end": 4550,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 4443,
                                  "end": 4446,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4443,
                                    "end": 4446,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4448,
                                  "end": 4451,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4448,
                                    "end": 4451,
                                    "name": "AJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4453,
                                  "end": 4456,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4453,
                                    "end": 4456,
                                    "name": "ANF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4474,
                                  "end": 4477,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4474,
                                    "end": 4477,
                                    "name": "BRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4479,
                                  "end": 4482,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4479,
                                    "end": 4482,
                                    "name": "BJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4484,
                                  "end": 4487,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4484,
                                    "end": 4487,
                                    "name": "BNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4505,
                                  "end": 4508,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4505,
                                    "end": 4508,
                                    "name": "CRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4510,
                                  "end": 4513,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4510,
                                    "end": 4513,
                                    "name": "CJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4515,
                                  "end": 4518,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4515,
                                    "end": 4518,
                                    "name": "CNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4536,
                                  "end": 4539,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4536,
                                    "end": 4539,
                                    "name": "RRF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4541,
                                  "end": 4544,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4541,
                                    "end": 4544,
                                    "name": "RJF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4546,
                                  "end": 4549,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4546,
                                    "end": 4549,
                                    "name": "RNF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 4553,
                            "end": 4566,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4553,
                              "end": 4561,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 4561,
                              "end": 4566,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 4562,
                                  "end": 4565,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4562,
                                    "end": 4565,
                                    "name": "ARF",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 4569,
                            "end": 4572,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4569,
                              "end": 4572,
                              "name": "ARF",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4586,
                "end": 4607,
                "name": "progressFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4601,
                  "end": 4607,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 4603,
                    "end": 4607
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4608,
              "end": 4705,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4610,
                "end": 4705,
                "typeName": {
                  "type": "Identifier",
                  "start": 4610,
                  "end": 4621,
                  "name": "PromiseBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4621,
                  "end": 4705,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4622,
                      "end": 4625,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4622,
                        "end": 4625,
                        "name": "ARF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4627,
                      "end": 4630,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4627,
                        "end": 4630,
                        "name": "AJF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4632,
                      "end": 4635,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4632,
                        "end": 4635,
                        "name": "ANF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4645,
                      "end": 4648,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4645,
                        "end": 4648,
                        "name": "BRF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4650,
                      "end": 4653,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4650,
                        "end": 4653,
                        "name": "BJF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4655,
                      "end": 4658,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4655,
                        "end": 4658,
                        "name": "BNF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4668,
                      "end": 4671,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4668,
                        "end": 4671,
                        "name": "CRF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4673,
                      "end": 4676,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4673,
                        "end": 4676,
                        "name": "CJF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4678,
                      "end": 4681,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4678,
                        "end": 4681,
                        "name": "CNF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4691,
                      "end": 4694,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4691,
                        "end": 4694,
                        "name": "RRF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4696,
                      "end": 4699,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4696,
                        "end": 4699,
                        "name": "RJF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4701,
                      "end": 4704,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4701,
                        "end": 4704,
                        "name": "RNF",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 4711,
            "end": 5264,
            "key": {
              "type": "Identifier",
              "start": 4711,
              "end": 4715,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4715,
              "end": 4895,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4716,
                  "end": 4727,
                  "name": {
                    "type": "Identifier",
                    "start": 4716,
                    "end": 4719,
                    "name": "ARD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4722,
                    "end": 4727
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4729,
                  "end": 4740,
                  "name": {
                    "type": "Identifier",
                    "start": 4729,
                    "end": 4732,
                    "name": "AJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4735,
                    "end": 4740
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4742,
                  "end": 4753,
                  "name": {
                    "type": "Identifier",
                    "start": 4742,
                    "end": 4745,
                    "name": "AND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4748,
                    "end": 4753
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4763,
                  "end": 4774,
                  "name": {
                    "type": "Identifier",
                    "start": 4763,
                    "end": 4766,
                    "name": "BRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4769,
                    "end": 4774
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4776,
                  "end": 4787,
                  "name": {
                    "type": "Identifier",
                    "start": 4776,
                    "end": 4779,
                    "name": "BJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4782,
                    "end": 4787
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4789,
                  "end": 4800,
                  "name": {
                    "type": "Identifier",
                    "start": 4789,
                    "end": 4792,
                    "name": "BND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4795,
                    "end": 4800
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4810,
                  "end": 4821,
                  "name": {
                    "type": "Identifier",
                    "start": 4810,
                    "end": 4813,
                    "name": "CRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4816,
                    "end": 4821
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4823,
                  "end": 4834,
                  "name": {
                    "type": "Identifier",
                    "start": 4823,
                    "end": 4826,
                    "name": "CJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4829,
                    "end": 4834
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4836,
                  "end": 4847,
                  "name": {
                    "type": "Identifier",
                    "start": 4836,
                    "end": 4839,
                    "name": "CND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4842,
                    "end": 4847
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4857,
                  "end": 4868,
                  "name": {
                    "type": "Identifier",
                    "start": 4857,
                    "end": 4860,
                    "name": "RRD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4863,
                    "end": 4868
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4870,
                  "end": 4881,
                  "name": {
                    "type": "Identifier",
                    "start": 4870,
                    "end": 4873,
                    "name": "RJD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4876,
                    "end": 4881
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 4883,
                  "end": 4894,
                  "name": {
                    "type": "Identifier",
                    "start": 4883,
                    "end": 4886,
                    "name": "RND",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4889,
                    "end": 4894
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 4909,
                "end": 5099,
                "name": "doneFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4919,
                  "end": 5099,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4921,
                    "end": 5099,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4922,
                        "end": 4927,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4923,
                          "end": 4927,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4925,
                            "end": 4927,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4925,
                              "end": 4927,
                              "name": "TR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4929,
                        "end": 4934,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4930,
                          "end": 4934,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4932,
                            "end": 4934,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4932,
                              "end": 4934,
                              "name": "UR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 4936,
                        "end": 4941,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4937,
                          "end": 4941,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4939,
                            "end": 4941,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4939,
                              "end": 4941,
                              "name": "VR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 4943,
                        "end": 4953,
                        "argument": {
                          "type": "Identifier",
                          "start": 4946,
                          "end": 4947,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4947,
                          "end": 4953,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 4949,
                            "end": 4953,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 4949,
                              "end": 4951,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4949,
                                "end": 4951,
                                "name": "SR",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4955,
                      "end": 5099,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4958,
                        "end": 5099,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 4958,
                            "end": 5077,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4958,
                              "end": 4969,
                              "name": "PromiseBase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 4969,
                              "end": 5077,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 4970,
                                  "end": 4973,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4970,
                                    "end": 4973,
                                    "name": "ARD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4975,
                                  "end": 4978,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4975,
                                    "end": 4978,
                                    "name": "AJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 4980,
                                  "end": 4983,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4980,
                                    "end": 4983,
                                    "name": "AND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5001,
                                  "end": 5004,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5001,
                                    "end": 5004,
                                    "name": "BRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5006,
                                  "end": 5009,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5006,
                                    "end": 5009,
                                    "name": "BJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5011,
                                  "end": 5014,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5011,
                                    "end": 5014,
                                    "name": "BND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5032,
                                  "end": 5035,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5032,
                                    "end": 5035,
                                    "name": "CRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5037,
                                  "end": 5040,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5037,
                                    "end": 5040,
                                    "name": "CJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5042,
                                  "end": 5045,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5042,
                                    "end": 5045,
                                    "name": "CND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5063,
                                  "end": 5066,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5063,
                                    "end": 5066,
                                    "name": "RRD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5068,
                                  "end": 5071,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5068,
                                    "end": 5071,
                                    "name": "RJD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 5073,
                                  "end": 5076,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5073,
                                    "end": 5076,
                                    "name": "RND",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 5080,
                            "end": 5093,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5080,
                              "end": 5088,
                              "name": "Thenable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 5088,
                              "end": 5093,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 5089,
                                  "end": 5092,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5089,
                                    "end": 5092,
                                    "name": "ARD",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 5096,
                            "end": 5099,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5096,
                              "end": 5099,
                              "name": "ARD",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5113,
                "end": 5130,
                "name": "failFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5124,
                  "end": 5130,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 5126,
                    "end": 5130
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 5144,
                "end": 5165,
                "name": "progressFilter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5159,
                  "end": 5165,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 5161,
                    "end": 5165
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5166,
              "end": 5263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5168,
                "end": 5263,
                "typeName": {
                  "type": "Identifier",
                  "start": 5168,
                  "end": 5179,
                  "name": "PromiseBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5179,
                  "end": 5263,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5180,
                      "end": 5183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5180,
                        "end": 5183,
                        "name": "ARD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5185,
                      "end": 5188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5185,
                        "end": 5188,
                        "name": "AJD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5190,
                      "end": 5193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5190,
                        "end": 5193,
                        "name": "AND",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5203,
                      "end": 5206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5203,
                        "end": 5206,
                        "name": "BRD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5208,
                      "end": 5211,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5208,
                        "end": 5211,
                        "name": "BJD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5213,
                      "end": 5216,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5213,
                        "end": 5216,
                        "name": "BND",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5226,
                      "end": 5229,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5226,
                        "end": 5229,
                        "name": "CRD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5231,
                      "end": 5234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5231,
                        "end": 5234,
                        "name": "CJD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5236,
                      "end": 5239,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5236,
                        "end": 5239,
                        "name": "CND",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5249,
                      "end": 5252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5249,
                        "end": 5252,
                        "name": "RRD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5254,
                      "end": 5257,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5254,
                        "end": 5257,
                        "name": "RJD",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5259,
                      "end": 5262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5259,
                        "end": 5262,
                        "name": "RND",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5268,
      "end": 5423,
      "id": {
        "type": "Identifier",
        "start": 5278,
        "end": 5286,
        "name": "Promise3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 5339,
          "end": 5419,
          "expression": {
            "type": "Identifier",
            "start": 5339,
            "end": 5350,
            "name": "PromiseBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5350,
            "end": 5419,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5351,
                "end": 5353,
                "typeName": {
                  "type": "Identifier",
                  "start": 5351,
                  "end": 5353,
                  "name": "TR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5355,
                "end": 5357,
                "typeName": {
                  "type": "Identifier",
                  "start": 5355,
                  "end": 5357,
                  "name": "TJ",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5359,
                "end": 5361,
                "typeName": {
                  "type": "Identifier",
                  "start": 5359,
                  "end": 5361,
                  "name": "TN",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5367,
                "end": 5369,
                "typeName": {
                  "type": "Identifier",
                  "start": 5367,
                  "end": 5369,
                  "name": "UR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5371,
                "end": 5373,
                "typeName": {
                  "type": "Identifier",
                  "start": 5371,
                  "end": 5373,
                  "name": "UJ",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5375,
                "end": 5377,
                "typeName": {
                  "type": "Identifier",
                  "start": 5375,
                  "end": 5377,
                  "name": "UN",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5383,
                "end": 5385,
                "typeName": {
                  "type": "Identifier",
                  "start": 5383,
                  "end": 5385,
                  "name": "VR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5387,
                "end": 5389,
                "typeName": {
                  "type": "Identifier",
                  "start": 5387,
                  "end": 5389,
                  "name": "VJ",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5391,
                "end": 5393,
                "typeName": {
                  "type": "Identifier",
                  "start": 5391,
                  "end": 5393,
                  "name": "VN",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5286,
        "end": 5330,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5287,
            "end": 5289,
            "name": {
              "type": "Identifier",
              "start": 5287,
              "end": 5289,
              "name": "TR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5291,
            "end": 5293,
            "name": {
              "type": "Identifier",
              "start": 5291,
              "end": 5293,
              "name": "TJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5295,
            "end": 5297,
            "name": {
              "type": "Identifier",
              "start": 5295,
              "end": 5297,
              "name": "TN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5303,
            "end": 5305,
            "name": {
              "type": "Identifier",
              "start": 5303,
              "end": 5305,
              "name": "UR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5307,
            "end": 5309,
            "name": {
              "type": "Identifier",
              "start": 5307,
              "end": 5309,
              "name": "UJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5311,
            "end": 5313,
            "name": {
              "type": "Identifier",
              "start": 5311,
              "end": 5313,
              "name": "UN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5319,
            "end": 5321,
            "name": {
              "type": "Identifier",
              "start": 5319,
              "end": 5321,
              "name": "VR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5323,
            "end": 5325,
            "name": {
              "type": "Identifier",
              "start": 5323,
              "end": 5325,
              "name": "VJ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5327,
            "end": 5329,
            "name": {
              "type": "Identifier",
              "start": 5327,
              "end": 5329,
              "name": "VN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 5420,
        "end": 5423,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5425,
      "end": 5517,
      "id": {
        "type": "Identifier",
        "start": 5430,
        "end": 5431,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5434,
        "end": 5516,
        "typeName": {
          "type": "Identifier",
          "start": 5434,
          "end": 5441,
          "name": "Awaited",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5441,
          "end": 5516,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5442,
              "end": 5515,
              "typeName": {
                "type": "Identifier",
                "start": 5442,
                "end": 5450,
                "name": "Promise3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5450,
                "end": 5515,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 5451,
                    "end": 5457
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 5459,
                    "end": 5464,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5459,
                      "end": 5464,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 5466,
                    "end": 5472
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 5474,
                    "end": 5476,
                    "members": []
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
                    "start": 5500,
                    "end": 5507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5500,
                      "end": 5507,
                      "name": "Element",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 5509,
                    "end": 5514
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
