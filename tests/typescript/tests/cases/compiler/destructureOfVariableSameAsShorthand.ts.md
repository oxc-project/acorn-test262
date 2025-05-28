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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 79,
        "decorators": [],
        "name": "AxiosResponse",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 84,
              "end": 89
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 129,
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 134,
              "end": 139
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 161,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 158,
                "decorators": [],
                "name": "AxiosResponse",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
          "typeName": {
            "type": "Identifier",
            "start": 166,
            "end": 173,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 179,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "callee": {
                "type": "MemberExpression",
                "start": 246,
                "end": 256,
                "object": {
                  "type": "CallExpression",
                  "start": 246,
                  "end": 251,
                  "callee": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 249,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 256,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 257,
                  "end": 339,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 258,
                      "end": 266,
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 271,
                    "end": 339,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 306,
                        "end": 333,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 312,
                            "end": 332,
                            "id": {
                              "type": "Identifier",
                              "start": 312,
                              "end": 316,
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 319,
                              "end": 332,
                              "object": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 327,
                                "decorators": [],
                                "name": "response",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 328,
                                "end": 332,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 345,
            "end": 403,
            "expression": {
              "type": "CallExpression",
              "start": 345,
              "end": 403,
              "callee": {
                "type": "MemberExpression",
                "start": 345,
                "end": 355,
                "object": {
                  "type": "CallExpression",
                  "start": 345,
                  "end": 350,
                  "callee": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 356,
                  "end": 402,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 357,
                      "end": 365,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 359,
                          "end": 363,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 363,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 363,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 370,
                    "end": 402,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 408,
            "end": 436,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 414,
                "end": 436,
                "id": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 422,
                  "decorators": [],
                  "name": "response",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 425,
                  "end": 436,
                  "argument": {
                    "type": "CallExpression",
                    "start": 431,
                    "end": 436,
                    "callee": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 434,
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 462,
            "end": 489,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 488,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 472,
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 475,
                  "end": 488,
                  "object": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 483,
                    "decorators": [],
                    "name": "response",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 488,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
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
            "type": "VariableDeclaration",
            "start": 515,
            "end": 551,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 521,
                "end": 550,
                "id": {
                  "type": "ObjectPattern",
                  "start": 521,
                  "end": 529,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 527,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 527,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 527,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 532,
                  "end": 550,
                  "argument": {
                    "type": "CallExpression",
                    "start": 538,
                    "end": 550,
                    "callee": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 541,
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    },
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 654,
            "end": 698,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 660,
                "end": 697,
                "id": {
                  "type": "ObjectPattern",
                  "start": 660,
                  "end": 683,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 662,
                      "end": 681,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 666,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 681,
                        "decorators": [],
                        "name": "shouldBeNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 686,
                  "end": 697,
                  "argument": {
                    "type": "CallExpression",
                    "start": 692,
                    "end": 697,
                    "callee": {
                      "type": "Identifier",
                      "start": 692,
                      "end": 695,
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
