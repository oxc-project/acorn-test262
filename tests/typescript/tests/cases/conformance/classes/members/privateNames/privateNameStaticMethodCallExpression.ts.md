__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 675,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 675,
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
        "end": 675,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 48,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 48,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 34,
                    "end": 46,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 34,
                      "end": 45,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 34,
                        "end": 40,
                        "object": {
                          "type": "ThisExpression",
                          "start": 34,
                          "end": 38
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
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
                        "start": 43,
                        "end": 45,
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
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 81,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 61,
              "end": 69,
              "name": "method2"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 81,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 73,
                  "end": 77,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
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
                "start": 79,
                "end": 81,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 100,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 98,
              "end": 99,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 636,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 636,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 636,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 135,
                    "expression": {
                      "type": "CallExpression",
                      "start": 122,
                      "end": 134,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 132,
                        "object": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 124,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 125,
                          "end": 132,
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
                    "start": 144,
                    "end": 168,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 150,
                        "end": 167,
                        "id": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 167,
                          "object": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 159,
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 160,
                            "end": 167,
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
                    "start": 177,
                    "end": 184,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 183,
                      "callee": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 181,
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
                    "start": 193,
                    "end": 210,
                    "expression": {
                      "type": "NewExpression",
                      "start": 193,
                      "end": 209,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 207,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 200,
                          "end": 207,
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
                    "start": 220,
                    "end": 241,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 226,
                        "end": 240,
                        "id": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 229,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 232,
                          "end": 240,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 234,
                              "end": 235,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 237,
                              "end": 238,
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
                    "start": 250,
                    "end": 276,
                    "expression": {
                      "type": "CallExpression",
                      "start": 250,
                      "end": 275,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 250,
                        "end": 261,
                        "object": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 252,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 253,
                          "end": 261,
                          "name": "method2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 262,
                          "end": 263,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 265,
                          "end": 271,
                          "argument": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 271,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 273,
                          "end": 274,
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
                    "start": 286,
                    "end": 326,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 292,
                        "end": 325,
                        "id": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 293,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 296,
                          "end": 325,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 300,
                            "end": 311,
                            "object": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 302,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 303,
                              "end": 311,
                              "name": "method2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 312,
                              "end": 313,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 315,
                              "end": 321,
                              "argument": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 321,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 323,
                              "end": 324,
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
                    "start": 344,
                    "end": 392,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 350,
                        "end": 391,
                        "id": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 353,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 356,
                          "end": 391,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 356,
                            "end": 367,
                            "object": {
                              "type": "Identifier",
                              "start": 356,
                              "end": 358,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 359,
                              "end": 367,
                              "name": "method2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 367,
                            "end": 391,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 367,
                                "end": 374,
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 375,
                                "end": 384,
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 385,
                                "end": 391,
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 374,
                                "end": 375,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 384,
                                "end": 385,
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
                    "start": 401,
                    "end": 441,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 401,
                      "end": 440,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 401,
                        "end": 423,
                        "object": {
                          "type": "CallExpression",
                          "start": 401,
                          "end": 414,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 401,
                            "end": 412,
                            "object": {
                              "type": "Identifier",
                              "start": 401,
                              "end": 403,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 412,
                              "decorators": [],
                              "name": "getClass",
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
                          "start": 415,
                          "end": 423,
                          "name": "method2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 423,
                        "end": 440,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 423,
                            "end": 430,
                            "value": {
                              "raw": "test",
                              "cooked": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 431,
                            "end": 437,
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 438,
                            "end": 440,
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 430,
                            "end": 431,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 437,
                            "end": 438,
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
                    "start": 451,
                    "end": 488,
                    "expression": {
                      "type": "CallExpression",
                      "start": 451,
                      "end": 487,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 451,
                        "end": 473,
                        "object": {
                          "type": "CallExpression",
                          "start": 451,
                          "end": 464,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 462,
                            "object": {
                              "type": "Identifier",
                              "start": 451,
                              "end": 453,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 454,
                              "end": 462,
                              "decorators": [],
                              "name": "getClass",
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
                          "start": 465,
                          "end": 473,
                          "name": "method2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 474,
                          "end": 475,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 477,
                          "end": 483,
                          "argument": {
                            "type": "Identifier",
                            "start": 480,
                            "end": 483,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 485,
                          "end": 486,
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
                    "start": 498,
                    "end": 552,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 504,
                        "end": 551,
                        "id": {
                          "type": "Identifier",
                          "start": 504,
                          "end": 506,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 509,
                          "end": 551,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 514,
                            "end": 536,
                            "object": {
                              "type": "CallExpression",
                              "start": 514,
                              "end": 527,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 514,
                                "end": 525,
                                "object": {
                                  "type": "Identifier",
                                  "start": 514,
                                  "end": 516,
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 517,
                                  "end": 525,
                                  "decorators": [],
                                  "name": "getClass",
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
                              "start": 528,
                              "end": 536,
                              "name": "method2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 538,
                              "end": 539,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 541,
                              "end": 547,
                              "argument": {
                                "type": "Identifier",
                                "start": 544,
                                "end": 547,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 549,
                              "end": 550,
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
                    "start": 570,
                    "end": 630,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 576,
                        "end": 629,
                        "id": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 580,
                          "decorators": [],
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 583,
                          "end": 629,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 583,
                            "end": 605,
                            "object": {
                              "type": "CallExpression",
                              "start": 583,
                              "end": 596,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 583,
                                "end": 594,
                                "object": {
                                  "type": "Identifier",
                                  "start": 583,
                                  "end": 585,
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 586,
                                  "end": 594,
                                  "decorators": [],
                                  "name": "getClass",
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
                              "start": 597,
                              "end": 605,
                              "name": "method2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 605,
                            "end": 629,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 605,
                                "end": 612,
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 613,
                                "end": 622,
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 623,
                                "end": 629,
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 612,
                                "end": 613,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 622,
                                "end": 623,
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
            "start": 641,
            "end": 673,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 656,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 656,
              "end": 673,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 659,
                "end": 673,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 661,
                    "end": 671,
                    "argument": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 670,
                      "decorators": [],
                      "name": "AA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
