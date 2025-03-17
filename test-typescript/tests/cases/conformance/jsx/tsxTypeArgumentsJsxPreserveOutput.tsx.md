__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 688,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "name": "TypeProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 51,
        "end": 69,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 67,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 66,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 59,
                "end": 66
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 71,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 95,
        "name": "InterfaceProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 112,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 111,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 104,
                "end": 111
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 140,
            "end": 152,
            "argument": {
              "type": "Literal",
              "start": 147,
              "end": 151,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 687,
      "expression": {
        "type": "JSXFragment",
        "start": 156,
        "end": 687,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 156,
          "end": 158
        },
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 684,
          "end": 687
        },
        "children": [
          {
            "type": "JSXText",
            "start": 158,
            "end": 163,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 163,
            "end": 192,
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 164,
              "end": 191
            }
          },
          {
            "type": "JSXText",
            "start": 192,
            "end": 197,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 197,
            "end": 213,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 197,
              "end": 213,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 198,
                "end": 201,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 201,
                "end": 210,
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 202,
                    "end": 209
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 213,
            "end": 218,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 218,
            "end": 233,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 218,
              "end": 233,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 219,
                "end": 222,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 222,
                "end": 230,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 223,
                    "end": 229
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 233,
            "end": 238,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 238,
            "end": 254,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 238,
              "end": 254,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 239,
                "end": 242,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 242,
                "end": 251,
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 243,
                    "end": 250
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 254,
            "end": 259,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 259,
            "end": 274,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 259,
              "end": 274,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 260,
                "end": 263,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 263,
                "end": 271,
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 264,
                    "end": 270
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 274,
            "end": 279,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 279,
            "end": 292,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 279,
              "end": 292,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 280,
                "end": 283,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 283,
                "end": 289,
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "start": 284,
                    "end": 288
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 292,
            "end": 297,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 297,
            "end": 309,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 297,
              "end": 309,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 298,
                "end": 301,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 301,
                "end": 306,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 302,
                    "end": 305
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 309,
            "end": 314,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 314,
            "end": 328,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 314,
              "end": 328,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 315,
                "end": 318,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 318,
                "end": 325,
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 319,
                    "end": 324
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 328,
            "end": 333,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 333,
            "end": 351,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 333,
              "end": 351,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 334,
                "end": 337,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 337,
                "end": 348,
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 338,
                    "end": 347
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 351,
            "end": 356,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 356,
            "end": 374,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 356,
              "end": 374,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 357,
                "end": 360,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 360,
                "end": 371,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 361,
                    "end": 370,
                    "typeName": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 370,
                      "name": "TypeProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 374,
            "end": 379,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 379,
            "end": 402,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 379,
              "end": 402,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 380,
                "end": 383,
                "name": "Foo"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 383,
                "end": 399,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 384,
                    "end": 398,
                    "typeName": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 398,
                      "name": "InterfaceProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 402,
            "end": 408,
            "value": "\n\n    ",
            "raw": "\n\n    "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 408,
            "end": 433,
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 409,
              "end": 432
            }
          },
          {
            "type": "JSXText",
            "start": 433,
            "end": 438,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 438,
            "end": 458,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 438,
              "end": 452,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 439,
                "end": 442,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 442,
                "end": 451,
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 443,
                    "end": 450
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 452,
              "end": 458,
              "name": {
                "type": "JSXIdentifier",
                "start": 454,
                "end": 457,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 458,
            "end": 463,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 463,
            "end": 482,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 463,
              "end": 476,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 464,
                "end": 467,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 467,
                "end": 475,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 468,
                    "end": 474
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 476,
              "end": 482,
              "name": {
                "type": "JSXIdentifier",
                "start": 478,
                "end": 481,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 482,
            "end": 487,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 487,
            "end": 507,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 487,
              "end": 501,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 488,
                "end": 491,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 491,
                "end": 500,
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 492,
                    "end": 499
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 501,
              "end": 507,
              "name": {
                "type": "JSXIdentifier",
                "start": 503,
                "end": 506,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 507,
            "end": 512,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 512,
            "end": 531,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 512,
              "end": 525,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 513,
                "end": 516,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 516,
                "end": 524,
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 517,
                    "end": 523
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 525,
              "end": 531,
              "name": {
                "type": "JSXIdentifier",
                "start": 527,
                "end": 530,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 531,
            "end": 536,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 536,
            "end": 553,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 536,
              "end": 547,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 537,
                "end": 540,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 540,
                "end": 546,
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "start": 541,
                    "end": 545
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 547,
              "end": 553,
              "name": {
                "type": "JSXIdentifier",
                "start": 549,
                "end": 552,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 553,
            "end": 558,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 558,
            "end": 574,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 558,
              "end": 568,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 559,
                "end": 562,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 562,
                "end": 567,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 563,
                    "end": 566
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 568,
              "end": 574,
              "name": {
                "type": "JSXIdentifier",
                "start": 570,
                "end": 573,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 574,
            "end": 579,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 579,
            "end": 597,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 579,
              "end": 591,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 580,
                "end": 583,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 583,
                "end": 590,
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 584,
                    "end": 589
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 591,
              "end": 597,
              "name": {
                "type": "JSXIdentifier",
                "start": 593,
                "end": 596,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 597,
            "end": 602,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 602,
            "end": 624,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 602,
              "end": 618,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 603,
                "end": 606,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 606,
                "end": 617,
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 607,
                    "end": 616
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 618,
              "end": 624,
              "name": {
                "type": "JSXIdentifier",
                "start": 620,
                "end": 623,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 624,
            "end": 629,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 629,
            "end": 651,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 629,
              "end": 645,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 630,
                "end": 633,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 633,
                "end": 644,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 634,
                    "end": 643,
                    "typeName": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 643,
                      "name": "TypeProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 645,
              "end": 651,
              "name": {
                "type": "JSXIdentifier",
                "start": 647,
                "end": 650,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 651,
            "end": 656,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 656,
            "end": 683,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 656,
              "end": 677,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 657,
                "end": 660,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 660,
                "end": 676,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 661,
                    "end": 675,
                    "typeName": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 675,
                      "name": "InterfaceProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 677,
              "end": 683,
              "name": {
                "type": "JSXIdentifier",
                "start": 679,
                "end": 682,
                "name": "Foo"
              }
            },
            "children": []
          },
          {
            "type": "JSXText",
            "start": 683,
            "end": 684,
            "value": "\n",
            "raw": "\n"
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
