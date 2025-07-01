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
        "name": "Equals",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 33
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 35
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 33,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
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
                  "start": 44,
                  "end": 45
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 44,
                "end": 45
              }
            ],
            "start": 43,
            "end": 46
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": null,
                "start": 52,
                "end": 53
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "typeArguments": null,
                "start": 62,
                "end": 63
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 66,
                  "end": 67
                },
                "start": 66,
                "end": 67
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 70,
                  "end": 71
                },
                "start": 70,
                "end": 71
              },
              "start": 52,
              "end": 71
            },
            "start": 49,
            "end": 71
          },
          "start": 43,
          "end": 71
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                  "start": 83,
                  "end": 84
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 83,
                "end": 84
              }
            ],
            "start": 82,
            "end": 85
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 102
                },
                "typeArguments": null,
                "start": 101,
                "end": 102
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 105,
                  "end": 106
                },
                "start": 105,
                "end": 106
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 109,
                  "end": 110
                },
                "start": 109,
                "end": 110
              },
              "start": 91,
              "end": 110
            },
            "start": 88,
            "end": 110
          },
          "start": 82,
          "end": 110
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 114,
            "end": 118
          },
          "start": 114,
          "end": 118
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 121,
            "end": 126
          },
          "start": 121,
          "end": 126
        },
        "start": 42,
        "end": 126
      },
      "declare": false,
      "start": 22,
      "end": 127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 148
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 149,
            "end": 157
          }
        ],
        "start": 148,
        "end": 158
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
              "name": "_context",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 183
                },
                "typeArguments": null,
                "start": 175,
                "end": 183
              },
              "start": 173,
              "end": 183
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
            "start": 165,
            "end": 184
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_value",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
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
            "start": 189,
            "end": 204
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "matches",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 216
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "TSV",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 220
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 229,
                      "end": 235
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 217,
                    "end": 235
                  }
                ],
                "start": 216,
                "end": 236
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stateValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSV",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 252
                      },
                      "typeArguments": null,
                      "start": 249,
                      "end": 252
                    },
                    "start": 247,
                    "end": 252
                  },
                  "start": 237,
                  "end": 252
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 255,
                    "end": 259
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 268
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TContext",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 269,
                                  "end": 277
                                },
                                "typeArguments": null,
                                "start": 269,
                                "end": 277
                              }
                            ],
                            "start": 268,
                            "end": 278
                          },
                          "start": 263,
                          "end": 278
                        },
                        {
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
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 283,
                                "end": 288
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TSV",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 290,
                                    "end": 293
                                  },
                                  "typeArguments": null,
                                  "start": 290,
                                  "end": 293
                                },
                                "start": 288,
                                "end": 293
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 283,
                              "end": 293
                            }
                          ],
                          "start": 281,
                          "end": 295
                        }
                      ],
                      "start": 263,
                      "end": 295
                    },
                    "start": 263,
                    "end": 295
                  },
                  "start": 255,
                  "end": 295
                },
                "start": 253,
                "end": 295
              },
              "body": null,
              "expression": false,
              "start": 216,
              "end": 296
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 209,
            "end": 296
          }
        ],
        "start": 159,
        "end": 298
      },
      "abstract": false,
      "declare": true,
      "start": 129,
      "end": 298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 311
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 324
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 330
                        },
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
                        "accessibility": null,
                        "static": false,
                        "start": 327,
                        "end": 338
                      }
                    ],
                    "start": 325,
                    "end": 340
                  }
                ],
                "start": 324,
                "end": 341
              },
              "start": 319,
              "end": 341
            },
            "start": 317,
            "end": 341
          },
          "start": 312,
          "end": 341
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
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 358
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "matches",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 353,
                  "end": 366
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 367,
                    "end": 370
                  }
                ],
                "optional": false,
                "start": 353,
                "end": 371
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 380
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "matches",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 388
                  },
                  "optional": false,
                  "computed": false,
                  "start": 375,
                  "end": 388
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a.b",
                    "raw": "'a.b'",
                    "start": 389,
                    "end": 394
                  }
                ],
                "optional": false,
                "start": 375,
                "end": 395
              },
              "start": 353,
              "end": 395
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 412
                  },
                  "directive": null,
                  "start": 407,
                  "end": 413
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 439
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 448
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 461
                          },
                          "typeArguments": null,
                          "start": 449,
                          "end": 461
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 463,
                          "end": 468
                        }
                      ],
                      "start": 448,
                      "end": 469
                    },
                    "start": 442,
                    "end": 469
                  },
                  "declare": false,
                  "start": 432,
                  "end": 470
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 495
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 504
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 505,
                          "end": 510
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 512,
                          "end": 517
                        }
                      ],
                      "start": 504,
                      "end": 518
                    },
                    "start": 498,
                    "end": 518
                  },
                  "declare": false,
                  "start": 488,
                  "end": 519
                }
              ],
              "start": 397,
              "end": 534
            },
            "alternate": null,
            "start": 349,
            "end": 534
          }
        ],
        "start": 343,
        "end": 536
      },
      "expression": false,
      "start": 300,
      "end": 536
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 536
}
```
