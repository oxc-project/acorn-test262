__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConstructorOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 23
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 28
          }
        ],
        "start": 23,
        "end": 29
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentOptionsProperties",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 64
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 69
                }
              ],
              "start": 64,
              "end": 70
            },
            "start": 38,
            "end": 70
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 85
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 94
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 99
                      }
                    ],
                    "start": 94,
                    "end": 100
                  },
                  "start": 86,
                  "end": 100
                }
              ],
              "start": 85,
              "end": 101
            },
            "start": 77,
            "end": 101
          }
        ],
        "start": 36,
        "end": 101
      },
      "declare": false,
      "start": 0,
      "end": 102
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptionsProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 140
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 145
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 141,
            "end": 145
          }
        ],
        "start": 140,
        "end": 146
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 157
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 163
                },
                "typeArguments": null,
                "start": 159,
                "end": 163
              },
              "start": 157,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 164
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 175
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 179,
                "end": 186
              },
              "start": 177,
              "end": 186
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 169,
            "end": 187
          }
        ],
        "start": 147,
        "end": 189
      },
      "declare": false,
      "start": 104,
      "end": 189
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 209
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 214
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 210,
            "end": 214
          }
        ],
        "start": 209,
        "end": 215
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 225
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 246
                      },
                      "typeArguments": null,
                      "start": 242,
                      "end": 246
                    },
                    "start": 236,
                    "end": 246
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 226,
                  "end": 246
                }
              ],
              "start": 225,
              "end": 247
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 254,
                    "end": 255
                  },
                  "start": 252,
                  "end": 255
                },
                "start": 248,
                "end": 255
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 258,
                "end": 265
              },
              "start": 256,
              "end": 265
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 222,
            "end": 266
          }
        ],
        "start": 216,
        "end": 268
      },
      "declare": false,
      "start": 191,
      "end": 268
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Moon",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 295,
                            "end": 299
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 295,
                          "end": 299
                        }
                      ],
                      "start": 294,
                      "end": 300
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ConstructorOptions",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 311,
                              "end": 329
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 330,
                                    "end": 334
                                  },
                                  "typeArguments": null,
                                  "start": 330,
                                  "end": 334
                                }
                              ],
                              "start": 329,
                              "end": 335
                            },
                            "start": 311,
                            "end": 335
                          },
                          "start": 309,
                          "end": 335
                        },
                        "start": 301,
                        "end": 335
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Instance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 346
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 347,
                                "end": 351
                              },
                              "typeArguments": null,
                              "start": 347,
                              "end": 351
                            }
                          ],
                          "start": 346,
                          "end": 352
                        },
                        "start": 338,
                        "end": 352
                      },
                      "start": 336,
                      "end": 352
                    },
                    "start": 294,
                    "end": 353
                  }
                ],
                "start": 288,
                "end": 355
              },
              "start": 286,
              "end": 355
            },
            "start": 282,
            "end": 355
          },
          "init": null,
          "definite": false,
          "start": 282,
          "end": 355
        }
      ],
      "declare": true,
      "start": 270,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 366
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Moon",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 373
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 380,
                      "end": 384
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "msg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 391
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 393,
                            "end": 395
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 388,
                          "end": 395
                        }
                      ],
                      "start": 386,
                      "end": 397
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 380,
                    "end": 397
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 409
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "h",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 428,
                                  "end": 429
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSUnknownKeyword",
                                          "start": 436,
                                          "end": 443
                                        },
                                        "start": 434,
                                        "end": 443
                                      },
                                      "start": 433,
                                      "end": 443
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 448,
                                    "end": 449
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 432,
                                  "end": 449
                                },
                                "definite": false,
                                "start": 428,
                                "end": 449
                              }
                            ],
                            "declare": false,
                            "start": 422,
                            "end": 450
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 466,
                                "end": 467
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "get",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 473,
                                      "end": 476
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 468,
                                    "end": 476
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "msg",
                                      "raw": "\"msg\"",
                                      "start": 477,
                                      "end": 482
                                    }
                                  ],
                                  "optional": false,
                                  "start": 468,
                                  "end": 483
                                }
                              ],
                              "optional": false,
                              "start": 466,
                              "end": 484
                            },
                            "start": 459,
                            "end": 485
                          }
                        ],
                        "start": 412,
                        "end": 491
                      },
                      "expression": false,
                      "start": 409,
                      "end": 491
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 403,
                    "end": 491
                  }
                ],
                "start": 374,
                "end": 494
              }
            ],
            "optional": false,
            "start": 369,
            "end": 495
          },
          "definite": false,
          "start": 364,
          "end": 495
        }
      ],
      "declare": false,
      "start": 358,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
