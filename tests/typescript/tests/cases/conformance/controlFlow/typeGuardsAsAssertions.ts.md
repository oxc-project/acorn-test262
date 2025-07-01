__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "start": 25,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 38
        }
      ],
      "declare": false,
      "start": 21,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Optional",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 61
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 62,
              "end": 63
            }
          ],
          "start": 61,
          "end": 64
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Some",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 71
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "typeArguments": null,
                    "start": 72,
                    "end": 73
                  }
                ],
                "start": 71,
                "end": 74
              },
              "start": 67,
              "end": 74
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "None",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 81
              },
              "typeArguments": null,
              "start": 77,
              "end": 81
            }
          ],
          "start": 67,
          "end": 81
        },
        "declare": false,
        "start": 48,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 41,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "None",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 105
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "none",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 121
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 123,
                  "end": 129
                },
                "start": 121,
                "end": 129
              },
              "accessibility": null,
              "static": false,
              "start": 108,
              "end": 130
            }
          ],
          "start": 106,
          "end": 132
        },
        "declare": false,
        "start": 91,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 84,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Some",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 154
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 155,
              "end": 156
            }
          ],
          "start": 154,
          "end": 157
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 173
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 175,
                  "end": 176
                },
                "start": 173,
                "end": 176
              },
              "accessibility": null,
              "static": false,
              "start": 160,
              "end": 177
            }
          ],
          "start": 158,
          "end": 179
        },
        "declare": false,
        "start": 140,
        "end": 179
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 133,
      "end": 179
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "none",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "None",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 205
                  },
                  "typeArguments": null,
                  "start": 201,
                  "end": 205
                },
                "start": 199,
                "end": 205
              },
              "start": 194,
              "end": 205
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "none",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 214
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 216,
                    "end": 218
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 210,
                  "end": 218
                }
              ],
              "start": 208,
              "end": 220
            },
            "definite": false,
            "start": 194,
            "end": 220
          }
        ],
        "declare": false,
        "start": 188,
        "end": 221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isSome",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 245
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 246,
              "end": 247
            }
          ],
          "start": 245,
          "end": 248
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    }
                  ],
                  "start": 264,
                  "end": 267
                },
                "start": 256,
                "end": 267
              },
              "start": 254,
              "end": 267
            },
            "start": 249,
            "end": 267
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 275
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Some",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 283
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 285
                      },
                      "typeArguments": null,
                      "start": 284,
                      "end": 285
                    }
                  ],
                  "start": 283,
                  "end": 286
                },
                "start": 279,
                "end": 286
              },
              "start": 279,
              "end": 286
            },
            "start": 270,
            "end": 286
          },
          "start": 268,
          "end": 286
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "'some'",
                  "start": 300,
                  "end": 306
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 315
                },
                "start": 300,
                "end": 315
              },
              "start": 293,
              "end": 316
            }
          ],
          "start": 287,
          "end": 318
        },
        "expression": false,
        "start": 230,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 337
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 338,
            "end": 339
          }
        ],
        "start": 337,
        "end": 340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "some",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 348
              },
              "typeArguments": null,
              "start": 347,
              "end": 348
            },
            "start": 345,
            "end": 348
          },
          "start": 341,
          "end": 348
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 369
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 369
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 365,
                  "end": 369
                }
              ],
              "start": 363,
              "end": 371
            },
            "start": 356,
            "end": 372
          }
        ],
        "start": 350,
        "end": 374
      },
      "expression": false,
      "start": 320,
      "end": 374
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 394
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 395,
              "end": 396
            }
          ],
          "start": 394,
          "end": 397
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSome",
            "optional": false,
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
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 415
                    },
                    "typeArguments": null,
                    "start": 414,
                    "end": 415
                  },
                  "start": 411,
                  "end": 415
                },
                "start": 408,
                "end": 415
              },
              "start": 406,
              "end": 415
            },
            "start": 398,
            "end": 415
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 418,
            "end": 422
          },
          "start": 416,
          "end": 422
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 449
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "r",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 450,
                                "end": 451
                              },
                              "typeArguments": null,
                              "start": 450,
                              "end": 451
                            }
                          ],
                          "start": 449,
                          "end": 452
                        },
                        "start": 441,
                        "end": 452
                      },
                      "start": 439,
                      "end": 452
                    },
                    "start": 433,
                    "end": 452
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "none",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 459
                  },
                  "definite": false,
                  "start": 433,
                  "end": 459
                }
              ],
              "declare": false,
              "start": 429,
              "end": 460
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 471
              },
              "directive": null,
              "start": 465,
              "end": 472
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 497
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 515
                    },
                    "directive": null,
                    "start": 509,
                    "end": 516
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 550
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFrom",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 561
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isSome",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 562,
                                "end": 568
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 569,
                                  "end": 575
                                }
                              ],
                              "optional": false,
                              "start": 562,
                              "end": 576
                            },
                            "consequent": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 579,
                                "end": 585
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "some",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 586,
                                "end": 590
                              },
                              "optional": false,
                              "computed": false,
                              "start": 579,
                              "end": 590
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "makeSome",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 593,
                                "end": 601
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 593,
                              "end": 603
                            },
                            "start": 562,
                            "end": 603
                          }
                        ],
                        "optional": false,
                        "start": 553,
                        "end": 604
                      },
                      "start": 544,
                      "end": 604
                    },
                    "directive": null,
                    "start": 544,
                    "end": 605
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 620
                    },
                    "directive": null,
                    "start": 614,
                    "end": 621
                  }
                ],
                "start": 499,
                "end": 639
              },
              "start": 486,
              "end": 639
            }
          ],
          "start": 423,
          "end": 641
        },
        "expression": false,
        "start": 383,
        "end": 641
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 376,
      "end": 641
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 656
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 672,
                          "end": 678
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 681,
                          "end": 687
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 690,
                          "end": 697
                        }
                      ],
                      "start": 672,
                      "end": 697
                    },
                    "start": 670,
                    "end": 697
                  },
                  "start": 669,
                  "end": 697
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 700,
                  "end": 701
                },
                "definite": false,
                "start": 669,
                "end": 701
              }
            ],
            "declare": false,
            "start": 665,
            "end": 702
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 708
            },
            "directive": null,
            "start": 707,
            "end": 709
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 736
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 748,
                    "end": 749
                  },
                  "directive": null,
                  "start": 748,
                  "end": 750
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 792,
                      "end": 793
                    },
                    "right": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 804
                          },
                          "prefix": true,
                          "start": 796,
                          "end": 804
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 809,
                          "end": 817
                        },
                        "start": 796,
                        "end": 817
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 820,
                            "end": 821
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 822,
                            "end": 827
                          },
                          "optional": false,
                          "computed": false,
                          "start": 820,
                          "end": 827
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 820,
                        "end": 829
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "\"abc\"",
                        "start": 832,
                        "end": 837
                      },
                      "start": 796,
                      "end": 837
                    },
                    "start": 792,
                    "end": 837
                  },
                  "directive": null,
                  "start": 792,
                  "end": 838
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 848
                  },
                  "directive": null,
                  "start": 847,
                  "end": 849
                }
              ],
              "start": 738,
              "end": 866
            },
            "start": 725,
            "end": 866
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 871,
              "end": 872
            },
            "directive": null,
            "start": 871,
            "end": 873
          }
        ],
        "start": 659,
        "end": 875
      },
      "expression": false,
      "start": 643,
      "end": 875
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 886,
        "end": 890
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 915,
                          "end": 921
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 924,
                          "end": 931
                        }
                      ],
                      "start": 906,
                      "end": 931
                    },
                    "start": 904,
                    "end": 931
                  },
                  "start": 903,
                  "end": 931
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 934,
                  "end": 935
                },
                "definite": false,
                "start": 903,
                "end": 935
              }
            ],
            "declare": false,
            "start": 899,
            "end": 936
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 942
            },
            "directive": null,
            "start": 941,
            "end": 943
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 970
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 983
                  },
                  "directive": null,
                  "start": 982,
                  "end": 984
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1037,
                        "end": 1038
                      },
                      "prefix": true,
                      "start": 1030,
                      "end": 1038
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1043,
                      "end": 1051
                    },
                    "start": 1030,
                    "end": 1051
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1067,
                            "end": 1068
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1071,
                                "end": 1072
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1073,
                                "end": 1078
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1071,
                              "end": 1078
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1071,
                            "end": 1080
                          },
                          "start": 1067,
                          "end": 1080
                        },
                        "directive": null,
                        "start": 1067,
                        "end": 1081
                      }
                    ],
                    "start": 1053,
                    "end": 1091
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1120
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 1123,
                            "end": 1128
                          },
                          "start": 1119,
                          "end": 1128
                        },
                        "directive": null,
                        "start": 1119,
                        "end": 1129
                      }
                    ],
                    "start": 1105,
                    "end": 1139
                  },
                  "start": 1026,
                  "end": 1139
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1148,
                    "end": 1149
                  },
                  "directive": null,
                  "start": 1148,
                  "end": 1150
                }
              ],
              "start": 972,
              "end": 1167
            },
            "start": 959,
            "end": 1167
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1173
            },
            "directive": null,
            "start": 1172,
            "end": 1174
          }
        ],
        "start": 893,
        "end": 1176
      },
      "expression": false,
      "start": 877,
      "end": 1176
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1217,
        "end": 1219
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1235,
                          "end": 1241
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1244,
                          "end": 1250
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1253,
                          "end": 1262
                        }
                      ],
                      "start": 1235,
                      "end": 1262
                    },
                    "start": 1233,
                    "end": 1262
                  },
                  "start": 1232,
                  "end": 1262
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1265,
                  "end": 1274
                },
                "definite": false,
                "start": 1232,
                "end": 1274
              }
            ],
            "declare": false,
            "start": 1228,
            "end": 1275
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1280,
              "end": 1281
            },
            "directive": null,
            "start": 1280,
            "end": 1282
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1306
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1318,
                    "end": 1319
                  },
                  "directive": null,
                  "start": 1318,
                  "end": 1320
                }
              ],
              "start": 1308,
              "end": 1367
            },
            "alternate": null,
            "start": 1301,
            "end": 1367
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1373
            },
            "directive": null,
            "start": 1372,
            "end": 1374
          }
        ],
        "start": 1222,
        "end": 1408
      },
      "expression": false,
      "start": 1208,
      "end": 1408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1419,
        "end": 1421
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1437,
                          "end": 1443
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1446,
                          "end": 1452
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1455,
                          "end": 1464
                        }
                      ],
                      "start": 1437,
                      "end": 1464
                    },
                    "start": 1435,
                    "end": 1464
                  },
                  "start": 1434,
                  "end": 1464
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1467,
                  "end": 1476
                },
                "definite": false,
                "start": 1434,
                "end": 1476
              }
            ],
            "declare": false,
            "start": 1430,
            "end": 1477
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1482,
              "end": 1483
            },
            "directive": null,
            "start": 1482,
            "end": 1484
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1514,
                  "end": 1515
                },
                "prefix": true,
                "start": 1507,
                "end": 1515
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1520,
                "end": 1528
              },
              "start": 1507,
              "end": 1528
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1540,
                    "end": 1541
                  },
                  "directive": null,
                  "start": 1540,
                  "end": 1542
                }
              ],
              "start": 1530,
              "end": 1580
            },
            "alternate": null,
            "start": 1503,
            "end": 1580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1586
            },
            "directive": null,
            "start": 1585,
            "end": 1587
          }
        ],
        "start": 1424,
        "end": 1612
      },
      "expression": false,
      "start": 1410,
      "end": 1612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1625
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1641,
                          "end": 1647
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1650,
                          "end": 1656
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1659,
                          "end": 1668
                        }
                      ],
                      "start": 1641,
                      "end": 1668
                    },
                    "start": 1639,
                    "end": 1668
                  },
                  "start": 1638,
                  "end": 1668
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1671,
                  "end": 1680
                },
                "definite": false,
                "start": 1638,
                "end": 1680
              }
            ],
            "declare": false,
            "start": 1634,
            "end": 1681
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1687
            },
            "directive": null,
            "start": 1686,
            "end": 1688
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1712,
                "end": 1713
              },
              "prefix": true,
              "start": 1711,
              "end": 1713
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1725,
                  "end": 1732
                }
              ],
              "start": 1715,
              "end": 1738
            },
            "alternate": null,
            "start": 1707,
            "end": 1738
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1743,
              "end": 1744
            },
            "directive": null,
            "start": 1743,
            "end": 1745
          }
        ],
        "start": 1628,
        "end": 1788
      },
      "expression": false,
      "start": 1614,
      "end": 1788
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1799,
        "end": 1801
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1817,
                          "end": 1823
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1826,
                          "end": 1832
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1835,
                          "end": 1844
                        }
                      ],
                      "start": 1817,
                      "end": 1844
                    },
                    "start": 1815,
                    "end": 1844
                  },
                  "start": 1814,
                  "end": 1844
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1847,
                  "end": 1856
                },
                "definite": false,
                "start": 1814,
                "end": 1856
              }
            ],
            "declare": false,
            "start": 1810,
            "end": 1857
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1863
            },
            "directive": null,
            "start": 1862,
            "end": 1864
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1894,
                  "end": 1895
                },
                "prefix": true,
                "start": 1887,
                "end": 1895
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 1900,
                "end": 1909
              },
              "start": 1887,
              "end": 1909
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1921,
                    "end": 1922
                  },
                  "directive": null,
                  "start": 1921,
                  "end": 1923
                }
              ],
              "start": 1911,
              "end": 1972
            },
            "alternate": null,
            "start": 1883,
            "end": 1972
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1977,
              "end": 1978
            },
            "directive": null,
            "start": 1977,
            "end": 1979
          }
        ],
        "start": 1804,
        "end": 1995
      },
      "expression": false,
      "start": 1790,
      "end": 1995
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2006,
        "end": 2008
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2012,
                  "end": 2018
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2021,
                  "end": 2027
                }
              ],
              "start": 2012,
              "end": 2027
            },
            "start": 2010,
            "end": 2027
          },
          "start": 2009,
          "end": 2027
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2046,
                    "end": 2047
                  },
                  "prefix": true,
                  "start": 2039,
                  "end": 2047
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 2052,
                  "end": 2060
                },
                "start": 2039,
                "end": 2060
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2072
                  },
                  "prefix": true,
                  "start": 2064,
                  "end": 2072
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 2077,
                  "end": 2085
                },
                "start": 2064,
                "end": 2085
              },
              "start": 2039,
              "end": 2085
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2097,
                    "end": 2098
                  },
                  "directive": null,
                  "start": 2097,
                  "end": 2099
                }
              ],
              "start": 2087,
              "end": 2137
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2157,
                    "end": 2158
                  },
                  "directive": null,
                  "start": 2157,
                  "end": 2159
                }
              ],
              "start": 2147,
              "end": 2185
            },
            "start": 2035,
            "end": 2185
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2190,
              "end": 2191
            },
            "directive": null,
            "start": 2190,
            "end": 2192
          }
        ],
        "start": 2029,
        "end": 2214
      },
      "expression": false,
      "start": 1997,
      "end": 2214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2225,
        "end": 2227
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2243,
                          "end": 2249
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2252,
                          "end": 2261
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 2264,
                          "end": 2268
                        }
                      ],
                      "start": 2243,
                      "end": 2268
                    },
                    "start": 2241,
                    "end": 2268
                  },
                  "start": 2240,
                  "end": 2268
                },
                "init": null,
                "definite": false,
                "start": 2240,
                "end": 2268
              }
            ],
            "declare": false,
            "start": 2236,
            "end": 2269
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2274,
                    "end": 2275
                  },
                  "start": 2274,
                  "end": 2276
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2277,
                  "end": 2282
                },
                "optional": false,
                "computed": false,
                "start": 2274,
                "end": 2282
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2274,
              "end": 2284
            },
            "directive": null,
            "start": 2274,
            "end": 2285
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2290,
                "end": 2291
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 2294,
                "end": 2296
              },
              "start": 2290,
              "end": 2296
            },
            "directive": null,
            "start": 2290,
            "end": 2297
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2302,
                    "end": 2303
                  },
                  "start": 2302,
                  "end": 2304
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2305,
                  "end": 2310
                },
                "optional": false,
                "computed": false,
                "start": 2302,
                "end": 2310
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2302,
              "end": 2312
            },
            "directive": null,
            "start": 2302,
            "end": 2313
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2318,
                "end": 2319
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2322,
                "end": 2331
              },
              "start": 2318,
              "end": 2331
            },
            "directive": null,
            "start": 2318,
            "end": 2332
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2337,
                    "end": 2338
                  },
                  "start": 2337,
                  "end": 2339
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2340,
                  "end": 2345
                },
                "optional": false,
                "computed": false,
                "start": 2337,
                "end": 2345
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2337,
              "end": 2347
            },
            "directive": null,
            "start": 2337,
            "end": 2348
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2353,
                "end": 2354
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2357,
                "end": 2361
              },
              "start": 2353,
              "end": 2361
            },
            "directive": null,
            "start": 2353,
            "end": 2362
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2367,
                    "end": 2368
                  },
                  "start": 2367,
                  "end": 2369
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2375
                },
                "optional": false,
                "computed": false,
                "start": 2367,
                "end": 2375
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2367,
              "end": 2377
            },
            "directive": null,
            "start": 2367,
            "end": 2378
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2383,
                "end": 2384
              },
              "right": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2388,
                      "end": 2397
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 2400,
                      "end": 2404
                    }
                  ],
                  "start": 2388,
                  "end": 2404
                },
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2405,
                  "end": 2414
                },
                "start": 2387,
                "end": 2414
              },
              "start": 2383,
              "end": 2414
            },
            "directive": null,
            "start": 2383,
            "end": 2415
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2420,
                    "end": 2421
                  },
                  "start": 2420,
                  "end": 2422
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2423,
                  "end": 2428
                },
                "optional": false,
                "computed": false,
                "start": 2420,
                "end": 2428
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2420,
              "end": 2430
            },
            "directive": null,
            "start": 2420,
            "end": 2431
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2437
              },
              "right": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2441,
                      "end": 2447
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2450,
                      "end": 2459
                    }
                  ],
                  "start": 2441,
                  "end": 2459
                },
                "expression": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 2460,
                  "end": 2462
                },
                "start": 2440,
                "end": 2462
              },
              "start": 2436,
              "end": 2462
            },
            "directive": null,
            "start": 2436,
            "end": 2463
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2468,
                    "end": 2469
                  },
                  "start": 2468,
                  "end": 2470
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2476
                },
                "optional": false,
                "computed": false,
                "start": 2468,
                "end": 2476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2468,
              "end": 2478
            },
            "directive": null,
            "start": 2468,
            "end": 2479
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2484,
                "end": 2485
              },
              "right": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2489,
                      "end": 2495
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 2498,
                      "end": 2502
                    }
                  ],
                  "start": 2489,
                  "end": 2502
                },
                "expression": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 2503,
                  "end": 2505
                },
                "start": 2488,
                "end": 2505
              },
              "start": 2484,
              "end": 2505
            },
            "directive": null,
            "start": 2484,
            "end": 2506
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2511,
                    "end": 2512
                  },
                  "start": 2511,
                  "end": 2513
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2514,
                  "end": 2519
                },
                "optional": false,
                "computed": false,
                "start": 2511,
                "end": 2519
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2511,
              "end": 2521
            },
            "directive": null,
            "start": 2511,
            "end": 2522
          }
        ],
        "start": 2230,
        "end": 2524
      },
      "expression": false,
      "start": 2216,
      "end": 2524
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2535,
        "end": 2537
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2553,
                      "end": 2559
                    },
                    "start": 2551,
                    "end": 2559
                  },
                  "start": 2550,
                  "end": 2559
                },
                "init": null,
                "definite": false,
                "start": 2550,
                "end": 2559
              }
            ],
            "declare": false,
            "start": 2546,
            "end": 2560
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2565,
                    "end": 2566
                  },
                  "start": 2565,
                  "end": 2567
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2568,
                  "end": 2573
                },
                "optional": false,
                "computed": false,
                "start": 2565,
                "end": 2573
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2565,
              "end": 2575
            },
            "directive": null,
            "start": 2565,
            "end": 2576
          }
        ],
        "start": 2540,
        "end": 2578
      },
      "expression": false,
      "start": 2526,
      "end": 2578
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 2578
}
```
