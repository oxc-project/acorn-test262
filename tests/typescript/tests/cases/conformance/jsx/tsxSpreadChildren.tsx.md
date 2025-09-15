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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "todos",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 428
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 432
                      },
                      "optional": false,
                      "computed": false,
                      "start": 423,
                      "end": 432
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "todo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 433,
                            "end": 437
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Todo",
                              "start": 442,
                              "end": 446
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "key",
                                  "start": 447,
                                  "end": 450
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 452,
                                      "end": 456
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 457,
                                      "end": 459
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 452,
                                    "end": 459
                                  },
                                  "start": 451,
                                  "end": 460
                                },
                                "start": 447,
                                "end": 460
                              },
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "todo",
                                  "start": 461,
                                  "end": 465
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 467,
                                      "end": 471
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 472,
                                      "end": 476
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 467,
                                    "end": 476
                                  },
                                  "start": 466,
                                  "end": 477
                                },
                                "start": 461,
                                "end": 477
                              }
                            ],
                            "selfClosing": true,
                            "start": 441,
                            "end": 479
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 441,
                          "end": 479
                        },
                        "id": null,
                        "generator": false,
                        "start": 433,
                        "end": 479
                      }
                    ],
                    "optional": false,
                    "start": 423,
                    "end": 480
                  },
                  "start": 419,
                  "end": 481
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 481,
                  "end": 486
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 488,
                  "end": 491
                },
                "start": 486,
                "end": 492
              },
              "start": 405,
              "end": 492
            },
            "start": 398,
            "end": 493
          }
        ],
        "start": 392,
        "end": 495
      },
      "expression": false,
      "start": 348,
      "end": 495
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
                  "start": 503,
                  "end": 516
                },
                "typeArguments": null,
                "start": 503,
                "end": 516
              },
              "start": 501,
              "end": 516
            },
            "start": 500,
            "end": 516
          },
          "init": null,
          "definite": false,
          "start": 500,
          "end": 516
        }
      ],
      "declare": false,
      "start": 496,
      "end": 517
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
            "start": 523,
            "end": 531
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
                "start": 536,
                "end": 537
              },
              "start": 532,
              "end": 538
            }
          ],
          "selfClosing": true,
          "start": 522,
          "end": 540
        },
        "children": [],
        "closingElement": null,
        "start": 522,
        "end": 540
      },
      "directive": null,
      "start": 522,
      "end": 540
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 540
}
```
