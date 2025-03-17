__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 627,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 33,
        "name": "EnvFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "SimpleType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "SimpleType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 130,
            "name": "simple",
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
                  "name": "SimpleType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 155,
            "name": "env",
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
                  "name": "EnvFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 158,
            "end": 170,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "name": "simple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "name": "myFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "Identifier",
            "start": 258,
            "end": 267,
            "name": "param",
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
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 269,
          "end": 302,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 273,
              "end": 300,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 279,
                  "end": 300,
                  "id": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 286,
                    "name": "awaited",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 289,
                    "end": 300,
                    "argument": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 300,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 321,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 338,
        "name": "EffectResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "EffectResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "EffectResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          "name": "handleEffectResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "Identifier",
            "start": 435,
            "end": 455,
            "name": "result",
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
                  "name": "EffectResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 491,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                          "name": "handleEffectResult",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 524,
                            "end": 532,
                            "callee": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 530,
                              "name": "result",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 573,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "handleEffectResult",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "AwaitExpression",
                              "start": 606,
                              "end": 618,
                              "argument": {
                                "type": "Identifier",
                                "start": 612,
                                "end": 618,
                                "name": "result",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
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
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
