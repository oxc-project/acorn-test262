__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 34,
    "end": 38,
    "range": [
      34,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeProps",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 71,
    "end": 80,
    "range": [
      71,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceProps",
    "start": 81,
    "end": 95,
    "range": [
      81,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 104,
    "end": 111,
    "range": [
      104,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124,
    "range": [
      116,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 125,
    "end": 128,
    "range": [
      125,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
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
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 147,
    "end": 151,
    "range": [
      147,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 192,
    "end": 197,
    "range": [
      192,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 202,
    "end": 209,
    "range": [
      202,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 213,
    "end": 218,
    "range": [
      213,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 219,
    "end": 222,
    "range": [
      219,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229,
    "range": [
      223,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 233,
    "end": 238,
    "range": [
      233,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 274,
    "end": 279,
    "range": [
      274,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 284,
    "end": 288,
    "range": [
      284,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 309,
    "end": 314,
    "range": [
      309,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 319,
    "end": 324,
    "range": [
      319,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 328,
    "end": 333,
    "range": [
      328,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 334,
    "end": 337,
    "range": [
      334,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 338,
    "end": 347,
    "range": [
      338,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 351,
    "end": 356,
    "range": [
      351,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 357,
    "end": 360,
    "range": [
      357,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeProps",
    "start": 361,
    "end": 370,
    "range": [
      361,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 374,
    "end": 379,
    "range": [
      374,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 380,
    "end": 383,
    "range": [
      380,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceProps",
    "start": 384,
    "end": 398,
    "range": [
      384,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 402,
    "end": 408,
    "range": [
      402,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 433,
    "end": 438,
    "range": [
      433,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 443,
    "end": 450,
    "range": [
      443,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 454,
    "end": 457,
    "range": [
      454,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 458,
    "end": 463,
    "range": [
      458,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 464,
    "end": 467,
    "range": [
      464,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 468,
    "end": 474,
    "range": [
      468,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 478,
    "end": 481,
    "range": [
      478,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 482,
    "end": 487,
    "range": [
      482,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 488,
    "end": 491,
    "range": [
      488,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 492,
    "end": 499,
    "range": [
      492,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 503,
    "end": 506,
    "range": [
      503,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 507,
    "end": 512,
    "range": [
      507,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 513,
    "end": 516,
    "range": [
      513,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 517,
    "end": 523,
    "range": [
      517,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 531,
    "end": 536,
    "range": [
      531,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 541,
    "end": 545,
    "range": [
      541,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 549,
    "end": 552,
    "range": [
      549,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 553,
    "end": 558,
    "range": [
      553,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 563,
    "end": 566,
    "range": [
      563,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 574,
    "end": 579,
    "range": [
      574,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 584,
    "end": 589,
    "range": [
      584,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 593,
    "end": 596,
    "range": [
      593,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 597,
    "end": 602,
    "range": [
      597,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 603,
    "end": 606,
    "range": [
      603,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 607,
    "end": 616,
    "range": [
      607,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 620,
    "end": 623,
    "range": [
      620,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 624,
    "end": 629,
    "range": [
      624,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeProps",
    "start": 634,
    "end": 643,
    "range": [
      634,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 647,
    "end": 650,
    "range": [
      647,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 651,
    "end": 656,
    "range": [
      651,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceProps",
    "start": 661,
    "end": 675,
    "range": [
      661,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  }
]
```
