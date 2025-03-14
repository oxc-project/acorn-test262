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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 72,
      "end": 131,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 123,
        "end": 130,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 81,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 81,
            "end": 102,
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 81,
            "end": 102,
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 104,
          "end": 115,
          "imported": {
            "type": "Identifier",
            "start": 104,
            "end": 115,
            "decorators": [],
            "name": "ElementType",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 104,
            "end": 115,
            "decorators": [],
            "name": "ElementType",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 294,
      "async": false,
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
              "children": [],
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
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 155,
        "decorators": [],
        "name": "UnwrappedLink",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 269,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 269,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 269,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 207,
                "end": 269,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 262,
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
                              "decorators": [],
                              "name": "ElementType",
                              "optional": false
                            }
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "start": 250,
                            "end": 251,
                            "typeName": {
                              "type": "Identifier",
                              "start": 250,
                              "end": 251,
                              "decorators": [],
                              "name": "T",
                              "optional": false
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "start": 254,
                            "end": 257,
                            "literal": {
                              "type": "Literal",
                              "start": 254,
                              "end": 257,
                              "raw": "\"a\"",
                              "value": "a"
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 229,
                      "decorators": [],
                      "name": "ComponentPropsWithRef",
                      "optional": false
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
                      "raw": "\"as\"",
                      "value": "as"
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "decorators": [],
                "name": "Omit",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 155,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 191,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 177,
                "decorators": [],
                "name": "ElementType",
                "optional": false
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 180,
              "end": 191,
              "typeName": {
                "type": "Identifier",
                "start": 180,
                "end": 191,
                "decorators": [],
                "name": "ElementType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 334,
      "expression": {
        "type": "JSXElement",
        "start": 296,
        "end": 333,
        "children": [],
        "closingElement": null,
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
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 329,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  ]
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
          "selfClosing": true
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 518,
      "async": false,
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
              "children": [],
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
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 359,
        "decorators": [],
        "name": "UnwrappedLink2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 400,
          "end": 493,
          "decorators": [],
          "name": "props",
          "optional": false,
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 411,
                    "end": 473,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 412,
                        "end": 466,
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
                                  "decorators": [],
                                  "name": "ElementType",
                                  "optional": false
                                }
                              },
                              "extendsType": {
                                "type": "TSTypeReference",
                                "start": 454,
                                "end": 455,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 454,
                                  "end": 455,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              },
                              "trueType": {
                                "type": "TSLiteralType",
                                "start": 458,
                                "end": 461,
                                "literal": {
                                  "type": "Literal",
                                  "start": 458,
                                  "end": 461,
                                  "raw": "\"a\"",
                                  "value": "a"
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 433,
                          "decorators": [],
                          "name": "ComponentPropsWithRef",
                          "optional": false
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
                          "raw": "\"as\"",
                          "value": "as"
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 411,
                    "decorators": [],
                    "name": "Omit",
                    "optional": false
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
                      "key": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 484,
                        "decorators": [],
                        "name": "as",
                        "optional": false
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 395,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 381,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 381,
                "decorators": [],
                "name": "ElementType",
                "optional": false
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 395,
                "decorators": [],
                "name": "ElementType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 520,
      "end": 559,
      "expression": {
        "type": "JSXElement",
        "start": 520,
        "end": 558,
        "children": [],
        "closingElement": null,
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
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 552,
                    "end": 554,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  ]
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
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 611,
      "expression": {
        "type": "JSXElement",
        "start": 560,
        "end": 610,
        "children": [],
        "closingElement": null,
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
                "raw": "\"button\"",
                "value": "button"
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
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 604,
                    "end": 606,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 598,
                      "end": 599,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  ]
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
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
