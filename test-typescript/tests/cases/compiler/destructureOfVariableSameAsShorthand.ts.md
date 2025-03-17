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
        "name": "AxiosResponse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "get",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "AxiosResponse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 179,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "name": "main",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                    "name": "get",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 256,
                  "name": "then",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 257,
                  "end": 339,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 258,
                      "end": 266,
                      "name": "response",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 312,
                              "end": 316,
                              "name": "body",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 319,
                              "end": 332,
                              "object": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 327,
                                "name": "response",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 328,
                                "end": 332,
                                "name": "data",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
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
                    "name": "get",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "name": "then",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 356,
                  "end": 402,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 357,
                      "end": 365,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 359,
                          "end": 363,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 363,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 363,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 370,
                    "end": 402,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 422,
                  "name": "response",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 434,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 472,
                  "name": "body",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 475,
                  "end": 488,
                  "object": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 483,
                    "name": "response",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 488,
                    "name": "data",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "type": "VariableDeclaration",
            "start": 515,
            "end": 551,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 521,
                "end": 550,
                "id": {
                  "type": "ObjectPattern",
                  "start": 521,
                  "end": 529,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 527,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 527,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 527,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 660,
                  "end": 683,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 662,
                      "end": 681,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 666,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 681,
                        "name": "shouldBeNever",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
