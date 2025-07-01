__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "vdom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              },
              "start": 16,
              "end": 21
            },
            "start": 12,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 21
        }
      ],
      "declare": true,
      "start": 0,
      "end": 22
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
            "name": "ctrl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 44
        }
      ],
      "declare": true,
      "start": 23,
      "end": 45
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
            "name": "model",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "start": 58,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 68
        }
      ],
      "declare": true,
      "start": 46,
      "end": 69
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
            "name": "render",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 145
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ctrl",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 153
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 160
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "section",
                  "start": 170,
                  "end": 177
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "class",
                      "start": 178,
                      "end": 183
                    },
                    "value": {
                      "type": "Literal",
                      "value": "todoapp",
                      "raw": "\"todoapp\"",
                      "start": 184,
                      "end": 193
                    },
                    "start": 178,
                    "end": 193
                  }
                ],
                "selfClosing": false,
                "start": 169,
                "end": 194
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 194,
                  "end": 203
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "header",
                      "start": 204,
                      "end": 210
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "class",
                          "start": 211,
                          "end": 216
                        },
                        "value": {
                          "type": "Literal",
                          "value": "header",
                          "raw": "\"header\"",
                          "start": 217,
                          "end": 225
                        },
                        "start": 211,
                        "end": 225
                      }
                    ],
                    "selfClosing": false,
                    "start": 203,
                    "end": 226
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 226,
                      "end": 239
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 240,
                          "end": 242
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 239,
                        "end": 243
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "todos <x>",
                          "raw": "todos &lt;x&gt;",
                          "start": 243,
                          "end": 258
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 260,
                          "end": 262
                        },
                        "start": 258,
                        "end": 263
                      },
                      "start": 239,
                      "end": 263
                    },
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 263,
                      "end": 276
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "input",
                          "start": 277,
                          "end": 282
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "class",
                              "start": 283,
                              "end": 288
                            },
                            "value": {
                              "type": "Literal",
                              "value": "new-todo",
                              "raw": "\"new-todo\"",
                              "start": 289,
                              "end": 299
                            },
                            "start": 283,
                            "end": 299
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "autofocus",
                              "start": 300,
                              "end": 309
                            },
                            "value": null,
                            "start": 300,
                            "end": 309
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "autocomplete",
                              "start": 310,
                              "end": 322
                            },
                            "value": {
                              "type": "Literal",
                              "value": "off",
                              "raw": "\"off\"",
                              "start": 323,
                              "end": 328
                            },
                            "start": 310,
                            "end": 328
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "placeholder",
                              "start": 329,
                              "end": 340
                            },
                            "value": {
                              "type": "Literal",
                              "value": "What needs to be done?",
                              "raw": "\"What needs to be done?\"",
                              "start": 341,
                              "end": 365
                            },
                            "start": 329,
                            "end": 365
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "value",
                              "start": 366,
                              "end": 371
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "model",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 373,
                                  "end": 378
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newTodo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 379,
                                  "end": 386
                                },
                                "optional": false,
                                "computed": false,
                                "start": 373,
                                "end": 386
                              },
                              "start": 372,
                              "end": 387
                            },
                            "start": 366,
                            "end": 387
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onKeyup",
                              "start": 388,
                              "end": 395
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ctrl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 397,
                                      "end": 401
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "addTodo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 402,
                                      "end": 409
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 397,
                                    "end": 409
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 410,
                                    "end": 414
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 397,
                                  "end": 414
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ctrl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 415,
                                    "end": 419
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "model",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 421,
                                    "end": 426
                                  }
                                ],
                                "optional": false,
                                "start": 397,
                                "end": 427
                              },
                              "start": 396,
                              "end": 428
                            },
                            "start": 388,
                            "end": 428
                          }
                        ],
                        "selfClosing": true,
                        "start": 276,
                        "end": 431
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 276,
                      "end": 431
                    },
                    {
                      "type": "JSXText",
                      "value": "\n        ",
                      "raw": "\n        ",
                      "start": 431,
                      "end": 440
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "header",
                      "start": 442,
                      "end": 448
                    },
                    "start": 440,
                    "end": 449
                  },
                  "start": 203,
                  "end": 449
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 449,
                  "end": 458
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "section",
                      "start": 459,
                      "end": 466
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "class",
                          "start": 467,
                          "end": 472
                        },
                        "value": {
                          "type": "Literal",
                          "value": "main",
                          "raw": "\"main\"",
                          "start": 473,
                          "end": 479
                        },
                        "start": 467,
                        "end": 479
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "style",
                          "start": 480,
                          "end": 485
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "display",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 488,
                                  "end": 495
                                },
                                "value": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "model",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 497,
                                        "end": 502
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "todos",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 503,
                                        "end": 508
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 497,
                                      "end": 508
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "model",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 512,
                                          "end": 517
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "todos",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 518,
                                          "end": 523
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 512,
                                        "end": 523
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 524,
                                        "end": 530
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 512,
                                      "end": 530
                                    },
                                    "start": 497,
                                    "end": 530
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": "block",
                                    "raw": "\"block\"",
                                    "start": 534,
                                    "end": 541
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": "none",
                                    "raw": "\"none\"",
                                    "start": 544,
                                    "end": 550
                                  },
                                  "start": 496,
                                  "end": 550
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 488,
                                "end": 550
                              }
                            ],
                            "start": 487,
                            "end": 551
                          },
                          "start": 486,
                          "end": 552
                        },
                        "start": 480,
                        "end": 552
                      }
                    ],
                    "selfClosing": false,
                    "start": 458,
                    "end": 553
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 553,
                      "end": 566
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "input",
                          "start": 567,
                          "end": 572
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "class",
                              "start": 573,
                              "end": 578
                            },
                            "value": {
                              "type": "Literal",
                              "value": "toggle-all",
                              "raw": "\"toggle-all\"",
                              "start": 579,
                              "end": 591
                            },
                            "start": 573,
                            "end": 591
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "type",
                              "start": 592,
                              "end": 596
                            },
                            "value": {
                              "type": "Literal",
                              "value": "checkbox",
                              "raw": "\"checkbox\"",
                              "start": 597,
                              "end": 607
                            },
                            "start": 592,
                            "end": 607
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onChange",
                              "start": 608,
                              "end": 616
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ctrl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 618,
                                      "end": 622
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "toggleAll",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 623,
                                      "end": 632
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 618,
                                    "end": 632
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 633,
                                    "end": 637
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 618,
                                  "end": 637
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ctrl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 638,
                                    "end": 642
                                  }
                                ],
                                "optional": false,
                                "start": 618,
                                "end": 643
                              },
                              "start": 617,
                              "end": 644
                            },
                            "start": 608,
                            "end": 644
                          }
                        ],
                        "selfClosing": true,
                        "start": 566,
                        "end": 646
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 566,
                      "end": 646
                    },
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 646,
                      "end": 659
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ul",
                          "start": 660,
                          "end": 662
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "class",
                              "start": 663,
                              "end": 668
                            },
                            "value": {
                              "type": "Literal",
                              "value": "todo-list",
                              "raw": "\"todo-list\"",
                              "start": 669,
                              "end": 680
                            },
                            "start": 663,
                            "end": 680
                          }
                        ],
                        "selfClosing": false,
                        "start": 659,
                        "end": 681
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n                ",
                          "raw": "\n                ",
                          "start": 681,
                          "end": 698
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "model",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 699,
                                  "end": 704
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "filteredTodos",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 705,
                                  "end": 718
                                },
                                "optional": false,
                                "computed": false,
                                "start": 699,
                                "end": 718
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "map",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 719,
                                "end": 722
                              },
                              "optional": false,
                              "computed": false,
                              "start": 699,
                              "end": 722
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
                                    "start": 724,
                                    "end": 728
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "JSXElement",
                                  "openingElement": {
                                    "type": "JSXOpeningElement",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "li",
                                      "start": 754,
                                      "end": 756
                                    },
                                    "typeArguments": null,
                                    "attributes": [
                                      {
                                        "type": "JSXAttribute",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "class",
                                          "start": 757,
                                          "end": 762
                                        },
                                        "value": {
                                          "type": "JSXExpressionContainer",
                                          "expression": {
                                            "type": "ObjectExpression",
                                            "properties": [
                                              {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 765,
                                                  "end": 769
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "value": true,
                                                  "raw": "true",
                                                  "start": 771,
                                                  "end": 775
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "optional": false,
                                                "start": 765,
                                                "end": 775
                                              },
                                              {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "completed",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 777,
                                                  "end": 786
                                                },
                                                "value": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "todo",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 788,
                                                    "end": 792
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "completed",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 793,
                                                    "end": 802
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 788,
                                                  "end": 802
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "optional": false,
                                                "start": 777,
                                                "end": 802
                                              },
                                              {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "editing",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 804,
                                                  "end": 811
                                                },
                                                "value": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "todo",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 813,
                                                    "end": 817
                                                  },
                                                  "operator": "==",
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "model",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 821,
                                                      "end": 826
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "editedTodo",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 827,
                                                      "end": 837
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 821,
                                                    "end": 837
                                                  },
                                                  "start": 813,
                                                  "end": 837
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "optional": false,
                                                "start": 804,
                                                "end": 837
                                              }
                                            ],
                                            "start": 764,
                                            "end": 838
                                          },
                                          "start": 763,
                                          "end": 839
                                        },
                                        "start": 757,
                                        "end": 839
                                      }
                                    ],
                                    "selfClosing": false,
                                    "start": 753,
                                    "end": 840
                                  },
                                  "children": [
                                    {
                                      "type": "JSXText",
                                      "value": "\n                        ",
                                      "raw": "\n                        ",
                                      "start": 840,
                                      "end": 865
                                    },
                                    {
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 866,
                                          "end": 869
                                        },
                                        "typeArguments": null,
                                        "attributes": [
                                          {
                                            "type": "JSXAttribute",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "class",
                                              "start": 870,
                                              "end": 875
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "value": "view",
                                              "raw": "\"view\"",
                                              "start": 876,
                                              "end": 882
                                            },
                                            "start": 870,
                                            "end": 882
                                          }
                                        ],
                                        "selfClosing": false,
                                        "start": 865,
                                        "end": 883
                                      },
                                      "children": [
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 883,
                                          "end": 912
                                        },
                                        {
                                          "type": "JSXExpressionContainer",
                                          "expression": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "UnaryExpression",
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 915,
                                                  "end": 919
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "editable",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 920,
                                                  "end": 928
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 915,
                                                "end": 928
                                              },
                                              "prefix": true,
                                              "start": 914,
                                              "end": 928
                                            },
                                            "consequent": {
                                              "type": "JSXElement",
                                              "openingElement": {
                                                "type": "JSXOpeningElement",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "input",
                                                  "start": 965,
                                                  "end": 970
                                                },
                                                "typeArguments": null,
                                                "attributes": [
                                                  {
                                                    "type": "JSXAttribute",
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "name": "class",
                                                      "start": 971,
                                                      "end": 976
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": "toggle",
                                                      "raw": "\"toggle\"",
                                                      "start": 977,
                                                      "end": 985
                                                    },
                                                    "start": 971,
                                                    "end": 985
                                                  },
                                                  {
                                                    "type": "JSXAttribute",
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "name": "type",
                                                      "start": 986,
                                                      "end": 990
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": "checkbox",
                                                      "raw": "\"checkbox\"",
                                                      "start": 991,
                                                      "end": 1001
                                                    },
                                                    "start": 986,
                                                    "end": 1001
                                                  }
                                                ],
                                                "selfClosing": false,
                                                "start": 964,
                                                "end": 1002
                                              },
                                              "children": [],
                                              "closingElement": {
                                                "type": "JSXClosingElement",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "input",
                                                  "start": 1004,
                                                  "end": 1009
                                                },
                                                "start": 1002,
                                                "end": 1010
                                              },
                                              "start": 964,
                                              "end": 1010
                                            },
                                            "alternate": {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 1045,
                                              "end": 1049
                                            },
                                            "start": 913,
                                            "end": 1049
                                          },
                                          "start": 912,
                                          "end": 1079
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 1079,
                                          "end": 1108
                                        },
                                        {
                                          "type": "JSXElement",
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "label",
                                              "start": 1109,
                                              "end": 1114
                                            },
                                            "typeArguments": null,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "onDoubleClick",
                                                  "start": 1115,
                                                  "end": 1128
                                                },
                                                "value": {
                                                  "type": "JSXExpressionContainer",
                                                  "expression": {
                                                    "type": "ArrowFunctionExpression",
                                                    "expression": false,
                                                    "async": false,
                                                    "typeParameters": null,
                                                    "params": [],
                                                    "returnType": null,
                                                    "body": {
                                                      "type": "BlockStatement",
                                                      "body": [
                                                        {
                                                          "type": "ExpressionStatement",
                                                          "expression": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "object": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ctrl",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1135,
                                                                "end": 1139
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "editTodo",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1140,
                                                                "end": 1148
                                                              },
                                                              "optional": false,
                                                              "computed": false,
                                                              "start": 1135,
                                                              "end": 1148
                                                            },
                                                            "typeArguments": null,
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "todo",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1149,
                                                                "end": 1153
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "start": 1135,
                                                            "end": 1154
                                                          },
                                                          "directive": null,
                                                          "start": 1135,
                                                          "end": 1154
                                                        }
                                                      ],
                                                      "start": 1134,
                                                      "end": 1155
                                                    },
                                                    "id": null,
                                                    "generator": false,
                                                    "start": 1130,
                                                    "end": 1155
                                                  },
                                                  "start": 1129,
                                                  "end": 1156
                                                },
                                                "start": 1115,
                                                "end": 1156
                                              }
                                            ],
                                            "selfClosing": false,
                                            "start": 1108,
                                            "end": 1157
                                          },
                                          "children": [
                                            {
                                              "type": "JSXExpressionContainer",
                                              "expression": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1158,
                                                  "end": 1162
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "title",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1163,
                                                  "end": 1168
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1158,
                                                "end": 1168
                                              },
                                              "start": 1157,
                                              "end": 1169
                                            }
                                          ],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "label",
                                              "start": 1171,
                                              "end": 1176
                                            },
                                            "start": 1169,
                                            "end": 1177
                                          },
                                          "start": 1108,
                                          "end": 1177
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 1177,
                                          "end": 1206
                                        },
                                        {
                                          "type": "JSXElement",
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "button",
                                              "start": 1207,
                                              "end": 1213
                                            },
                                            "typeArguments": null,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "class",
                                                  "start": 1214,
                                                  "end": 1219
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "value": "destroy",
                                                  "raw": "\"destroy\"",
                                                  "start": 1220,
                                                  "end": 1229
                                                },
                                                "start": 1214,
                                                "end": 1229
                                              },
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "onClick",
                                                  "start": 1230,
                                                  "end": 1237
                                                },
                                                "value": {
                                                  "type": "JSXExpressionContainer",
                                                  "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ctrl",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1239,
                                                          "end": 1243
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "removeTodo",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1244,
                                                          "end": 1254
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 1239,
                                                        "end": 1254
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "bind",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1255,
                                                        "end": 1259
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 1239,
                                                      "end": 1259
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ctrl",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1260,
                                                        "end": 1264
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "todo",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1265,
                                                        "end": 1269
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 1239,
                                                    "end": 1270
                                                  },
                                                  "start": 1238,
                                                  "end": 1271
                                                },
                                                "start": 1230,
                                                "end": 1271
                                              }
                                            ],
                                            "selfClosing": false,
                                            "start": 1206,
                                            "end": 1272
                                          },
                                          "children": [],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "button",
                                              "start": 1274,
                                              "end": 1280
                                            },
                                            "start": 1272,
                                            "end": 1281
                                          },
                                          "start": 1206,
                                          "end": 1281
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 1281,
                                          "end": 1310
                                        },
                                        {
                                          "type": "JSXElement",
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "div",
                                              "start": 1311,
                                              "end": 1314
                                            },
                                            "typeArguments": null,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "class",
                                                  "start": 1315,
                                                  "end": 1320
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "value": "iconBorder",
                                                  "raw": "\"iconBorder\"",
                                                  "start": 1321,
                                                  "end": 1333
                                                },
                                                "start": 1315,
                                                "end": 1333
                                              }
                                            ],
                                            "selfClosing": false,
                                            "start": 1310,
                                            "end": 1334
                                          },
                                          "children": [
                                            {
                                              "type": "JSXText",
                                              "value": "\n                                ",
                                              "raw": "\n                                ",
                                              "start": 1334,
                                              "end": 1367
                                            },
                                            {
                                              "type": "JSXElement",
                                              "openingElement": {
                                                "type": "JSXOpeningElement",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "div",
                                                  "start": 1368,
                                                  "end": 1371
                                                },
                                                "typeArguments": null,
                                                "attributes": [
                                                  {
                                                    "type": "JSXAttribute",
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "name": "class",
                                                      "start": 1372,
                                                      "end": 1377
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": "icon",
                                                      "raw": "\"icon\"",
                                                      "start": 1378,
                                                      "end": 1384
                                                    },
                                                    "start": 1372,
                                                    "end": 1384
                                                  }
                                                ],
                                                "selfClosing": true,
                                                "start": 1367,
                                                "end": 1386
                                              },
                                              "children": [],
                                              "closingElement": null,
                                              "start": 1367,
                                              "end": 1386
                                            },
                                            {
                                              "type": "JSXText",
                                              "value": "\n                            ",
                                              "raw": "\n                            ",
                                              "start": 1386,
                                              "end": 1415
                                            }
                                          ],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "div",
                                              "start": 1417,
                                              "end": 1420
                                            },
                                            "start": 1415,
                                            "end": 1421
                                          },
                                          "start": 1310,
                                          "end": 1421
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                        ",
                                          "raw": "\n                        ",
                                          "start": 1421,
                                          "end": 1446
                                        }
                                      ],
                                      "closingElement": {
                                        "type": "JSXClosingElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 1448,
                                          "end": 1451
                                        },
                                        "start": 1446,
                                        "end": 1452
                                      },
                                      "start": 865,
                                      "end": 1452
                                    },
                                    {
                                      "type": "JSXText",
                                      "value": "\n                    ",
                                      "raw": "\n                    ",
                                      "start": 1452,
                                      "end": 1473
                                    }
                                  ],
                                  "closingElement": {
                                    "type": "JSXClosingElement",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "li",
                                      "start": 1475,
                                      "end": 1477
                                    },
                                    "start": 1473,
                                    "end": 1478
                                  },
                                  "start": 753,
                                  "end": 1478
                                },
                                "id": null,
                                "generator": false,
                                "start": 723,
                                "end": 1478
                              }
                            ],
                            "optional": false,
                            "start": 699,
                            "end": 1496
                          },
                          "start": 698,
                          "end": 1497
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 1497,
                          "end": 1510
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ul",
                          "start": 1512,
                          "end": 1514
                        },
                        "start": 1510,
                        "end": 1515
                      },
                      "start": 659,
                      "end": 1515
                    },
                    {
                      "type": "JSXText",
                      "value": "\n        ",
                      "raw": "\n        ",
                      "start": 1515,
                      "end": 1524
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "section",
                      "start": 1526,
                      "end": 1533
                    },
                    "start": 1524,
                    "end": 1534
                  },
                  "start": 458,
                  "end": 1534
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 1534,
                  "end": 1539
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "section",
                  "start": 1541,
                  "end": 1548
                },
                "start": 1539,
                "end": 1549
              },
              "start": 169,
              "end": 1549
            },
            "id": null,
            "generator": false,
            "start": 148,
            "end": 1549
          },
          "definite": false,
          "start": 139,
          "end": 1549
        }
      ],
      "declare": false,
      "start": 135,
      "end": 1549
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1550
}
```
