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
        "start": 18,
        "end": 21
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
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
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
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    "start": 91,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 97
                }
              ],
              "start": 76,
              "end": 100
            },
            "declare": false,
            "start": 48,
            "end": 100
          }
        ],
        "start": 22,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 102
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
                "start": 122,
                "end": 125
              },
              "start": 120,
              "end": 125
            },
            "start": 115,
            "end": 125
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 125
        }
      ],
      "declare": true,
      "start": 103,
      "end": 126
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 146
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
              "start": 153,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 164
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
              "start": 169,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 182
          }
        ],
        "start": 147,
        "end": 184
      },
      "declare": false,
      "start": 128,
      "end": 184
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoListProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 208
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
              "start": 215,
              "end": 220
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
                    "start": 222,
                    "end": 230
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 230
                },
                "start": 222,
                "end": 232
              },
              "start": 220,
              "end": 232
            },
            "accessibility": null,
            "static": false,
            "start": 215,
            "end": 233
          }
        ],
        "start": 209,
        "end": 235
      },
      "declare": false,
      "start": 185,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Todo",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 249
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
                    "start": 258,
                    "end": 261
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 263,
                      "end": 269
                    },
                    "start": 261,
                    "end": 269
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 258,
                  "end": 270
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
                    "start": 271,
                    "end": 275
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 271,
                  "end": 283
                }
              ],
              "start": 256,
              "end": 285
            },
            "start": 254,
            "end": 285
          },
          "start": 250,
          "end": 285
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
                  "start": 301,
                  "end": 304
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 300,
                "end": 305
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
                            "start": 306,
                            "end": 310
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 314
                          },
                          "optional": false,
                          "computed": false,
                          "start": 306,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 323
                        },
                        "optional": false,
                        "computed": false,
                        "start": 306,
                        "end": 323
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 306,
                      "end": 325
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
                        "start": 328,
                        "end": 332
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "todo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 337
                      },
                      "optional": false,
                      "computed": false,
                      "start": 328,
                      "end": 337
                    },
                    "start": 306,
                    "end": 337
                  },
                  "start": 305,
                  "end": 338
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 340,
                  "end": 343
                },
                "start": 338,
                "end": 344
              },
              "start": 300,
              "end": 344
            },
            "start": 293,
            "end": 345
          }
        ],
        "start": 287,
        "end": 347
      },
      "expression": false,
      "start": 236,
      "end": 347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoList",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 365
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
                "start": 368,
                "end": 373
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 368,
              "end": 373
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
                "start": 377,
                "end": 390
              },
              "typeArguments": null,
              "start": 377,
              "end": 390
            },
            "start": 375,
            "end": 390
          },
          "start": 366,
          "end": 390
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
                  "start": 406,
                  "end": 409
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 405,
                "end": 410
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 410,
                  "end": 419
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
                        "start": 424,
                        "end": 428
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "key",
                            "start": 429,
                            "end": 432
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
                                  "start": 434,
                                  "end": 439
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 440,
                                  "end": 441
                                },
                                "optional": false,
                                "computed": true,
                                "start": 434,
                                "end": 442
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 443,
                                "end": 445
                              },
                              "optional": false,
                              "computed": false,
                              "start": 434,
                              "end": 445
                            },
                            "start": 433,
                            "end": 446
                          },
                          "start": 429,
                          "end": 446
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "todo",
                            "start": 447,
                            "end": 451
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
                                  "start": 453,
                                  "end": 458
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 459,
                                  "end": 460
                                },
                                "optional": false,
                                "computed": true,
                                "start": 453,
                                "end": 461
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "todo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 462,
                                "end": 466
                              },
                              "optional": false,
                              "computed": false,
                              "start": 453,
                              "end": 466
                            },
                            "start": 452,
                            "end": 467
                          },
                          "start": 447,
                          "end": 467
                        }
                      ],
                      "selfClosing": true,
                      "start": 423,
                      "end": 470
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 423,
                    "end": 470
                  },
                  "start": 419,
                  "end": 471
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 471,
                  "end": 476
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 478,
                  "end": 481
                },
                "start": 476,
                "end": 482
              },
              "start": 405,
              "end": 482
            },
            "start": 398,
            "end": 483
          }
        ],
        "start": 392,
        "end": 485
      },
      "expression": false,
      "start": 348,
      "end": 485
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoListNoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 510
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
                "start": 513,
                "end": 518
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 518
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 513,
              "end": 518
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
                "start": 522,
                "end": 535
              },
              "typeArguments": null,
              "start": 522,
              "end": 535
            },
            "start": 520,
            "end": 535
          },
          "start": 511,
          "end": 535
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
                  "start": 577,
                  "end": 580
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 576,
                "end": 581
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 581,
                  "end": 590
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
                          "start": 596,
                          "end": 600
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "key",
                              "start": 601,
                              "end": 604
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
                                    "start": 606,
                                    "end": 611
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 612,
                                    "end": 613
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 606,
                                  "end": 614
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "id",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 615,
                                  "end": 617
                                },
                                "optional": false,
                                "computed": false,
                                "start": 606,
                                "end": 617
                              },
                              "start": 605,
                              "end": 618
                            },
                            "start": 601,
                            "end": 618
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "todo",
                              "start": 619,
                              "end": 623
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
                                    "start": 625,
                                    "end": 630
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 631,
                                    "end": 632
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 625,
                                  "end": 633
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "todo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 634,
                                  "end": 638
                                },
                                "optional": false,
                                "computed": false,
                                "start": 625,
                                "end": 638
                              },
                              "start": 624,
                              "end": 639
                            },
                            "start": 619,
                            "end": 639
                          }
                        ],
                        "selfClosing": true,
                        "start": 595,
                        "end": 642
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 595,
                      "end": 642
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 646,
                      "end": 649
                    },
                    "start": 595,
                    "end": 649
                  },
                  "start": 590,
                  "end": 651
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 651,
                  "end": 656
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 658,
                  "end": 661
                },
                "start": 656,
                "end": 662
              },
              "start": 576,
              "end": 662
            },
            "start": 569,
            "end": 663
          }
        ],
        "start": 537,
        "end": 665
      },
      "expression": false,
      "start": 486,
      "end": 665
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
                  "start": 673,
                  "end": 686
                },
                "typeArguments": null,
                "start": 673,
                "end": 686
              },
              "start": 671,
              "end": 686
            },
            "start": 670,
            "end": 686
          },
          "init": null,
          "definite": false,
          "start": 670,
          "end": 686
        }
      ],
      "declare": false,
      "start": 666,
      "end": 687
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
            "start": 693,
            "end": 701
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
                "start": 706,
                "end": 707
              },
              "start": 702,
              "end": 708
            }
          ],
          "selfClosing": true,
          "start": 692,
          "end": 710
        },
        "children": [],
        "closingElement": null,
        "start": 692,
        "end": 710
      },
      "directive": null,
      "start": 692,
      "end": 710
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 710
}
```
