__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 537,
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
      "end": 492,
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
        "end": 492,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 395,
            "end": 490,
            "argument": {
              "type": "JSXElement",
              "start": 402,
              "end": 489,
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
                  "end": 478,
                  "expression": {
                    "type": "CallExpression",
                    "start": 420,
                    "end": 477,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 420,
                      "end": 429,
                      "object": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 425,
                        "decorators": [],
                        "name": "todos",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 429,
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 430,
                        "end": 476,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 430,
                            "end": 434,
                            "decorators": [],
                            "name": "todo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "JSXElement",
                          "start": 438,
                          "end": 476,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 438,
                            "end": 476,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 439,
                              "end": 443,
                              "name": "Todo"
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 444,
                                "end": 457,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 444,
                                  "end": 447,
                                  "name": "key"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 448,
                                  "end": 457,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 449,
                                    "end": 456,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 449,
                                      "end": 453,
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 454,
                                      "end": 456,
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
                                "start": 458,
                                "end": 474,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 458,
                                  "end": 462,
                                  "name": "todo"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 463,
                                  "end": 474,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 464,
                                    "end": 473,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 464,
                                      "end": 468,
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 469,
                                      "end": 473,
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
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 478,
                  "end": 483,
                  "value": "\n    ",
                  "raw": "\n    "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 483,
                "end": 489,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 485,
                  "end": 488,
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
      "start": 493,
      "end": 514,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 513,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 513,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 513,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 513,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 513,
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
      "start": 519,
      "end": 537,
      "expression": {
        "type": "JSXElement",
        "start": 519,
        "end": 537,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 519,
          "end": 537,
          "name": {
            "type": "JSXIdentifier",
            "start": 520,
            "end": 528,
            "name": "TodoList"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 529,
              "end": 535,
              "argument": {
                "type": "Identifier",
                "start": 533,
                "end": 534,
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
