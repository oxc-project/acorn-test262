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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 574,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 75,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 25,
              "end": 35,
              "name": "fieldFunc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 75,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 59,
                        "end": 73,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 61,
                            "end": 71,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 61,
                              "end": 70,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 61,
                                "end": 65,
                                "object": {
                                  "type": "Identifier",
                                  "start": 61,
                                  "end": 62,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 63,
                                  "end": 65,
                                  "name": "x"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 68,
                                "end": 70,
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 91,
              "end": 102,
              "name": "fieldFunc2"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
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
                        "start": 133,
                        "end": 135,
                        "body": []
                      },
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 150,
              "end": 152,
              "name": "x"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 155,
              "end": 156,
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
            "start": 162,
            "end": 536,
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
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 536,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 536,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 186,
                    "end": 204,
                    "expression": {
                      "type": "CallExpression",
                      "start": 186,
                      "end": 203,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 186,
                        "end": 201,
                        "object": {
                          "type": "ThisExpression",
                          "start": 186,
                          "end": 190
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 191,
                          "end": 201,
                          "name": "fieldFunc"
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
                    "start": 213,
                    "end": 242,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 219,
                        "end": 241,
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 226,
                            "end": 230
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 231,
                            "end": 241,
                            "name": "fieldFunc"
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
                    "start": 251,
                    "end": 258,
                    "expression": {
                      "type": "CallExpression",
                      "start": 251,
                      "end": 257,
                      "callee": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 255,
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
                    "start": 267,
                    "end": 289,
                    "expression": {
                      "type": "NewExpression",
                      "start": 267,
                      "end": 288,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 271,
                        "end": 286,
                        "object": {
                          "type": "ThisExpression",
                          "start": 271,
                          "end": 275
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 276,
                          "end": 286,
                          "name": "fieldFunc"
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
                    "start": 299,
                    "end": 320,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 305,
                        "end": 319,
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
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 316,
                              "end": 317,
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
                    "start": 329,
                    "end": 360,
                    "expression": {
                      "type": "CallExpression",
                      "start": 329,
                      "end": 359,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 329,
                        "end": 345,
                        "object": {
                          "type": "ThisExpression",
                          "start": 329,
                          "end": 333
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 334,
                          "end": 345,
                          "name": "fieldFunc2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 346,
                          "end": 347,
                          "value": 0,
                          "raw": "0"
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
                    "start": 369,
                    "end": 414,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 375,
                        "end": 413,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 383,
                            "end": 399,
                            "object": {
                              "type": "ThisExpression",
                              "start": 383,
                              "end": 387
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 388,
                              "end": 399,
                              "name": "fieldFunc2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 400,
                              "end": 401,
                              "value": 0,
                              "raw": "0"
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
                    "start": 423,
                    "end": 476,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 429,
                        "end": 475,
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
                          "tag": {
                            "type": "MemberExpression",
                            "start": 435,
                            "end": 451,
                            "object": {
                              "type": "ThisExpression",
                              "start": 435,
                              "end": 439
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 440,
                              "end": 451,
                              "name": "fieldFunc2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 451,
                            "end": 475,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 451,
                                "end": 458,
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 459,
                                "end": 468,
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 469,
                                "end": 475,
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
                                "start": 458,
                                "end": 459,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 468,
                                "end": 469,
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
                    "start": 485,
                    "end": 530,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 485,
                      "end": 529,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 485,
                        "end": 512,
                        "object": {
                          "type": "CallExpression",
                          "start": 485,
                          "end": 500,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 485,
                            "end": 498,
                            "object": {
                              "type": "ThisExpression",
                              "start": 485,
                              "end": 489
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 490,
                              "end": 498,
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
                          "start": 501,
                          "end": 512,
                          "name": "fieldFunc2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 512,
                        "end": 529,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 512,
                            "end": 519,
                            "value": {
                              "raw": "test",
                              "cooked": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 520,
                            "end": 526,
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 527,
                            "end": 529,
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
                            "start": 519,
                            "end": 520,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 526,
                            "end": 527,
                            "value": 2,
                            "raw": "2"
                          }
                        ]
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
            "start": 541,
            "end": 572,
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
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 572,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
