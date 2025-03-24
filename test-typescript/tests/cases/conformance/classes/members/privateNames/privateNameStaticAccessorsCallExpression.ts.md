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
        "end": 574,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 75,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 25,
              "end": 35,
              "name": "fieldFunc"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 75,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 63,
                                  "end": 65,
                                  "name": "x"
                                },
                                "computed": false,
                                "optional": false
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
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 138,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 91,
              "end": 102,
              "name": "fieldFunc2"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 124,
                          "end": 125,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "RestElement",
                          "start": 127,
                          "end": 131,
                          "argument": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
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
                        "start": 133,
                        "end": 135,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
          },
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 157,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 150,
              "end": 152,
              "name": "x"
            },
            "value": {
              "type": "Literal",
              "start": 155,
              "end": 156,
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
            "start": 162,
            "end": 536,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 536,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                    "start": 213,
                    "end": 242,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 219,
                        "end": 241,
                        "id": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 223,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "start": 299,
                    "end": 320,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 305,
                        "end": 319,
                        "id": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 308,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 376,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "computed": false,
                            "optional": false
                          },
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
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 411,
                              "end": 412,
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
                    "start": 423,
                    "end": 476,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 429,
                        "end": 475,
                        "id": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 432,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 451,
                            "end": 475,
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
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 451,
                                "end": 458,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 459,
                                "end": 468,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 469,
                                "end": 475,
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
                          "start": 501,
                          "end": 512,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 512,
                        "end": 529,
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
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 512,
                            "end": 519,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 520,
                            "end": 526,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 527,
                            "end": 529,
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
            "start": 541,
            "end": 572,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 556,
              "name": "getClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 572,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "A",
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
