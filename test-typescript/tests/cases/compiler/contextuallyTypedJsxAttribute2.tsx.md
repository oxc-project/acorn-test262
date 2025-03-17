__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 612,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 72,
      "end": 131,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 81,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 81,
            "end": 102,
            "name": "ComponentPropsWithRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 81,
            "end": 102,
            "name": "ComponentPropsWithRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 104,
          "end": 115,
          "imported": {
            "type": "Identifier",
            "start": 104,
            "end": 115,
            "name": "ElementType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 104,
            "end": 115,
            "name": "ElementType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 123,
        "end": 130,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 155,
        "name": "UnwrappedLink",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 269,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 269,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 269,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "name": "Omit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 207,
                "end": 269,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 229,
                      "name": "ComponentPropsWithRef",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 229,
                      "end": 262,
                      "params": [
                        {
                          "type": "TSConditionalType",
                          "start": 230,
                          "end": 261,
                          "checkType": {
                            "type": "TSTypeReference",
                            "start": 230,
                            "end": 241,
                            "typeName": {
                              "type": "Identifier",
                              "start": 230,
                              "end": 241,
                              "name": "ElementType",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "start": 250,
                            "end": 251,
                            "typeName": {
                              "type": "Identifier",
                              "start": 250,
                              "end": 251,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "start": 254,
                            "end": 257,
                            "literal": {
                              "type": "Literal",
                              "start": 254,
                              "end": 257,
                              "value": "a",
                              "raw": "\"a\""
                            }
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "start": 260,
                            "end": 261,
                            "typeName": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 261,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 264,
                    "end": 268,
                    "literal": {
                      "type": "Literal",
                      "start": 264,
                      "end": 268,
                      "value": "as",
                      "raw": "\"as\""
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 273,
        "end": 294,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 277,
            "end": 292,
            "argument": {
              "type": "JSXElement",
              "start": 284,
              "end": 291,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 284,
                "end": 287,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 285,
                  "end": 286,
                  "name": "a"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 287,
                "end": 291,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 289,
                  "end": 290,
                  "name": "a"
                }
              },
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 155,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 191,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 177,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 180,
              "end": 191,
              "typeName": {
                "type": "Identifier",
                "start": 180,
                "end": 191,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 334,
      "expression": {
        "type": "JSXElement",
        "start": 296,
        "end": 333,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 296,
          "end": 333,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 311,
              "end": 330,
              "name": {
                "type": "JSXIdentifier",
                "start": 311,
                "end": 318,
                "name": "onClick"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 319,
                "end": 330,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 320,
                  "end": 329,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 329,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 297,
            "end": 310,
            "name": "UnwrappedLink"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 359,
        "name": "UnwrappedLink2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 400,
          "end": 493,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 493,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 407,
              "end": 493,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 473,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 411,
                    "name": "Omit",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 411,
                    "end": 473,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 412,
                        "end": 466,
                        "typeName": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 433,
                          "name": "ComponentPropsWithRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 433,
                          "end": 466,
                          "params": [
                            {
                              "type": "TSConditionalType",
                              "start": 434,
                              "end": 465,
                              "checkType": {
                                "type": "TSTypeReference",
                                "start": 434,
                                "end": 445,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 434,
                                  "end": 445,
                                  "name": "ElementType",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "extendsType": {
                                "type": "TSTypeReference",
                                "start": 454,
                                "end": 455,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 454,
                                  "end": 455,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "trueType": {
                                "type": "TSLiteralType",
                                "start": 458,
                                "end": 461,
                                "literal": {
                                  "type": "Literal",
                                  "start": 458,
                                  "end": 461,
                                  "value": "a",
                                  "raw": "\"a\""
                                }
                              },
                              "falseType": {
                                "type": "TSTypeReference",
                                "start": 464,
                                "end": 465,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 464,
                                  "end": 465,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 468,
                        "end": 472,
                        "literal": {
                          "type": "Literal",
                          "start": 468,
                          "end": 472,
                          "value": "as",
                          "raw": "\"as\""
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 476,
                  "end": 493,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 482,
                      "end": 489,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 484,
                        "name": "as",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 485,
                        "end": 488,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 487,
                          "end": 488,
                          "typeName": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 488,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 497,
        "end": 518,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 501,
            "end": 516,
            "argument": {
              "type": "JSXElement",
              "start": 508,
              "end": 515,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 508,
                "end": 511,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 509,
                  "end": 510,
                  "name": "a"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 511,
                "end": 515,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 513,
                  "end": 514,
                  "name": "a"
                }
              },
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 395,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 381,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 381,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 395,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 520,
      "end": 559,
      "expression": {
        "type": "JSXElement",
        "start": 520,
        "end": 558,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 520,
          "end": 558,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 536,
              "end": 555,
              "name": {
                "type": "JSXIdentifier",
                "start": 536,
                "end": 543,
                "name": "onClick"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 544,
                "end": 555,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 545,
                  "end": 554,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 552,
                    "end": 554,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 521,
            "end": 535,
            "name": "UnwrappedLink2"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 611,
      "expression": {
        "type": "JSXElement",
        "start": 560,
        "end": 610,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 560,
          "end": 610,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 576,
              "end": 587,
              "name": {
                "type": "JSXIdentifier",
                "start": 576,
                "end": 578,
                "name": "as"
              },
              "value": {
                "type": "Literal",
                "start": 579,
                "end": 587,
                "value": "button",
                "raw": "\"button\""
              }
            },
            {
              "type": "JSXAttribute",
              "start": 588,
              "end": 607,
              "name": {
                "type": "JSXIdentifier",
                "start": 588,
                "end": 595,
                "name": "onClick"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 596,
                "end": 607,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 597,
                  "end": 606,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 598,
                      "end": 599,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 604,
                    "end": 606,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 561,
            "end": 575,
            "name": "UnwrappedLink2"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
