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
        "name": "AliasOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            },
            "optional": true,
            "start": 22,
            "end": 32
          }
        ],
        "start": 21,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Literal",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 77
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              },
              "optional": true,
              "start": 81,
              "end": 91
            }
          ],
          "start": 80,
          "end": 92
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 102,
              "end": 109
            }
          ],
          "start": 101,
          "end": 110
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 113,
            "end": 117
          },
          "start": 113,
          "end": 117
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 120,
            "end": 125
          },
          "start": 120,
          "end": 125
        },
        "start": 80,
        "end": 125
      },
      "declare": false,
      "start": 65,
      "end": 125
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Alias",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 170
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AliasOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 186
          },
          "typeArguments": null,
          "start": 173,
          "end": 186
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 196,
              "end": 203
            }
          ],
          "start": 195,
          "end": 204
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 207,
            "end": 211
          },
          "start": 207,
          "end": 211
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 214,
            "end": 219
          },
          "start": 214,
          "end": 219
        },
        "start": 173,
        "end": 219
      },
      "declare": false,
      "start": 160,
      "end": 219
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Labeled",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 302
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 310,
                "end": 316
              },
              "optional": true,
              "start": 306,
              "end": 316
            }
          ],
          "start": 305,
          "end": 317
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 327,
              "end": 334
            }
          ],
          "start": 326,
          "end": 335
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 338,
            "end": 342
          },
          "start": 338,
          "end": 342
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 345,
            "end": 350
          },
          "start": 345,
          "end": 350
        },
        "start": 305,
        "end": 350
      },
      "declare": false,
      "start": 290,
      "end": 350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Normal",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 398
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 402,
                "end": 408
              },
              "start": 402,
              "end": 409
            }
          ],
          "start": 401,
          "end": 410
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 420,
              "end": 427
            }
          ],
          "start": 419,
          "end": 428
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 431,
            "end": 435
          },
          "start": 431,
          "end": 435
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 438,
            "end": 443
          },
          "start": 438,
          "end": 443
        },
        "start": 401,
        "end": 443
      },
      "declare": false,
      "start": 387,
      "end": 443
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AliasRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 499
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 509,
                  "end": 515
                },
                "start": 509,
                "end": 517
              },
              "optional": false,
              "start": 506,
              "end": 517
            },
            "start": 503,
            "end": 517
          }
        ],
        "start": 502,
        "end": 518
      },
      "declare": false,
      "start": 485,
      "end": 519
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 537
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 547,
                    "end": 553
                  },
                  "start": 547,
                  "end": 555
                },
                "optional": false,
                "start": 544,
                "end": 555
              },
              "start": 541,
              "end": 555
            }
          ],
          "start": 540,
          "end": 556
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 566,
              "end": 573
            }
          ],
          "start": 565,
          "end": 574
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 577,
            "end": 581
          },
          "start": 577,
          "end": 581
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 584,
            "end": 589
          },
          "start": 584,
          "end": 589
        },
        "start": 540,
        "end": 589
      },
      "declare": false,
      "start": 521,
      "end": 590
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AliasedRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 634,
        "end": 645
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AliasRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 648,
            "end": 657
          },
          "typeArguments": null,
          "start": 648,
          "end": 657
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 667,
              "end": 674
            }
          ],
          "start": 666,
          "end": 675
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 678,
            "end": 682
          },
          "start": 678,
          "end": 682
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 685,
            "end": 690
          },
          "start": 685,
          "end": 690
        },
        "start": 648,
        "end": 690
      },
      "declare": false,
      "start": 629,
      "end": 691
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NormalRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 745
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 752,
                  "end": 758
                },
                "start": 752,
                "end": 760
              },
              "start": 749,
              "end": 760
            }
          ],
          "start": 748,
          "end": 761
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 771,
              "end": 778
            }
          ],
          "start": 770,
          "end": 779
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 782,
            "end": 786
          },
          "start": 782,
          "end": 786
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 789,
            "end": 794
          },
          "start": 789,
          "end": 794
        },
        "start": 748,
        "end": 794
      },
      "declare": false,
      "start": 730,
      "end": 795
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 832
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
    "value": "AliasOptional",
    "start": 5,
    "end": 18,
    "range": [
      5,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "Literal",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
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
    "type": "Identifier",
    "value": "unknown",
    "start": 102,
    "end": 109,
    "range": [
      102,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 113,
    "end": 117,
    "range": [
      113,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164,
    "range": [
      160,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "Alias",
    "start": 165,
    "end": 170,
    "range": [
      165,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "AliasOptional",
    "start": 173,
    "end": 186,
    "range": [
      173,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194,
    "range": [
      187,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 196,
    "end": 203,
    "range": [
      196,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 207,
    "end": 211,
    "range": [
      207,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 214,
    "end": 219,
    "range": [
      214,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 290,
    "end": 294,
    "range": [
      290,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "Labeled",
    "start": 295,
    "end": 302,
    "range": [
      295,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 310,
    "end": 316,
    "range": [
      310,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 318,
    "end": 325,
    "range": [
      318,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 327,
    "end": 334,
    "range": [
      327,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 338,
    "end": 342,
    "range": [
      338,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 345,
    "end": 350,
    "range": [
      345,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 387,
    "end": 391,
    "range": [
      387,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "Normal",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 402,
    "end": 408,
    "range": [
      402,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418,
    "range": [
      411,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 420,
    "end": 427,
    "range": [
      420,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 431,
    "end": 435,
    "range": [
      431,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 438,
    "end": 443,
    "range": [
      438,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 485,
    "end": 489,
    "range": [
      485,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "AliasRest",
    "start": 490,
    "end": 499,
    "range": [
      490,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 503,
    "end": 506,
    "range": [
      503,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 509,
    "end": 515,
    "range": [
      509,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 521,
    "end": 525,
    "range": [
      521,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "LiteralRest",
    "start": 526,
    "end": 537,
    "range": [
      526,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 541,
    "end": 544,
    "range": [
      541,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 547,
    "end": 553,
    "range": [
      547,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 557,
    "end": 564,
    "range": [
      557,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 566,
    "end": 573,
    "range": [
      566,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 577,
    "end": 581,
    "range": [
      577,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 584,
    "end": 589,
    "range": [
      584,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 629,
    "end": 633,
    "range": [
      629,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "AliasedRest",
    "start": 634,
    "end": 645,
    "range": [
      634,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "AliasRest",
    "start": 648,
    "end": 657,
    "range": [
      648,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 658,
    "end": 665,
    "range": [
      658,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 667,
    "end": 674,
    "range": [
      667,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 678,
    "end": 682,
    "range": [
      678,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 685,
    "end": 690,
    "range": [
      685,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 730,
    "end": 734,
    "range": [
      730,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "NormalRest",
    "start": 735,
    "end": 745,
    "range": [
      735,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 752,
    "end": 758,
    "range": [
      752,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 762,
    "end": 769,
    "range": [
      762,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 771,
    "end": 778,
    "range": [
      771,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 782,
    "end": 786,
    "range": [
      782,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 789,
    "end": 794,
    "range": [
      789,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  }
]
```
