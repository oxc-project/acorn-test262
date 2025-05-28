__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 626,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 33,
        "decorators": [],
        "name": "EnvFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 36,
        "end": 46,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 36,
          "end": 39,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 37,
              "end": 38,
              "name": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 46,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 46,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 64,
        "decorators": [],
        "name": "SimpleType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 67,
        "end": 95,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSTypeReference",
            "start": 76,
            "end": 95,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 83,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 83,
              "end": 95,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 84,
                  "end": 94,
                  "typeName": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 94,
                    "decorators": [],
                    "name": "SimpleType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 131,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 130,
            "decorators": [],
            "name": "simple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 130,
                  "decorators": [],
                  "name": "SimpleType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 171,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 155,
            "decorators": [],
            "name": "env",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 155,
                  "decorators": [],
                  "name": "EnvFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 158,
            "end": 170,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "decorators": [],
              "name": "simple",
              "optional": false,
              "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 190,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 200,
        "end": 222,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 200,
            "end": 201,
            "literal": {
              "type": "Literal",
              "start": 200,
              "end": 201,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 204,
            "end": 215,
            "typeName": {
              "type": "Identifier",
              "start": 204,
              "end": 211,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 211,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 214,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSArrayType",
            "start": 218,
            "end": 222,
            "elementType": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 220,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 220,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 225,
      "end": 302,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 232,
        "end": 302,
        "id": {
          "type": "Identifier",
          "start": 247,
          "end": 257,
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 258,
            "end": 267,
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 267,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 269,
          "end": 302,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 273,
              "end": 300,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 279,
                  "end": 300,
                  "id": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 286,
                    "decorators": [],
                    "name": "awaited",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 289,
                    "end": 300,
                    "argument": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 300,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 321,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 338,
        "decorators": [],
        "name": "EffectResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 343,
        "end": 391,
        "types": [
          {
            "type": "TSFunctionType",
            "start": 346,
            "end": 364,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 364,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 364,
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 370,
            "end": 391,
            "typeName": {
              "type": "Identifier",
              "start": 370,
              "end": 377,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 377,
              "end": 391,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 378,
                  "end": 390,
                  "typeName": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 390,
                    "decorators": [],
                    "name": "EffectResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 394,
      "end": 626,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 401,
        "end": 626,
        "id": {
          "type": "Identifier",
          "start": 416,
          "end": 434,
          "decorators": [],
          "name": "handleEffectResult",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 435,
            "end": 455,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 441,
              "end": 455,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 443,
                "end": 455,
                "typeName": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 455,
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 457,
          "end": 626,
          "body": [
            {
              "type": "IfStatement",
              "start": 461,
              "end": 624,
              "test": {
                "type": "BinaryExpression",
                "start": 465,
                "end": 491,
                "left": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 471,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 491,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 493,
                "end": 538,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 499,
                    "end": 534,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 499,
                      "end": 533,
                      "argument": {
                        "type": "CallExpression",
                        "start": 505,
                        "end": 533,
                        "callee": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 523,
                          "decorators": [],
                          "name": "handleEffectResult",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 524,
                            "end": 532,
                            "callee": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 530,
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 544,
                "end": 624,
                "test": {
                  "type": "BinaryExpression",
                  "start": 548,
                  "end": 573,
                  "left": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 554,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 573,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 575,
                  "end": 624,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 581,
                      "end": 620,
                      "expression": {
                        "type": "AwaitExpression",
                        "start": 581,
                        "end": 619,
                        "argument": {
                          "type": "CallExpression",
                          "start": 587,
                          "end": 619,
                          "callee": {
                            "type": "Identifier",
                            "start": 587,
                            "end": 605,
                            "decorators": [],
                            "name": "handleEffectResult",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "AwaitExpression",
                              "start": 606,
                              "end": 618,
                              "argument": {
                                "type": "Identifier",
                                "start": 612,
                                "end": 618,
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "alternate": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
