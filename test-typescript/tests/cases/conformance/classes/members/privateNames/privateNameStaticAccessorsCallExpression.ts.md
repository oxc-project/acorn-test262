__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 574,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 574,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 574,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 25,
              "end": 35,
              "name": "fieldFunc"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 75,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 41,
                    "end": 73,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 48,
                      "end": 73,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 59,
                        "end": 73,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 61,
                            "end": 71,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 61,
                              "end": 70,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 61,
                                "end": 65,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 61,
                                  "end": 62,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 63,
                                  "end": 65,
                                  "name": "x"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 68,
                                "end": 70,
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
            "start": 80,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 91,
              "end": 102,
              "name": "fieldFunc2"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 138,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 107,
                    "end": 136,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 115,
                      "end": 135,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 135,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 124,
                          "end": 125,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "RestElement",
                          "start": 127,
                          "end": 131,
                          "argument": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
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
            "start": 143,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 150,
              "end": 152,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 536,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 536,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 536,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 186,
                    "end": 204,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 186,
                      "end": 203,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 186,
                        "end": 201,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 186,
                          "end": 190
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 191,
                          "end": 201,
                          "name": "fieldFunc"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 213,
                    "end": 242,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 219,
                        "end": 241,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 223,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 226,
                          "end": 241,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 226,
                            "end": 230
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 231,
                            "end": 241,
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
                    "start": 251,
                    "end": 258,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 251,
                      "end": 257,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 255,
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
                    "start": 267,
                    "end": 289,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 267,
                      "end": 288,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 271,
                        "end": 286,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 271,
                          "end": 275
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 276,
                          "end": 286,
                          "name": "fieldFunc"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 299,
                    "end": 320,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 305,
                        "end": 319,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 308,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 311,
                          "end": 319,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 313,
                              "end": 314,
                              "raw": "1",
                              "value": 1
                            },
                            {
                              "type": "Literal",
                              "start": 316,
                              "end": 317,
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
                    "start": 329,
                    "end": 360,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 329,
                      "end": 359,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 346,
                          "end": 347,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "SpreadElement",
                          "start": 349,
                          "end": 355,
                          "argument": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 355,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 357,
                          "end": 358,
                          "raw": "3",
                          "value": 3
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 329,
                        "end": 345,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 329,
                          "end": 333
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 334,
                          "end": 345,
                          "name": "fieldFunc2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 369,
                    "end": 414,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 375,
                        "end": 413,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 376,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 379,
                          "end": 413,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 400,
                              "end": 401,
                              "raw": "0",
                              "value": 0
                            },
                            {
                              "type": "SpreadElement",
                              "start": 403,
                              "end": 409,
                              "argument": {
                                "type": "Identifier",
                                "start": 406,
                                "end": 409,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 411,
                              "end": 412,
                              "raw": "3",
                              "value": 3
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 383,
                            "end": 399,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 383,
                              "end": 387
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 388,
                              "end": 399,
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
                    "start": 423,
                    "end": 476,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 429,
                        "end": 475,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 432,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 435,
                          "end": 475,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 451,
                            "end": 475,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 458,
                                "end": 459,
                                "raw": "1",
                                "value": 1
                              },
                              {
                                "type": "Literal",
                                "start": 468,
                                "end": 469,
                                "raw": "2",
                                "value": 2
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 451,
                                "end": 458,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 459,
                                "end": 468,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 469,
                                "end": 475,
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
                            "start": 435,
                            "end": 451,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 435,
                              "end": 439
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 440,
                              "end": 451,
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
                    "start": 485,
                    "end": 530,
                    "directive": null,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 485,
                      "end": 529,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 512,
                        "end": 529,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 519,
                            "end": 520,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 526,
                            "end": 527,
                            "raw": "2",
                            "value": 2
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 512,
                            "end": 519,
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 520,
                            "end": 526,
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 527,
                            "end": 529,
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
                        "start": 485,
                        "end": 512,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 485,
                          "end": 500,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 485,
                            "end": 498,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 485,
                              "end": 489
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 490,
                              "end": 498,
                              "decorators": [],
                              "name": "getClass",
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
                          "start": 501,
                          "end": 512,
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
            "start": 541,
            "end": 572,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 556,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 572,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 559,
                "end": 572,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 561,
                    "end": 570,
                    "argument": {
                      "type": "Identifier",
                      "start": 568,
                      "end": 569,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
