__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 18,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 36,
            "end": 50
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 55,
            "end": 70
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "visible",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 84,
                "end": 91
              },
              "start": 82,
              "end": 91
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 75,
            "end": 92
          }
        ],
        "start": 12,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 111
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
              "start": 112,
              "end": 113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 112,
            "end": 113
          }
        ],
        "start": 111,
        "end": 114
      },
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
                    "type": "TSStringKeyword",
                    "start": 123,
                    "end": 129
                  },
                  "start": 121,
                  "end": 129
                },
                "start": 120,
                "end": 129
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
                  "start": 132,
                  "end": 133
                },
                "typeArguments": null,
                "start": 132,
                "end": 133
              },
              "start": 130,
              "end": 133
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 119,
            "end": 133
          }
        ],
        "start": 117,
        "end": 135
      },
      "declare": false,
      "start": 96,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 146
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
            "name": "K0",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 157
          },
          "typeArguments": null,
          "start": 155,
          "end": 157
        },
        "start": 149,
        "end": 157
      },
      "declare": false,
      "start": 138,
      "end": 158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 178
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 193
          },
          "typeArguments": null,
          "start": 187,
          "end": 193
        },
        "start": 181,
        "end": 193
      },
      "declare": false,
      "start": 170,
      "end": 194
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 203
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 224
            },
            "typeArguments": null,
            "start": 218,
            "end": 224
          },
          "start": 212,
          "end": 224
        },
        "start": 206,
        "end": 224
      },
      "declare": false,
      "start": 195,
      "end": 225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 261
              },
              "typeArguments": null,
              "start": 255,
              "end": 261
            },
            "start": 249,
            "end": 261
          },
          "start": 243,
          "end": 261
        },
        "start": 237,
        "end": 261
      },
      "declare": false,
      "start": 226,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 271
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 304
                },
                "typeArguments": null,
                "start": 298,
                "end": 304
              },
              "start": 292,
              "end": 304
            },
            "start": 286,
            "end": 304
          },
          "start": 280,
          "end": 304
        },
        "start": 274,
        "end": 304
      },
      "declare": false,
      "start": 263,
      "end": 305
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 353
                  },
                  "typeArguments": null,
                  "start": 347,
                  "end": 353
                },
                "start": 341,
                "end": 353
              },
              "start": 335,
              "end": 353
            },
            "start": 329,
            "end": 353
          },
          "start": 323,
          "end": 353
        },
        "start": 317,
        "end": 353
      },
      "declare": false,
      "start": 306,
      "end": 354
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 363
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 408
                    },
                    "typeArguments": null,
                    "start": 402,
                    "end": 408
                  },
                  "start": 396,
                  "end": 408
                },
                "start": 390,
                "end": 408
              },
              "start": 384,
              "end": 408
            },
            "start": 378,
            "end": 408
          },
          "start": 372,
          "end": 408
        },
        "start": 366,
        "end": 408
      },
      "declare": false,
      "start": 355,
      "end": 409
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 419
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 427
          },
          "typeArguments": null,
          "start": 422,
          "end": 427
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 428,
            "end": 434
          },
          "start": 428,
          "end": 434
        },
        "start": 422,
        "end": 435
      },
      "declare": false,
      "start": 411,
      "end": 436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 445
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 453
          },
          "typeArguments": null,
          "start": 448,
          "end": 453
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 454,
            "end": 459
          },
          "start": 454,
          "end": 459
        },
        "start": 448,
        "end": 460
      },
      "declare": false,
      "start": 437,
      "end": 461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 480
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 488
          },
          "typeArguments": null,
          "start": 483,
          "end": 488
        },
        "indexType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 489,
                "end": 495
              },
              "start": 489,
              "end": 495
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 498,
                "end": 503
              },
              "start": 498,
              "end": 503
            }
          ],
          "start": 489,
          "end": 503
        },
        "start": 483,
        "end": 504
      },
      "declare": false,
      "start": 472,
      "end": 505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 524
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 532
          },
          "typeArguments": null,
          "start": 527,
          "end": 532
        },
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 533,
          "end": 536
        },
        "start": 527,
        "end": 537
      },
      "declare": false,
      "start": 516,
      "end": 538
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 565
          },
          "typeArguments": null,
          "start": 560,
          "end": 565
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 566,
          "end": 572
        },
        "start": 560,
        "end": 573
      },
      "declare": false,
      "start": 549,
      "end": 574
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 593
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 601
          },
          "typeArguments": null,
          "start": 596,
          "end": 601
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 602,
          "end": 608
        },
        "start": 596,
        "end": 609
      },
      "declare": false,
      "start": 585,
      "end": 610
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 629
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 637
          },
          "typeArguments": null,
          "start": 632,
          "end": 637
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 638,
          "end": 645
        },
        "start": 632,
        "end": 646
      },
      "declare": false,
      "start": 621,
      "end": 647
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T17",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 666
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 674
          },
          "typeArguments": null,
          "start": 669,
          "end": 674
        },
        "indexType": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        },
        "start": 669,
        "end": 680
      },
      "declare": false,
      "start": 658,
      "end": 681
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T18",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 700
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 708
          },
          "typeArguments": null,
          "start": 703,
          "end": 708
        },
        "indexType": {
          "type": "TSUndefinedKeyword",
          "start": 709,
          "end": 718
        },
        "start": 703,
        "end": 719
      },
      "declare": false,
      "start": 692,
      "end": 720
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T19",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 739
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 747
          },
          "typeArguments": null,
          "start": 742,
          "end": 747
        },
        "indexType": {
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
                "start": 750,
                "end": 751
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 753,
                  "end": 759
                },
                "start": 751,
                "end": 759
              },
              "accessibility": null,
              "static": false,
              "start": 750,
              "end": 759
            }
          ],
          "start": 748,
          "end": 761
        },
        "start": 742,
        "end": 762
      },
      "declare": false,
      "start": 731,
      "end": 763
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 779,
        "end": 782
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 790
          },
          "typeArguments": null,
          "start": 785,
          "end": 790
        },
        "indexType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 791,
              "end": 797
            },
            {
              "type": "TSNumberKeyword",
              "start": 800,
              "end": 806
            }
          ],
          "start": 791,
          "end": 806
        },
        "start": 785,
        "end": 807
      },
      "declare": false,
      "start": 774,
      "end": 808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 827
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 835
          },
          "typeArguments": null,
          "start": 830,
          "end": 835
        },
        "indexType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 836,
              "end": 842
            },
            {
              "type": "TSNumberKeyword",
              "start": 845,
              "end": 851
            }
          ],
          "start": 836,
          "end": 851
        },
        "start": 830,
        "end": 852
      },
      "declare": false,
      "start": 819,
      "end": 853
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 862
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 870
          },
          "typeArguments": null,
          "start": 865,
          "end": 870
        },
        "indexType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 871,
              "end": 877
            },
            {
              "type": "TSBooleanKeyword",
              "start": 880,
              "end": 887
            }
          ],
          "start": 871,
          "end": 887
        },
        "start": 865,
        "end": 888
      },
      "declare": false,
      "start": 854,
      "end": 889
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 909
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 912,
            "end": 918
          },
          "start": 912,
          "end": 920
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 921,
            "end": 929
          },
          "start": 921,
          "end": 929
        },
        "start": 912,
        "end": 930
      },
      "declare": false,
      "start": 901,
      "end": 931
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 937,
        "end": 940
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 943,
            "end": 949
          },
          "start": 943,
          "end": 951
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 952,
          "end": 958
        },
        "start": 943,
        "end": 959
      },
      "declare": false,
      "start": 932,
      "end": 960
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 966,
        "end": 969
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 972,
            "end": 978
          },
          "start": 972,
          "end": 980
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 981,
          "end": 987
        },
        "start": 972,
        "end": 988
      },
      "declare": false,
      "start": 961,
      "end": 989
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T33",
        "optional": false,
        "typeAnnotation": null,
        "start": 1005,
        "end": 1008
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 1011,
            "end": 1017
          },
          "start": 1011,
          "end": 1019
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1020,
          "end": 1027
        },
        "start": 1011,
        "end": 1028
      },
      "declare": false,
      "start": 1000,
      "end": 1029
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1049
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1052,
            "end": 1062
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1063,
                "end": 1069
              }
            ],
            "start": 1062,
            "end": 1070
          },
          "start": 1052,
          "end": 1070
        },
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 1071,
          "end": 1074
        },
        "start": 1052,
        "end": 1075
      },
      "declare": false,
      "start": 1041,
      "end": 1076
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 1082,
        "end": 1085
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1098
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1099,
                "end": 1105
              }
            ],
            "start": 1098,
            "end": 1106
          },
          "start": 1088,
          "end": 1106
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 1107,
          "end": 1113
        },
        "start": 1088,
        "end": 1114
      },
      "declare": false,
      "start": 1077,
      "end": 1115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 1121,
        "end": 1124
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1137
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1138,
                "end": 1144
              }
            ],
            "start": 1137,
            "end": 1145
          },
          "start": 1127,
          "end": 1145
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 1146,
          "end": 1152
        },
        "start": 1127,
        "end": 1153
      },
      "declare": false,
      "start": 1116,
      "end": 1154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1163
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1176
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1177,
                "end": 1183
              }
            ],
            "start": 1176,
            "end": 1184
          },
          "start": 1166,
          "end": 1184
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1185,
          "end": 1192
        },
        "start": 1166,
        "end": 1193
      },
      "declare": false,
      "start": 1155,
      "end": 1194
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1214
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1217,
          "end": 1220
        },
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 1221,
          "end": 1224
        },
        "start": 1217,
        "end": 1225
      },
      "declare": false,
      "start": 1206,
      "end": 1226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null,
        "start": 1232,
        "end": 1235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1238,
          "end": 1241
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 1242,
          "end": 1248
        },
        "start": 1238,
        "end": 1249
      },
      "declare": false,
      "start": 1227,
      "end": 1250
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1262,
          "end": 1265
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 1266,
          "end": 1272
        },
        "start": 1262,
        "end": 1273
      },
      "declare": false,
      "start": 1251,
      "end": 1274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1286,
          "end": 1289
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1290,
          "end": 1297
        },
        "start": 1286,
        "end": 1298
      },
      "declare": false,
      "start": 1275,
      "end": 1299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T60",
        "optional": false,
        "typeAnnotation": null,
        "start": 1316,
        "end": 1319
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1322,
          "end": 1324
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "toString",
            "raw": "\"toString\"",
            "start": 1325,
            "end": 1335
          },
          "start": 1325,
          "end": 1335
        },
        "start": 1322,
        "end": 1336
      },
      "declare": false,
      "start": 1311,
      "end": 1337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T61",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1346
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 1349,
          "end": 1351
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "toString",
            "raw": "\"toString\"",
            "start": 1352,
            "end": 1362
          },
          "start": 1352,
          "end": 1362
        },
        "start": 1349,
        "end": 1363
      },
      "declare": false,
      "start": 1338,
      "end": 1364
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1384,
                "end": 1391
              },
              "start": 1382,
              "end": 1391
            },
            "start": 1378,
            "end": 1391
          },
          "init": null,
          "definite": false,
          "start": 1378,
          "end": 1391
        }
      ],
      "declare": true,
      "start": 1366,
      "end": 1392
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1414
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1415,
            "end": 1416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1419
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1434,
                  "end": 1435
                },
                "typeArguments": null,
                "start": 1434,
                "end": 1435
              },
              "start": 1428,
              "end": 1435
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1418,
            "end": 1435
          }
        ],
        "start": 1414,
        "end": 1436
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 1442,
                "end": 1443
              },
              "typeArguments": null,
              "start": 1442,
              "end": 1443
            },
            "start": 1440,
            "end": 1443
          },
          "start": 1437,
          "end": 1443
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "typeArguments": null,
              "start": 1450,
              "end": 1451
            },
            "start": 1448,
            "end": 1451
          },
          "start": 1445,
          "end": 1451
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1466,
                "end": 1469
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1473
              },
              "optional": false,
              "computed": true,
              "start": 1466,
              "end": 1474
            },
            "start": 1459,
            "end": 1475
          }
        ],
        "start": 1453,
        "end": 1477
      },
      "expression": false,
      "start": 1394,
      "end": 1477
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1499
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1500,
            "end": 1501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1504
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1520
                },
                "typeArguments": null,
                "start": 1519,
                "end": 1520
              },
              "start": 1513,
              "end": 1520
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1503,
            "end": 1520
          }
        ],
        "start": 1499,
        "end": 1521
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 1527,
                "end": 1528
              },
              "typeArguments": null,
              "start": 1527,
              "end": 1528
            },
            "start": 1525,
            "end": 1528
          },
          "start": 1522,
          "end": 1528
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1535,
                "end": 1536
              },
              "typeArguments": null,
              "start": 1535,
              "end": 1536
            },
            "start": 1533,
            "end": 1536
          },
          "start": 1530,
          "end": 1536
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1545,
                  "end": 1546
                },
                "typeArguments": null,
                "start": 1545,
                "end": 1546
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "typeArguments": null,
                "start": 1547,
                "end": 1548
              },
              "start": 1545,
              "end": 1549
            },
            "start": 1543,
            "end": 1549
          },
          "start": 1538,
          "end": 1549
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1557,
                  "end": 1560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1564
                },
                "optional": false,
                "computed": true,
                "start": 1557,
                "end": 1565
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1568,
                "end": 1573
              },
              "start": 1557,
              "end": 1573
            },
            "directive": null,
            "start": 1557,
            "end": 1574
          }
        ],
        "start": 1551,
        "end": 1576
      },
      "expression": false,
      "start": 1479,
      "end": 1576
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1590
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1603
              },
              "typeArguments": null,
              "start": 1598,
              "end": 1603
            },
            "start": 1596,
            "end": 1603
          },
          "start": 1591,
          "end": 1603
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1615,
                  "end": 1617
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1620,
                    "end": 1631
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1637
                    },
                    {
                      "type": "Literal",
                      "value": "name",
                      "raw": "\"name\"",
                      "start": 1639,
                      "end": 1645
                    }
                  ],
                  "optional": false,
                  "start": 1620,
                  "end": 1646
                },
                "definite": false,
                "start": 1615,
                "end": 1646
              }
            ],
            "declare": false,
            "start": 1611,
            "end": 1647
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1656,
                  "end": 1658
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1661,
                    "end": 1672
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1673,
                      "end": 1678
                    },
                    {
                      "type": "Literal",
                      "value": "size",
                      "raw": "\"size\"",
                      "start": 1680,
                      "end": 1686
                    }
                  ],
                  "optional": false,
                  "start": 1661,
                  "end": 1687
                },
                "definite": false,
                "start": 1656,
                "end": 1687
              }
            ],
            "declare": false,
            "start": 1652,
            "end": 1688
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1707,
                  "end": 1709
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1712,
                    "end": 1723
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1729
                    },
                    {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1731,
                        "end": 1735
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": "name",
                        "raw": "\"name\"",
                        "start": 1738,
                        "end": 1744
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": "size",
                        "raw": "\"size\"",
                        "start": 1747,
                        "end": 1753
                      },
                      "start": 1731,
                      "end": 1753
                    }
                  ],
                  "optional": false,
                  "start": 1712,
                  "end": 1754
                },
                "definite": false,
                "start": 1707,
                "end": 1754
              }
            ],
            "declare": false,
            "start": 1703,
            "end": 1755
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "setProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1782,
                  "end": 1787
                },
                {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 1789,
                  "end": 1795
                },
                {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 1797,
                  "end": 1808
                }
              ],
              "optional": false,
              "start": 1770,
              "end": 1809
            },
            "directive": null,
            "start": 1770,
            "end": 1810
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "setProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1826
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1827,
                  "end": 1832
                },
                {
                  "type": "Literal",
                  "value": "size",
                  "raw": "\"size\"",
                  "start": 1834,
                  "end": 1840
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1842,
                  "end": 1844
                }
              ],
              "optional": false,
              "start": 1815,
              "end": 1845
            },
            "directive": null,
            "start": 1815,
            "end": 1846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "setProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1861,
                "end": 1872
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1878
                },
                {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1880,
                    "end": 1884
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1887,
                    "end": 1893
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "size",
                    "raw": "\"size\"",
                    "start": 1896,
                    "end": 1902
                  },
                  "start": 1880,
                  "end": 1902
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1904,
                  "end": 1906
                }
              ],
              "optional": false,
              "start": 1861,
              "end": 1907
            },
            "directive": null,
            "start": 1861,
            "end": 1908
          }
        ],
        "start": 1605,
        "end": 1920
      },
      "expression": false,
      "start": 1578,
      "end": 1920
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1931,
        "end": 1934
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1935,
              "end": 1936
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1935,
            "end": 1936
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1939
          }
        ],
        "start": 1934,
        "end": 1940
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1944,
                    "end": 1945
                  },
                  "typeArguments": null,
                  "start": 1944,
                  "end": 1945
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1948,
                    "end": 1949
                  },
                  "typeArguments": null,
                  "start": 1948,
                  "end": 1949
                }
              ],
              "start": 1944,
              "end": 1949
            },
            "start": 1942,
            "end": 1949
          },
          "start": 1941,
          "end": 1949
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1954,
                    "end": 1955
                  },
                  "typeArguments": null,
                  "start": 1954,
                  "end": 1955
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1958,
                    "end": 1959
                  },
                  "typeArguments": null,
                  "start": 1958,
                  "end": 1959
                }
              ],
              "start": 1954,
              "end": 1959
            },
            "start": 1952,
            "end": 1959
          },
          "start": 1951,
          "end": 1959
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1972,
                      "end": 1973
                    },
                    "typeArguments": null,
                    "start": 1972,
                    "end": 1973
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1976,
                      "end": 1977
                    },
                    "typeArguments": null,
                    "start": 1976,
                    "end": 1977
                  }
                ],
                "start": 1972,
                "end": 1977
              },
              "start": 1965,
              "end": 1978
            },
            "start": 1963,
            "end": 1978
          },
          "start": 1961,
          "end": 1978
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1990,
                      "end": 1991
                    },
                    "typeArguments": null,
                    "start": 1990,
                    "end": 1991
                  },
                  "start": 1984,
                  "end": 1991
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
                      "start": 2000,
                      "end": 2001
                    },
                    "typeArguments": null,
                    "start": 2000,
                    "end": 2001
                  },
                  "start": 1994,
                  "end": 2001
                }
              ],
              "start": 1984,
              "end": 2001
            },
            "start": 1982,
            "end": 2001
          },
          "start": 1980,
          "end": 2001
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2014,
                      "end": 2015
                    },
                    "typeArguments": null,
                    "start": 2014,
                    "end": 2015
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2019
                    },
                    "typeArguments": null,
                    "start": 2018,
                    "end": 2019
                  }
                ],
                "start": 2014,
                "end": 2019
              },
              "start": 2007,
              "end": 2020
            },
            "start": 2005,
            "end": 2020
          },
          "start": 2003,
          "end": 2020
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2032,
                      "end": 2033
                    },
                    "typeArguments": null,
                    "start": 2032,
                    "end": 2033
                  },
                  "start": 2026,
                  "end": 2033
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
                      "start": 2042,
                      "end": 2043
                    },
                    "typeArguments": null,
                    "start": 2042,
                    "end": 2043
                  },
                  "start": 2036,
                  "end": 2043
                }
              ],
              "start": 2026,
              "end": 2043
            },
            "start": 2024,
            "end": 2043
          },
          "start": 2022,
          "end": 2043
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2052
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2055
              },
              "optional": false,
              "computed": true,
              "start": 2051,
              "end": 2056
            },
            "directive": null,
            "start": 2051,
            "end": 2057
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2062,
                "end": 2063
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2064,
                "end": 2066
              },
              "optional": false,
              "computed": true,
              "start": 2062,
              "end": 2067
            },
            "directive": null,
            "start": 2062,
            "end": 2068
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2073,
                "end": 2074
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2077
              },
              "optional": false,
              "computed": true,
              "start": 2073,
              "end": 2078
            },
            "directive": null,
            "start": 2073,
            "end": 2079
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2094,
                "end": 2095
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2096,
                "end": 2098
              },
              "optional": false,
              "computed": true,
              "start": 2094,
              "end": 2099
            },
            "directive": null,
            "start": 2094,
            "end": 2100
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2116,
                "end": 2117
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2118,
                "end": 2120
              },
              "optional": false,
              "computed": true,
              "start": 2116,
              "end": 2121
            },
            "directive": null,
            "start": 2116,
            "end": 2122
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2127,
                "end": 2128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2129,
                "end": 2131
              },
              "optional": false,
              "computed": true,
              "start": 2127,
              "end": 2132
            },
            "directive": null,
            "start": 2127,
            "end": 2133
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2138,
                "end": 2139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2140,
                "end": 2142
              },
              "optional": false,
              "computed": true,
              "start": 2138,
              "end": 2143
            },
            "directive": null,
            "start": 2138,
            "end": 2144
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2149,
                "end": 2150
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2151,
                "end": 2153
              },
              "optional": false,
              "computed": true,
              "start": 2149,
              "end": 2154
            },
            "directive": null,
            "start": 2149,
            "end": 2155
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2161,
                "end": 2163
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2166,
                "end": 2168
              },
              "start": 2161,
              "end": 2168
            },
            "directive": null,
            "start": 2161,
            "end": 2169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2174,
                "end": 2176
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2179,
                "end": 2181
              },
              "start": 2174,
              "end": 2181
            },
            "directive": null,
            "start": 2174,
            "end": 2182
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2197,
                "end": 2199
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2202,
                "end": 2204
              },
              "start": 2197,
              "end": 2204
            },
            "directive": null,
            "start": 2197,
            "end": 2205
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2223
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2226,
                "end": 2228
              },
              "start": 2221,
              "end": 2228
            },
            "directive": null,
            "start": 2221,
            "end": 2229
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2236
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2239,
                "end": 2241
              },
              "start": 2234,
              "end": 2241
            },
            "directive": null,
            "start": 2234,
            "end": 2242
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2257,
                "end": 2259
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2262,
                "end": 2264
              },
              "start": 2257,
              "end": 2264
            },
            "directive": null,
            "start": 2257,
            "end": 2265
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2281,
                "end": 2283
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2286,
                "end": 2288
              },
              "start": 2281,
              "end": 2288
            },
            "directive": null,
            "start": 2281,
            "end": 2289
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2294,
                "end": 2296
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2299,
                "end": 2301
              },
              "start": 2294,
              "end": 2301
            },
            "directive": null,
            "start": 2294,
            "end": 2302
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2307,
                "end": 2309
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2312,
                "end": 2314
              },
              "start": 2307,
              "end": 2314
            },
            "directive": null,
            "start": 2307,
            "end": 2315
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2321,
                "end": 2323
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2326,
                "end": 2328
              },
              "start": 2321,
              "end": 2328
            },
            "directive": null,
            "start": 2321,
            "end": 2329
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2334,
                "end": 2336
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2339,
                "end": 2341
              },
              "start": 2334,
              "end": 2341
            },
            "directive": null,
            "start": 2334,
            "end": 2342
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2347,
                "end": 2349
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2352,
                "end": 2354
              },
              "start": 2347,
              "end": 2354
            },
            "directive": null,
            "start": 2347,
            "end": 2355
          }
        ],
        "start": 2045,
        "end": 2357
      },
      "expression": false,
      "start": 1922,
      "end": 2357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2391
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2392,
              "end": 2393
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2392,
            "end": 2393
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2395,
              "end": 2396
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 2405,
                "end": 2412
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2419,
                        "end": 2420
                      },
                      "typeArguments": null,
                      "start": 2419,
                      "end": 2420
                    },
                    "start": 2413,
                    "end": 2420
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2422,
                    "end": 2428
                  }
                ],
                "start": 2412,
                "end": 2429
              },
              "start": 2405,
              "end": 2429
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2395,
            "end": 2429
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2431,
              "end": 2432
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2441,
                "end": 2442
              },
              "typeArguments": null,
              "start": 2441,
              "end": 2442
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2431,
            "end": 2442
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 2444,
              "end": 2445
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2454,
                "end": 2455
              },
              "typeArguments": null,
              "start": 2454,
              "end": 2455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2444,
            "end": 2455
          }
        ],
        "start": 2391,
        "end": 2456
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2465,
                "end": 2466
              },
              "typeArguments": null,
              "start": 2465,
              "end": 2466
            },
            "start": 2463,
            "end": 2466
          },
          "start": 2462,
          "end": 2466
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2471,
                "end": 2472
              },
              "typeArguments": null,
              "start": 2471,
              "end": 2472
            },
            "start": 2469,
            "end": 2472
          },
          "start": 2468,
          "end": 2472
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tk",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2478,
                  "end": 2479
                },
                "typeArguments": null,
                "start": 2478,
                "end": 2479
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2480,
                  "end": 2481
                },
                "typeArguments": null,
                "start": 2480,
                "end": 2481
              },
              "start": 2478,
              "end": 2482
            },
            "start": 2476,
            "end": 2482
          },
          "start": 2474,
          "end": 2482
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2487,
                "end": 2488
              },
              "typeArguments": null,
              "start": 2487,
              "end": 2488
            },
            "start": 2485,
            "end": 2488
          },
          "start": 2484,
          "end": 2488
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "J",
                "optional": false,
                "typeAnnotation": null,
                "start": 2493,
                "end": 2494
              },
              "typeArguments": null,
              "start": 2493,
              "end": 2494
            },
            "start": 2491,
            "end": 2494
          },
          "start": 2490,
          "end": 2494
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uk",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2500,
                  "end": 2501
                },
                "typeArguments": null,
                "start": 2500,
                "end": 2501
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2502,
                  "end": 2503
                },
                "typeArguments": null,
                "start": 2502,
                "end": 2503
              },
              "start": 2500,
              "end": 2504
            },
            "start": 2498,
            "end": 2504
          },
          "start": 2496,
          "end": 2504
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2510,
                  "end": 2511
                },
                "typeArguments": null,
                "start": 2510,
                "end": 2511
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2512,
                  "end": 2513
                },
                "typeArguments": null,
                "start": 2512,
                "end": 2513
              },
              "start": 2510,
              "end": 2514
            },
            "start": 2508,
            "end": 2514
          },
          "start": 2506,
          "end": 2514
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2520,
                  "end": 2521
                },
                "typeArguments": null,
                "start": 2520,
                "end": 2521
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2522,
                  "end": 2523
                },
                "typeArguments": null,
                "start": 2522,
                "end": 2523
              },
              "start": 2520,
              "end": 2524
            },
            "start": 2518,
            "end": 2524
          },
          "start": 2516,
          "end": 2524
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2527,
          "end": 2531
        },
        "start": 2525,
        "end": 2531
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2547,
                    "end": 2550
                  },
                  "init": null,
                  "definite": false,
                  "start": 2547,
                  "end": 2550
                }
              ],
              "declare": false,
              "start": 2543,
              "end": 2550
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2554,
              "end": 2555
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2567,
                      "end": 2570
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2573,
                      "end": 2574
                    },
                    "start": 2567,
                    "end": 2574
                  },
                  "directive": null,
                  "start": 2567,
                  "end": 2574
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2604,
                      "end": 2605
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2608,
                      "end": 2611
                    },
                    "start": 2604,
                    "end": 2611
                  },
                  "directive": null,
                  "start": 2604,
                  "end": 2611
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2645,
                        "end": 2646
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2647,
                        "end": 2650
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2645,
                      "end": 2651
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tk",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2654,
                      "end": 2656
                    },
                    "start": 2645,
                    "end": 2656
                  },
                  "directive": null,
                  "start": 2645,
                  "end": 2657
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tk",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2693,
                      "end": 2695
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2698,
                        "end": 2699
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2700,
                        "end": 2703
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2698,
                      "end": 2704
                    },
                    "start": 2693,
                    "end": 2704
                  },
                  "directive": null,
                  "start": 2693,
                  "end": 2705
                }
              ],
              "start": 2557,
              "end": 2742
            },
            "start": 2538,
            "end": 2742
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2747,
                "end": 2749
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2752,
                "end": 2754
              },
              "start": 2747,
              "end": 2754
            },
            "directive": null,
            "start": 2747,
            "end": 2755
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2760,
                "end": 2762
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2765,
                "end": 2767
              },
              "start": 2760,
              "end": 2767
            },
            "directive": null,
            "start": 2760,
            "end": 2768
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2783,
                "end": 2785
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2788,
                "end": 2790
              },
              "start": 2783,
              "end": 2790
            },
            "directive": null,
            "start": 2783,
            "end": 2791
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2796,
                "end": 2798
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2801,
                "end": 2803
              },
              "start": 2796,
              "end": 2803
            },
            "directive": null,
            "start": 2796,
            "end": 2804
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2819,
                "end": 2821
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2824,
                "end": 2826
              },
              "start": 2819,
              "end": 2826
            },
            "directive": null,
            "start": 2819,
            "end": 2827
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2832,
                "end": 2834
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2837,
                "end": 2839
              },
              "start": 2832,
              "end": 2839
            },
            "directive": null,
            "start": 2832,
            "end": 2840
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2855,
                "end": 2857
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2860,
                "end": 2862
              },
              "start": 2855,
              "end": 2862
            },
            "directive": null,
            "start": 2855,
            "end": 2863
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2868,
                "end": 2870
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2873,
                "end": 2875
              },
              "start": 2868,
              "end": 2875
            },
            "directive": null,
            "start": 2868,
            "end": 2876
          }
        ],
        "start": 2532,
        "end": 2887
      },
      "expression": false,
      "start": 2380,
      "end": 2887
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2944
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2946
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2958,
                "end": 2959
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2969,
                    "end": 2970
                  },
                  "typeArguments": null,
                  "start": 2969,
                  "end": 2970
                },
                "start": 2963,
                "end": 2970
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2973,
                "end": 2979
              },
              "optional": false,
              "readonly": null,
              "start": 2955,
              "end": 2981
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2945,
            "end": 2981
          }
        ],
        "start": 2944,
        "end": 2982
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2992,
                  "end": 2993
                },
                "typeArguments": null,
                "start": 2992,
                "end": 2993
              },
              "start": 2986,
              "end": 2993
            },
            "start": 2984,
            "end": 2993
          },
          "start": 2983,
          "end": 2993
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 3001,
                "end": 3002
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3005,
                "end": 3007
              },
              "start": 3001,
              "end": 3007
            },
            "directive": null,
            "start": 3001,
            "end": 3008
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 3022,
                "end": 3023
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3026,
                "end": 3033
              },
              "start": 3022,
              "end": 3033
            },
            "directive": null,
            "start": 3022,
            "end": 3034
          }
        ],
        "start": 2995,
        "end": 3045
      },
      "expression": false,
      "start": 2933,
      "end": 3045
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UndefinedKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3087
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
              "start": 3088,
              "end": 3089
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3098,
                "end": 3104
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3105,
                    "end": 3111
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3113,
                    "end": 3116
                  }
                ],
                "start": 3104,
                "end": 3117
              },
              "start": 3098,
              "end": 3117
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3088,
            "end": 3117
          }
        ],
        "start": 3087,
        "end": 3118
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3126,
          "end": 3127
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3137,
              "end": 3138
            },
            "typeArguments": null,
            "start": 3137,
            "end": 3138
          },
          "start": 3131,
          "end": 3138
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUndefinedKeyword",
            "start": 3141,
            "end": 3150
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3159,
                "end": 3160
              },
              "typeArguments": null,
              "start": 3159,
              "end": 3160
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3161,
                "end": 3162
              },
              "typeArguments": null,
              "start": 3161,
              "end": 3162
            },
            "start": 3159,
            "end": 3163
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3166,
              "end": 3167
            },
            "typeArguments": null,
            "start": 3166,
            "end": 3167
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3170,
            "end": 3175
          },
          "start": 3141,
          "end": 3175
        },
        "optional": false,
        "readonly": null,
        "start": 3121,
        "end": 3177
      },
      "declare": false,
      "start": 3069,
      "end": 3178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3185,
        "end": 3191
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
              "start": 3195,
              "end": 3196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3198,
                "end": 3204
              },
              "start": 3196,
              "end": 3204
            },
            "accessibility": null,
            "static": false,
            "start": 3195,
            "end": 3205
          },
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
              "start": 3206,
              "end": 3207
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3209,
                    "end": 3215
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3218,
                    "end": 3227
                  }
                ],
                "start": 3209,
                "end": 3227
              },
              "start": 3207,
              "end": 3227
            },
            "accessibility": null,
            "static": false,
            "start": 3206,
            "end": 3227
          }
        ],
        "start": 3194,
        "end": 3228
      },
      "declare": false,
      "start": 3180,
      "end": 3228
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3235,
        "end": 3242
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UndefinedKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3245,
          "end": 3258
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3259,
                "end": 3265
              },
              "typeArguments": null,
              "start": 3259,
              "end": 3265
            }
          ],
          "start": 3258,
          "end": 3266
        },
        "start": 3245,
        "end": 3266
      },
      "declare": false,
      "start": 3230,
      "end": 3267
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3279,
                    "end": 3286
                  },
                  "typeArguments": null,
                  "start": 3279,
                  "end": 3286
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 3287,
                    "end": 3290
                  },
                  "start": 3287,
                  "end": 3290
                },
                "start": 3279,
                "end": 3291
              },
              "start": 3277,
              "end": 3291
            },
            "start": 3275,
            "end": 3291
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 3294,
            "end": 3297
          },
          "definite": false,
          "start": 3275,
          "end": 3297
        }
      ],
      "declare": false,
      "start": 3269,
      "end": 3298
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3326
                  },
                  "typeArguments": null,
                  "start": 3319,
                  "end": 3326
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 3327,
                    "end": 3330
                  },
                  "start": 3327,
                  "end": 3330
                },
                "start": 3319,
                "end": 3331
              },
              "start": 3317,
              "end": 3331
            },
            "start": 3315,
            "end": 3331
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 3334,
            "end": 3337
          },
          "definite": false,
          "start": 3315,
          "end": 3337
        }
      ],
      "declare": false,
      "start": 3309,
      "end": 3338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3349,
        "end": 3354
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3355,
              "end": 3356
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3365,
                "end": 3371
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3372,
                    "end": 3378
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3380,
                    "end": 3383
                  }
                ],
                "start": 3371,
                "end": 3384
              },
              "start": 3365,
              "end": 3384
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3355,
            "end": 3384
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3387
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3402,
                  "end": 3403
                },
                "typeArguments": null,
                "start": 3402,
                "end": 3403
              },
              "start": 3396,
              "end": 3403
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3386,
            "end": 3403
          }
        ],
        "start": 3354,
        "end": 3404
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3408,
                "end": 3409
              },
              "typeArguments": null,
              "start": 3408,
              "end": 3409
            },
            "start": 3406,
            "end": 3409
          },
          "start": 3405,
          "end": 3409
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3415
              },
              "typeArguments": null,
              "start": 3414,
              "end": 3415
            },
            "start": 3412,
            "end": 3415
          },
          "start": 3411,
          "end": 3415
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3423,
                  "end": 3424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3425,
                  "end": 3426
                },
                "optional": false,
                "computed": true,
                "start": 3423,
                "end": 3427
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3430,
                "end": 3432
              },
              "start": 3423,
              "end": 3432
            },
            "directive": null,
            "start": 3423,
            "end": 3433
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3448,
                  "end": 3449
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3450,
                  "end": 3451
                },
                "optional": false,
                "computed": true,
                "start": 3448,
                "end": 3452
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3455,
                "end": 3462
              },
              "start": 3448,
              "end": 3462
            },
            "directive": null,
            "start": 3448,
            "end": 3463
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3478,
                  "end": 3479
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3480,
                  "end": 3481
                },
                "optional": false,
                "computed": true,
                "start": 3478,
                "end": 3482
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 3486,
                    "end": 3488
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 3490,
                    "end": 3492
                  }
                ],
                "start": 3485,
                "end": 3493
              },
              "start": 3478,
              "end": 3493
            },
            "directive": null,
            "start": 3478,
            "end": 3494
          }
        ],
        "start": 3417,
        "end": 3506
      },
      "expression": false,
      "start": 3340,
      "end": 3506
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3539,
        "end": 3542
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3543,
              "end": 3544
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3543,
            "end": 3544
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3546,
              "end": 3547
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3562,
                  "end": 3563
                },
                "typeArguments": null,
                "start": 3562,
                "end": 3563
              },
              "start": 3556,
              "end": 3563
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3546,
            "end": 3563
          }
        ],
        "start": 3542,
        "end": 3564
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3580,
                          "end": 3587
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
                                "start": 3588,
                                "end": 3594
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeOperator",
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3601,
                                        "end": 3602
                                      },
                                      "typeArguments": null,
                                      "start": 3601,
                                      "end": 3602
                                    },
                                    "start": 3595,
                                    "end": 3602
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 3604,
                                    "end": 3610
                                  }
                                ],
                                "start": 3594,
                                "end": 3611
                              },
                              "start": 3588,
                              "end": 3611
                            }
                          ],
                          "start": 3587,
                          "end": 3612
                        },
                        "start": 3580,
                        "end": 3612
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3613,
                          "end": 3614
                        },
                        "typeArguments": null,
                        "start": 3613,
                        "end": 3614
                      },
                      "start": 3580,
                      "end": 3615
                    },
                    "start": 3578,
                    "end": 3615
                  },
                  "start": 3577,
                  "end": 3615
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 3618,
                  "end": 3625
                },
                "definite": false,
                "start": 3577,
                "end": 3625
              }
            ],
            "declare": false,
            "start": 3573,
            "end": 3626
          }
        ],
        "start": 3567,
        "end": 3628
      },
      "expression": false,
      "start": 3530,
      "end": 3628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 3639,
        "end": 3642
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3643,
              "end": 3644
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3643,
            "end": 3644
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3646,
              "end": 3647
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3662,
                  "end": 3663
                },
                "typeArguments": null,
                "start": 3662,
                "end": 3663
              },
              "start": 3656,
              "end": 3663
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3646,
            "end": 3663
          }
        ],
        "start": 3642,
        "end": 3664
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3680,
                          "end": 3687
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Partial",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3688,
                                "end": 3695
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3696,
                                      "end": 3703
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Partial",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3704,
                                            "end": 3711
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Partial",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3712,
                                                  "end": 3719
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "Partial",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3720,
                                                        "end": 3727
                                                      },
                                                      "typeArguments": {
                                                        "type": "TSTypeParameterInstantiation",
                                                        "params": [
                                                          {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "Partial",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 3728,
                                                              "end": 3735
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
                                                                    "start": 3736,
                                                                    "end": 3742
                                                                  },
                                                                  "typeArguments": {
                                                                    "type": "TSTypeParameterInstantiation",
                                                                    "params": [
                                                                      {
                                                                        "type": "TSTypeOperator",
                                                                        "operator": "keyof",
                                                                        "typeAnnotation": {
                                                                          "type": "TSTypeReference",
                                                                          "typeName": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "T",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 3749,
                                                                            "end": 3750
                                                                          },
                                                                          "typeArguments": null,
                                                                          "start": 3749,
                                                                          "end": 3750
                                                                        },
                                                                        "start": 3743,
                                                                        "end": 3750
                                                                      },
                                                                      {
                                                                        "type": "TSStringKeyword",
                                                                        "start": 3752,
                                                                        "end": 3758
                                                                      }
                                                                    ],
                                                                    "start": 3742,
                                                                    "end": 3759
                                                                  },
                                                                  "start": 3736,
                                                                  "end": 3759
                                                                }
                                                              ],
                                                              "start": 3735,
                                                              "end": 3760
                                                            },
                                                            "start": 3728,
                                                            "end": 3760
                                                          }
                                                        ],
                                                        "start": 3727,
                                                        "end": 3761
                                                      },
                                                      "start": 3720,
                                                      "end": 3761
                                                    }
                                                  ],
                                                  "start": 3719,
                                                  "end": 3762
                                                },
                                                "start": 3712,
                                                "end": 3762
                                              }
                                            ],
                                            "start": 3711,
                                            "end": 3763
                                          },
                                          "start": 3704,
                                          "end": 3763
                                        }
                                      ],
                                      "start": 3703,
                                      "end": 3764
                                    },
                                    "start": 3696,
                                    "end": 3764
                                  }
                                ],
                                "start": 3695,
                                "end": 3765
                              },
                              "start": 3688,
                              "end": 3765
                            }
                          ],
                          "start": 3687,
                          "end": 3766
                        },
                        "start": 3680,
                        "end": 3766
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3767,
                          "end": 3768
                        },
                        "typeArguments": null,
                        "start": 3767,
                        "end": 3768
                      },
                      "start": 3680,
                      "end": 3769
                    },
                    "start": 3678,
                    "end": 3769
                  },
                  "start": 3677,
                  "end": 3769
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 3772,
                  "end": 3779
                },
                "definite": false,
                "start": 3677,
                "end": 3779
              }
            ],
            "declare": false,
            "start": 3673,
            "end": 3780
          }
        ],
        "start": 3667,
        "end": 3782
      },
      "expression": false,
      "start": 3630,
      "end": 3782
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 3812,
        "end": 3816
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
              "start": 3817,
              "end": 3818
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3827,
                "end": 3833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3834,
                    "end": 3840
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3842,
                    "end": 3848
                  }
                ],
                "start": 3833,
                "end": 3849
              },
              "start": 3827,
              "end": 3849
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3817,
            "end": 3849
          }
        ],
        "start": 3816,
        "end": 3850
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testy",
              "optional": false,
              "typeAnnotation": null,
              "start": 3855,
              "end": 3860
            },
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
                  "start": 3862,
                  "end": 3863
                },
                "typeArguments": null,
                "start": 3862,
                "end": 3863
              },
              "start": 3860,
              "end": 3863
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3855,
            "end": 3864
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3868,
              "end": 3879
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3883,
                        "end": 3884
                      },
                      "typeArguments": null,
                      "start": 3883,
                      "end": 3884
                    },
                    "start": 3881,
                    "end": 3884
                  },
                  "start": 3880,
                  "end": 3884
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3892,
                          "end": 3896
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "testy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3897,
                          "end": 3902
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3892,
                        "end": 3902
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3905,
                        "end": 3906
                      },
                      "start": 3892,
                      "end": 3906
                    },
                    "directive": null,
                    "start": 3892,
                    "end": 3907
                  }
                ],
                "start": 3886,
                "end": 3911
              },
              "expression": false,
              "start": 3879,
              "end": 3911
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3868,
            "end": 3911
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 3922,
              "end": 3923
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3935,
                          "end": 3936
                        },
                        "typeArguments": null,
                        "start": 3935,
                        "end": 3936
                      },
                      "start": 3929,
                      "end": 3936
                    },
                    "start": 3927,
                    "end": 3936
                  },
                  "start": 3924,
                  "end": 3936
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3939,
                  "end": 3945
                },
                "start": 3937,
                "end": 3945
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3952,
                            "end": 3956
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3957,
                            "end": 3962
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3952,
                          "end": 3962
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3963,
                          "end": 3966
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3952,
                        "end": 3967
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3971,
                        "end": 3972
                      },
                      "start": 3952,
                      "end": 3972
                    },
                    "directive": null,
                    "start": 3952,
                    "end": 3973
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3995,
                          "end": 3999
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "testy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4000,
                          "end": 4005
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3995,
                        "end": 4005
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4006,
                        "end": 4009
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3995,
                      "end": 4010
                    },
                    "start": 3988,
                    "end": 4011
                  }
                ],
                "start": 3946,
                "end": 4015
              },
              "expression": false,
              "start": 3923,
              "end": 4015
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3915,
            "end": 4015
          }
        ],
        "start": 3851,
        "end": 4017
      },
      "abstract": false,
      "declare": false,
      "start": 3806,
      "end": 4017
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4017
}
```
