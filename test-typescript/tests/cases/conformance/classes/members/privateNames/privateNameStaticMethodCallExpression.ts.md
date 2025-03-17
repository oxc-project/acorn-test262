__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 676,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 675,
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
        "end": 675,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "start": 54,
            "end": 81,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 61,
              "end": 69,
              "name": "method2"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 81,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 73,
                  "end": 77,
                  "argument": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
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
                "start": 79,
                "end": 81,
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
            "start": 87,
            "end": 100,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 98,
              "end": 99,
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
            "start": 105,
            "end": 636,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 636,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "AA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 125,
                          "end": 132,
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
                    "start": 144,
                    "end": 168,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 150,
                        "end": 167,
                        "id": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 167,
                          "object": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 159,
                            "name": "AA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 160,
                            "end": 167,
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
                          "name": "AA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 200,
                          "end": 207,
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
                    "start": 220,
                    "end": 241,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 226,
                        "end": 240,
                        "id": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 229,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
                          "name": "AA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 253,
                          "end": 261,
                          "name": "method2"
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 326,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 292,
                        "end": 325,
                        "id": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 293,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "AA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 303,
                              "end": 311,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
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
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 323,
                              "end": 324,
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
                    "start": 344,
                    "end": 392,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 350,
                        "end": 391,
                        "id": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 353,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "AA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 359,
                              "end": 367,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 367,
                            "end": 391,
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
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 367,
                                "end": 374,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 375,
                                "end": 384,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 385,
                                "end": 391,
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
                              "name": "AA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 412,
                              "name": "getClass",
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
                          "start": 415,
                          "end": 423,
                          "name": "method2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 423,
                        "end": 440,
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
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 423,
                            "end": 430,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 431,
                            "end": 437,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 438,
                            "end": 440,
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
                              "name": "AA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 454,
                              "end": 462,
                              "name": "getClass",
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
                          "start": 465,
                          "end": 473,
                          "name": "method2"
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 498,
                    "end": 552,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 504,
                        "end": 551,
                        "id": {
                          "type": "Identifier",
                          "start": 504,
                          "end": 506,
                          "name": "b2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "AA",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 517,
                                  "end": 525,
                                  "name": "getClass",
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
                              "start": 528,
                              "end": 536,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
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
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 549,
                              "end": 550,
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
                    "start": 570,
                    "end": 630,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 576,
                        "end": 629,
                        "id": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 580,
                          "name": "str2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "AA",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 586,
                                  "end": 594,
                                  "name": "getClass",
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
                              "start": 597,
                              "end": 605,
                              "name": "method2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 605,
                            "end": 629,
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
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 605,
                                "end": 612,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 613,
                                "end": 622,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 623,
                                "end": 629,
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
            "start": 641,
            "end": 673,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 656,
              "name": "getClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 656,
              "end": 673,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "AA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
