__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 496,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 23,
        "decorators": [],
        "name": "ConstructorOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 36,
        "end": 101,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 38,
            "end": 70,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 64,
              "end": 70,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 69,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 38,
              "end": 64,
              "decorators": [],
              "name": "ComponentOptionsProperties",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 77,
            "end": 101,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 85,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 100,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 94,
                    "end": 100,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 99,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 99,
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 94,
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 28,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 189,
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 189,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 163,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 163,
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 169,
            "end": 187,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 175,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 186,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 179,
                "end": 186
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 140,
        "decorators": [],
        "name": "ComponentOptionsProperties",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 140,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 145,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 145,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 191,
      "end": 268,
      "body": {
        "type": "TSInterfaceBody",
        "start": 216,
        "end": 268,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 222,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 255,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 255,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 254,
                    "end": 255,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 265,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 258,
                "end": 265
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 225,
              "end": 247,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 226,
                  "end": 246,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 236,
                    "end": 246,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 242,
                      "end": 246,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 246,
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 209,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 209,
        "end": 215,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 210,
            "end": 214,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 355,
            "decorators": [],
            "name": "Moon",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 288,
                "end": 355,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 294,
                    "end": 353,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 301,
                        "end": 335,
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 309,
                          "end": 335,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 311,
                            "end": 335,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 329,
                              "end": 335,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 330,
                                  "end": 334,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 330,
                                    "end": 334,
                                    "decorators": [],
                                    "name": "Data",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 311,
                              "end": 329,
                              "decorators": [],
                              "name": "ConstructorOptions",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 336,
                      "end": 352,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 338,
                        "end": 352,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 346,
                          "end": 352,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 347,
                              "end": 351,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 351,
                                "decorators": [],
                                "name": "Data",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 346,
                          "decorators": [],
                          "name": "Instance",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 294,
                      "end": 300,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 295,
                          "end": 299,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 295,
                            "end": 299,
                            "decorators": [],
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 495,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 369,
            "end": 495,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 374,
                "end": 494,
                "properties": [
                  {
                    "type": "Property",
                    "start": 380,
                    "end": 397,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 384,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 386,
                      "end": 397,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 388,
                          "end": 395,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 391,
                            "decorators": [],
                            "name": "msg",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 393,
                            "end": 395,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 403,
                    "end": 491,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 409,
                      "end": 491,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 412,
                        "end": 491,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 422,
                            "end": 450,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 428,
                                "end": 449,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 428,
                                  "end": 429,
                                  "decorators": [],
                                  "name": "h",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 432,
                                  "end": 449,
                                  "async": false,
                                  "body": {
                                    "type": "Identifier",
                                    "start": 448,
                                    "end": 449,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 433,
                                      "end": 443,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 434,
                                        "end": 443,
                                        "typeAnnotation": {
                                          "type": "TSUnknownKeyword",
                                          "start": 436,
                                          "end": 443
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 459,
                            "end": 485,
                            "argument": {
                              "type": "CallExpression",
                              "start": 466,
                              "end": 484,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "start": 468,
                                  "end": 483,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 477,
                                      "end": 482,
                                      "raw": "\"msg\"",
                                      "value": "msg",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 468,
                                    "end": 476,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 476,
                                      "decorators": [],
                                      "name": "get",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 466,
                                "end": 467,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 373,
              "decorators": [],
              "name": "Moon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
