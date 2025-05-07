__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 533,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 533,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 533,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 31,
              "name": "fieldFunc"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 62,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 62,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 48,
                    "end": 60,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 48,
                      "end": 59,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 48,
                        "end": 54,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 48,
                          "end": 52
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 57,
                        "end": 59,
                        "raw": "10",
                        "value": 10,
                        "regex": null,
                        "bigint": null
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
            "start": 68,
            "end": 111,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 75,
              "end": 86,
              "name": "fieldFunc2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 110,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 102,
                  "end": 106,
                  "argument": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
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
            "start": 116,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
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
              "start": 120,
              "end": 121,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 502,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 131,
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
              "start": 131,
              "end": 502,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 502,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 144,
                    "end": 159,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 144,
                      "end": 158,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 144,
                        "end": 156,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 145,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 146,
                          "end": 156,
                          "name": "fieldFunc"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 168,
                    "end": 185,
                    "directive": null,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 168,
                      "end": 184,
                      "expression": {
                        "type": "CallExpression",
                        "start": 168,
                        "end": 184,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 168,
                          "end": 180,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 169,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 170,
                            "end": 180,
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
                    "start": 194,
                    "end": 220,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 219,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 204,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 207,
                          "end": 219,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 208,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 209,
                            "end": 219,
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
                    "start": 229,
                    "end": 236,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 229,
                      "end": 235,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 233,
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
                    "start": 245,
                    "end": 264,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 245,
                      "end": 263,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 249,
                        "end": 261,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 251,
                          "end": 261,
                          "name": "fieldFunc"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 274,
                    "end": 295,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 280,
                        "end": 294,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 283,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 286,
                          "end": 294,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 288,
                              "end": 289,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 291,
                              "end": 292,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
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
                    "start": 304,
                    "end": 332,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 304,
                      "end": 331,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 318,
                          "end": 319,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 321,
                          "end": 327,
                          "argument": {
                            "type": "Identifier",
                            "start": 324,
                            "end": 327,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 329,
                          "end": 330,
                          "raw": "3",
                          "value": 3,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 317,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 305,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 306,
                          "end": 317,
                          "name": "fieldFunc2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 341,
                    "end": 383,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 347,
                        "end": 382,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 348,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 351,
                          "end": 382,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 369,
                              "end": 370,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "SpreadElement",
                              "start": 372,
                              "end": 378,
                              "argument": {
                                "type": "Identifier",
                                "start": 375,
                                "end": 378,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 380,
                              "end": 381,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 355,
                            "end": 368,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 357,
                              "end": 368,
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
                    "start": 392,
                    "end": 442,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 398,
                        "end": 441,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 401,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 404,
                          "end": 441,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 417,
                            "end": 441,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 424,
                                "end": 425,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 434,
                                "end": 435,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 417,
                                "end": 424,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 425,
                                "end": 434,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 435,
                                "end": 441,
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
                            "start": 404,
                            "end": 417,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 405,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 406,
                              "end": 417,
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
                    "start": 451,
                    "end": 496,
                    "directive": null,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 451,
                      "end": 495,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 478,
                        "end": 495,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 485,
                            "end": 486,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          {
                            "type": "Literal",
                            "start": 492,
                            "end": 493,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 478,
                            "end": 485,
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 486,
                            "end": 492,
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 493,
                            "end": 495,
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
                        "start": 451,
                        "end": 478,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 451,
                          "end": 466,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 464,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 451,
                              "end": 455
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 456,
                              "end": 464,
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
                          "start": 467,
                          "end": 478,
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
            "start": 507,
            "end": 531,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 507,
              "end": 515,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 531,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 518,
                "end": 531,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 520,
                    "end": 529,
                    "argument": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
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
