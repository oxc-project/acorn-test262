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
            "start": 406,
            "end": 408
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 412,
                "end": 416
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 417,
                    "end": 418
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 420,
                      "end": 422
                    },
                    "start": 419,
                    "end": 423
                  },
                  "start": 417,
                  "end": 423
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 424,
                    "end": 425
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 426,
                    "end": 430
                  },
                  "start": 424,
                  "end": 430
                }
              ],
              "selfClosing": false,
              "start": 411,
              "end": 431
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 432,
                    "end": 438
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 431,
                  "end": 441
                },
                "children": [],
                "closingElement": null,
                "start": 431,
                "end": 441
              },
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 441,
                "end": 443
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 444,
                    "end": 457
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 443,
                  "end": 460
                },
                "children": [],
                "closingElement": null,
                "start": 443,
                "end": 460
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 462,
                "end": 466
              },
              "start": 460,
              "end": 467
            },
            "start": 411,
            "end": 467
          },
          "definite": false,
          "start": 406,
          "end": 467
        }
      ],
      "declare": false,
      "start": 402,
      "end": 468
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
            "start": 473,
            "end": 475
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 479,
                "end": 483
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 484,
                    "end": 485
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 487,
                      "end": 489
                    },
                    "start": 486,
                    "end": 490
                  },
                  "start": 484,
                  "end": 490
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 491,
                    "end": 492
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 493,
                    "end": 497
                  },
                  "start": 491,
                  "end": 497
                }
              ],
              "selfClosing": false,
              "start": 478,
              "end": 498
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 499,
                    "end": 505
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 498,
                  "end": 508
                },
                "children": [],
                "closingElement": null,
                "start": 498,
                "end": 508
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 508,
                "end": 513
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 514,
                    "end": 527
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 513,
                  "end": 530
                },
                "children": [],
                "closingElement": null,
                "start": 513,
                "end": 530
              },
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 530,
                "end": 532
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 534,
                "end": 538
              },
              "start": 532,
              "end": 539
            },
            "start": 478,
            "end": 539
          },
          "definite": false,
          "start": 473,
          "end": 539
        }
      ],
      "declare": false,
      "start": 469,
      "end": 540
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
            "start": 545,
            "end": 547
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 551,
                "end": 555
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 556,
                    "end": 557
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 559,
                      "end": 561
                    },
                    "start": 558,
                    "end": 562
                  },
                  "start": 556,
                  "end": 562
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 563,
                    "end": 564
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 565,
                    "end": 569
                  },
                  "start": 563,
                  "end": 569
                }
              ],
              "selfClosing": false,
              "start": 550,
              "end": 570
            },
            "children": [
              {
                "type": "JSXText",
                "value": "    ",
                "raw": "    ",
                "start": 570,
                "end": 574
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 575,
                    "end": 581
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 574,
                  "end": 584
                },
                "children": [],
                "closingElement": null,
                "start": 574,
                "end": 584
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 584,
                "end": 589
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 590,
                    "end": 603
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 589,
                  "end": 606
                },
                "children": [],
                "closingElement": null,
                "start": 589,
                "end": 606
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 608,
                "end": 612
              },
              "start": 606,
              "end": 613
            },
            "start": 550,
            "end": 613
          },
          "definite": false,
          "start": 545,
          "end": 613
        }
      ],
      "declare": false,
      "start": 541,
      "end": 614
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 614
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
    "start": 402,
    "end": 405,
    "range": [
      402,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 406,
    "end": 408,
    "range": [
      406,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 412,
    "end": 416,
    "range": [
      412,
      416
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 426,
    "end": 430,
    "range": [
      426,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 441,
    "end": 443,
    "range": [
      441,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 444,
    "end": 457,
    "range": [
      444,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 462,
    "end": 466,
    "range": [
      462,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 469,
    "end": 472,
    "range": [
      469,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 473,
    "end": 475,
    "range": [
      473,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 479,
    "end": 483,
    "range": [
      479,
      483
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 487,
    "end": 489,
    "range": [
      487,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 493,
    "end": 497,
    "range": [
      493,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 499,
    "end": 505,
    "range": [
      499,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 508,
    "end": 513,
    "range": [
      508,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 514,
    "end": 527,
    "range": [
      514,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 530,
    "end": 532,
    "range": [
      530,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 534,
    "end": 538,
    "range": [
      534,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 541,
    "end": 544,
    "range": [
      541,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 545,
    "end": 547,
    "range": [
      545,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 551,
    "end": 555,
    "range": [
      551,
      555
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 559,
    "end": 561,
    "range": [
      559,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 565,
    "end": 569,
    "range": [
      565,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "JSXText",
    "value": "    ",
    "start": 570,
    "end": 574,
    "range": [
      570,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 584,
    "end": 589,
    "range": [
      584,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 590,
    "end": 603,
    "range": [
      590,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 605,
    "end": 606,
    "range": [
      605,
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
    "type": "Punctuator",
    "value": "/",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 608,
    "end": 612,
    "range": [
      608,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  }
]
```
