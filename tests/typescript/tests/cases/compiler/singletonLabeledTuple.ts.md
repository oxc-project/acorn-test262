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
