__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "start": 15,
                "end": 17
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 15,
              "end": 17
            }
          ],
          "start": 14,
          "end": 18
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
                "start": 24,
                "end": 35
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
                      "name": "callback",
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
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 61,
                                    "end": 62
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
                                          "start": 63,
                                          "end": 65
                                        },
                                        "typeArguments": null,
                                        "start": 63,
                                        "end": 65
                                      }
                                    ],
                                    "start": 62,
                                    "end": 66
                                  },
                                  "start": 61,
                                  "end": 66
                                },
                                "start": 59,
                                "end": 66
                              },
                              "start": 55,
                              "end": 66
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 71,
                              "end": 75
                            },
                            "start": 68,
                            "end": 75
                          },
                          "start": 54,
                          "end": 75
                        },
                        "start": 52,
                        "end": 75
                      },
                      "start": 44,
                      "end": 75
                    },
                    "readonly": false,
                    "static": false,
                    "start": 37,
                    "end": 75
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 91,
                            "end": 96
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 103,
                              "end": 104
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 105,
                                "end": 109
                              }
                            ],
                            "start": 99,
                            "end": 110
                          },
                          "definite": false,
                          "start": 91,
                          "end": 110
                        }
                      ],
                      "declare": false,
                      "start": 87,
                      "end": 111
                    }
                  ],
                  "start": 77,
                  "end": 117
                },
                "expression": false,
                "start": 35,
                "end": 117
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 24,
              "end": 117
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "AAA",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 125
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
                    "name": "callback",
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
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 144,
                                  "end": 145
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
                                        "start": 146,
                                        "end": 148
                                      },
                                      "typeArguments": null,
                                      "start": 146,
                                      "end": 148
                                    }
                                  ],
                                  "start": 145,
                                  "end": 149
                                },
                                "start": 144,
                                "end": 149
                              },
                              "start": 142,
                              "end": 149
                            },
                            "start": 138,
                            "end": 149
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 154,
                            "end": 158
                          },
                          "start": 151,
                          "end": 158
                        },
                        "start": 137,
                        "end": 158
                      },
                      "start": 135,
                      "end": 158
                    },
                    "start": 127,
                    "end": 158
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 179
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 188,
                                "end": 192
                              }
                            ],
                            "start": 182,
                            "end": 193
                          },
                          "definite": false,
                          "start": 174,
                          "end": 193
                        }
                      ],
                      "declare": false,
                      "start": 170,
                      "end": 194
                    }
                  ],
                  "start": 160,
                  "end": 200
                },
                "expression": false,
                "start": 125,
                "end": 200
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 122,
              "end": 200
            }
          ],
          "start": 18,
          "end": 202
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 202
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
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
                "start": 223,
                "end": 225
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 223,
              "end": 225
            }
          ],
          "start": 222,
          "end": 226
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
                "name": "child",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 237
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
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
                          "start": 241,
                          "end": 243
                        },
                        "typeArguments": null,
                        "start": 241,
                        "end": 243
                      }
                    ],
                    "start": 240,
                    "end": 244
                  },
                  "start": 239,
                  "end": 244
                },
                "start": 237,
                "end": 244
              },
              "accessibility": null,
              "static": false,
              "start": 232,
              "end": 245
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 258
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
                              "start": 259,
                              "end": 261
                            },
                            "typeArguments": null,
                            "start": 259,
                            "end": 261
                          }
                        ],
                        "start": 258,
                        "end": 262
                      },
                      "start": 257,
                      "end": 262
                    },
                    "start": 255,
                    "end": 262
                  },
                  "start": 251,
                  "end": 262
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 265,
                  "end": 269
                },
                "start": 263,
                "end": 269
              },
              "start": 250,
              "end": 270
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 296,
                                "end": 297
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
                                      "start": 298,
                                      "end": 300
                                    },
                                    "typeArguments": null,
                                    "start": 298,
                                    "end": 300
                                  }
                                ],
                                "start": 297,
                                "end": 301
                              },
                              "start": 296,
                              "end": 301
                            },
                            "start": 294,
                            "end": 301
                          },
                          "start": 290,
                          "end": 301
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 306,
                          "end": 310
                        },
                        "start": 303,
                        "end": 310
                      },
                      "start": 289,
                      "end": 310
                    },
                    "start": 287,
                    "end": 310
                  },
                  "start": 279,
                  "end": 310
                }
              ],
              "returnType": null,
              "start": 275,
              "end": 311
            }
          ],
          "start": 226,
          "end": 313
        },
        "declare": false,
        "start": 211,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 204,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 329
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
                "start": 330,
                "end": 332
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 330,
              "end": 332
            }
          ],
          "start": 329,
          "end": 333
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
                "start": 340,
                "end": 351
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
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 369
                          },
                          "typeArguments": null,
                          "start": 367,
                          "end": 369
                        },
                        "start": 365,
                        "end": 369
                      },
                      "start": 359,
                      "end": 369
                    },
                    "readonly": false,
                    "static": false,
                    "start": 352,
                    "end": 369
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 371,
                  "end": 374
                },
                "expression": false,
                "start": 351,
                "end": 374
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 340,
              "end": 374
            }
          ],
          "start": 334,
          "end": 376
        },
        "abstract": false,
        "declare": false,
        "start": 322,
        "end": 376
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 315,
      "end": 376
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 377
}
```
