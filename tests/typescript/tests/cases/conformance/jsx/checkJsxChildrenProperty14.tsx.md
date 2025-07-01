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
