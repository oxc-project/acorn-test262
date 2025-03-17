__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 832,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 18,
        "name": "AliasOptional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 21,
        "end": 33,
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "start": 22,
            "end": 32,
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            },
            "label": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "optional": true
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 77,
        "name": "Literal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 80,
        "end": 125,
        "checkType": {
          "type": "TSTupleType",
          "start": 80,
          "end": 92,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 81,
              "end": 91,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              },
              "label": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": true
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 101,
          "end": 110,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 102,
              "end": 109
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 113,
          "end": 117,
          "literal": {
            "type": "Literal",
            "start": 113,
            "end": 117,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 120,
          "end": 125,
          "literal": {
            "type": "Literal",
            "start": 120,
            "end": 125,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 160,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 170,
        "name": "Alias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 173,
        "end": 219,
        "checkType": {
          "type": "TSTypeReference",
          "start": 173,
          "end": 186,
          "typeName": {
            "type": "Identifier",
            "start": 173,
            "end": 186,
            "name": "AliasOptional",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 195,
          "end": 204,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 196,
              "end": 203
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 207,
          "end": 211,
          "literal": {
            "type": "Literal",
            "start": 207,
            "end": 211,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 214,
          "end": 219,
          "literal": {
            "type": "Literal",
            "start": 214,
            "end": 219,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 290,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 302,
        "name": "Labeled",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 305,
        "end": 350,
        "checkType": {
          "type": "TSTupleType",
          "start": 305,
          "end": 317,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 306,
              "end": 316,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 310,
                "end": 316
              },
              "label": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": true
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 326,
          "end": 335,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 327,
              "end": 334
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 338,
          "end": 342,
          "literal": {
            "type": "Literal",
            "start": 338,
            "end": 342,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 345,
          "end": 350,
          "literal": {
            "type": "Literal",
            "start": 345,
            "end": 350,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 387,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 398,
        "name": "Normal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 401,
        "end": 443,
        "checkType": {
          "type": "TSTupleType",
          "start": 401,
          "end": 410,
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "start": 402,
              "end": 409,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 402,
                "end": 408
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 419,
          "end": 428,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 420,
              "end": 427
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 431,
          "end": 435,
          "literal": {
            "type": "Literal",
            "start": 431,
            "end": 435,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 438,
          "end": 443,
          "literal": {
            "type": "Literal",
            "start": 438,
            "end": 443,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 485,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 499,
        "name": "AliasRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 502,
        "end": 518,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 503,
            "end": 517,
            "typeAnnotation": {
              "type": "TSNamedTupleMember",
              "start": 506,
              "end": 517,
              "elementType": {
                "type": "TSArrayType",
                "start": 509,
                "end": 517,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 509,
                  "end": 515
                }
              },
              "label": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 521,
      "end": 590,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 537,
        "name": "LiteralRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 540,
        "end": 589,
        "checkType": {
          "type": "TSTupleType",
          "start": 540,
          "end": 556,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 541,
              "end": 555,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 544,
                "end": 555,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 547,
                  "end": 555,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 547,
                    "end": 553
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 565,
          "end": 574,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 566,
              "end": 573
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 577,
          "end": 581,
          "literal": {
            "type": "Literal",
            "start": 577,
            "end": 581,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 584,
          "end": 589,
          "literal": {
            "type": "Literal",
            "start": 584,
            "end": 589,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 629,
      "end": 691,
      "id": {
        "type": "Identifier",
        "start": 634,
        "end": 645,
        "name": "AliasedRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 648,
        "end": 690,
        "checkType": {
          "type": "TSTypeReference",
          "start": 648,
          "end": 657,
          "typeName": {
            "type": "Identifier",
            "start": 648,
            "end": 657,
            "name": "AliasRest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 666,
          "end": 675,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 667,
              "end": 674
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 678,
          "end": 682,
          "literal": {
            "type": "Literal",
            "start": 678,
            "end": 682,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 685,
          "end": 690,
          "literal": {
            "type": "Literal",
            "start": 685,
            "end": 690,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 730,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 745,
        "name": "NormalRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 748,
        "end": 794,
        "checkType": {
          "type": "TSTupleType",
          "start": 748,
          "end": 761,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 749,
              "end": 760,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 752,
                "end": 760,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 752,
                  "end": 758
                }
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 770,
          "end": 779,
          "elementTypes": [
            {
              "type": "TSUnknownKeyword",
              "start": 771,
              "end": 778
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 782,
          "end": 786,
          "literal": {
            "type": "Literal",
            "start": 782,
            "end": 786,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 789,
          "end": 794,
          "literal": {
            "type": "Literal",
            "start": 789,
            "end": 794,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
