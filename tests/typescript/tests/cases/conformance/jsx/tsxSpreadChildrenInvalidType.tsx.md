__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        },
                        "start": 79,
                        "end": 87
                      },
                      "start": 78,
                      "end": 87
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 94
                }
              ],
              "start": 73,
              "end": 97
            },
            "declare": false,
            "start": 45,
            "end": 97
          }
        ],
        "start": 19,
        "end": 99
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "start": 112,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 122
        }
      ],
      "declare": true,
      "start": 100,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 143
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 161
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "todo",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 166,
            "end": 179
          }
        ],
        "start": 144,
        "end": 181
      },
      "declare": false,
      "start": 125,
      "end": 181
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoListProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 205
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
              "name": "todos",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TodoProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 227
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 227
                },
                "start": 219,
                "end": 229
              },
              "start": 217,
              "end": 229
            },
            "accessibility": null,
            "static": false,
            "start": 212,
            "end": 230
          }
        ],
        "start": 206,
        "end": 232
      },
      "declare": false,
      "start": 182,
      "end": 232
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Todo",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 246
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 258
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 260,
                      "end": 266
                    },
                    "start": 258,
                    "end": 266
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 255,
                  "end": 267
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "todo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 272
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 274,
                      "end": 280
                    },
                    "start": 272,
                    "end": 280
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 268,
                  "end": 280
                }
              ],
              "start": 253,
              "end": 282
            },
            "start": 251,
            "end": 282
          },
          "start": 247,
          "end": 282
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
                  "start": 298,
                  "end": 301
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 297,
                "end": 302
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 307
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 308,
                            "end": 311
                          },
                          "optional": false,
                          "computed": false,
                          "start": 303,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 320
                        },
                        "optional": false,
                        "computed": false,
                        "start": 303,
                        "end": 320
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 303,
                      "end": 322
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 329
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "todo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 334
                      },
                      "optional": false,
                      "computed": false,
                      "start": 325,
                      "end": 334
                    },
                    "start": 303,
                    "end": 334
                  },
                  "start": 302,
                  "end": 335
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 337,
                  "end": 340
                },
                "start": 335,
                "end": 341
              },
              "start": 297,
              "end": 341
            },
            "start": 290,
            "end": 342
          }
        ],
        "start": 284,
        "end": 344
      },
      "expression": false,
      "start": 233,
      "end": 344
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoList",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 362
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 370
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 370
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 365,
              "end": 370
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TodoListProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 387
              },
              "typeArguments": null,
              "start": 374,
              "end": 387
            },
            "start": 372,
            "end": 387
          },
          "start": 363,
          "end": 387
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
                  "start": 403,
                  "end": 406
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 402,
                "end": 407
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 407,
                  "end": 416
                },
                {
                  "type": "JSXSpreadChild",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Todo",
                        "start": 421,
                        "end": 425
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "key",
                            "start": 426,
                            "end": 429
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "todos",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 431,
                                  "end": 436
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 437,
                                  "end": 438
                                },
                                "optional": false,
                                "computed": true,
                                "start": 431,
                                "end": 439
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 442
                              },
                              "optional": false,
                              "computed": false,
                              "start": 431,
                              "end": 442
                            },
                            "start": 430,
                            "end": 443
                          },
                          "start": 426,
                          "end": 443
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "todo",
                            "start": 444,
                            "end": 448
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "todos",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 450,
                                  "end": 455
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 456,
                                  "end": 457
                                },
                                "optional": false,
                                "computed": true,
                                "start": 450,
                                "end": 458
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "todo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 463
                              },
                              "optional": false,
                              "computed": false,
                              "start": 450,
                              "end": 463
                            },
                            "start": 449,
                            "end": 464
                          },
                          "start": 444,
                          "end": 464
                        }
                      ],
                      "selfClosing": true,
                      "start": 420,
                      "end": 467
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 420,
                    "end": 467
                  },
                  "start": 416,
                  "end": 468
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 468,
                  "end": 473
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 475,
                  "end": 478
                },
                "start": 473,
                "end": 479
              },
              "start": 402,
              "end": 479
            },
            "start": 395,
            "end": 480
          }
        ],
        "start": 389,
        "end": 482
      },
      "expression": false,
      "start": 345,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoListNoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 492,
        "end": 507
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 515
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 515
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 510,
              "end": 515
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TodoListProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 532
              },
              "typeArguments": null,
              "start": 519,
              "end": 532
            },
            "start": 517,
            "end": 532
          },
          "start": 508,
          "end": 532
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
                  "start": 574,
                  "end": 577
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 573,
                "end": 578
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 578,
                  "end": 587
                },
                {
                  "type": "JSXSpreadChild",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Todo",
                          "start": 593,
                          "end": 597
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "key",
                              "start": 598,
                              "end": 601
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "todos",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 603,
                                    "end": 608
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 609,
                                    "end": 610
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 603,
                                  "end": 611
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "id",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 612,
                                  "end": 614
                                },
                                "optional": false,
                                "computed": false,
                                "start": 603,
                                "end": 614
                              },
                              "start": 602,
                              "end": 615
                            },
                            "start": 598,
                            "end": 615
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "todo",
                              "start": 616,
                              "end": 620
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "todos",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 622,
                                    "end": 627
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 628,
                                    "end": 629
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 622,
                                  "end": 630
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "todo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 631,
                                  "end": 635
                                },
                                "optional": false,
                                "computed": false,
                                "start": 622,
                                "end": 635
                              },
                              "start": 621,
                              "end": 636
                            },
                            "start": 616,
                            "end": 636
                          }
                        ],
                        "selfClosing": true,
                        "start": 592,
                        "end": 639
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 592,
                      "end": 639
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 643,
                      "end": 646
                    },
                    "start": 592,
                    "end": 646
                  },
                  "start": 587,
                  "end": 648
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 648,
                  "end": 653
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 655,
                  "end": 658
                },
                "start": 653,
                "end": 659
              },
              "start": 573,
              "end": 659
            },
            "start": 566,
            "end": 660
          }
        ],
        "start": 534,
        "end": 662
      },
      "expression": false,
      "start": 483,
      "end": 662
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TodoListProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 683
                },
                "typeArguments": null,
                "start": 670,
                "end": 683
              },
              "start": 668,
              "end": 683
            },
            "start": 667,
            "end": 683
          },
          "init": null,
          "definite": false,
          "start": 667,
          "end": 683
        }
      ],
      "declare": false,
      "start": 663,
      "end": 684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "TodoList",
            "start": 690,
            "end": 698
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 704
              },
              "start": 699,
              "end": 705
            }
          ],
          "selfClosing": true,
          "start": 689,
          "end": 707
        },
        "children": [],
        "closingElement": null,
        "start": 689,
        "end": 707
      },
      "directive": null,
      "start": 689,
      "end": 707
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 707
}
```
