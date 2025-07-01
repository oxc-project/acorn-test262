__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 102
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 102
          },
          "importKind": "value",
          "start": 81,
          "end": 102
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 115
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 115
          },
          "importKind": "value",
          "start": 104,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 123,
        "end": 130
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 72,
      "end": 131
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnwrappedLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 177
              },
              "typeArguments": null,
              "start": 166,
              "end": 177
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 191
              },
              "typeArguments": null,
              "start": 180,
              "end": 191
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 191
          }
        ],
        "start": 155,
        "end": 192
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentPropsWithRef",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 229
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ElementType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 230,
                              "end": 241
                            },
                            "typeArguments": null,
                            "start": 230,
                            "end": 241
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 250,
                              "end": 251
                            },
                            "typeArguments": null,
                            "start": 250,
                            "end": 251
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 254,
                              "end": 257
                            },
                            "start": 254,
                            "end": 257
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 261
                            },
                            "typeArguments": null,
                            "start": 260,
                            "end": 261
                          },
                          "start": 230,
                          "end": 261
                        }
                      ],
                      "start": 229,
                      "end": 262
                    },
                    "start": 208,
                    "end": 262
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "as",
                      "raw": "\"as\"",
                      "start": 264,
                      "end": 268
                    },
                    "start": 264,
                    "end": 268
                  }
                ],
                "start": 207,
                "end": 269
              },
              "start": 203,
              "end": 269
            },
            "start": 201,
            "end": 269
          },
          "start": 196,
          "end": 269
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
                  "name": "a",
                  "start": 285,
                  "end": 286
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 284,
                "end": 287
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 289,
                  "end": 290
                },
                "start": 287,
                "end": 291
              },
              "start": 284,
              "end": 291
            },
            "start": 277,
            "end": 292
          }
        ],
        "start": 273,
        "end": 294
      },
      "expression": false,
      "start": 133,
      "end": 294
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "UnwrappedLink",
            "start": 297,
            "end": 310
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "onClick",
                "start": 311,
                "end": 318
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 322
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 327,
                    "end": 329
                  },
                  "id": null,
                  "generator": false,
                  "start": 320,
                  "end": 329
                },
                "start": 319,
                "end": 330
              },
              "start": 311,
              "end": 330
            }
          ],
          "selfClosing": true,
          "start": 296,
          "end": 333
        },
        "children": [],
        "closingElement": null,
        "start": 296,
        "end": 333
      },
      "directive": null,
      "start": 296,
      "end": 334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnwrappedLink2",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 361
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 381
              },
              "typeArguments": null,
              "start": 370,
              "end": 381
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 395
              },
              "typeArguments": null,
              "start": 384,
              "end": 395
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 360,
            "end": 395
          }
        ],
        "start": 359,
        "end": 396
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Omit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 411
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComponentPropsWithRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 412,
                          "end": 433
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSConditionalType",
                              "checkType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ElementType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 434,
                                  "end": 445
                                },
                                "typeArguments": null,
                                "start": 434,
                                "end": 445
                              },
                              "extendsType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 454,
                                  "end": 455
                                },
                                "typeArguments": null,
                                "start": 454,
                                "end": 455
                              },
                              "trueType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 458,
                                  "end": 461
                                },
                                "start": 458,
                                "end": 461
                              },
                              "falseType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 464,
                                  "end": 465
                                },
                                "typeArguments": null,
                                "start": 464,
                                "end": 465
                              },
                              "start": 434,
                              "end": 465
                            }
                          ],
                          "start": 433,
                          "end": 466
                        },
                        "start": 412,
                        "end": 466
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "as",
                          "raw": "\"as\"",
                          "start": 468,
                          "end": 472
                        },
                        "start": 468,
                        "end": 472
                      }
                    ],
                    "start": 411,
                    "end": 473
                  },
                  "start": 407,
                  "end": 473
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 484
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 488
                          },
                          "typeArguments": null,
                          "start": 487,
                          "end": 488
                        },
                        "start": 485,
                        "end": 488
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 482,
                      "end": 489
                    }
                  ],
                  "start": 476,
                  "end": 493
                }
              ],
              "start": 407,
              "end": 493
            },
            "start": 405,
            "end": 493
          },
          "start": 400,
          "end": 493
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
                  "name": "a",
                  "start": 509,
                  "end": 510
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 508,
                "end": 511
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 513,
                  "end": 514
                },
                "start": 511,
                "end": 515
              },
              "start": 508,
              "end": 515
            },
            "start": 501,
            "end": 516
          }
        ],
        "start": 497,
        "end": 518
      },
      "expression": false,
      "start": 336,
      "end": 518
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "UnwrappedLink2",
            "start": 521,
            "end": 535
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "onClick",
                "start": 536,
                "end": 543
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 547
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 552,
                    "end": 554
                  },
                  "id": null,
                  "generator": false,
                  "start": 545,
                  "end": 554
                },
                "start": 544,
                "end": 555
              },
              "start": 536,
              "end": 555
            }
          ],
          "selfClosing": true,
          "start": 520,
          "end": 558
        },
        "children": [],
        "closingElement": null,
        "start": 520,
        "end": 558
      },
      "directive": null,
      "start": 520,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "UnwrappedLink2",
            "start": 561,
            "end": 575
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "as",
                "start": 576,
                "end": 578
              },
              "value": {
                "type": "Literal",
                "value": "button",
                "raw": "\"button\"",
                "start": 579,
                "end": 587
              },
              "start": 576,
              "end": 587
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "onClick",
                "start": 588,
                "end": 595
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 598,
                      "end": 599
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 604,
                    "end": 606
                  },
                  "id": null,
                  "generator": false,
                  "start": 597,
                  "end": 606
                },
                "start": 596,
                "end": 607
              },
              "start": 588,
              "end": 607
            }
          ],
          "selfClosing": true,
          "start": 560,
          "end": 610
        },
        "children": [],
        "closingElement": null,
        "start": 560,
        "end": 610
      },
      "directive": null,
      "start": 560,
      "end": 611
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 611
}
```
