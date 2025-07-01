__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBaseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 18
          }
        ],
        "start": 15,
        "end": 19
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
              "start": 26,
              "end": 37
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 50
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 51,
                              "end": 53
                            },
                            "typeArguments": null,
                            "start": 51,
                            "end": 53
                          }
                        ],
                        "start": 50,
                        "end": 54
                      },
                      "start": 41,
                      "end": 54
                    },
                    "start": 39,
                    "end": 54
                  },
                  "start": 38,
                  "end": 54
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 56,
                "end": 59
              },
              "expression": false,
              "start": 37,
              "end": 59
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 26,
            "end": 59
          }
        ],
        "start": 20,
        "end": 61
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 74
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 77
          }
        ],
        "start": 74,
        "end": 78
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBaseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 96
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 107
                  },
                  "typeArguments": null,
                  "start": 105,
                  "end": 107
                }
              ],
              "start": 104,
              "end": 108
            },
            "start": 97,
            "end": 108
          }
        ],
        "start": 96,
        "end": 109
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 110,
        "end": 114
      },
      "abstract": false,
      "declare": false,
      "start": 63,
      "end": 114
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 131
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T4",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 134
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 132,
            "end": 134
          }
        ],
        "start": 131,
        "end": 135
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 148
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 154
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 154
                    },
                    "start": 150,
                    "end": 154
                  },
                  "start": 149,
                  "end": 154
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 156,
                "end": 159
              },
              "expression": false,
              "start": 148,
              "end": 159
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 159
          }
        ],
        "start": 136,
        "end": 161
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 161
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 176
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T5",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 179
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 177,
            "end": 179
          }
        ],
        "start": 176,
        "end": 180
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 199
                },
                "typeArguments": null,
                "start": 197,
                "end": 199
              },
              "start": 195,
              "end": 199
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
            "start": 187,
            "end": 200
          }
        ],
        "start": 181,
        "end": 202
      },
      "abstract": false,
      "declare": false,
      "start": 163,
      "end": 202
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 211
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 214
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 212,
            "end": 214
          }
        ],
        "start": 211,
        "end": 215
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 229
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 232
            },
            "typeArguments": null,
            "start": 230,
            "end": 232
          }
        ],
        "start": 229,
        "end": 233
      },
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
              "name": "works",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 252
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CBaseBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 278
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Wrapper",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 279,
                              "end": 286
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 287,
                                    "end": 289
                                  },
                                  "typeArguments": null,
                                  "start": 287,
                                  "end": 289
                                }
                              ],
                              "start": 286,
                              "end": 290
                            },
                            "start": 279,
                            "end": 290
                          }
                        ],
                        "start": 278,
                        "end": 291
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 292,
                          "end": 296
                        }
                      ],
                      "start": 265,
                      "end": 297
                    },
                    "directive": null,
                    "start": 265,
                    "end": 298
                  }
                ],
                "start": 255,
                "end": 304
              },
              "expression": false,
              "start": 252,
              "end": 304
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 240,
            "end": 304
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alsoWorks",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 325
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 342,
                        "end": 347
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 348,
                              "end": 350
                            },
                            "typeArguments": null,
                            "start": 348,
                            "end": 350
                          }
                        ],
                        "start": 347,
                        "end": 351
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 352,
                          "end": 356
                        }
                      ],
                      "start": 338,
                      "end": 357
                    },
                    "directive": null,
                    "start": 338,
                    "end": 358
                  }
                ],
                "start": 328,
                "end": 429
              },
              "expression": false,
              "start": 325,
              "end": 429
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 309,
            "end": 429
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 448
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Wrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 459
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 460,
                              "end": 462
                            },
                            "typeArguments": null,
                            "start": 460,
                            "end": 462
                          }
                        ],
                        "start": 459,
                        "end": 463
                      },
                      "start": 452,
                      "end": 463
                    },
                    "start": 450,
                    "end": 463
                  },
                  "start": 449,
                  "end": 463
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 465,
                "end": 468
              },
              "expression": false,
              "start": 448,
              "end": 468
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 435,
            "end": 468
          }
        ],
        "start": 234,
        "end": 470
      },
      "abstract": false,
      "declare": false,
      "start": 204,
      "end": 470
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 470
}
```
