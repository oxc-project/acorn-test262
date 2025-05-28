__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 707,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 143,
        "decorators": [],
        "name": "TodoProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 181,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 161,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 152,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 166,
            "end": 179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 170,
              "decorators": [],
              "name": "todo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 205,
        "decorators": [],
        "name": "TodoListProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 206,
        "end": 232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 212,
            "end": 230,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 217,
              "decorators": [],
              "name": "todos",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 229,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 219,
                "end": 229,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 227,
                    "decorators": [],
                    "name": "TodoProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 246,
        "decorators": [],
        "name": "Todo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 282,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 282,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 253,
              "end": 282,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 255,
                  "end": 267,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 258,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 258,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 260,
                      "end": 266
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 268,
                  "end": 280,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 272,
                    "decorators": [],
                    "name": "todo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 272,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 274,
                      "end": 280
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 344,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 290,
            "end": 342,
            "argument": {
              "type": "JSXElement",
              "start": 297,
              "end": 341,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 297,
                "end": 302,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 298,
                  "end": 301,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 302,
                  "end": 335,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 303,
                    "end": 334,
                    "left": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 322,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 303,
                        "end": 320,
                        "object": {
                          "type": "MemberExpression",
                          "start": 303,
                          "end": 311,
                          "object": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 307,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 311,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 320,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "start": 325,
                      "end": 334,
                      "object": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 329,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 334,
                        "decorators": [],
                        "name": "todo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 335,
                "end": 341,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 337,
                  "end": 340,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 345,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 362,
        "decorators": [],
        "name": "TodoList",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 363,
          "end": 387,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 365,
              "end": 370,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 365,
                "end": 370,
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 365,
                "end": 370,
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 387,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 387,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 387,
                "decorators": [],
                "name": "TodoListProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 389,
        "end": 482,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 395,
            "end": 480,
            "argument": {
              "type": "JSXElement",
              "start": 402,
              "end": 479,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 402,
                "end": 407,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 403,
                  "end": 406,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 407,
                  "end": 416,
                  "value": "\n        ",
                  "raw": "\n        "
                },
                {
                  "type": "JSXSpreadChild",
                  "start": 416,
                  "end": 468,
                  "expression": {
                    "type": "JSXElement",
                    "start": 420,
                    "end": 467,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 420,
                      "end": 467,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 421,
                        "end": 425,
                        "name": "Todo"
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "start": 426,
                          "end": 443,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 426,
                            "end": 429,
                            "name": "key"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "start": 430,
                            "end": 443,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 431,
                              "end": 442,
                              "object": {
                                "type": "MemberExpression",
                                "start": 431,
                                "end": 439,
                                "object": {
                                  "type": "Identifier",
                                  "start": 431,
                                  "end": 436,
                                  "decorators": [],
                                  "name": "todos",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 437,
                                  "end": 438,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 442,
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "start": 444,
                          "end": 464,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 444,
                            "end": 448,
                            "name": "todo"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "start": 449,
                            "end": 464,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 450,
                              "end": 463,
                              "object": {
                                "type": "MemberExpression",
                                "start": 450,
                                "end": 458,
                                "object": {
                                  "type": "Identifier",
                                  "start": 450,
                                  "end": 455,
                                  "decorators": [],
                                  "name": "todos",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 456,
                                  "end": 457,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 463,
                                "decorators": [],
                                "name": "todo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        }
                      ],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
                  }
                },
                {
                  "type": "JSXText",
                  "start": 468,
                  "end": 473,
                  "value": "\n    ",
                  "raw": "\n    "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 473,
                "end": 479,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 475,
                  "end": 478,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 483,
      "end": 662,
      "id": {
        "type": "Identifier",
        "start": 492,
        "end": 507,
        "decorators": [],
        "name": "TodoListNoError",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 508,
          "end": 532,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 510,
              "end": 515,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 510,
                "end": 515,
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 510,
                "end": 515,
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 517,
            "end": 532,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 519,
              "end": 532,
              "typeName": {
                "type": "Identifier",
                "start": 519,
                "end": 532,
                "decorators": [],
                "name": "TodoListProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 534,
        "end": 662,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 566,
            "end": 660,
            "argument": {
              "type": "JSXElement",
              "start": 573,
              "end": 659,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 573,
                "end": 578,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 574,
                  "end": 577,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 578,
                  "end": 587,
                  "value": "\n        ",
                  "raw": "\n        "
                },
                {
                  "type": "JSXSpreadChild",
                  "start": 587,
                  "end": 648,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 592,
                    "end": 646,
                    "expression": {
                      "type": "JSXElement",
                      "start": 592,
                      "end": 639,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 592,
                        "end": 639,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 593,
                          "end": 597,
                          "name": "Todo"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "start": 598,
                            "end": 615,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 598,
                              "end": 601,
                              "name": "key"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 602,
                              "end": 615,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 603,
                                "end": 614,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 603,
                                  "end": 611,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 603,
                                    "end": 608,
                                    "decorators": [],
                                    "name": "todos",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 609,
                                    "end": 610,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 612,
                                  "end": 614,
                                  "decorators": [],
                                  "name": "id",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 616,
                            "end": 636,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 616,
                              "end": 620,
                              "name": "todo"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 621,
                              "end": 636,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 622,
                                "end": 635,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 622,
                                  "end": 630,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 622,
                                    "end": 627,
                                    "decorators": [],
                                    "name": "todos",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 628,
                                    "end": 629,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 631,
                                  "end": 635,
                                  "decorators": [],
                                  "name": "todo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          }
                        ],
                        "selfClosing": true
                      },
                      "children": [],
                      "closingElement": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 643,
                      "end": 646
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "start": 648,
                  "end": 653,
                  "value": "\n    ",
                  "raw": "\n    "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 653,
                "end": 659,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 655,
                  "end": 658,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 684,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 683,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 683,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 668,
              "end": 683,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 670,
                "end": 683,
                "typeName": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 683,
                  "decorators": [],
                  "name": "TodoListProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 707,
      "expression": {
        "type": "JSXElement",
        "start": 689,
        "end": 707,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 689,
          "end": 707,
          "name": {
            "type": "JSXIdentifier",
            "start": 690,
            "end": 698,
            "name": "TodoList"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 699,
              "end": 705,
              "argument": {
                "type": "Identifier",
                "start": 703,
                "end": 704,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
