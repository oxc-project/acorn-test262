__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 48
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 59,
                "end": 66
              },
              "start": 57,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 67
          }
        ],
        "start": 51,
        "end": 69
      },
      "declare": false,
      "start": 34,
      "end": 70
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 95
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 104,
                "end": 111
              },
              "start": 102,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 112
          }
        ],
        "start": 96,
        "end": 114
      },
      "declare": false,
      "start": 71,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 128
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
              "start": 129,
              "end": 130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 128,
        "end": 131
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 147,
              "end": 151
            },
            "start": 140,
            "end": 152
          }
        ],
        "start": 134,
        "end": 154
      },
      "expression": false,
      "start": 116,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 156,
          "end": 158
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 158,
            "end": 163
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 164,
              "end": 191
            },
            "start": 163,
            "end": 192
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 192,
            "end": 197
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 198,
                "end": 201
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 202,
                    "end": 209
                  }
                ],
                "start": 201,
                "end": 210
              },
              "attributes": [],
              "selfClosing": true,
              "start": 197,
              "end": 213
            },
            "children": [],
            "closingElement": null,
            "start": 197,
            "end": 213
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 213,
            "end": 218
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 219,
                "end": 222
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 223,
                    "end": 229
                  }
                ],
                "start": 222,
                "end": 230
              },
              "attributes": [],
              "selfClosing": true,
              "start": 218,
              "end": 233
            },
            "children": [],
            "closingElement": null,
            "start": 218,
            "end": 233
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 233,
            "end": 238
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 239,
                "end": 242
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 243,
                    "end": 250
                  }
                ],
                "start": 242,
                "end": 251
              },
              "attributes": [],
              "selfClosing": true,
              "start": 238,
              "end": 254
            },
            "children": [],
            "closingElement": null,
            "start": 238,
            "end": 254
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 254,
            "end": 259
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 260,
                "end": 263
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 264,
                    "end": 270
                  }
                ],
                "start": 263,
                "end": 271
              },
              "attributes": [],
              "selfClosing": true,
              "start": 259,
              "end": 274
            },
            "children": [],
            "closingElement": null,
            "start": 259,
            "end": 274
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 274,
            "end": 279
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 280,
                "end": 283
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "start": 284,
                    "end": 288
                  }
                ],
                "start": 283,
                "end": 289
              },
              "attributes": [],
              "selfClosing": true,
              "start": 279,
              "end": 292
            },
            "children": [],
            "closingElement": null,
            "start": 279,
            "end": 292
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 292,
            "end": 297
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 298,
                "end": 301
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 302,
                    "end": 305
                  }
                ],
                "start": 301,
                "end": 306
              },
              "attributes": [],
              "selfClosing": true,
              "start": 297,
              "end": 309
            },
            "children": [],
            "closingElement": null,
            "start": 297,
            "end": 309
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 309,
            "end": 314
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 315,
                "end": 318
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 319,
                    "end": 324
                  }
                ],
                "start": 318,
                "end": 325
              },
              "attributes": [],
              "selfClosing": true,
              "start": 314,
              "end": 328
            },
            "children": [],
            "closingElement": null,
            "start": 314,
            "end": 328
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 328,
            "end": 333
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 334,
                "end": 337
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 338,
                    "end": 347
                  }
                ],
                "start": 337,
                "end": 348
              },
              "attributes": [],
              "selfClosing": true,
              "start": 333,
              "end": 351
            },
            "children": [],
            "closingElement": null,
            "start": 333,
            "end": 351
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 351,
            "end": 356
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 357,
                "end": 360
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 370
                    },
                    "typeArguments": null,
                    "start": 361,
                    "end": 370
                  }
                ],
                "start": 360,
                "end": 371
              },
              "attributes": [],
              "selfClosing": true,
              "start": 356,
              "end": 374
            },
            "children": [],
            "closingElement": null,
            "start": 356,
            "end": 374
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 374,
            "end": 379
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 380,
                "end": 383
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 398
                    },
                    "typeArguments": null,
                    "start": 384,
                    "end": 398
                  }
                ],
                "start": 383,
                "end": 399
              },
              "attributes": [],
              "selfClosing": true,
              "start": 379,
              "end": 402
            },
            "children": [],
            "closingElement": null,
            "start": 379,
            "end": 402
          },
          {
            "type": "JSXText",
            "value": "\n\n    ",
            "raw": "\n\n    ",
            "start": 402,
            "end": 408
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 409,
              "end": 432
            },
            "start": 408,
            "end": 433
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 433,
            "end": 438
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 439,
                "end": 442
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 443,
                    "end": 450
                  }
                ],
                "start": 442,
                "end": 451
              },
              "attributes": [],
              "selfClosing": false,
              "start": 438,
              "end": 452
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 454,
                "end": 457
              },
              "start": 452,
              "end": 458
            },
            "start": 438,
            "end": 458
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 458,
            "end": 463
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 464,
                "end": 467
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 468,
                    "end": 474
                  }
                ],
                "start": 467,
                "end": 475
              },
              "attributes": [],
              "selfClosing": false,
              "start": 463,
              "end": 476
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 478,
                "end": 481
              },
              "start": 476,
              "end": 482
            },
            "start": 463,
            "end": 482
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 482,
            "end": 487
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 488,
                "end": 491
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 492,
                    "end": 499
                  }
                ],
                "start": 491,
                "end": 500
              },
              "attributes": [],
              "selfClosing": false,
              "start": 487,
              "end": 501
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 503,
                "end": 506
              },
              "start": 501,
              "end": 507
            },
            "start": 487,
            "end": 507
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 507,
            "end": 512
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 513,
                "end": 516
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 517,
                    "end": 523
                  }
                ],
                "start": 516,
                "end": 524
              },
              "attributes": [],
              "selfClosing": false,
              "start": 512,
              "end": 525
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 527,
                "end": 530
              },
              "start": 525,
              "end": 531
            },
            "start": 512,
            "end": 531
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 531,
            "end": 536
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 537,
                "end": 540
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "start": 541,
                    "end": 545
                  }
                ],
                "start": 540,
                "end": 546
              },
              "attributes": [],
              "selfClosing": false,
              "start": 536,
              "end": 547
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 549,
                "end": 552
              },
              "start": 547,
              "end": 553
            },
            "start": 536,
            "end": 553
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 553,
            "end": 558
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 559,
                "end": 562
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 563,
                    "end": 566
                  }
                ],
                "start": 562,
                "end": 567
              },
              "attributes": [],
              "selfClosing": false,
              "start": 558,
              "end": 568
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 570,
                "end": 573
              },
              "start": 568,
              "end": 574
            },
            "start": 558,
            "end": 574
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 574,
            "end": 579
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 580,
                "end": 583
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 584,
                    "end": 589
                  }
                ],
                "start": 583,
                "end": 590
              },
              "attributes": [],
              "selfClosing": false,
              "start": 579,
              "end": 591
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 593,
                "end": 596
              },
              "start": 591,
              "end": 597
            },
            "start": 579,
            "end": 597
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 597,
            "end": 602
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 603,
                "end": 606
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 607,
                    "end": 616
                  }
                ],
                "start": 606,
                "end": 617
              },
              "attributes": [],
              "selfClosing": false,
              "start": 602,
              "end": 618
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 620,
                "end": 623
              },
              "start": 618,
              "end": 624
            },
            "start": 602,
            "end": 624
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 624,
            "end": 629
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 630,
                "end": 633
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 643
                    },
                    "typeArguments": null,
                    "start": 634,
                    "end": 643
                  }
                ],
                "start": 633,
                "end": 644
              },
              "attributes": [],
              "selfClosing": false,
              "start": 629,
              "end": 645
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 647,
                "end": 650
              },
              "start": 645,
              "end": 651
            },
            "start": 629,
            "end": 651
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 651,
            "end": 656
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 657,
                "end": 660
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 675
                    },
                    "typeArguments": null,
                    "start": 661,
                    "end": 675
                  }
                ],
                "start": 660,
                "end": 676
              },
              "attributes": [],
              "selfClosing": false,
              "start": 656,
              "end": 677
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 679,
                "end": 682
              },
              "start": 677,
              "end": 683
            },
            "start": 656,
            "end": 683
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 683,
            "end": 684
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 684,
          "end": 687
        },
        "start": 156,
        "end": 687
      },
      "directive": null,
      "start": 156,
      "end": 687
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 687
}
```
