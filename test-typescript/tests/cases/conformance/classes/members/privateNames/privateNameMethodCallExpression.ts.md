__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 689,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "AA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 688,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 41,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 27,
                    "end": 39,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 27,
                      "end": 38,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 27,
                        "end": 33,
                        "object": {
                          "type": "ThisExpression",
                          "start": 27,
                          "end": 31
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 36,
                        "end": 38,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 47,
              "end": 55,
              "name": "method2"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 59,
                  "end": 63,
                  "argument": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 67,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 79,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 647,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 647,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 647,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 116,
                    "expression": {
                      "type": "CallExpression",
                      "start": 101,
                      "end": 115,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 113,
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 106,
                          "end": 113,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 125,
                    "end": 151,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 131,
                        "end": 150,
                        "id": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 135,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 138,
                          "end": 150,
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 143,
                            "end": 150,
                            "name": "method"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 160,
                    "end": 167,
                    "expression": {
                      "type": "CallExpression",
                      "start": 160,
                      "end": 166,
                      "callee": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 164,
                        "name": "func",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 176,
                    "end": 195,
                    "expression": {
                      "type": "NewExpression",
                      "start": 176,
                      "end": 194,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 180,
                        "end": 192,
                        "object": {
                          "type": "ThisExpression",
                          "start": 180,
                          "end": 184
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 185,
                          "end": 192,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 205,
                    "end": 226,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 211,
                        "end": 225,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 217,
                          "end": 225,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 219,
                              "end": 220,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 222,
                              "end": 223,
                              "value": 2,
                              "raw": "2"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 235,
                    "end": 263,
                    "expression": {
                      "type": "CallExpression",
                      "start": 235,
                      "end": 262,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 235,
                        "end": 248,
                        "object": {
                          "type": "ThisExpression",
                          "start": 235,
                          "end": 239
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 240,
                          "end": 248,
                          "name": "method2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 249,
                          "end": 250,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 252,
                          "end": 258,
                          "argument": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 258,
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 260,
                          "end": 261,
                          "value": 3,
                          "raw": "3"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 273,
                    "end": 315,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 279,
                        "end": 314,
                        "id": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 283,
                          "end": 314,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 300,
                            "object": {
                              "type": "ThisExpression",
                              "start": 287,
                              "end": 291
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 292,
                              "end": 300,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 301,
                              "end": 302,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 304,
                              "end": 310,
                              "argument": {
                                "type": "Identifier",
                                "start": 307,
                                "end": 310,
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 312,
                              "end": 313,
                              "value": 3,
                              "raw": "3"
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 333,
                    "end": 383,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 382,
                        "id": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 342,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 345,
                          "end": 382,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 345,
                            "end": 358,
                            "object": {
                              "type": "ThisExpression",
                              "start": 345,
                              "end": 349
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 350,
                              "end": 358,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 358,
                            "end": 382,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 365,
                                "end": 366,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 375,
                                "end": 376,
                                "value": 2,
                                "raw": "2"
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 358,
                                "end": 365,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 366,
                                "end": 375,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 376,
                                "end": 382,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                },
                                "tail": true
                              }
                            ]
                          },
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 392,
                    "end": 437,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 392,
                      "end": 436,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 392,
                        "end": 419,
                        "object": {
                          "type": "CallExpression",
                          "start": 392,
                          "end": 410,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 392,
                            "end": 408,
                            "object": {
                              "type": "ThisExpression",
                              "start": 392,
                              "end": 396
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 397,
                              "end": 408,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 411,
                          "end": 419,
                          "name": "method2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 419,
                        "end": 436,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 426,
                            "end": 427,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 433,
                            "end": 434,
                            "value": 2,
                            "raw": "2"
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 419,
                            "end": 426,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 427,
                            "end": 433,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 434,
                            "end": 436,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ]
                      },
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 447,
                    "end": 489,
                    "expression": {
                      "type": "CallExpression",
                      "start": 447,
                      "end": 488,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 447,
                        "end": 474,
                        "object": {
                          "type": "CallExpression",
                          "start": 447,
                          "end": 465,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 447,
                            "end": 463,
                            "object": {
                              "type": "ThisExpression",
                              "start": 447,
                              "end": 451
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 452,
                              "end": 463,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 466,
                          "end": 474,
                          "name": "method2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 475,
                          "end": 476,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 478,
                          "end": 484,
                          "argument": {
                            "type": "Identifier",
                            "start": 481,
                            "end": 484,
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 486,
                          "end": 487,
                          "value": 3,
                          "raw": "3"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 499,
                    "end": 558,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 505,
                        "end": 557,
                        "id": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 507,
                          "name": "b2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 510,
                          "end": 557,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 515,
                            "end": 542,
                            "object": {
                              "type": "CallExpression",
                              "start": 515,
                              "end": 533,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 515,
                                "end": 531,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 515,
                                  "end": 519
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 520,
                                  "end": 531,
                                  "name": "getInstance",
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
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 534,
                              "end": 542,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 544,
                              "end": 545,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 547,
                              "end": 553,
                              "argument": {
                                "type": "Identifier",
                                "start": 550,
                                "end": 553,
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 555,
                              "end": 556,
                              "value": 3,
                              "raw": "3"
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 576,
                    "end": 641,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 582,
                        "end": 640,
                        "id": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 586,
                          "name": "str2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 589,
                          "end": 640,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 589,
                            "end": 616,
                            "object": {
                              "type": "CallExpression",
                              "start": 589,
                              "end": 607,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 589,
                                "end": 605,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 589,
                                  "end": 593
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 594,
                                  "end": 605,
                                  "name": "getInstance",
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
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 608,
                              "end": 616,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 616,
                            "end": 640,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 623,
                                "end": 624,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 633,
                                "end": 634,
                                "value": 2,
                                "raw": "2"
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 616,
                                "end": 623,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 624,
                                "end": 633,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 634,
                                "end": 640,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                },
                                "tail": true
                              }
                            ]
                          },
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 652,
            "end": 686,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 652,
              "end": 663,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 663,
              "end": 686,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 666,
                "end": 686,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 668,
                    "end": 684,
                    "argument": {
                      "type": "NewExpression",
                      "start": 675,
                      "end": 683,
                      "callee": {
                        "type": "Identifier",
                        "start": 679,
                        "end": 681,
                        "name": "AA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
