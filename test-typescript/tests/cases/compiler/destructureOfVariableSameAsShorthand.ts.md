__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 700,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 107,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 107,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 105,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 79,
        "decorators": [],
        "name": "AxiosResponse",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 89,
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "start": 84,
              "end": 89
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 177,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 129,
        "decorators": [],
        "name": "get",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 164,
        "end": 176,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 166,
          "end": 176,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 173,
            "end": 176,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "R",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 166,
            "end": 173,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 139,
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "start": 134,
              "end": 139
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 161,
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 161,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 158,
                "end": 161,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 160,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 158,
                "decorators": [],
                "name": "AxiosResponse",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 179,
      "end": 700,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 700,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 340,
            "expression": {
              "type": "CallExpression",
              "start": 246,
              "end": 340,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 257,
                  "end": 339,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 271,
                    "end": 339,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 306,
                        "end": 333,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 312,
                            "end": 332,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 312,
                              "end": 316,
                              "decorators": [],
                              "name": "body",
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 319,
                              "end": 332,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 327,
                                "decorators": [],
                                "name": "response",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 328,
                                "end": 332,
                                "decorators": [],
                                "name": "data",
                                "optional": false
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 258,
                      "end": 266,
                      "decorators": [],
                      "name": "response",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 246,
                "end": 256,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 246,
                  "end": 251,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 249,
                    "decorators": [],
                    "name": "get",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 256,
                  "decorators": [],
                  "name": "then",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 345,
            "end": 403,
            "expression": {
              "type": "CallExpression",
              "start": 345,
              "end": 403,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 356,
                  "end": 402,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 370,
                    "end": 402,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 357,
                      "end": 365,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 359,
                          "end": 363,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 363,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 363,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 345,
                "end": 355,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 345,
                  "end": 350,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
                    "decorators": [],
                    "name": "get",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "then",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 408,
            "end": 436,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 414,
                "end": 436,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 422,
                  "decorators": [],
                  "name": "response",
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 425,
                  "end": 436,
                  "argument": {
                    "type": "CallExpression",
                    "start": 431,
                    "end": 436,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 434,
                      "decorators": [],
                      "name": "get",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 462,
            "end": 489,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 488,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 472,
                  "decorators": [],
                  "name": "body",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 475,
                  "end": 488,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 483,
                    "decorators": [],
                    "name": "response",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 488,
                    "decorators": [],
                    "name": "data",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 515,
            "end": 551,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 521,
                "end": 550,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 521,
                  "end": 529,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 527,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 527,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 527,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 532,
                  "end": 550,
                  "argument": {
                    "type": "CallExpression",
                    "start": 538,
                    "end": 550,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 541,
                      "decorators": [],
                      "name": "get",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 541,
                      "end": 548,
                      "params": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 542,
                          "end": 547
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 654,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 660,
                "end": 697,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 660,
                  "end": 683,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 662,
                      "end": 681,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 666,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 681,
                        "decorators": [],
                        "name": "shouldBeNever",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 686,
                  "end": 697,
                  "argument": {
                    "type": "CallExpression",
                    "start": 692,
                    "end": 697,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 692,
                      "end": 695,
                      "decorators": [],
                      "name": "get",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "decorators": [],
        "name": "main",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
