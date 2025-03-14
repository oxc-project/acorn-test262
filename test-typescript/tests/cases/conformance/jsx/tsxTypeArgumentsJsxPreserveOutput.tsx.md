foo.tsx
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
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 70,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "decorators": [],
        "name": "TypeProps",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 66,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 59,
                "end": 66
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 71,
      "end": 114,
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
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 111,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 104,
                "end": 111
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 95,
        "decorators": [],
        "name": "InterfaceProps",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 154,
      "async": false,
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
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 687,
      "expression": {
        "type": "JSXFragment",
        "start": 156,
        "end": 687,
        "children": [
          {
            "type": "JSXText",
            "start": 158,
            "end": 163,
            "raw": "\n    ",
            "value": "\n    "
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
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 197,
            "end": 213,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 213,
            "end": 218,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 218,
            "end": 233,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 233,
            "end": 238,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 238,
            "end": 254,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 254,
            "end": 259,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 259,
            "end": 274,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 274,
            "end": 279,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 279,
            "end": 292,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 292,
            "end": 297,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 297,
            "end": 309,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 309,
            "end": 314,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 314,
            "end": 328,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 328,
            "end": 333,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 333,
            "end": 351,
            "children": [],
            "closingElement": null,
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
            }
          },
          {
            "type": "JSXText",
            "start": 351,
            "end": 356,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 356,
            "end": 374,
            "children": [],
            "closingElement": null,
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
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "JSXText",
            "start": 374,
            "end": 379,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 379,
            "end": 402,
            "children": [],
            "closingElement": null,
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
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "JSXText",
            "start": 402,
            "end": 408,
            "raw": "\n\n    ",
            "value": "\n\n    "
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
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 438,
            "end": 458,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 458,
            "end": 463,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 463,
            "end": 482,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 482,
            "end": 487,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 487,
            "end": 507,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 507,
            "end": 512,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 512,
            "end": 531,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 531,
            "end": 536,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 536,
            "end": 553,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 553,
            "end": 558,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 558,
            "end": 574,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 574,
            "end": 579,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 579,
            "end": 597,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 597,
            "end": 602,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 602,
            "end": 624,
            "children": [],
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
            }
          },
          {
            "type": "JSXText",
            "start": 624,
            "end": 629,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 629,
            "end": 651,
            "children": [],
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
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "JSXText",
            "start": 651,
            "end": 656,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 656,
            "end": 683,
            "children": [],
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
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "JSXText",
            "start": 683,
            "end": 684,
            "raw": "\n",
            "value": "\n"
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 684,
          "end": 687
        },
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 156,
          "end": 158
        }
      }
    }
  ],
  "sourceType": "script"
}
```
