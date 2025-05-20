__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 552,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 552,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 552,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 18,
              "end": 28,
              "name": "fieldFunc"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 34,
                    "end": 68,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 41,
                      "end": 68,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 52,
                        "end": 68,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 54,
                            "end": 66,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 54,
                              "end": 65,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 54,
                                "end": 60,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 54,
                                  "end": 58
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 59,
                                  "end": 60,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 63,
                                "end": 65,
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
            "start": 75,
            "end": 126,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 79,
              "end": 90,
              "name": "fieldFunc2"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 126,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 95,
                    "end": 124,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 103,
                      "end": 123,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 121,
                        "end": 123,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "RestElement",
                          "start": 115,
                          "end": 119,
                          "argument": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
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
            "start": 131,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
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
              "start": 135,
              "end": 136,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 512,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 146,
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
              "start": 146,
              "end": 512,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 512,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 177,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 159,
                      "end": 176,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 174,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 164,
                          "end": 174,
                          "name": "fieldFunc"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 186,
                    "end": 215,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 192,
                        "end": 214,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 196,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 199,
                          "end": 214,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 199,
                            "end": 203
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 204,
                            "end": 214,
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
                    "start": 224,
                    "end": 231,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 224,
                      "end": 230,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
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
                    "start": 240,
                    "end": 262,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 240,
                      "end": 261,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 259,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 244,
                          "end": 248
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 249,
                          "end": 259,
                          "name": "fieldFunc"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 272,
                    "end": 293,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 278,
                        "end": 292,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 281,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 284,
                          "end": 292,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 286,
                              "end": 287,
                              "raw": "1",
                              "value": 1
                            },
                            {
                              "type": "Literal",
                              "start": 289,
                              "end": 290,
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
                    "start": 302,
                    "end": 333,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 302,
                      "end": 332,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 319,
                          "end": 320,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "SpreadElement",
                          "start": 322,
                          "end": 328,
                          "argument": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 328,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 330,
                          "end": 331,
                          "raw": "3",
                          "value": 3
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 318,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 307,
                          "end": 318,
                          "name": "fieldFunc2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 342,
                    "end": 387,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 348,
                        "end": 386,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 352,
                          "end": 386,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 373,
                              "end": 374,
                              "raw": "0",
                              "value": 0
                            },
                            {
                              "type": "SpreadElement",
                              "start": 376,
                              "end": 382,
                              "argument": {
                                "type": "Identifier",
                                "start": 379,
                                "end": 382,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 384,
                              "end": 385,
                              "raw": "3",
                              "value": 3
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 356,
                            "end": 372,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 356,
                              "end": 360
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 361,
                              "end": 372,
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
                    "start": 396,
                    "end": 449,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 402,
                        "end": 448,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 402,
                          "end": 405,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 408,
                          "end": 448,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 424,
                            "end": 448,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 431,
                                "end": 432,
                                "raw": "1",
                                "value": 1
                              },
                              {
                                "type": "Literal",
                                "start": 441,
                                "end": 442,
                                "raw": "2",
                                "value": 2
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 424,
                                "end": 431,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 432,
                                "end": 441,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 442,
                                "end": 448,
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
                            "start": 408,
                            "end": 424,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 408,
                              "end": 412
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 413,
                              "end": 424,
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
                    "start": 458,
                    "end": 506,
                    "directive": null,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 458,
                      "end": 505,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 488,
                        "end": 505,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 495,
                            "end": 496,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 502,
                            "end": 503,
                            "raw": "2",
                            "value": 2
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 488,
                            "end": 495,
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 496,
                            "end": 502,
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 503,
                            "end": 505,
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
                        "start": 458,
                        "end": 488,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 458,
                          "end": 476,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 458,
                            "end": 474,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 458,
                              "end": 462
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 463,
                              "end": 474,
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
                          "start": 477,
                          "end": 488,
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
            "start": 517,
            "end": 550,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 528,
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
              "start": 528,
              "end": 550,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 531,
                "end": 550,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 533,
                    "end": 548,
                    "argument": {
                      "type": "NewExpression",
                      "start": 540,
                      "end": 547,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
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
