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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 23,
        "decorators": [],
        "name": "ConstructorOptions",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "Data",
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 36,
        "end": 101,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 38,
            "end": 70,
            "typeName": {
              "type": "Identifier",
              "start": 38,
              "end": 64,
              "decorators": [],
              "name": "ComponentOptionsProperties",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 64,
              "end": 70,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 69,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 77,
            "end": 101,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 85,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 94,
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 94,
                    "end": 100,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 99,
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 189,
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
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 145,
              "decorators": [],
              "name": "Data",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 189,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 164,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 163,
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 169,
            "end": 187,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 175,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 191,
      "end": 268,
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
            "name": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "decorators": [],
              "name": "Data",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 216,
        "end": 268,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 222,
            "end": 266,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 225,
              "end": 247,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 226,
                  "end": 246,
                  "name": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 236,
                    "end": 246,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 242,
                      "end": 246,
                      "typeName": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 246,
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "K",
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
              "start": 256,
              "end": 265,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 258,
                "end": 265
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 356,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 355,
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 294,
                      "end": 300,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 295,
                          "end": 299,
                          "name": {
                            "type": "Identifier",
                            "start": 295,
                            "end": 299,
                            "decorators": [],
                            "name": "Data",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 311,
                              "end": 329,
                              "decorators": [],
                              "name": "ConstructorOptions",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 329,
                              "end": 335,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 330,
                                  "end": 334,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 330,
                                    "end": 334,
                                    "decorators": [],
                                    "name": "Data",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 346,
                          "decorators": [],
                          "name": "Instance",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 346,
                          "end": 352,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 347,
                              "end": 351,
                              "typeName": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 351,
                                "decorators": [],
                                "name": "Data",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
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
      "start": 358,
      "end": 496,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 495,
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
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 373,
              "decorators": [],
              "name": "Moon",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 384,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 386,
                      "end": 397,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 388,
                          "end": 395,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 391,
                            "decorators": [],
                            "name": "msg",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 393,
                            "end": 395,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 403,
                    "end": 491,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 409,
                      "end": 491,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 412,
                        "end": 491,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 422,
                            "end": 450,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 428,
                                "end": 449,
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
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
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
                                  "body": {
                                    "type": "Identifier",
                                    "start": 448,
                                    "end": 449,
                                    "decorators": [],
                                    "name": "x",
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
                            "type": "ReturnStatement",
                            "start": 459,
                            "end": 485,
                            "argument": {
                              "type": "CallExpression",
                              "start": 466,
                              "end": 484,
                              "callee": {
                                "type": "Identifier",
                                "start": 466,
                                "end": 467,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "start": 468,
                                  "end": 483,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 468,
                                    "end": 476,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 476,
                                      "decorators": [],
                                      "name": "get",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 477,
                                      "end": 482,
                                      "value": "msg",
                                      "raw": "\"msg\""
                                    }
                                  ],
                                  "optional": false
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
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
