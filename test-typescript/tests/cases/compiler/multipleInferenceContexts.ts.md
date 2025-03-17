__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 23,
        "name": "ConstructorOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Data",
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
              "name": "ComponentOptionsProperties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "Data",
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
            "type": "TSTypeReference",
            "start": 77,
            "end": 101,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "name": "ThisType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "Instance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "Data",
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
        "name": "ComponentOptionsProperties",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "Data",
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
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "Data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Instance",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "Data",
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
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "Data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "name",
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
                      "name": "K",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 355,
            "name": "Moon",
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
                            "name": "Data",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 301,
                        "end": 335,
                        "name": "options",
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
                              "name": "ConstructorOptions",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                    "name": "Data",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        },
                        "decorators": [],
                        "optional": true
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
                          "name": "Instance",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "Data",
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
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 369,
            "end": 495,
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 373,
              "name": "Moon",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 384,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 391,
                            "name": "msg",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 393,
                            "end": 395,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 403,
                    "end": 491,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "name": "render",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 409,
                      "end": 491,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 428,
                                  "end": 429,
                                  "name": "h",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 432,
                                  "end": 449,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 433,
                                      "end": 443,
                                      "name": "x",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 434,
                                        "end": 443,
                                        "typeAnnotation": {
                                          "type": "TSUnknownKeyword",
                                          "start": 436,
                                          "end": 443
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "Identifier",
                                    "start": 448,
                                    "end": 449,
                                    "name": "x",
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
                                "name": "h",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                      "name": "get",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 477,
                                      "end": 482,
                                      "value": "msg",
                                      "raw": "\"msg\""
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
