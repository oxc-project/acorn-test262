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
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 35
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
                "start": 36,
                "end": 37
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 36,
              "end": 37
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
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
          "start": 35,
          "end": 41
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
                "start": 48,
                "end": 59
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 70,
                            "end": 71
                          },
                          "typeArguments": null,
                          "start": 70,
                          "end": 71
                        },
                        "start": 68,
                        "end": 71
                      },
                      "start": 67,
                      "end": 71
                    },
                    "readonly": false,
                    "static": false,
                    "start": 60,
                    "end": 71
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
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
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 83,
                            "end": 84
                          },
                          "typeArguments": null,
                          "start": 83,
                          "end": 84
                        },
                        "start": 81,
                        "end": 84
                      },
                      "start": 80,
                      "end": 84
                    },
                    "readonly": false,
                    "static": false,
                    "start": 73,
                    "end": 84
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 86,
                  "end": 89
                },
                "expression": false,
                "start": 59,
                "end": 89
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 48,
              "end": 89
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "value": {
                "type": "FunctionExpression",
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 101
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 100,
                      "end": 101
                    }
                  ],
                  "start": 99,
                  "end": 102
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
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
                          "start": 106,
                          "end": 107
                        },
                        "typeArguments": null,
                        "start": 106,
                        "end": 107
                      },
                      "start": 104,
                      "end": 107
                    },
                    "start": 103,
                    "end": 107
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 114
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 115,
                            "end": 116
                          },
                          "typeArguments": null,
                          "start": 115,
                          "end": 116
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 119
                          },
                          "typeArguments": null,
                          "start": 118,
                          "end": 119
                        }
                      ],
                      "start": 114,
                      "end": 120
                    },
                    "start": 110,
                    "end": 120
                  },
                  "start": 108,
                  "end": 120
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 146
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 147,
                              "end": 151
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 152,
                              "end": 153
                            },
                            "optional": false,
                            "computed": false,
                            "start": 147,
                            "end": 153
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 156
                          }
                        ],
                        "start": 138,
                        "end": 157
                      },
                      "start": 131,
                      "end": 158
                    }
                  ],
                  "start": 121,
                  "end": 164
                },
                "expression": false,
                "start": 99,
                "end": 164
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 95,
              "end": 164
            }
          ],
          "start": 42,
          "end": 166
        },
        "abstract": false,
        "declare": false,
        "start": 25,
        "end": 166
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 18,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Supervisor",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 207
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
              "start": 212,
              "end": 213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 208,
            "end": 213
          }
        ],
        "start": 207,
        "end": 214
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
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 224
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 225,
                  "end": 226
                }
              ],
              "start": 224,
              "end": 227
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "right",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Supervisor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 245
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 247
                          },
                          "typeArguments": null,
                          "start": 246,
                          "end": 247
                        }
                      ],
                      "start": 245,
                      "end": 248
                    },
                    "start": 235,
                    "end": 248
                  },
                  "start": 233,
                  "end": 248
                },
                "start": 228,
                "end": 248
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Supervisor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 261
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 264
                          },
                          "typeArguments": null,
                          "start": 263,
                          "end": 264
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 266,
                            "end": 267
                          },
                          "typeArguments": null,
                          "start": 266,
                          "end": 267
                        }
                      ],
                      "start": 262,
                      "end": 268
                    }
                  ],
                  "start": 261,
                  "end": 269
                },
                "start": 251,
                "end": 269
              },
              "start": 249,
              "end": 269
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 221,
            "end": 270
          }
        ],
        "start": 215,
        "end": 272
      },
      "declare": false,
      "start": 187,
      "end": 272
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Zip",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 290
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T0",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 297
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": true,
              "const": false,
              "start": 291,
              "end": 297
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 305
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": true,
              "const": false,
              "start": 299,
              "end": 305
            }
          ],
          "start": 290,
          "end": 306
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Supervisor",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 328
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 341
                        },
                        "typeArguments": null,
                        "start": 339,
                        "end": 341
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 345
                        },
                        "typeArguments": null,
                        "start": 343,
                        "end": 345
                      }
                    ],
                    "start": 338,
                    "end": 346
                  },
                  "start": 329,
                  "end": 346
                }
              ],
              "start": 328,
              "end": 347
            },
            "start": 318,
            "end": 347
          }
        ],
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
                "start": 354,
                "end": 365
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
                      "name": "left",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Supervisor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 390,
                            "end": 400
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 401,
                                  "end": 403
                                },
                                "typeArguments": null,
                                "start": 401,
                                "end": 403
                              }
                            ],
                            "start": 400,
                            "end": 404
                          },
                          "start": 390,
                          "end": 404
                        },
                        "start": 388,
                        "end": 404
                      },
                      "start": 384,
                      "end": 404
                    },
                    "readonly": true,
                    "static": false,
                    "start": 375,
                    "end": 404
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "right",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Supervisor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 430,
                            "end": 440
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
                                  "start": 441,
                                  "end": 443
                                },
                                "typeArguments": null,
                                "start": 441,
                                "end": 443
                              }
                            ],
                            "start": 440,
                            "end": 444
                          },
                          "start": 430,
                          "end": 444
                        },
                        "start": 428,
                        "end": 444
                      },
                      "start": 423,
                      "end": 444
                    },
                    "readonly": true,
                    "static": false,
                    "start": 414,
                    "end": 444
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 452,
                  "end": 455
                },
                "expression": false,
                "start": 365,
                "end": 455
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 354,
              "end": 455
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 464
              },
              "value": {
                "type": "FunctionExpression",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 466
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 465,
                      "end": 466
                    }
                  ],
                  "start": 464,
                  "end": 467
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "right",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Supervisor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 485
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 486,
                                "end": 487
                              },
                              "typeArguments": null,
                              "start": 486,
                              "end": 487
                            }
                          ],
                          "start": 485,
                          "end": 488
                        },
                        "start": 475,
                        "end": 488
                      },
                      "start": 473,
                      "end": 488
                    },
                    "start": 468,
                    "end": 488
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Supervisor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 501
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T0",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 504,
                                    "end": 506
                                  },
                                  "typeArguments": null,
                                  "start": 504,
                                  "end": 506
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 508,
                                    "end": 510
                                  },
                                  "typeArguments": null,
                                  "start": 508,
                                  "end": 510
                                }
                              ],
                              "start": 503,
                              "end": 511
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 513,
                                "end": 514
                              },
                              "typeArguments": null,
                              "start": 513,
                              "end": 514
                            }
                          ],
                          "start": 502,
                          "end": 515
                        }
                      ],
                      "start": 501,
                      "end": 516
                    },
                    "start": 491,
                    "end": 516
                  },
                  "start": 489,
                  "end": 516
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Zip",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 541
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 542,
                            "end": 546
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "right",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 548,
                            "end": 553
                          }
                        ],
                        "start": 534,
                        "end": 554
                      },
                      "start": 527,
                      "end": 555
                    }
                  ],
                  "start": 517,
                  "end": 561
                },
                "expression": false,
                "start": 464,
                "end": 561
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 461,
              "end": 561
            }
          ],
          "start": 348,
          "end": 563
        },
        "abstract": false,
        "declare": false,
        "start": 281,
        "end": 563
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
      "end": 563
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Assign",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 588
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
              "start": 589,
              "end": 590
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 589,
            "end": 590
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 593
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 592,
            "end": 593
          }
        ],
        "start": 588,
        "end": 594
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 601
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 603
                  },
                  "typeArguments": null,
                  "start": 602,
                  "end": 603
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 612
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 612
                  },
                  "start": 605,
                  "end": 612
                }
              ],
              "start": 601,
              "end": 613
            },
            "start": 597,
            "end": 613
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 617
            },
            "typeArguments": null,
            "start": 616,
            "end": 617
          }
        ],
        "start": 597,
        "end": 617
      },
      "declare": false,
      "start": 577,
      "end": 618
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 630
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
              "start": 631,
              "end": 632
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 631,
            "end": 632
          }
        ],
        "start": 630,
        "end": 633
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
              "start": 640,
              "end": 651
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
                          "start": 662,
                          "end": 663
                        },
                        "typeArguments": null,
                        "start": 662,
                        "end": 663
                      },
                      "start": 660,
                      "end": 663
                    },
                    "start": 659,
                    "end": 663
                  },
                  "readonly": false,
                  "static": false,
                  "start": 652,
                  "end": 663
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 665,
                "end": 668
              },
              "expression": false,
              "start": 651,
              "end": 668
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 640,
            "end": 668
          }
        ],
        "start": 634,
        "end": 670
      },
      "abstract": false,
      "declare": false,
      "start": 620,
      "end": 670
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 688
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
                "start": 689,
                "end": 690
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 689,
              "end": 690
            }
          ],
          "start": 688,
          "end": 691
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 704
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "typeArguments": null,
              "start": 705,
              "end": 706
            }
          ],
          "start": 704,
          "end": 707
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
                "name": "update",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 720
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 724,
                      "end": 727
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Assign",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 728,
                            "end": 734
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 735,
                                  "end": 736
                                },
                                "typeArguments": null,
                                "start": 735,
                                "end": 736
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 740,
                                      "end": 741
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 743,
                                        "end": 749
                                      },
                                      "start": 741,
                                      "end": 749
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 740,
                                    "end": 749
                                  }
                                ],
                                "start": 738,
                                "end": 751
                              }
                            ],
                            "start": 734,
                            "end": 752
                          },
                          "start": 728,
                          "end": 752
                        }
                      ],
                      "start": 727,
                      "end": 753
                    },
                    "start": 724,
                    "end": 753
                  },
                  "start": 722,
                  "end": 753
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
                                  "name": "Assign",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 773,
                                  "end": 779
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 780,
                                        "end": 781
                                      },
                                      "typeArguments": null,
                                      "start": 780,
                                      "end": 781
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
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 785,
                                            "end": 786
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 788,
                                              "end": 794
                                            },
                                            "start": 786,
                                            "end": 794
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 785,
                                          "end": 794
                                        }
                                      ],
                                      "start": 783,
                                      "end": 796
                                    }
                                  ],
                                  "start": 779,
                                  "end": 797
                                },
                                "start": 773,
                                "end": 797
                              },
                              "start": 771,
                              "end": 797
                            },
                            "start": 770,
                            "end": 797
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 800,
                                "end": 806
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "assign",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 807,
                                "end": 813
                              },
                              "optional": false,
                              "computed": false,
                              "start": 800,
                              "end": 813
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 814,
                                  "end": 818
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 819,
                                  "end": 820
                                },
                                "optional": false,
                                "computed": false,
                                "start": 814,
                                "end": 820
                              },
                              {
                                "type": "ObjectExpression",
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
                                      "start": 824,
                                      "end": 825
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 827,
                                      "end": 828
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 824,
                                    "end": 828
                                  }
                                ],
                                "start": 822,
                                "end": 830
                              }
                            ],
                            "optional": false,
                            "start": 800,
                            "end": 831
                          },
                          "definite": false,
                          "start": 770,
                          "end": 831
                        }
                      ],
                      "declare": false,
                      "start": 764,
                      "end": 832
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 852,
                          "end": 855
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 856,
                            "end": 857
                          }
                        ],
                        "start": 848,
                        "end": 858
                      },
                      "start": 841,
                      "end": 859
                    }
                  ],
                  "start": 754,
                  "end": 865
                },
                "expression": false,
                "start": 720,
                "end": 865
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 714,
              "end": 865
            }
          ],
          "start": 708,
          "end": 867
        },
        "abstract": false,
        "declare": false,
        "start": 679,
        "end": 867
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 672,
      "end": 867
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 18,
  "end": 867
}
```
