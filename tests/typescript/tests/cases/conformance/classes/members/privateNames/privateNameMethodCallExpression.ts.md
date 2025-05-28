__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 688,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 688,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 688,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 41,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 47,
              "end": 55,
              "name": "method2"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 67,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 79,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 647,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 647,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 125,
                    "end": 151,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 131,
                        "end": 150,
                        "id": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 135,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
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
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
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
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 205,
                    "end": 226,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 211,
                        "end": 225,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
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
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 273,
                    "end": 315,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 279,
                        "end": 314,
                        "id": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
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
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 312,
                              "end": 313,
                              "value": 3,
                              "raw": "3"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 333,
                    "end": 383,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 382,
                        "id": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 342,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
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
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 358,
                            "end": 382,
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
                            ],
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
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
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
                              "decorators": [],
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 411,
                          "end": 419,
                          "name": "method2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 419,
                        "end": 436,
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
                        ],
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
                        ]
                      }
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
                              "decorators": [],
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 466,
                          "end": 474,
                          "name": "method2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
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
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 499,
                    "end": 558,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 505,
                        "end": 557,
                        "id": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 507,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "getInstance",
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
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 534,
                              "end": 542,
                              "name": "method2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 555,
                              "end": 556,
                              "value": 3,
                              "raw": "3"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 576,
                    "end": 641,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 582,
                        "end": 640,
                        "id": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 586,
                          "decorators": [],
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "getInstance",
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
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 608,
                              "end": 616,
                              "name": "method2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 616,
                            "end": 640,
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
                            ],
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
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 652,
            "end": 686,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 652,
              "end": 663,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 663,
              "end": 686,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "AA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
