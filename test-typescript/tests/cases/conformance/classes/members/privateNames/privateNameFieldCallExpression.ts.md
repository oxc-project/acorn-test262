__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 551,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 550,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 550,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 55,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 24,
              "name": "fieldFunc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 54,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 40,
                    "end": 52,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 40,
                      "end": 51,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 40,
                        "end": 46,
                        "object": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
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
                        "start": 49,
                        "end": 51,
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
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 95,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 60,
              "end": 71,
              "name": "fieldFunc2"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 94,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 86,
                  "end": 90,
                  "argument": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
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
                "start": 92,
                "end": 94,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
            "type": "PropertyDefinition",
            "start": 100,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 104,
              "end": 105,
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
            "start": 111,
            "end": 510,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 510,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 510,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 146,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 145,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 143,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 133,
                          "end": 143,
                          "name": "fieldFunc"
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
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 175,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 155,
                      "end": 174,
                      "expression": {
                        "type": "CallExpression",
                        "start": 155,
                        "end": 174,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 155,
                          "end": 170,
                          "object": {
                            "type": "ThisExpression",
                            "start": 155,
                            "end": 159
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 160,
                            "end": 170,
                            "name": "fieldFunc"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": true,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 184,
                    "end": 213,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 212,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 194,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 197,
                          "end": 212,
                          "object": {
                            "type": "ThisExpression",
                            "start": 197,
                            "end": 201
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 202,
                            "end": 212,
                            "name": "fieldFunc"
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
                    "start": 222,
                    "end": 229,
                    "expression": {
                      "type": "CallExpression",
                      "start": 222,
                      "end": 228,
                      "callee": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 226,
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
                    "start": 238,
                    "end": 260,
                    "expression": {
                      "type": "NewExpression",
                      "start": 238,
                      "end": 259,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 257,
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 247,
                          "end": 257,
                          "name": "fieldFunc"
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
                    "start": 270,
                    "end": 291,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 276,
                        "end": 290,
                        "id": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 279,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 282,
                          "end": 290,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 284,
                              "end": 285,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 287,
                              "end": 288,
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
                    "start": 300,
                    "end": 331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 300,
                      "end": 330,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 300,
                        "end": 316,
                        "object": {
                          "type": "ThisExpression",
                          "start": 300,
                          "end": 304
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 305,
                          "end": 316,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 317,
                          "end": 318,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 320,
                          "end": 326,
                          "argument": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 326,
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 328,
                          "end": 329,
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
                    "start": 340,
                    "end": 385,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 346,
                        "end": 384,
                        "id": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 350,
                          "end": 384,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 354,
                            "end": 370,
                            "object": {
                              "type": "ThisExpression",
                              "start": 354,
                              "end": 358
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 359,
                              "end": 370,
                              "name": "fieldFunc2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 371,
                              "end": 372,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 374,
                              "end": 380,
                              "argument": {
                                "type": "Identifier",
                                "start": 377,
                                "end": 380,
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 382,
                              "end": 383,
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
                    "start": 394,
                    "end": 447,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 400,
                        "end": 446,
                        "id": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 403,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 406,
                          "end": 446,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 406,
                            "end": 422,
                            "object": {
                              "type": "ThisExpression",
                              "start": 406,
                              "end": 410
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 411,
                              "end": 422,
                              "name": "fieldFunc2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 422,
                            "end": 446,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 429,
                                "end": 430,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 439,
                                "end": 440,
                                "value": 2,
                                "raw": "2"
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 422,
                                "end": 429,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 430,
                                "end": 439,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 440,
                                "end": 446,
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
                    "start": 456,
                    "end": 504,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 456,
                      "end": 503,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 486,
                        "object": {
                          "type": "CallExpression",
                          "start": 456,
                          "end": 474,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 456,
                            "end": 472,
                            "object": {
                              "type": "ThisExpression",
                              "start": 456,
                              "end": 460
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 461,
                              "end": 472,
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
                          "start": 475,
                          "end": 486,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 486,
                        "end": 503,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 493,
                            "end": 494,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 500,
                            "end": 501,
                            "value": 2,
                            "raw": "2"
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 486,
                            "end": 493,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 494,
                            "end": 500,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 501,
                            "end": 503,
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
            "start": 515,
            "end": 548,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 515,
              "end": 526,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 526,
              "end": 548,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 529,
                "end": 548,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 531,
                    "end": 546,
                    "argument": {
                      "type": "NewExpression",
                      "start": 538,
                      "end": 545,
                      "callee": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "name": "A",
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
