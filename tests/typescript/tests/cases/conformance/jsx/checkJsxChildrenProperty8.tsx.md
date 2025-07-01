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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 48
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 65
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
              "start": 70,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 80
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 107
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 115
                      },
                      "start": 104,
                      "end": 115
                    },
                    "typeArguments": null,
                    "start": 104,
                    "end": 115
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 119,
                          "end": 125
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "JSX",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 128,
                              "end": 131
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Element",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 132,
                              "end": 139
                            },
                            "start": 128,
                            "end": 139
                          },
                          "typeArguments": null,
                          "start": 128,
                          "end": 139
                        }
                      ],
                      "start": 119,
                      "end": 139
                    },
                    "start": 118,
                    "end": 142
                  }
                ],
                "start": 95,
                "end": 142
              },
              "start": 93,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 143
          }
        ],
        "start": 49,
        "end": 145
      },
      "declare": false,
      "start": 34,
      "end": 145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 159
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 173
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 183
        },
        "optional": false,
        "computed": false,
        "start": 168,
        "end": 183
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 184,
            "end": 187
          },
          {
            "type": "TSAnyKeyword",
            "start": 189,
            "end": 192
          }
        ],
        "start": 183,
        "end": 193
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 228,
                          "end": 231
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 227,
                        "end": 232
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "My Button",
                          "raw": "My Button",
                          "start": 232,
                          "end": 241
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 243,
                          "end": 246
                        },
                        "start": 241,
                        "end": 247
                      },
                      "start": 227,
                      "end": 247
                    },
                    "start": 219,
                    "end": 248
                  }
                ],
                "start": 209,
                "end": 254
              },
              "expression": false,
              "start": 206,
              "end": 254
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 200,
            "end": 254
          }
        ],
        "start": 194,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 147,
      "end": 256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 280
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 284,
              "end": 287
            },
            "start": 282,
            "end": 287
          },
          "start": 281,
          "end": 287
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 303,
                  "end": 305
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 302,
                "end": 306
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Just Another Button",
                  "raw": "Just Another Button",
                  "start": 306,
                  "end": 325
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 327,
                  "end": 329
                },
                "start": 325,
                "end": 330
              },
              "start": 302,
              "end": 330
            },
            "start": 295,
            "end": 331
          }
        ],
        "start": 289,
        "end": 333
      },
      "expression": false,
      "start": 258,
      "end": 333
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 356
              },
              "typeArguments": null,
              "start": 352,
              "end": 356
            },
            "start": 350,
            "end": 356
          },
          "start": 349,
          "end": 356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 372,
                  "end": 375
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 371,
                "end": 376
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 378
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 380
                    },
                    "optional": false,
                    "computed": false,
                    "start": 377,
                    "end": 380
                  },
                  "start": 376,
                  "end": 381
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 383,
                  "end": 386
                },
                "start": 381,
                "end": 387
              },
              "start": 371,
              "end": 387
            },
            "start": 364,
            "end": 388
          }
        ],
        "start": 358,
        "end": 390
      },
      "expression": false,
      "start": 335,
      "end": 390
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 404
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 408,
                "end": 412
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 413,
                    "end": 414
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 416,
                      "end": 418
                    },
                    "start": 415,
                    "end": 419
                  },
                  "start": 413,
                  "end": 419
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 420,
                    "end": 421
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 422,
                    "end": 426
                  },
                  "start": 420,
                  "end": 426
                }
              ],
              "selfClosing": false,
              "start": 407,
              "end": 427
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 428,
                    "end": 434
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 427,
                  "end": 437
                },
                "children": [],
                "closingElement": null,
                "start": 427,
                "end": 437
              },
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 437,
                "end": 439
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 440,
                    "end": 453
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 439,
                  "end": 456
                },
                "children": [],
                "closingElement": null,
                "start": 439,
                "end": 456
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 458,
                "end": 462
              },
              "start": 456,
              "end": 463
            },
            "start": 407,
            "end": 463
          },
          "definite": false,
          "start": 402,
          "end": 463
        }
      ],
      "declare": false,
      "start": 398,
      "end": 464
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 471
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 475,
                "end": 479
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 480,
                    "end": 481
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 483,
                      "end": 485
                    },
                    "start": 482,
                    "end": 486
                  },
                  "start": 480,
                  "end": 486
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 487,
                    "end": 488
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 489,
                    "end": 493
                  },
                  "start": 487,
                  "end": 493
                }
              ],
              "selfClosing": false,
              "start": 474,
              "end": 494
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 495,
                    "end": 501
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 494,
                  "end": 504
                },
                "children": [],
                "closingElement": null,
                "start": 494,
                "end": 504
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 504,
                "end": 509
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 510,
                    "end": 523
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 509,
                  "end": 526
                },
                "children": [],
                "closingElement": null,
                "start": 509,
                "end": 526
              },
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 526,
                "end": 528
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 530,
                "end": 534
              },
              "start": 528,
              "end": 535
            },
            "start": 474,
            "end": 535
          },
          "definite": false,
          "start": 469,
          "end": 535
        }
      ],
      "declare": false,
      "start": 465,
      "end": 536
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 543
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 547,
                "end": 551
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 552,
                    "end": 553
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 555,
                      "end": 557
                    },
                    "start": 554,
                    "end": 558
                  },
                  "start": 552,
                  "end": 558
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 559,
                    "end": 560
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 561,
                    "end": 565
                  },
                  "start": 559,
                  "end": 565
                }
              ],
              "selfClosing": false,
              "start": 546,
              "end": 566
            },
            "children": [
              {
                "type": "JSXText",
                "value": "    ",
                "raw": "    ",
                "start": 566,
                "end": 570
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 571,
                    "end": 577
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 570,
                  "end": 580
                },
                "children": [],
                "closingElement": null,
                "start": 570,
                "end": 580
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 580,
                "end": 585
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 586,
                    "end": 599
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 585,
                  "end": 602
                },
                "children": [],
                "closingElement": null,
                "start": 585,
                "end": 602
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 604,
                "end": 608
              },
              "start": 602,
              "end": 609
            },
            "start": 546,
            "end": 609
          },
          "definite": false,
          "start": 541,
          "end": 609
        }
      ],
      "declare": false,
      "start": 537,
      "end": 610
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 617
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 621,
                "end": 625
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 626,
                    "end": 627
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 629,
                      "end": 631
                    },
                    "start": 628,
                    "end": 632
                  },
                  "start": 626,
                  "end": 632
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 633,
                    "end": 634
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 635,
                    "end": 639
                  },
                  "start": 633,
                  "end": 639
                }
              ],
              "selfClosing": false,
              "start": 620,
              "end": 640
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 641,
                    "end": 647
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 640,
                  "end": 650
                },
                "children": [],
                "closingElement": null,
                "start": 640,
                "end": 650
              },
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 650,
                "end": 652
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 654,
                "end": 658
              },
              "start": 652,
              "end": 659
            },
            "start": 620,
            "end": 659
          },
          "definite": false,
          "start": 615,
          "end": 659
        }
      ],
      "declare": false,
      "start": 611,
      "end": 660
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 660
}
```
