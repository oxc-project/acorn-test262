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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 98
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 106
                      },
                      "start": 95,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 95,
                    "end": 106
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 112
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 120
                        },
                        "start": 109,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 109,
                      "end": 120
                    },
                    "start": 109,
                    "end": 122
                  }
                ],
                "start": 95,
                "end": 122
              },
              "start": 93,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 123
          }
        ],
        "start": 49,
        "end": 125
      },
      "declare": false,
      "start": 34,
      "end": 125
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
        "start": 133,
        "end": 139
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
          "start": 148,
          "end": 153
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 163
        },
        "optional": false,
        "computed": false,
        "start": 148,
        "end": 163
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 164,
            "end": 167
          },
          {
            "type": "TSAnyKeyword",
            "start": 169,
            "end": 172
          }
        ],
        "start": 163,
        "end": 173
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
              "start": 180,
              "end": 186
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
                          "start": 208,
                          "end": 211
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 207,
                        "end": 212
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "My Button",
                          "raw": "My Button",
                          "start": 212,
                          "end": 221
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 223,
                          "end": 226
                        },
                        "start": 221,
                        "end": 227
                      },
                      "start": 207,
                      "end": 227
                    },
                    "start": 199,
                    "end": 228
                  }
                ],
                "start": 189,
                "end": 234
              },
              "expression": false,
              "start": 186,
              "end": 234
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 180,
            "end": 234
          }
        ],
        "start": 174,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 127,
      "end": 236
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 260
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
              "start": 264,
              "end": 267
            },
            "start": 262,
            "end": 267
          },
          "start": 261,
          "end": 267
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
                  "start": 283,
                  "end": 285
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 282,
                "end": 286
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Just Another Button",
                  "raw": "Just Another Button",
                  "start": 286,
                  "end": 305
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 307,
                  "end": 309
                },
                "start": 305,
                "end": 310
              },
              "start": 282,
              "end": 310
            },
            "start": 275,
            "end": 311
          }
        ],
        "start": 269,
        "end": 313
      },
      "expression": false,
      "start": 238,
      "end": 313
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 328
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
                "start": 332,
                "end": 336
              },
              "typeArguments": null,
              "start": 332,
              "end": 336
            },
            "start": 330,
            "end": 336
          },
          "start": 329,
          "end": 336
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
                  "start": 352,
                  "end": 355
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 351,
                "end": 356
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
                      "start": 357,
                      "end": 358
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    },
                    "optional": false,
                    "computed": false,
                    "start": 357,
                    "end": 360
                  },
                  "start": 356,
                  "end": 361
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 363,
                  "end": 366
                },
                "start": 361,
                "end": 367
              },
              "start": 351,
              "end": 367
            },
            "start": 344,
            "end": 368
          }
        ],
        "start": 338,
        "end": 370
      },
      "expression": false,
      "start": 315,
      "end": 370
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
            "start": 382,
            "end": 384
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 388,
                "end": 392
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 393,
                    "end": 394
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 396,
                      "end": 398
                    },
                    "start": 395,
                    "end": 399
                  },
                  "start": 393,
                  "end": 399
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 400,
                    "end": 401
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 402,
                    "end": 406
                  },
                  "start": 400,
                  "end": 406
                }
              ],
              "selfClosing": false,
              "start": 387,
              "end": 407
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 407,
                  "end": 409
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 409,
                  "end": 412
                },
                "start": 407,
                "end": 412
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 413,
                    "end": 419
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 412,
                  "end": 422
                },
                "children": [],
                "closingElement": null,
                "start": 412,
                "end": 422
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 423,
                    "end": 436
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 422,
                  "end": 439
                },
                "children": [],
                "closingElement": null,
                "start": 422,
                "end": 439
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 441,
                "end": 445
              },
              "start": 439,
              "end": 446
            },
            "start": 387,
            "end": 446
          },
          "definite": false,
          "start": 382,
          "end": 446
        }
      ],
      "declare": false,
      "start": 378,
      "end": 447
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
            "start": 452,
            "end": 454
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 458,
                "end": 462
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 463,
                    "end": 464
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 466,
                      "end": 468
                    },
                    "start": 465,
                    "end": 469
                  },
                  "start": 463,
                  "end": 469
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 470,
                    "end": 471
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 472,
                    "end": 476
                  },
                  "start": 470,
                  "end": 476
                }
              ],
              "selfClosing": false,
              "start": 457,
              "end": 477
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 477,
                  "end": 479
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "start": 480,
                        "end": 486
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 479,
                      "end": 489
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 479,
                    "end": 489
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 489,
                  "end": 492
                },
                "start": 477,
                "end": 492
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 493,
                    "end": 506
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 492,
                  "end": 509
                },
                "children": [],
                "closingElement": null,
                "start": 492,
                "end": 509
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 511,
                "end": 515
              },
              "start": 509,
              "end": 516
            },
            "start": 457,
            "end": 516
          },
          "definite": false,
          "start": 452,
          "end": 516
        }
      ],
      "declare": false,
      "start": 448,
      "end": 517
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
            "start": 522,
            "end": 524
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 528,
                "end": 532
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 533,
                    "end": 534
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 536,
                      "end": 538
                    },
                    "start": 535,
                    "end": 539
                  },
                  "start": 533,
                  "end": 539
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 540,
                    "end": 541
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 542,
                    "end": 546
                  },
                  "start": 540,
                  "end": 546
                }
              ],
              "selfClosing": false,
              "start": 527,
              "end": 547
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 547,
                  "end": 549
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "start": 550,
                        "end": 556
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 549,
                      "end": 559
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 549,
                    "end": 559
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherButton",
                        "start": 560,
                        "end": 573
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 559,
                      "end": 576
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 559,
                    "end": 576
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 576,
                  "end": 579
                },
                "start": 547,
                "end": 579
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 581,
                "end": 585
              },
              "start": 579,
              "end": 586
            },
            "start": 527,
            "end": 586
          },
          "definite": false,
          "start": 522,
          "end": 586
        }
      ],
      "declare": false,
      "start": 518,
      "end": 587
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SingleChildProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 614
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
              "start": 621,
              "end": 622
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 624,
                "end": 630
              },
              "start": 622,
              "end": 630
            },
            "accessibility": null,
            "static": false,
            "start": 621,
            "end": 631
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
              "start": 636,
              "end": 637
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 639,
                "end": 645
              },
              "start": 637,
              "end": 645
            },
            "accessibility": null,
            "static": false,
            "start": 636,
            "end": 646
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
              "start": 651,
              "end": 659
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 664
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 672
                  },
                  "start": 661,
                  "end": 672
                },
                "typeArguments": null,
                "start": 661,
                "end": 672
              },
              "start": 659,
              "end": 672
            },
            "accessibility": null,
            "static": false,
            "start": 651,
            "end": 673
          }
        ],
        "start": 615,
        "end": 675
      },
      "declare": false,
      "start": 589,
      "end": 675
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SingleChildComp",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 701
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
                "name": "SingleChildProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 720
              },
              "typeArguments": null,
              "start": 705,
              "end": 720
            },
            "start": 703,
            "end": 720
          },
          "start": 702,
          "end": 720
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
                  "start": 736,
                  "end": 739
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 735,
                "end": 740
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
                      "start": 741,
                      "end": 742
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 744
                    },
                    "optional": false,
                    "computed": false,
                    "start": 741,
                    "end": 744
                  },
                  "start": 740,
                  "end": 745
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 747,
                  "end": 750
                },
                "start": 745,
                "end": 751
              },
              "start": 735,
              "end": 751
            },
            "start": 728,
            "end": 752
          }
        ],
        "start": 722,
        "end": 754
      },
      "expression": false,
      "start": 677,
      "end": 754
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
            "start": 766,
            "end": 768
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 772,
                "end": 787
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 788,
                    "end": 789
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 791,
                      "end": 793
                    },
                    "start": 790,
                    "end": 794
                  },
                  "start": 788,
                  "end": 794
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 795,
                    "end": 796
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 797,
                    "end": 801
                  },
                  "start": 795,
                  "end": 801
                }
              ],
              "selfClosing": false,
              "start": 771,
              "end": 802
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 802,
                  "end": 804
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "start": 805,
                        "end": 811
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 804,
                      "end": 814
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 804,
                    "end": 814
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherButton",
                        "start": 815,
                        "end": 828
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 814,
                      "end": 831
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 814,
                    "end": 831
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 831,
                  "end": 834
                },
                "start": 802,
                "end": 834
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 836,
                "end": 851
              },
              "start": 834,
              "end": 852
            },
            "start": 771,
            "end": 852
          },
          "definite": false,
          "start": 766,
          "end": 852
        }
      ],
      "declare": false,
      "start": 762,
      "end": 853
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
            "name": "k5",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 870
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 874,
                "end": 889
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 890,
                    "end": 891
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 893,
                      "end": 895
                    },
                    "start": 892,
                    "end": 896
                  },
                  "start": 890,
                  "end": 896
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 897,
                    "end": 898
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 899,
                    "end": 903
                  },
                  "start": 897,
                  "end": 903
                }
              ],
              "selfClosing": false,
              "start": 873,
              "end": 904
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 904,
                  "end": 906
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 906,
                  "end": 909
                },
                "start": 904,
                "end": 909
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 910,
                    "end": 916
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 909,
                  "end": 919
                },
                "children": [],
                "closingElement": null,
                "start": 909,
                "end": 919
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 920,
                    "end": 933
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 919,
                  "end": 936
                },
                "children": [],
                "closingElement": null,
                "start": 919,
                "end": 936
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 938,
                "end": 953
              },
              "start": 936,
              "end": 954
            },
            "start": 873,
            "end": 954
          },
          "definite": false,
          "start": 868,
          "end": 954
        }
      ],
      "declare": false,
      "start": 864,
      "end": 955
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 955
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
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43,
    "range": [
      34,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 85,
    "end": 93,
    "range": [
      85,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 99,
    "end": 106,
    "range": [
      99,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 109,
    "end": 112,
    "range": [
      109,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 113,
    "end": 120,
    "range": [
      113,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 154,
    "end": 163,
    "range": [
      154,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 199,
    "end": 205,
    "range": [
      199,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 208,
    "end": 211,
    "range": [
      208,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "JSXText",
    "value": "My Button",
    "start": 212,
    "end": 221,
    "range": [
      212,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 223,
    "end": 226,
    "range": [
      223,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 238,
    "end": 246,
    "range": [
      238,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "AnotherButton",
    "start": 247,
    "end": 260,
    "range": [
      247,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 264,
    "end": 267,
    "range": [
      264,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 275,
    "end": 281,
    "range": [
      275,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 283,
    "end": 285,
    "range": [
      283,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "JSXText",
    "value": "Just Another Button",
    "start": 286,
    "end": 305,
    "range": [
      286,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 315,
    "end": 323,
    "range": [
      315,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 324,
    "end": 328,
    "range": [
      324,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 344,
    "end": 350,
    "range": [
      344,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 352,
    "end": 355,
    "range": [
      352,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 378,
    "end": 381,
    "range": [
      378,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 382,
    "end": 384,
    "range": [
      382,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 396,
    "end": 398,
    "range": [
      396,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 402,
    "end": 406,
    "range": [
      402,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 413,
    "end": 419,
    "range": [
      413,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 423,
    "end": 436,
    "range": [
      423,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 441,
    "end": 445,
    "range": [
      441,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 448,
    "end": 451,
    "range": [
      448,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 452,
    "end": 454,
    "range": [
      452,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 458,
    "end": 462,
    "range": [
      458,
      462
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 466,
    "end": 468,
    "range": [
      466,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 480,
    "end": 486,
    "range": [
      480,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 493,
    "end": 506,
    "range": [
      493,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 511,
    "end": 515,
    "range": [
      511,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 522,
    "end": 524,
    "range": [
      522,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 528,
    "end": 532,
    "range": [
      528,
      532
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 542,
    "end": 546,
    "range": [
      542,
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
    "value": ">",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 550,
    "end": 556,
    "range": [
      550,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 560,
    "end": 573,
    "range": [
      560,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579,
    "range": [
      578,
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
    "type": "Punctuator",
    "value": "/",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 589,
    "end": 598,
    "range": [
      589,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "SingleChildProp",
    "start": 599,
    "end": 614,
    "range": [
      599,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 624,
    "end": 630,
    "range": [
      624,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 639,
    "end": 645,
    "range": [
      639,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 651,
    "end": 659,
    "range": [
      651,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 665,
    "end": 672,
    "range": [
      665,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 677,
    "end": 685,
    "range": [
      677,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "SingleChildComp",
    "start": 686,
    "end": 701,
    "range": [
      686,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "SingleChildProp",
    "start": 705,
    "end": 720,
    "range": [
      705,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 728,
    "end": 734,
    "range": [
      728,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 736,
    "end": 739,
    "range": [
      736,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 747,
    "end": 750,
    "range": [
      747,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 762,
    "end": 765,
    "range": [
      762,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 772,
    "end": 787,
    "range": [
      772,
      787
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 791,
    "end": 793,
    "range": [
      791,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 797,
    "end": 801,
    "range": [
      797,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 805,
    "end": 811,
    "range": [
      805,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 815,
    "end": 828,
    "range": [
      815,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 836,
    "end": 851,
    "range": [
      836,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 868,
    "end": 870,
    "range": [
      868,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 874,
    "end": 889,
    "range": [
      874,
      889
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 893,
    "end": 895,
    "range": [
      893,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 899,
    "end": 903,
    "range": [
      899,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 910,
    "end": 916,
    "range": [
      910,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 920,
    "end": 933,
    "range": [
      920,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 938,
    "end": 953,
    "range": [
      938,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  }
]
```
