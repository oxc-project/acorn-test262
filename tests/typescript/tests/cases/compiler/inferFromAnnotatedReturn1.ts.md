__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 36
                      },
                      "typeArguments": null,
                      "start": 35,
                      "end": 36
                    },
                    "start": 33,
                    "end": 36
                  },
                  "start": 30,
                  "end": 36
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 42
                  },
                  "typeArguments": null,
                  "start": 41,
                  "end": 42
                },
                "start": 38,
                "end": 42
              },
              "start": 29,
              "end": 42
            },
            "start": 27,
            "end": 42
          },
          "start": 25,
          "end": 42
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "typeArguments": null,
          "start": 45,
          "end": 46
        },
        "start": 43,
        "end": 46
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 47
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
            "name": "res1",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 59
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 71
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 74,
                    "end": 80
                  },
                  "start": 72,
                  "end": 80
                },
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 84,
                  "end": 85
                },
                "id": null,
                "generator": false,
                "start": 67,
                "end": 85
              }
            ],
            "optional": false,
            "start": 62,
            "end": 86
          },
          "definite": false,
          "start": 55,
          "end": 86
        }
      ],
      "declare": false,
      "start": 49,
      "end": 87
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
            "name": "res2",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 104
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 116
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 119,
                    "end": 125
                  },
                  "start": 117,
                  "end": 125
                },
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 129,
                  "end": 134
                },
                "id": null,
                "generator": false,
                "start": 112,
                "end": 134
              }
            ],
            "optional": false,
            "start": 107,
            "end": 135
          },
          "definite": false,
          "start": 100,
          "end": 135
        }
      ],
      "declare": false,
      "start": 94,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "linkedSignal",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 183
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 184,
              "end": 185
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 188
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 187,
              "end": 188
            }
          ],
          "start": 183,
          "end": 189
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 209
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 217,
                              "end": 218
                            },
                            "typeArguments": null,
                            "start": 217,
                            "end": 218
                          },
                          "start": 214,
                          "end": 218
                        },
                        "start": 211,
                        "end": 218
                      },
                      "start": 209,
                      "end": 218
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 203,
                    "end": 219
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "computation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 233
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "source",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "NoInfer",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 244,
                                  "end": 251
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "D",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 252,
                                        "end": 253
                                      },
                                      "typeArguments": null,
                                      "start": 252,
                                      "end": 253
                                    }
                                  ],
                                  "start": 251,
                                  "end": 254
                                },
                                "start": 244,
                                "end": 254
                              },
                              "start": 242,
                              "end": 254
                            },
                            "start": 236,
                            "end": 254
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 259,
                              "end": 260
                            },
                            "typeArguments": null,
                            "start": 259,
                            "end": 260
                          },
                          "start": 256,
                          "end": 260
                        },
                        "start": 235,
                        "end": 260
                      },
                      "start": 233,
                      "end": 260
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 222,
                    "end": 261
                  }
                ],
                "start": 199,
                "end": 263
              },
              "start": 197,
              "end": 263
            },
            "start": 190,
            "end": 263
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "typeArguments": null,
            "start": 266,
            "end": 267
          },
          "start": 264,
          "end": 267
        },
        "body": null,
        "expression": false,
        "start": 154,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 147,
      "end": 268
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
            "name": "signal",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "linkedSignal",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 297
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
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 308
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 316,
                        "end": 317
                      },
                      "id": null,
                      "generator": false,
                      "start": 310,
                      "end": 317
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 302,
                    "end": 317
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "computation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 332
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 336
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 339,
                          "end": 345
                        },
                        "start": 337,
                        "end": 345
                      },
                      "body": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 349,
                        "end": 350
                      },
                      "id": null,
                      "generator": false,
                      "start": 334,
                      "end": 350
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 321,
                    "end": 350
                  }
                ],
                "start": 298,
                "end": 353
              }
            ],
            "optional": false,
            "start": 285,
            "end": 354
          },
          "definite": false,
          "start": 276,
          "end": 354
        }
      ],
      "declare": false,
      "start": 270,
      "end": 355
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 366
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 367,
            "end": 368
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 371
          }
        ],
        "start": 366,
        "end": 372
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 388
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 406,
                                  "end": 407
                                },
                                "typeArguments": null,
                                "start": 406,
                                "end": 407
                              },
                              "start": 404,
                              "end": 407
                            },
                            "start": 403,
                            "end": 407
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 414,
                                      "end": 415
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 417,
                                        "end": 423
                                      },
                                      "start": 415,
                                      "end": 423
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 414,
                                    "end": 424
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 425,
                                      "end": 430
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "NoInfer",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 432,
                                          "end": 439
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "R",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 440,
                                                "end": 441
                                              },
                                              "typeArguments": null,
                                              "start": 440,
                                              "end": 441
                                            }
                                          ],
                                          "start": 439,
                                          "end": 442
                                        },
                                        "start": 432,
                                        "end": 442
                                      },
                                      "start": 430,
                                      "end": 442
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 425,
                                    "end": 442
                                  }
                                ],
                                "start": 412,
                                "end": 444
                              },
                              "start": 410,
                              "end": 444
                            },
                            "start": 409,
                            "end": 444
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 449,
                              "end": 450
                            },
                            "typeArguments": null,
                            "start": 449,
                            "end": 450
                          },
                          "start": 446,
                          "end": 450
                        },
                        "start": 402,
                        "end": 450
                      },
                      "start": 400,
                      "end": 450
                    },
                    "start": 398,
                    "end": 450
                  },
                  "readonly": true,
                  "static": false,
                  "start": 389,
                  "end": 450
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 452,
                "end": 454
              },
              "expression": false,
              "start": 388,
              "end": 454
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 377,
            "end": 454
          }
        ],
        "start": 373,
        "end": 456
      },
      "abstract": false,
      "declare": false,
      "start": 357,
      "end": 456
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
            "name": "_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 466
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 476
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 484,
                        "end": 490
                      },
                      "start": 482,
                      "end": 490
                    },
                    "start": 478,
                    "end": 490
                  },
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 495
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 495
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 494,
                        "end": 495
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 497
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 502,
                          "end": 506
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 508,
                            "end": 514
                          },
                          "start": 506,
                          "end": 514
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 502,
                        "end": 515
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 517
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 519,
                            "end": 525
                          },
                          "start": 517,
                          "end": 525
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 516,
                        "end": 525
                      }
                    ],
                    "start": 500,
                    "end": 527
                  },
                  "start": 498,
                  "end": 527
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 540
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 540
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 536,
                      "end": 540
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 545
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 545
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 544,
                      "end": 545
                    }
                  ],
                  "start": 532,
                  "end": 548
                },
                "id": null,
                "generator": false,
                "start": 477,
                "end": 549
              }
            ],
            "start": 469,
            "end": 550
          },
          "definite": false,
          "start": 464,
          "end": 550
        }
      ],
      "declare": false,
      "start": 458,
      "end": 551
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
