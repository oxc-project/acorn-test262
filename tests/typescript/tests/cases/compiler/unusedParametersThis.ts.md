__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 555,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 441,
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
        "end": 441,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 101,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 101,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 61,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 57,
                      "end": 61
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 70,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 64,
                  "end": 70
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 95,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 88,
                      "end": 94,
                      "object": {
                        "type": "ThisExpression",
                        "start": 88,
                        "end": 92
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 169,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 121,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 169,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 129,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 138,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 132,
                  "end": 138
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 149,
                    "end": 163,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 156,
                      "end": 162,
                      "object": {
                        "type": "ThisExpression",
                        "start": 156,
                        "end": 160
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 189,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 189,
              "end": 269,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 200,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 194,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 196,
                      "end": 200
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 201,
                "end": 209,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 203,
                  "end": 209
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 269,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 220,
                    "end": 242,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 224,
                        "end": 241,
                        "id": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 226,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 229,
                          "end": 241,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "start": 235,
                            "end": 241,
                            "object": {
                              "type": "ThisExpression",
                              "start": 235,
                              "end": 239
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 241,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 251,
                    "end": 263,
                    "argument": {
                      "type": "CallExpression",
                      "start": 258,
                      "end": 262,
                      "callee": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 260,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 275,
            "end": 366,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 289,
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 366,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 290,
                  "end": 297,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 294,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 296,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 298,
                "end": 306,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 300,
                  "end": 306
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 307,
                "end": 366,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 317,
                    "end": 339,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 321,
                        "end": 338,
                        "id": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 323,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 326,
                          "end": 338,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "start": 332,
                            "end": 338,
                            "object": {
                              "type": "ThisExpression",
                              "start": 332,
                              "end": 336
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 337,
                              "end": 338,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 348,
                    "end": 360,
                    "argument": {
                      "type": "CallExpression",
                      "start": 355,
                      "end": 359,
                      "callee": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 357,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 372,
            "end": 439,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 391,
              "decorators": [],
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 391,
              "end": 439,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 399,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 396,
                    "end": 399,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 398,
                      "end": 399,
                      "typeName": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 399,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 400,
                "end": 408,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 402,
                  "end": 408
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 409,
                "end": 439,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 419,
                    "end": 433,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 426,
                      "end": 432,
                      "object": {
                        "type": "ThisExpression",
                        "start": 426,
                        "end": 430
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 432,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 492,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 453,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 454,
          "end": 461,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 458,
            "end": 461,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 460,
              "end": 461,
              "typeName": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 462,
        "end": 470,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 464,
          "end": 470
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 471,
        "end": 492,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 477,
            "end": 490,
            "argument": {
              "type": "MemberExpression",
              "start": 484,
              "end": 490,
              "object": {
                "type": "ThisExpression",
                "start": 484,
                "end": 488
              },
              "property": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 500,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 503,
            "end": 554,
            "id": {
              "type": "Identifier",
              "start": 512,
              "end": 514,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 515,
                "end": 522,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 519,
                  "end": 522,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 521,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 522,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 523,
              "end": 531,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 525,
                "end": 531
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 532,
              "end": 554,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 538,
                  "end": 552,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 545,
                    "end": 551,
                    "object": {
                      "type": "ThisExpression",
                      "start": 545,
                      "end": 549
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 551,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
