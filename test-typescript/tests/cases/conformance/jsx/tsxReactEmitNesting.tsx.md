__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1551,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "vdom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "decorators": [],
            "name": "ctrl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 1549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 1549,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "decorators": [],
            "name": "render",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 1549,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 169,
              "end": 1549,
              "children": [
                {
                  "type": "JSXText",
                  "start": 194,
                  "end": 203,
                  "raw": "\n        ",
                  "value": "\n        "
                },
                {
                  "type": "JSXElement",
                  "start": 203,
                  "end": 449,
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 226,
                      "end": 239,
                      "raw": "\n            ",
                      "value": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 239,
                      "end": 263,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 243,
                          "end": 258,
                          "raw": "todos &lt;x&gt;",
                          "value": "todos <x>"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 258,
                        "end": 263,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 260,
                          "end": 262,
                          "name": "h1"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 239,
                        "end": 243,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 240,
                          "end": 242,
                          "name": "h1"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "JSXText",
                      "start": 263,
                      "end": 276,
                      "raw": "\n            ",
                      "value": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 276,
                      "end": 431,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 276,
                        "end": 431,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "start": 283,
                            "end": 299,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 283,
                              "end": 288,
                              "name": "class"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 289,
                              "end": 299,
                              "raw": "\"new-todo\"",
                              "value": "new-todo"
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 300,
                            "end": 309,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 300,
                              "end": 309,
                              "name": "autofocus"
                            },
                            "value": null
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 310,
                            "end": 328,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 310,
                              "end": 322,
                              "name": "autocomplete"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 323,
                              "end": 328,
                              "raw": "\"off\"",
                              "value": "off"
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 329,
                            "end": 365,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 329,
                              "end": 340,
                              "name": "placeholder"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 341,
                              "end": 365,
                              "raw": "\"What needs to be done?\"",
                              "value": "What needs to be done?"
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 366,
                            "end": 387,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 366,
                              "end": 371,
                              "name": "value"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 372,
                              "end": 387,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 373,
                                "end": 386,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 373,
                                  "end": 378,
                                  "decorators": [],
                                  "name": "model",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 379,
                                  "end": 386,
                                  "decorators": [],
                                  "name": "newTodo",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 388,
                            "end": 428,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 388,
                              "end": 395,
                              "name": "onKeyup"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 396,
                              "end": 428,
                              "expression": {
                                "type": "CallExpression",
                                "start": 397,
                                "end": 427,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 419,
                                    "decorators": [],
                                    "name": "ctrl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 421,
                                    "end": 426,
                                    "decorators": [],
                                    "name": "model",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 397,
                                  "end": 414,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 397,
                                    "end": 409,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 397,
                                      "end": 401,
                                      "decorators": [],
                                      "name": "ctrl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 402,
                                      "end": 409,
                                      "decorators": [],
                                      "name": "addTodo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 410,
                                    "end": 414,
                                    "decorators": [],
                                    "name": "bind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 277,
                          "end": 282,
                          "name": "input"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "JSXText",
                      "start": 431,
                      "end": 440,
                      "raw": "\n        ",
                      "value": "\n        "
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 440,
                    "end": 449,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 442,
                      "end": 448,
                      "name": "header"
                    }
                  },
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 203,
                    "end": 226,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 211,
                        "end": 225,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 211,
                          "end": 216,
                          "name": "class"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 217,
                          "end": 225,
                          "raw": "\"header\"",
                          "value": "header"
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 204,
                      "end": 210,
                      "name": "header"
                    },
                    "selfClosing": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "JSXText",
                  "start": 449,
                  "end": 458,
                  "raw": "\n        ",
                  "value": "\n        "
                },
                {
                  "type": "JSXElement",
                  "start": 458,
                  "end": 1534,
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 553,
                      "end": 566,
                      "raw": "\n            ",
                      "value": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 566,
                      "end": 646,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 566,
                        "end": 646,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "start": 573,
                            "end": 591,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 573,
                              "end": 578,
                              "name": "class"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 579,
                              "end": 591,
                              "raw": "\"toggle-all\"",
                              "value": "toggle-all"
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 592,
                            "end": 607,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 592,
                              "end": 596,
                              "name": "type"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 597,
                              "end": 607,
                              "raw": "\"checkbox\"",
                              "value": "checkbox"
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 608,
                            "end": 644,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 608,
                              "end": 616,
                              "name": "onChange"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 617,
                              "end": 644,
                              "expression": {
                                "type": "CallExpression",
                                "start": 618,
                                "end": 643,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 638,
                                    "end": 642,
                                    "decorators": [],
                                    "name": "ctrl",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 618,
                                  "end": 637,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 618,
                                    "end": 632,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 618,
                                      "end": 622,
                                      "decorators": [],
                                      "name": "ctrl",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 623,
                                      "end": 632,
                                      "decorators": [],
                                      "name": "toggleAll",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 633,
                                    "end": 637,
                                    "decorators": [],
                                    "name": "bind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 567,
                          "end": 572,
                          "name": "input"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "JSXText",
                      "start": 646,
                      "end": 659,
                      "raw": "\n            ",
                      "value": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 659,
                      "end": 1515,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 681,
                          "end": 698,
                          "raw": "\n                ",
                          "value": "\n                "
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "start": 698,
                          "end": 1497,
                          "expression": {
                            "type": "CallExpression",
                            "start": 699,
                            "end": 1496,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 723,
                                "end": 1478,
                                "async": false,
                                "body": {
                                  "type": "JSXElement",
                                  "start": 753,
                                  "end": 1478,
                                  "children": [
                                    {
                                      "type": "JSXText",
                                      "start": 840,
                                      "end": 865,
                                      "raw": "\n                        ",
                                      "value": "\n                        "
                                    },
                                    {
                                      "type": "JSXElement",
                                      "start": 865,
                                      "end": 1452,
                                      "children": [
                                        {
                                          "type": "JSXText",
                                          "start": 883,
                                          "end": 912,
                                          "raw": "\n                            ",
                                          "value": "\n                            "
                                        },
                                        {
                                          "type": "JSXExpressionContainer",
                                          "start": 912,
                                          "end": 1079,
                                          "expression": {
                                            "type": "ConditionalExpression",
                                            "start": 913,
                                            "end": 1049,
                                            "alternate": {
                                              "type": "Literal",
                                              "start": 1045,
                                              "end": 1049,
                                              "raw": "null",
                                              "value": null
                                            },
                                            "consequent": {
                                              "type": "JSXElement",
                                              "start": 964,
                                              "end": 1010,
                                              "children": [],
                                              "closingElement": {
                                                "type": "JSXClosingElement",
                                                "start": 1002,
                                                "end": 1010,
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 1004,
                                                  "end": 1009,
                                                  "name": "input"
                                                }
                                              },
                                              "openingElement": {
                                                "type": "JSXOpeningElement",
                                                "start": 964,
                                                "end": 1002,
                                                "attributes": [
                                                  {
                                                    "type": "JSXAttribute",
                                                    "start": 971,
                                                    "end": 985,
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "start": 971,
                                                      "end": 976,
                                                      "name": "class"
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "start": 977,
                                                      "end": 985,
                                                      "raw": "\"toggle\"",
                                                      "value": "toggle"
                                                    }
                                                  },
                                                  {
                                                    "type": "JSXAttribute",
                                                    "start": 986,
                                                    "end": 1001,
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "start": 986,
                                                      "end": 990,
                                                      "name": "type"
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "start": 991,
                                                      "end": 1001,
                                                      "raw": "\"checkbox\"",
                                                      "value": "checkbox"
                                                    }
                                                  }
                                                ],
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 965,
                                                  "end": 970,
                                                  "name": "input"
                                                },
                                                "selfClosing": false,
                                                "typeArguments": null
                                              }
                                            },
                                            "test": {
                                              "type": "UnaryExpression",
                                              "start": 914,
                                              "end": 928,
                                              "argument": {
                                                "type": "MemberExpression",
                                                "start": 915,
                                                "end": 928,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 915,
                                                  "end": 919,
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 920,
                                                  "end": 928,
                                                  "decorators": [],
                                                  "name": "editable",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              },
                                              "operator": "!",
                                              "prefix": true
                                            }
                                          }
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1079,
                                          "end": 1108,
                                          "raw": "\n                            ",
                                          "value": "\n                            "
                                        },
                                        {
                                          "type": "JSXElement",
                                          "start": 1108,
                                          "end": 1177,
                                          "children": [
                                            {
                                              "type": "JSXExpressionContainer",
                                              "start": 1157,
                                              "end": 1169,
                                              "expression": {
                                                "type": "MemberExpression",
                                                "start": 1158,
                                                "end": 1168,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 1158,
                                                  "end": 1162,
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 1163,
                                                  "end": 1168,
                                                  "decorators": [],
                                                  "name": "title",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            }
                                          ],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "start": 1169,
                                            "end": 1177,
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 1171,
                                              "end": 1176,
                                              "name": "label"
                                            }
                                          },
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "start": 1108,
                                            "end": 1157,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "start": 1115,
                                                "end": 1156,
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 1115,
                                                  "end": 1128,
                                                  "name": "onDoubleClick"
                                                },
                                                "value": {
                                                  "type": "JSXExpressionContainer",
                                                  "start": 1129,
                                                  "end": 1156,
                                                  "expression": {
                                                    "type": "ArrowFunctionExpression",
                                                    "start": 1130,
                                                    "end": 1155,
                                                    "async": false,
                                                    "body": {
                                                      "type": "BlockStatement",
                                                      "start": 1134,
                                                      "end": 1155,
                                                      "body": [
                                                        {
                                                          "type": "ExpressionStatement",
                                                          "start": 1135,
                                                          "end": 1154,
                                                          "directive": null,
                                                          "expression": {
                                                            "type": "CallExpression",
                                                            "start": 1135,
                                                            "end": 1154,
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "start": 1149,
                                                                "end": 1153,
                                                                "decorators": [],
                                                                "name": "todo",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              }
                                                            ],
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "start": 1135,
                                                              "end": 1148,
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "start": 1135,
                                                                "end": 1139,
                                                                "decorators": [],
                                                                "name": "ctrl",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              },
                                                              "optional": false,
                                                              "property": {
                                                                "type": "Identifier",
                                                                "start": 1140,
                                                                "end": 1148,
                                                                "decorators": [],
                                                                "name": "editTodo",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              }
                                                            },
                                                            "optional": false,
                                                            "typeArguments": null
                                                          }
                                                        }
                                                      ]
                                                    },
                                                    "expression": false,
                                                    "generator": false,
                                                    "id": null,
                                                    "params": [],
                                                    "returnType": null,
                                                    "typeParameters": null
                                                  }
                                                }
                                              }
                                            ],
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 1109,
                                              "end": 1114,
                                              "name": "label"
                                            },
                                            "selfClosing": false,
                                            "typeArguments": null
                                          }
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1177,
                                          "end": 1206,
                                          "raw": "\n                            ",
                                          "value": "\n                            "
                                        },
                                        {
                                          "type": "JSXElement",
                                          "start": 1206,
                                          "end": 1281,
                                          "children": [],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "start": 1272,
                                            "end": 1281,
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 1274,
                                              "end": 1280,
                                              "name": "button"
                                            }
                                          },
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "start": 1206,
                                            "end": 1272,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "start": 1214,
                                                "end": 1229,
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 1214,
                                                  "end": 1219,
                                                  "name": "class"
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "start": 1220,
                                                  "end": 1229,
                                                  "raw": "\"destroy\"",
                                                  "value": "destroy"
                                                }
                                              },
                                              {
                                                "type": "JSXAttribute",
                                                "start": 1230,
                                                "end": 1271,
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 1230,
                                                  "end": 1237,
                                                  "name": "onClick"
                                                },
                                                "value": {
                                                  "type": "JSXExpressionContainer",
                                                  "start": 1238,
                                                  "end": 1271,
                                                  "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1239,
                                                    "end": 1270,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "start": 1260,
                                                        "end": 1264,
                                                        "decorators": [],
                                                        "name": "ctrl",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "start": 1265,
                                                        "end": 1269,
                                                        "decorators": [],
                                                        "name": "todo",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    ],
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "start": 1239,
                                                      "end": 1259,
                                                      "computed": false,
                                                      "object": {
                                                        "type": "MemberExpression",
                                                        "start": 1239,
                                                        "end": 1254,
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "start": 1239,
                                                          "end": 1243,
                                                          "decorators": [],
                                                          "name": "ctrl",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "optional": false,
                                                        "property": {
                                                          "type": "Identifier",
                                                          "start": 1244,
                                                          "end": 1254,
                                                          "decorators": [],
                                                          "name": "removeTodo",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        }
                                                      },
                                                      "optional": false,
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 1255,
                                                        "end": 1259,
                                                        "decorators": [],
                                                        "name": "bind",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    },
                                                    "optional": false,
                                                    "typeArguments": null
                                                  }
                                                }
                                              }
                                            ],
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 1207,
                                              "end": 1213,
                                              "name": "button"
                                            },
                                            "selfClosing": false,
                                            "typeArguments": null
                                          }
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1281,
                                          "end": 1310,
                                          "raw": "\n                            ",
                                          "value": "\n                            "
                                        },
                                        {
                                          "type": "JSXElement",
                                          "start": 1310,
                                          "end": 1421,
                                          "children": [
                                            {
                                              "type": "JSXText",
                                              "start": 1334,
                                              "end": 1367,
                                              "raw": "\n                                ",
                                              "value": "\n                                "
                                            },
                                            {
                                              "type": "JSXElement",
                                              "start": 1367,
                                              "end": 1386,
                                              "children": [],
                                              "closingElement": null,
                                              "openingElement": {
                                                "type": "JSXOpeningElement",
                                                "start": 1367,
                                                "end": 1386,
                                                "attributes": [
                                                  {
                                                    "type": "JSXAttribute",
                                                    "start": 1372,
                                                    "end": 1384,
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "start": 1372,
                                                      "end": 1377,
                                                      "name": "class"
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "start": 1378,
                                                      "end": 1384,
                                                      "raw": "\"icon\"",
                                                      "value": "icon"
                                                    }
                                                  }
                                                ],
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 1368,
                                                  "end": 1371,
                                                  "name": "div"
                                                },
                                                "selfClosing": true,
                                                "typeArguments": null
                                              }
                                            },
                                            {
                                              "type": "JSXText",
                                              "start": 1386,
                                              "end": 1415,
                                              "raw": "\n                            ",
                                              "value": "\n                            "
                                            }
                                          ],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "start": 1415,
                                            "end": 1421,
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 1417,
                                              "end": 1420,
                                              "name": "div"
                                            }
                                          },
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "start": 1310,
                                            "end": 1334,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "start": 1315,
                                                "end": 1333,
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "start": 1315,
                                                  "end": 1320,
                                                  "name": "class"
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "start": 1321,
                                                  "end": 1333,
                                                  "raw": "\"iconBorder\"",
                                                  "value": "iconBorder"
                                                }
                                              }
                                            ],
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 1311,
                                              "end": 1314,
                                              "name": "div"
                                            },
                                            "selfClosing": false,
                                            "typeArguments": null
                                          }
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1421,
                                          "end": 1446,
                                          "raw": "\n                        ",
                                          "value": "\n                        "
                                        }
                                      ],
                                      "closingElement": {
                                        "type": "JSXClosingElement",
                                        "start": 1446,
                                        "end": 1452,
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 1448,
                                          "end": 1451,
                                          "name": "div"
                                        }
                                      },
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "start": 865,
                                        "end": 883,
                                        "attributes": [
                                          {
                                            "type": "JSXAttribute",
                                            "start": 870,
                                            "end": 882,
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "start": 870,
                                              "end": 875,
                                              "name": "class"
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "start": 876,
                                              "end": 882,
                                              "raw": "\"view\"",
                                              "value": "view"
                                            }
                                          }
                                        ],
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 866,
                                          "end": 869,
                                          "name": "div"
                                        },
                                        "selfClosing": false,
                                        "typeArguments": null
                                      }
                                    },
                                    {
                                      "type": "JSXText",
                                      "start": 1452,
                                      "end": 1473,
                                      "raw": "\n                    ",
                                      "value": "\n                    "
                                    }
                                  ],
                                  "closingElement": {
                                    "type": "JSXClosingElement",
                                    "start": 1473,
                                    "end": 1478,
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "start": 1475,
                                      "end": 1477,
                                      "name": "li"
                                    }
                                  },
                                  "openingElement": {
                                    "type": "JSXOpeningElement",
                                    "start": 753,
                                    "end": 840,
                                    "attributes": [
                                      {
                                        "type": "JSXAttribute",
                                        "start": 757,
                                        "end": 839,
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 757,
                                          "end": 762,
                                          "name": "class"
                                        },
                                        "value": {
                                          "type": "JSXExpressionContainer",
                                          "start": 763,
                                          "end": 839,
                                          "expression": {
                                            "type": "ObjectExpression",
                                            "start": 764,
                                            "end": 838,
                                            "properties": [
                                              {
                                                "type": "Property",
                                                "start": 765,
                                                "end": 775,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 765,
                                                  "end": 769,
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "kind": "init",
                                                "method": false,
                                                "optional": false,
                                                "shorthand": false,
                                                "value": {
                                                  "type": "Literal",
                                                  "start": 771,
                                                  "end": 775,
                                                  "raw": "true",
                                                  "value": true
                                                }
                                              },
                                              {
                                                "type": "Property",
                                                "start": 777,
                                                "end": 802,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 777,
                                                  "end": 786,
                                                  "decorators": [],
                                                  "name": "completed",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "kind": "init",
                                                "method": false,
                                                "optional": false,
                                                "shorthand": false,
                                                "value": {
                                                  "type": "MemberExpression",
                                                  "start": 788,
                                                  "end": 802,
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 788,
                                                    "end": 792,
                                                    "decorators": [],
                                                    "name": "todo",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 793,
                                                    "end": 802,
                                                    "decorators": [],
                                                    "name": "completed",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              },
                                              {
                                                "type": "Property",
                                                "start": 804,
                                                "end": 837,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 804,
                                                  "end": 811,
                                                  "decorators": [],
                                                  "name": "editing",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "kind": "init",
                                                "method": false,
                                                "optional": false,
                                                "shorthand": false,
                                                "value": {
                                                  "type": "BinaryExpression",
                                                  "start": 813,
                                                  "end": 837,
                                                  "operator": "==",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "start": 813,
                                                    "end": 817,
                                                    "decorators": [],
                                                    "name": "todo",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "start": 821,
                                                    "end": 837,
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 821,
                                                      "end": 826,
                                                      "decorators": [],
                                                      "name": "model",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 827,
                                                      "end": 837,
                                                      "decorators": [],
                                                      "name": "editedTodo",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    ],
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "start": 754,
                                      "end": 756,
                                      "name": "li"
                                    },
                                    "selfClosing": false,
                                    "typeArguments": null
                                  }
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 724,
                                    "end": 728,
                                    "decorators": [],
                                    "name": "todo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 699,
                              "end": 722,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 699,
                                "end": 718,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 699,
                                  "end": 704,
                                  "decorators": [],
                                  "name": "model",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 705,
                                  "end": 718,
                                  "decorators": [],
                                  "name": "filteredTodos",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 719,
                                "end": 722,
                                "decorators": [],
                                "name": "map",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 1497,
                          "end": 1510,
                          "raw": "\n            ",
                          "value": "\n            "
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 1510,
                        "end": 1515,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 1512,
                          "end": 1514,
                          "name": "ul"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 659,
                        "end": 681,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "start": 663,
                            "end": 680,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 663,
                              "end": 668,
                              "name": "class"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 669,
                              "end": 680,
                              "raw": "\"todo-list\"",
                              "value": "todo-list"
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 660,
                          "end": 662,
                          "name": "ul"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "JSXText",
                      "start": 1515,
                      "end": 1524,
                      "raw": "\n        ",
                      "value": "\n        "
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 1524,
                    "end": 1534,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 1526,
                      "end": 1533,
                      "name": "section"
                    }
                  },
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 458,
                    "end": 553,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 467,
                        "end": 479,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 467,
                          "end": 472,
                          "name": "class"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 473,
                          "end": 479,
                          "raw": "\"main\"",
                          "value": "main"
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 480,
                        "end": 552,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 480,
                          "end": 485,
                          "name": "style"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 486,
                          "end": 552,
                          "expression": {
                            "type": "ObjectExpression",
                            "start": 487,
                            "end": 551,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 488,
                                "end": 550,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 495,
                                  "decorators": [],
                                  "name": "display",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ConditionalExpression",
                                  "start": 496,
                                  "end": 550,
                                  "alternate": {
                                    "type": "Literal",
                                    "start": 544,
                                    "end": 550,
                                    "raw": "\"none\"",
                                    "value": "none"
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "start": 534,
                                    "end": 541,
                                    "raw": "\"block\"",
                                    "value": "block"
                                  },
                                  "test": {
                                    "type": "LogicalExpression",
                                    "start": 497,
                                    "end": 530,
                                    "operator": "&&",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 497,
                                      "end": 508,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 497,
                                        "end": 502,
                                        "decorators": [],
                                        "name": "model",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 503,
                                        "end": 508,
                                        "decorators": [],
                                        "name": "todos",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 512,
                                      "end": 530,
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 512,
                                        "end": 523,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 512,
                                          "end": 517,
                                          "decorators": [],
                                          "name": "model",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 518,
                                          "end": 523,
                                          "decorators": [],
                                          "name": "todos",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 524,
                                        "end": 530,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 459,
                      "end": 466,
                      "name": "section"
                    },
                    "selfClosing": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "JSXText",
                  "start": 1534,
                  "end": 1539,
                  "raw": "\n    ",
                  "value": "\n    "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 1539,
                "end": 1549,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1541,
                  "end": 1548,
                  "name": "section"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 169,
                "end": 194,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 178,
                    "end": 193,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 178,
                      "end": 183,
                      "name": "class"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 184,
                      "end": 193,
                      "raw": "\"todoapp\"",
                      "value": "todoapp"
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 170,
                  "end": 177,
                  "name": "section"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 149,
                "end": 153,
                "decorators": [],
                "name": "ctrl",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 155,
                "end": 160,
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
