__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 708,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      },
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "TodoProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "todo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "TodoListProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "todos",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "TodoProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "name": "Todo",
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
          "start": 247,
          "end": 282,
          "name": "prop",
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
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "todo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 298,
                  "end": 301,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 311,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 320,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 334,
                        "name": "todo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 345,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 362,
        "name": "TodoList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 363,
          "end": 387,
          "properties": [
            {
              "type": "Property",
              "start": 365,
              "end": 370,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 365,
                "end": 370,
                "name": "todos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 365,
                "end": 370,
                "name": "todos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "TodoListProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 403,
                  "end": 406,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                                  "name": "todos",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 437,
                                  "end": 438,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "computed": true,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 442,
                                "name": "id",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                                  "name": "todos",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 456,
                                  "end": 457,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "computed": true,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 463,
                                "name": "todo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 421,
                        "end": 425,
                        "name": "Todo"
                      },
                      "selfClosing": true,
                      "typeArguments": null
                    },
                    "closingElement": null,
                    "children": []
                  }
                },
                {
                  "type": "JSXText",
                  "start": 468,
                  "end": 473,
                  "value": "\n    ",
                  "raw": "\n    "
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 483,
      "end": 662,
      "id": {
        "type": "Identifier",
        "start": 492,
        "end": 507,
        "name": "TodoListNoError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 508,
          "end": 532,
          "properties": [
            {
              "type": "Property",
              "start": 510,
              "end": 515,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 510,
                "end": 515,
                "name": "todos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 510,
                "end": 515,
                "name": "todos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "TodoListProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 574,
                  "end": 577,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                                    "name": "todos",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 609,
                                    "end": 610,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 612,
                                  "end": 614,
                                  "name": "id",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                                    "name": "todos",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 628,
                                    "end": 629,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 631,
                                  "end": 635,
                                  "name": "todo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 593,
                          "end": 597,
                          "name": "Todo"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      },
                      "closingElement": null,
                      "children": []
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 684,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 683,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 683,
            "name": "x",
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
                  "name": "TodoListProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 699,
              "end": 705,
              "argument": {
                "type": "Identifier",
                "start": 703,
                "end": 704,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 690,
            "end": 698,
            "name": "TodoList"
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
