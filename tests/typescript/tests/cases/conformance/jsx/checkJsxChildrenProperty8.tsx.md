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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 160,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "JSXText",
    "value": "My Button",
    "start": 232,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 242,
    "end": 243
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 258,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "AnotherButton",
    "start": 267,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "JSXText",
    "value": "Just Another Button",
    "start": 306,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 326,
    "end": 327
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 335,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 382,
    "end": 383
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 408,
    "end": 412
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 440,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 457,
    "end": 458
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 474,
    "end": 475
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 475,
    "end": 479
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 494,
    "end": 495
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 503,
    "end": 504
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 510,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 529,
    "end": 530
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 547,
    "end": 551
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  },
  {
    "type": "JSXText",
    "value": "    ",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 579,
    "end": 580
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 586,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 603,
    "end": 604
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 621,
    "end": 625
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 640,
    "end": 641
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
    "end": 650
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 653,
    "end": 654
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  }
]
```
