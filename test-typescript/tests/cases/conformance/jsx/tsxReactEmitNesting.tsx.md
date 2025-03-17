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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "vdom",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
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
      "type": "VariableDeclaration",
      "start": 23,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "name": "ctrl",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
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
      "type": "VariableDeclaration",
      "start": 46,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "name": "model",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
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
      "type": "VariableDeclaration",
      "start": 135,
      "end": 1549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 1549,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "name": "render",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 1549,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 149,
                "end": 153,
                "name": "ctrl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 155,
                "end": 160,
                "name": "model",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 169,
              "end": 1549,
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
                      "value": "todoapp",
                      "raw": "\"todoapp\""
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
              },
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 194,
                  "end": 203,
                  "value": "\n        ",
                  "raw": "\n        "
                },
                {
                  "type": "JSXElement",
                  "start": 203,
                  "end": 449,
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
                          "value": "header",
                          "raw": "\"header\""
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
                  },
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
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 226,
                      "end": 239,
                      "value": "\n            ",
                      "raw": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 239,
                      "end": 263,
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 243,
                          "end": 258,
                          "value": "todos <x>",
                          "raw": "todos &lt;x&gt;"
                        }
                      ]
                    },
                    {
                      "type": "JSXText",
                      "start": 263,
                      "end": 276,
                      "value": "\n            ",
                      "raw": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 276,
                      "end": 431,
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
                              "value": "new-todo",
                              "raw": "\"new-todo\""
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
                              "value": "off",
                              "raw": "\"off\""
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
                              "value": "What needs to be done?",
                              "raw": "\"What needs to be done?\""
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
                                "object": {
                                  "type": "Identifier",
                                  "start": 373,
                                  "end": 378,
                                  "name": "model",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 379,
                                  "end": 386,
                                  "name": "newTodo",
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 397,
                                  "end": 414,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 397,
                                    "end": 409,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 397,
                                      "end": 401,
                                      "name": "ctrl",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 402,
                                      "end": 409,
                                      "name": "addTodo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 410,
                                    "end": 414,
                                    "name": "bind",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 419,
                                    "name": "ctrl",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 421,
                                    "end": 426,
                                    "name": "model",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
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
                      },
                      "closingElement": null,
                      "children": []
                    },
                    {
                      "type": "JSXText",
                      "start": 431,
                      "end": 440,
                      "value": "\n        ",
                      "raw": "\n        "
                    }
                  ]
                },
                {
                  "type": "JSXText",
                  "start": 449,
                  "end": 458,
                  "value": "\n        ",
                  "raw": "\n        "
                },
                {
                  "type": "JSXElement",
                  "start": 458,
                  "end": 1534,
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
                          "value": "main",
                          "raw": "\"main\""
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
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 495,
                                  "name": "display",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ConditionalExpression",
                                  "start": 496,
                                  "end": 550,
                                  "test": {
                                    "type": "LogicalExpression",
                                    "start": 497,
                                    "end": 530,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 497,
                                      "end": 508,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 497,
                                        "end": 502,
                                        "name": "model",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 503,
                                        "end": 508,
                                        "name": "todos",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 512,
                                      "end": 530,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 512,
                                        "end": 523,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 512,
                                          "end": 517,
                                          "name": "model",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 518,
                                          "end": 523,
                                          "name": "todos",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 524,
                                        "end": 530,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "start": 534,
                                    "end": 541,
                                    "value": "block",
                                    "raw": "\"block\""
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "start": 544,
                                    "end": 550,
                                    "value": "none",
                                    "raw": "\"none\""
                                  }
                                },
                                "kind": "init",
                                "optional": false
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
                  },
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
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 553,
                      "end": 566,
                      "value": "\n            ",
                      "raw": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 566,
                      "end": 646,
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
                              "value": "toggle-all",
                              "raw": "\"toggle-all\""
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
                              "value": "checkbox",
                              "raw": "\"checkbox\""
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 618,
                                  "end": 637,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 618,
                                    "end": 632,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 618,
                                      "end": 622,
                                      "name": "ctrl",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 623,
                                      "end": 632,
                                      "name": "toggleAll",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 633,
                                    "end": 637,
                                    "name": "bind",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 638,
                                    "end": 642,
                                    "name": "ctrl",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
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
                      },
                      "closingElement": null,
                      "children": []
                    },
                    {
                      "type": "JSXText",
                      "start": 646,
                      "end": 659,
                      "value": "\n            ",
                      "raw": "\n            "
                    },
                    {
                      "type": "JSXElement",
                      "start": 659,
                      "end": 1515,
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
                              "value": "todo-list",
                              "raw": "\"todo-list\""
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 681,
                          "end": 698,
                          "value": "\n                ",
                          "raw": "\n                "
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "start": 698,
                          "end": 1497,
                          "expression": {
                            "type": "CallExpression",
                            "start": 699,
                            "end": 1496,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 699,
                              "end": 722,
                              "object": {
                                "type": "MemberExpression",
                                "start": 699,
                                "end": 718,
                                "object": {
                                  "type": "Identifier",
                                  "start": 699,
                                  "end": 704,
                                  "name": "model",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 705,
                                  "end": 718,
                                  "name": "filteredTodos",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 719,
                                "end": 722,
                                "name": "map",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 723,
                                "end": 1478,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 724,
                                    "end": 728,
                                    "name": "todo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "JSXElement",
                                  "start": 753,
                                  "end": 1478,
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
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 765,
                                                  "end": 769,
                                                  "name": "todo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "start": 771,
                                                  "end": 775,
                                                  "value": true,
                                                  "raw": "true"
                                                },
                                                "kind": "init",
                                                "optional": false
                                              },
                                              {
                                                "type": "Property",
                                                "start": 777,
                                                "end": 802,
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 777,
                                                  "end": 786,
                                                  "name": "completed",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "value": {
                                                  "type": "MemberExpression",
                                                  "start": 788,
                                                  "end": 802,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 788,
                                                    "end": 792,
                                                    "name": "todo",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 793,
                                                    "end": 802,
                                                    "name": "completed",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "computed": false,
                                                  "optional": false
                                                },
                                                "kind": "init",
                                                "optional": false
                                              },
                                              {
                                                "type": "Property",
                                                "start": 804,
                                                "end": 837,
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 804,
                                                  "end": 811,
                                                  "name": "editing",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "value": {
                                                  "type": "BinaryExpression",
                                                  "start": 813,
                                                  "end": 837,
                                                  "left": {
                                                    "type": "Identifier",
                                                    "start": 813,
                                                    "end": 817,
                                                    "name": "todo",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "operator": "==",
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "start": 821,
                                                    "end": 837,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 821,
                                                      "end": 826,
                                                      "name": "model",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 827,
                                                      "end": 837,
                                                      "name": "editedTodo",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "computed": false,
                                                    "optional": false
                                                  }
                                                },
                                                "kind": "init",
                                                "optional": false
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
                                  },
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
                                  "children": [
                                    {
                                      "type": "JSXText",
                                      "start": 840,
                                      "end": 865,
                                      "value": "\n                        ",
                                      "raw": "\n                        "
                                    },
                                    {
                                      "type": "JSXElement",
                                      "start": 865,
                                      "end": 1452,
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
                                              "value": "view",
                                              "raw": "\"view\""
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
                                      },
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
                                      "children": [
                                        {
                                          "type": "JSXText",
                                          "start": 883,
                                          "end": 912,
                                          "value": "\n                            ",
                                          "raw": "\n                            "
                                        },
                                        {
                                          "type": "JSXExpressionContainer",
                                          "start": 912,
                                          "end": 1079,
                                          "expression": {
                                            "type": "ConditionalExpression",
                                            "start": 913,
                                            "end": 1049,
                                            "test": {
                                              "type": "UnaryExpression",
                                              "start": 914,
                                              "end": 928,
                                              "operator": "!",
                                              "prefix": true,
                                              "argument": {
                                                "type": "MemberExpression",
                                                "start": 915,
                                                "end": 928,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 915,
                                                  "end": 919,
                                                  "name": "todo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 920,
                                                  "end": 928,
                                                  "name": "editable",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              }
                                            },
                                            "consequent": {
                                              "type": "JSXElement",
                                              "start": 964,
                                              "end": 1010,
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
                                                      "value": "toggle",
                                                      "raw": "\"toggle\""
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
                                                      "value": "checkbox",
                                                      "raw": "\"checkbox\""
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
                                              },
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
                                              "children": []
                                            },
                                            "alternate": {
                                              "type": "Literal",
                                              "start": 1045,
                                              "end": 1049,
                                              "value": null,
                                              "raw": "null"
                                            }
                                          }
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1079,
                                          "end": 1108,
                                          "value": "\n                            ",
                                          "raw": "\n                            "
                                        },
                                        {
                                          "type": "JSXElement",
                                          "start": 1108,
                                          "end": 1177,
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
                                                    "id": null,
                                                    "expression": false,
                                                    "generator": false,
                                                    "async": false,
                                                    "params": [],
                                                    "body": {
                                                      "type": "BlockStatement",
                                                      "start": 1134,
                                                      "end": 1155,
                                                      "body": [
                                                        {
                                                          "type": "ExpressionStatement",
                                                          "start": 1135,
                                                          "end": 1154,
                                                          "expression": {
                                                            "type": "CallExpression",
                                                            "start": 1135,
                                                            "end": 1154,
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "start": 1135,
                                                              "end": 1148,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "start": 1135,
                                                                "end": 1139,
                                                                "name": "ctrl",
                                                                "typeAnnotation": null,
                                                                "decorators": [],
                                                                "optional": false
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "start": 1140,
                                                                "end": 1148,
                                                                "name": "editTodo",
                                                                "typeAnnotation": null,
                                                                "decorators": [],
                                                                "optional": false
                                                              },
                                                              "computed": false,
                                                              "optional": false
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "start": 1149,
                                                                "end": 1153,
                                                                "name": "todo",
                                                                "typeAnnotation": null,
                                                                "decorators": [],
                                                                "optional": false
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "typeArguments": null
                                                          },
                                                          "directive": null
                                                        }
                                                      ]
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null
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
                                          },
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
                                          "children": [
                                            {
                                              "type": "JSXExpressionContainer",
                                              "start": 1157,
                                              "end": 1169,
                                              "expression": {
                                                "type": "MemberExpression",
                                                "start": 1158,
                                                "end": 1168,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 1158,
                                                  "end": 1162,
                                                  "name": "todo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 1163,
                                                  "end": 1168,
                                                  "name": "title",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1177,
                                          "end": 1206,
                                          "value": "\n                            ",
                                          "raw": "\n                            "
                                        },
                                        {
                                          "type": "JSXElement",
                                          "start": 1206,
                                          "end": 1281,
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
                                                  "value": "destroy",
                                                  "raw": "\"destroy\""
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
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "start": 1239,
                                                      "end": 1259,
                                                      "object": {
                                                        "type": "MemberExpression",
                                                        "start": 1239,
                                                        "end": 1254,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "start": 1239,
                                                          "end": 1243,
                                                          "name": "ctrl",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "start": 1244,
                                                          "end": 1254,
                                                          "name": "removeTodo",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        },
                                                        "computed": false,
                                                        "optional": false
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 1255,
                                                        "end": 1259,
                                                        "name": "bind",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "computed": false,
                                                      "optional": false
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "start": 1260,
                                                        "end": 1264,
                                                        "name": "ctrl",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "start": 1265,
                                                        "end": 1269,
                                                        "name": "todo",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      }
                                                    ],
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
                                          },
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
                                          "children": []
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1281,
                                          "end": 1310,
                                          "value": "\n                            ",
                                          "raw": "\n                            "
                                        },
                                        {
                                          "type": "JSXElement",
                                          "start": 1310,
                                          "end": 1421,
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
                                                  "value": "iconBorder",
                                                  "raw": "\"iconBorder\""
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
                                          },
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
                                          "children": [
                                            {
                                              "type": "JSXText",
                                              "start": 1334,
                                              "end": 1367,
                                              "value": "\n                                ",
                                              "raw": "\n                                "
                                            },
                                            {
                                              "type": "JSXElement",
                                              "start": 1367,
                                              "end": 1386,
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
                                                      "value": "icon",
                                                      "raw": "\"icon\""
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
                                              },
                                              "closingElement": null,
                                              "children": []
                                            },
                                            {
                                              "type": "JSXText",
                                              "start": 1386,
                                              "end": 1415,
                                              "value": "\n                            ",
                                              "raw": "\n                            "
                                            }
                                          ]
                                        },
                                        {
                                          "type": "JSXText",
                                          "start": 1421,
                                          "end": 1446,
                                          "value": "\n                        ",
                                          "raw": "\n                        "
                                        }
                                      ]
                                    },
                                    {
                                      "type": "JSXText",
                                      "start": 1452,
                                      "end": 1473,
                                      "value": "\n                    ",
                                      "raw": "\n                    "
                                    }
                                  ]
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 1497,
                          "end": 1510,
                          "value": "\n            ",
                          "raw": "\n            "
                        }
                      ]
                    },
                    {
                      "type": "JSXText",
                      "start": 1515,
                      "end": 1524,
                      "value": "\n        ",
                      "raw": "\n        "
                    }
                  ]
                },
                {
                  "type": "JSXText",
                  "start": 1534,
                  "end": 1539,
                  "value": "\n    ",
                  "raw": "\n    "
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
