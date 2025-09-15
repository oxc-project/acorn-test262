__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 48,
                      "end": 54
                    },
                    "start": 46,
                    "end": 54
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 45,
                  "end": 55
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 69
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
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 93,
                            "end": 94
                          },
                          "start": 86,
                          "end": 95
                        }
                      ],
                      "start": 72,
                      "end": 105
                    },
                    "expression": false,
                    "start": 69,
                    "end": 105
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 64,
                  "end": 105
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 121
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 123,
                      "end": 126
                    },
                    "expression": false,
                    "start": 119,
                    "end": 126
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 114,
                  "end": 126
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 137
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
                            "type": "ThisExpression",
                            "start": 149,
                            "end": 153
                          },
                          "start": 142,
                          "end": 154
                        }
                      ],
                      "start": 140,
                      "end": 156
                    },
                    "expression": false,
                    "start": 137,
                    "end": 156
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 135,
                  "end": 156
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 176
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            },
                            "start": 185,
                            "end": 193
                          },
                          "start": 184,
                          "end": 193
                        },
                        "readonly": false,
                        "static": false,
                        "start": 177,
                        "end": 193
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 206,
                              "end": 212
                            },
                            "start": 204,
                            "end": 212
                          },
                          "start": 203,
                          "end": 212
                        },
                        "readonly": false,
                        "static": false,
                        "start": 195,
                        "end": 212
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 214,
                      "end": 217
                    },
                    "expression": false,
                    "start": 176,
                    "end": 217
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 165,
                  "end": 217
                }
              ],
              "start": 35,
              "end": 223
            },
            "abstract": false,
            "declare": false,
            "start": 27,
            "end": 223
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 243,
                      "end": 244
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 246,
                      "end": 247
                    }
                  ],
                  "start": 237,
                  "end": 248
                },
                "definite": false,
                "start": 233,
                "end": 248
              }
            ],
            "declare": false,
            "start": 229,
            "end": 249
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 259
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 266
                    },
                    "optional": false,
                    "computed": false,
                    "start": 262,
                    "end": 266
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 262,
                  "end": 268
                },
                "definite": false,
                "start": 258,
                "end": 268
              }
            ],
            "declare": false,
            "start": 254,
            "end": 269
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 280
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 286
                  },
                  "optional": false,
                  "computed": false,
                  "start": 283,
                  "end": 286
                },
                "definite": false,
                "start": 278,
                "end": 286
              }
            ],
            "declare": false,
            "start": 274,
            "end": 287
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 298
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 304
                  },
                  "optional": false,
                  "computed": false,
                  "start": 301,
                  "end": 304
                },
                "definite": false,
                "start": 296,
                "end": 304
              }
            ],
            "declare": false,
            "start": 292,
            "end": 305
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "optional": false,
                "computed": false,
                "start": 310,
                "end": 313
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 316,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "directive": null,
            "start": 310,
            "end": 318
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 329
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 333
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 335
                    },
                    "optional": false,
                    "computed": false,
                    "start": 332,
                    "end": 335
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 332,
                  "end": 337
                },
                "definite": false,
                "start": 327,
                "end": 337
              }
            ],
            "declare": false,
            "start": 323,
            "end": 338
          }
        ],
        "start": 21,
        "end": 350
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 350
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 369
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
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
                    "start": 384,
                    "end": 385
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 384,
                  "end": 385
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 386,
                  "end": 387
                }
              ],
              "start": 383,
              "end": 388
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 400
                  },
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
                        "start": 402,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 402,
                      "end": 403
                    },
                    "start": 400,
                    "end": 403
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 399,
                  "end": 404
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
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
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 442,
                            "end": 446
                          },
                          "start": 435,
                          "end": 447
                        }
                      ],
                      "start": 421,
                      "end": 457
                    },
                    "expression": false,
                    "start": 418,
                    "end": 457
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 413,
                  "end": 457
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 471
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 476
                            },
                            "typeArguments": null,
                            "start": 475,
                            "end": 476
                          },
                          "start": 473,
                          "end": 476
                        },
                        "start": 472,
                        "end": 476
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 478,
                      "end": 481
                    },
                    "expression": false,
                    "start": 471,
                    "end": 481
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 466,
                  "end": 481
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 492
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
                            "type": "ThisExpression",
                            "start": 504,
                            "end": 508
                          },
                          "start": 497,
                          "end": 509
                        }
                      ],
                      "start": 495,
                      "end": 511
                    },
                    "expression": false,
                    "start": 492,
                    "end": 511
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 490,
                  "end": 511
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 531
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
                          "name": "a",
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
                                "start": 542,
                                "end": 543
                              },
                              "typeArguments": null,
                              "start": 542,
                              "end": 543
                            },
                            "start": 540,
                            "end": 543
                          },
                          "start": 539,
                          "end": 543
                        },
                        "readonly": false,
                        "static": false,
                        "start": 532,
                        "end": 543
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 556,
                                "end": 557
                              },
                              "typeArguments": null,
                              "start": 556,
                              "end": 557
                            },
                            "start": 554,
                            "end": 557
                          },
                          "start": 553,
                          "end": 557
                        },
                        "readonly": false,
                        "static": false,
                        "start": 545,
                        "end": 557
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 559,
                      "end": 562
                    },
                    "expression": false,
                    "start": 531,
                    "end": 562
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 520,
                  "end": 562
                }
              ],
              "start": 389,
              "end": 568
            },
            "abstract": false,
            "declare": false,
            "start": 376,
            "end": 568
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 586,
                    "end": 587
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 588,
                      "end": 589
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 591,
                      "end": 593
                    }
                  ],
                  "start": 582,
                  "end": 594
                },
                "definite": false,
                "start": 578,
                "end": 594
              }
            ],
            "declare": false,
            "start": 574,
            "end": 595
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 608,
                      "end": 609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 612
                    },
                    "optional": false,
                    "computed": false,
                    "start": 608,
                    "end": 612
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 608,
                  "end": 614
                },
                "definite": false,
                "start": 604,
                "end": 614
              }
            ],
            "declare": false,
            "start": 600,
            "end": 615
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 626
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 630
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 631,
                    "end": 632
                  },
                  "optional": false,
                  "computed": false,
                  "start": 629,
                  "end": 632
                },
                "definite": false,
                "start": 624,
                "end": 632
              }
            ],
            "declare": false,
            "start": 620,
            "end": 633
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 644
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "optional": false,
                  "computed": false,
                  "start": 647,
                  "end": 650
                },
                "definite": false,
                "start": 642,
                "end": 650
              }
            ],
            "declare": false,
            "start": 638,
            "end": 651
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 657
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 659
                },
                "optional": false,
                "computed": false,
                "start": 656,
                "end": 659
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 662,
                "end": 664
              },
              "start": 656,
              "end": 664
            },
            "directive": null,
            "start": 656,
            "end": 665
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 676
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 680
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 682
                    },
                    "optional": false,
                    "computed": false,
                    "start": 679,
                    "end": 682
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 679,
                  "end": 684
                },
                "definite": false,
                "start": 674,
                "end": 684
              }
            ],
            "declare": false,
            "start": 670,
            "end": 685
          }
        ],
        "start": 370,
        "end": 696
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 352,
      "end": 696
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 696
}
```
