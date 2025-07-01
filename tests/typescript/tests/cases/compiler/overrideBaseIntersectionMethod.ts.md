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
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 38
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
              "start": 39,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 38,
        "end": 41
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 56
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 58,
                  "end": 61
                },
                "start": 58,
                "end": 63
              },
              "start": 56,
              "end": 63
            },
            "value": null,
            "start": 49,
            "end": 63
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
              "start": 68,
              "end": 69
            },
            "typeArguments": null,
            "start": 68,
            "end": 69
          },
          "start": 65,
          "end": 69
        },
        "start": 44,
        "end": 69
      },
      "declare": false,
      "start": 22,
      "end": 70
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
            "name": "WithLocation",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 90
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 94,
                    "end": 95
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 115
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 121
                          },
                          "typeArguments": null,
                          "start": 116,
                          "end": 121
                        }
                      ],
                      "start": 115,
                      "end": 122
                    },
                    "start": 104,
                    "end": 122
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 94,
                  "end": 122
                }
              ],
              "start": 93,
              "end": 123
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
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
                      "start": 130,
                      "end": 131
                    },
                    "typeArguments": null,
                    "start": 130,
                    "end": 131
                  },
                  "start": 128,
                  "end": 131
                },
                "start": 124,
                "end": 131
              }
            ],
            "returnType": null,
            "body": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 154
              },
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
                      "name": "getLocation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 170
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 175,
                              "end": 181
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 183,
                              "end": 189
                            }
                          ],
                          "start": 174,
                          "end": 190
                        },
                        "start": 172,
                        "end": 190
                      },
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
                                  "type": "ArrayPattern",
                                  "decorators": [],
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 204,
                                      "end": 205
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 206,
                                      "end": 207
                                    }
                                  ],
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 203,
                                  "end": 208
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Super",
                                      "start": 211,
                                      "end": 216
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "getLocation",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 217,
                                      "end": 228
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 211,
                                    "end": 228
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 211,
                                  "end": 230
                                },
                                "definite": false,
                                "start": 203,
                                "end": 230
                              }
                            ],
                            "declare": false,
                            "start": 197,
                            "end": 231
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 244,
                                      "end": 248
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 249,
                                      "end": 250
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 244,
                                    "end": 250
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 253,
                                    "end": 254
                                  },
                                  "start": 244,
                                  "end": 254
                                },
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 256,
                                      "end": 260
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 261,
                                      "end": 262
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 256,
                                    "end": 262
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 265,
                                    "end": 266
                                  },
                                  "start": 256,
                                  "end": 266
                                }
                              ],
                              "start": 243,
                              "end": 267
                            },
                            "start": 236,
                            "end": 268
                          }
                        ],
                        "start": 191,
                        "end": 272
                      },
                      "expression": false,
                      "start": 170,
                      "end": 272
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 159,
                    "end": 272
                  }
                ],
                "start": 155,
                "end": 274
              },
              "abstract": false,
              "declare": false,
              "start": 136,
              "end": 274
            },
            "id": null,
            "generator": false,
            "start": 93,
            "end": 274
          },
          "definite": false,
          "start": 78,
          "end": 274
        }
      ],
      "declare": false,
      "start": 72,
      "end": 274
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 287
      },
      "typeParameters": null,
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
              "start": 292,
              "end": 303
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      },
                      "start": 312,
                      "end": 320
                    },
                    "start": 311,
                    "end": 320
                  },
                  "readonly": false,
                  "static": false,
                  "start": 304,
                  "end": 320
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 332,
                        "end": 338
                      },
                      "start": 330,
                      "end": 338
                    },
                    "start": 329,
                    "end": 338
                  },
                  "readonly": false,
                  "static": false,
                  "start": 322,
                  "end": 338
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 340,
                "end": 343
              },
              "expression": false,
              "start": 303,
              "end": 343
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 292,
            "end": 343
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getLocation",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 357
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 362,
                      "end": 368
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 370,
                      "end": 376
                    }
                  ],
                  "start": 361,
                  "end": 377
                },
                "start": 359,
                "end": 377
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 392,
                          "end": 393
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 394,
                          "end": 395
                        }
                      ],
                      "start": 391,
                      "end": 396
                    },
                    "start": 384,
                    "end": 397
                  }
                ],
                "start": 378,
                "end": 401
              },
              "expression": false,
              "start": 357,
              "end": 401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 346,
            "end": 401
          }
        ],
        "start": 288,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 276,
      "end": 403
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
        "start": 411,
        "end": 414
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithLocation",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 435
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 441
          }
        ],
        "optional": false,
        "start": 423,
        "end": 442
      },
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
              "name": "calculate",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 456
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 472,
                          "end": 476
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 478
                        },
                        "optional": false,
                        "computed": false,
                        "start": 472,
                        "end": 478
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 481,
                          "end": 485
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 486,
                          "end": 487
                        },
                        "optional": false,
                        "computed": false,
                        "start": 481,
                        "end": 487
                      },
                      "start": 472,
                      "end": 487
                    },
                    "start": 465,
                    "end": 488
                  }
                ],
                "start": 459,
                "end": 492
              },
              "expression": false,
              "start": 456,
              "end": 492
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 447,
            "end": 492
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getLocation",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 506
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 522,
                          "end": 527
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getLocation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 539
                        },
                        "optional": false,
                        "computed": false,
                        "start": 522,
                        "end": 539
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 522,
                      "end": 541
                    },
                    "start": 515,
                    "end": 541
                  }
                ],
                "start": 509,
                "end": 545
              },
              "expression": false,
              "start": 506,
              "end": 545
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 495,
            "end": 545
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "whereAmI",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 556
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 572,
                          "end": 576
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getLocation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 577,
                          "end": 588
                        },
                        "optional": false,
                        "computed": false,
                        "start": 572,
                        "end": 588
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 572,
                      "end": 590
                    },
                    "start": 565,
                    "end": 591
                  }
                ],
                "start": 559,
                "end": 595
              },
              "expression": false,
              "start": 556,
              "end": 595
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 548,
            "end": 595
          }
        ],
        "start": 443,
        "end": 597
      },
      "abstract": false,
      "declare": false,
      "start": 405,
      "end": 597
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 597
}
```
