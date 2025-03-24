__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 550,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 550,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 550,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 24,
              "name": "fieldFunc"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 54,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 40,
                    "end": 52,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 40,
                      "end": 51,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 40,
                        "end": 46,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 49,
                        "end": 51,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 95,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 60,
              "end": 71,
              "name": "fieldFunc2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 94,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 94,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 86,
                  "end": 90,
                  "argument": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 104,
              "end": 105,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 510,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 510,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 510,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 146,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 145,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 143,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 133,
                          "end": 143,
                          "name": "fieldFunc"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 175,
                    "directive": null,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 155,
                      "end": 174,
                      "expression": {
                        "type": "CallExpression",
                        "start": 155,
                        "end": 174,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 155,
                          "end": 170,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 155,
                            "end": 159
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 160,
                            "end": 170,
                            "name": "fieldFunc"
                          }
                        },
                        "optional": true,
                        "typeArguments": null
                      }
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 194,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 197,
                          "end": 212,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 197,
                            "end": 201
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 202,
                            "end": 212,
                            "name": "fieldFunc"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 222,
                    "end": 229,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 222,
                      "end": 228,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 226,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 238,
                    "end": 260,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 238,
                      "end": 259,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 257,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 247,
                          "end": 257,
                          "name": "fieldFunc"
                        }
                      },
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 279,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
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
                              "raw": "1",
                              "value": 1
                            },
                            {
                              "type": "Literal",
                              "start": 287,
                              "end": 288,
                              "raw": "2",
                              "value": 2
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 300,
                    "end": 331,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 300,
                      "end": 330,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 317,
                          "end": 318,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "SpreadElement",
                          "start": 320,
                          "end": 326,
                          "argument": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 326,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 328,
                          "end": 329,
                          "raw": "3",
                          "value": 3
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 300,
                        "end": 316,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 300,
                          "end": 304
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 305,
                          "end": 316,
                          "name": "fieldFunc2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 350,
                          "end": 384,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 371,
                              "end": 372,
                              "raw": "0",
                              "value": 0
                            },
                            {
                              "type": "SpreadElement",
                              "start": 374,
                              "end": 380,
                              "argument": {
                                "type": "Identifier",
                                "start": 377,
                                "end": 380,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 382,
                              "end": 383,
                              "raw": "3",
                              "value": 3
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 354,
                            "end": 370,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 354,
                              "end": 358
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 359,
                              "end": 370,
                              "name": "fieldFunc2"
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 403,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 406,
                          "end": 446,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 422,
                            "end": 446,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 429,
                                "end": 430,
                                "raw": "1",
                                "value": 1
                              },
                              {
                                "type": "Literal",
                                "start": 439,
                                "end": 440,
                                "raw": "2",
                                "value": 2
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 422,
                                "end": 429,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 430,
                                "end": 439,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 440,
                                "end": 446,
                                "tail": true,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                }
                              }
                            ]
                          },
                          "tag": {
                            "type": "MemberExpression",
                            "start": 406,
                            "end": 422,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 406,
                              "end": 410
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 411,
                              "end": 422,
                              "name": "fieldFunc2"
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 456,
                    "end": 504,
                    "directive": null,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 456,
                      "end": 503,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 486,
                        "end": 503,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 493,
                            "end": 494,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 500,
                            "end": 501,
                            "raw": "2",
                            "value": 2
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 486,
                            "end": 493,
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 494,
                            "end": 500,
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 501,
                            "end": 503,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      },
                      "tag": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 486,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 456,
                          "end": 474,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 456,
                            "end": 472,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 456,
                              "end": 460
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 461,
                              "end": 472,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 475,
                          "end": 486,
                          "name": "fieldFunc2"
                        }
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 515,
            "end": 548,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 515,
              "end": 526,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 526,
              "end": 548,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
