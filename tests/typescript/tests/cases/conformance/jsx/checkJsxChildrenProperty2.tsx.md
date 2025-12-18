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
                  }
                ],
                "start": 95,
                "end": 115
              },
              "start": 93,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 115
          }
        ],
        "start": 49,
        "end": 117
      },
      "declare": false,
      "start": 34,
      "end": 117
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
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
                "start": 136,
                "end": 140
              },
              "typeArguments": null,
              "start": 136,
              "end": 140
            },
            "start": 134,
            "end": 140
          },
          "start": 133,
          "end": 140
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
                  "start": 156,
                  "end": 159
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 155,
                "end": 160
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
                      "start": 161,
                      "end": 162
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "optional": false,
                    "computed": false,
                    "start": 161,
                    "end": 164
                  },
                  "start": 160,
                  "end": 165
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 167,
                  "end": 170
                },
                "start": 165,
                "end": 171
              },
              "start": 155,
              "end": 171
            },
            "start": 148,
            "end": 172
          }
        ],
        "start": 142,
        "end": 174
      },
      "expression": false,
      "start": 119,
      "end": 174
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 208
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 212,
                "end": 216
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 217,
                    "end": 218
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 220,
                      "end": 222
                    },
                    "start": 219,
                    "end": 223
                  },
                  "start": 217,
                  "end": 223
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 224,
                    "end": 225
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 226,
                    "end": 230
                  },
                  "start": 224,
                  "end": 230
                }
              ],
              "selfClosing": true,
              "start": 211,
              "end": 233
            },
            "children": [],
            "closingElement": null,
            "start": 211,
            "end": 233
          },
          "definite": false,
          "start": 207,
          "end": 233
        }
      ],
      "declare": false,
      "start": 203,
      "end": 234
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
            "name": "k0",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 242
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 250,
                "end": 254
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 255,
                    "end": 256
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 258,
                      "end": 260
                    },
                    "start": 257,
                    "end": 261
                  },
                  "start": 255,
                  "end": 261
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 262,
                    "end": 263
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 264,
                    "end": 268
                  },
                  "start": 262,
                  "end": 268
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 269,
                    "end": 277
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Random",
                    "raw": "\"Random\"",
                    "start": 278,
                    "end": 286
                  },
                  "start": 269,
                  "end": 286
                }
              ],
              "selfClosing": false,
              "start": 249,
              "end": 288
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 288,
                "end": 311
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 313,
                "end": 317
              },
              "start": 311,
              "end": 318
            },
            "start": 249,
            "end": 318
          },
          "definite": false,
          "start": 240,
          "end": 318
        }
      ],
      "declare": false,
      "start": 236,
      "end": 319
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 326
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 344
                },
                "value": {
                  "type": "Literal",
                  "value": "Random",
                  "raw": "\"Random\"",
                  "start": 345,
                  "end": 353
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 336,
                "end": 353
              }
            ],
            "start": 329,
            "end": 355
          },
          "definite": false,
          "start": 325,
          "end": 355
        }
      ],
      "declare": false,
      "start": 321,
      "end": 355
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
            "start": 360,
            "end": 362
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 370,
                "end": 374
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 375,
                    "end": 376
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 378,
                      "end": 380
                    },
                    "start": 377,
                    "end": 381
                  },
                  "start": 375,
                  "end": 381
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 382,
                    "end": 383
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 384,
                    "end": 388
                  },
                  "start": 382,
                  "end": 388
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "start": 389,
                  "end": 395
                }
              ],
              "selfClosing": false,
              "start": 369,
              "end": 397
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 397,
                "end": 420
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 422,
                "end": 426
              },
              "start": 420,
              "end": 427
            },
            "start": 369,
            "end": 427
          },
          "definite": false,
          "start": 360,
          "end": 427
        }
      ],
      "declare": false,
      "start": 356,
      "end": 428
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
            "start": 459,
            "end": 461
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 469,
                "end": 473
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 474,
                    "end": 475
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 477,
                      "end": 479
                    },
                    "start": 476,
                    "end": 480
                  },
                  "start": 474,
                  "end": 480
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 481,
                    "end": 482
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 483,
                    "end": 487
                  },
                  "start": 481,
                  "end": 487
                }
              ],
              "selfClosing": false,
              "start": 468,
              "end": 488
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 488,
                "end": 497
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 498,
                    "end": 501
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 497,
                  "end": 502
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 502,
                    "end": 510
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 512,
                    "end": 515
                  },
                  "start": 510,
                  "end": 516
                },
                "start": 497,
                "end": 516
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 516,
                "end": 525
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 533,
                          "end": 539
                        },
                        "start": 531,
                        "end": 539
                      },
                      "start": 527,
                      "end": 539
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 545,
                        "end": 548
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 544,
                      "end": 549
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": " My name ",
                        "raw": " My name ",
                        "start": 549,
                        "end": 558
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 563
                        },
                        "start": 558,
                        "end": 564
                      },
                      {
                        "type": "JSXText",
                        "value": " ",
                        "raw": " ",
                        "start": 564,
                        "end": 565
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 567,
                        "end": 570
                      },
                      "start": 565,
                      "end": 571
                    },
                    "start": 544,
                    "end": 571
                  },
                  "id": null,
                  "generator": false,
                  "start": 526,
                  "end": 571
                },
                "start": 525,
                "end": 572
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 572,
                "end": 577
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 579,
                "end": 583
              },
              "start": 577,
              "end": 584
            },
            "start": 468,
            "end": 584
          },
          "definite": false,
          "start": 459,
          "end": 584
        }
      ],
      "declare": false,
      "start": 455,
      "end": 585
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
            "start": 591,
            "end": 593
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 601,
                "end": 605
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 606,
                    "end": 607
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 609,
                      "end": 611
                    },
                    "start": 608,
                    "end": 612
                  },
                  "start": 606,
                  "end": 612
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 613,
                    "end": 614
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 615,
                    "end": 619
                  },
                  "start": 613,
                  "end": 619
                }
              ],
              "selfClosing": false,
              "start": 600,
              "end": 620
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 620,
                "end": 629
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 630,
                    "end": 633
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 629,
                  "end": 634
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 634,
                    "end": 642
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 644,
                    "end": 647
                  },
                  "start": 642,
                  "end": 648
                },
                "start": 629,
                "end": 648
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 648,
                "end": 657
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 1000000,
                  "raw": "1000000",
                  "start": 658,
                  "end": 665
                },
                "start": 657,
                "end": 666
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 666,
                "end": 671
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 673,
                "end": 677
              },
              "start": 671,
              "end": 678
            },
            "start": 600,
            "end": 678
          },
          "definite": false,
          "start": 591,
          "end": 678
        }
      ],
      "declare": false,
      "start": 587,
      "end": 679
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
            "start": 685,
            "end": 687
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 695,
                "end": 699
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 700,
                    "end": 701
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 703,
                      "end": 705
                    },
                    "start": 702,
                    "end": 706
                  },
                  "start": 700,
                  "end": 706
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 707,
                    "end": 708
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 709,
                    "end": 713
                  },
                  "start": 707,
                  "end": 713
                }
              ],
              "selfClosing": false,
              "start": 694,
              "end": 715
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 715,
                "end": 724
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 725,
                    "end": 728
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 724,
                  "end": 729
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 729,
                    "end": 737
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 739,
                    "end": 742
                  },
                  "start": 737,
                  "end": 743
                },
                "start": 724,
                "end": 743
              },
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 743,
                "end": 766
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 768,
                "end": 772
              },
              "start": 766,
              "end": 773
            },
            "start": 694,
            "end": 773
          },
          "definite": false,
          "start": 685,
          "end": 773
        }
      ],
      "declare": false,
      "start": 681,
      "end": 774
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
            "start": 780,
            "end": 782
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 790,
                "end": 794
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 795,
                    "end": 796
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 798,
                      "end": 800
                    },
                    "start": 797,
                    "end": 801
                  },
                  "start": 795,
                  "end": 801
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 802,
                    "end": 803
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 804,
                    "end": 808
                  },
                  "start": 802,
                  "end": 808
                }
              ],
              "selfClosing": false,
              "start": 789,
              "end": 810
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 810,
                "end": 819
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 820,
                    "end": 823
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 819,
                  "end": 824
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 824,
                    "end": 832
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 834,
                    "end": 837
                  },
                  "start": 832,
                  "end": 838
                },
                "start": 819,
                "end": 838
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 838,
                "end": 847
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 848,
                    "end": 851
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 847,
                  "end": 852
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 852,
                    "end": 860
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 862,
                    "end": 865
                  },
                  "start": 860,
                  "end": 866
                },
                "start": 847,
                "end": 866
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 866,
                "end": 871
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 873,
                "end": 877
              },
              "start": 871,
              "end": 878
            },
            "start": 789,
            "end": 878
          },
          "definite": false,
          "start": 780,
          "end": 878
        }
      ],
      "declare": false,
      "start": 776,
      "end": 879
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 879
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
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 119,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 166,
    "end": 167
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 203,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 212,
    "end": 216
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 250,
    "end": 254
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 264,
    "end": 268
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 269,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "JSXText",
    "value": "\"Random\"",
    "start": 278,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "JSXText",
    "value": "\n        hi hi hi!\n    ",
    "start": 288,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 312,
    "end": 313
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 336,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"Random\"",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 370,
    "end": 374
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXText",
    "value": "\n        hi hi hi!\n    ",
    "start": 397,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 421,
    "end": 422
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
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
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 468,
    "end": 469
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 469,
    "end": 473
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 487,
    "end": 488
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 488,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 502,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 511,
    "end": 512
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 516,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 548,
    "end": 549
  },
  {
    "type": "JSXText",
    "value": " My name ",
    "start": 549,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 566,
    "end": 567
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 578,
    "end": 579
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 600,
    "end": 601
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 601,
    "end": 605
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 619,
    "end": 620
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 620,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 629,
    "end": 630
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 634,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 643,
    "end": 644
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 647,
    "end": 648
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 648,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "1000000",
    "start": 658,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 666,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 672,
    "end": 673
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 681,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 695,
    "end": 699
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 714,
    "end": 715
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 715,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 728,
    "end": 729
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 729,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 738,
    "end": 739
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743
  },
  {
    "type": "JSXText",
    "value": "\n        hi hi hi!\n    ",
    "start": 743,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 767,
    "end": 768
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 776,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 790,
    "end": 794
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 810,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 819,
    "end": 820
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 823,
    "end": 824
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 824,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 833,
    "end": 834
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 837,
    "end": 838
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 838,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
    "end": 852
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 852,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 861,
    "end": 862
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 862,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 866,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 872,
    "end": 873
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  }
]
```
