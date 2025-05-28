__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 576,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 304,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 72,
        "decorators": [],
        "name": "TestClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 136,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 89,
              "decorators": [],
              "name": "typeguard",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 102,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 95,
                      "end": 102
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 105,
                  "end": 113,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 112,
                      "end": 113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 120,
                    "end": 132,
                    "argument": {
                      "type": "Literal",
                      "start": 127,
                      "end": 131,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 160,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 160,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 150,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 153,
                  "end": 157
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 160,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 179,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 179,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 169,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 169,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 176,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 172,
                  "end": 176
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 179,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 302,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 186,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 302,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 187,
                  "end": 202,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 202,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 192,
                      "end": 202,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 192,
                          "end": 193,
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 193,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 203,
                "end": 209,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 205,
                  "end": 209
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 302,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 216,
                    "end": 281,
                    "test": {
                      "type": "CallExpression",
                      "start": 220,
                      "end": 239,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 220,
                        "end": 234,
                        "object": {
                          "type": "ThisExpression",
                          "start": 220,
                          "end": 224
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 234,
                          "decorators": [],
                          "name": "typeguard",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 241,
                      "end": 281,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 249,
                          "end": 261,
                          "expression": {
                            "type": "CallExpression",
                            "start": 249,
                            "end": 260,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 249,
                              "end": 255,
                              "object": {
                                "type": "ThisExpression",
                                "start": 249,
                                "end": 253
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 255,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 256,
                                "end": 259,
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 268,
                          "end": 275,
                          "argument": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 286,
                    "end": 298,
                    "expression": {
                      "type": "CallExpression",
                      "start": 286,
                      "end": 297,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 286,
                        "end": 292,
                        "object": {
                          "type": "ThisExpression",
                          "start": 286,
                          "end": 290
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 292,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 293,
                          "end": 296,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 306,
      "end": 576,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 322,
        "decorators": [],
        "name": "TestClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 322,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 323,
            "end": 337,
            "name": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 333,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 333,
                "end": 337,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 339,
        "end": 576,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 399,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 352,
              "decorators": [],
              "name": "typeguard",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 399,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 353,
                  "end": 365,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 356,
                    "end": 365,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 358,
                      "end": 365
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 366,
                "end": 376,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 368,
                  "end": 376,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 371,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 376,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 375,
                      "end": 376,
                      "typeName": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 377,
                "end": 399,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 383,
                    "end": 395,
                    "argument": {
                      "type": "Literal",
                      "start": 390,
                      "end": 394,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 402,
            "end": 423,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 403,
              "end": 423,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 413,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 405,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 407,
                      "end": 413
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 414,
                "end": 420,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 416,
                  "end": 420
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 421,
                "end": 423,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 426,
            "end": 442,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 442,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 428,
                  "end": 432,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 432,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 431,
                      "end": 432,
                      "typeName": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 432,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 433,
                "end": 439,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 435,
                  "end": 439
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 440,
                "end": 442,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 445,
            "end": 574,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 449,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 449,
              "end": 574,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 450,
                  "end": 465,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 453,
                    "end": 465,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 455,
                      "end": 465,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 455,
                          "end": 456,
                          "typeName": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 456,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 459,
                          "end": 465
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 466,
                "end": 472,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 468,
                  "end": 472
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 574,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 479,
                    "end": 544,
                    "test": {
                      "type": "CallExpression",
                      "start": 483,
                      "end": 502,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 483,
                        "end": 497,
                        "object": {
                          "type": "ThisExpression",
                          "start": 483,
                          "end": 487
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 497,
                          "decorators": [],
                          "name": "typeguard",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 498,
                          "end": 501,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 504,
                      "end": 544,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 512,
                          "end": 524,
                          "expression": {
                            "type": "CallExpression",
                            "start": 512,
                            "end": 523,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 512,
                              "end": 518,
                              "object": {
                                "type": "ThisExpression",
                                "start": 512,
                                "end": 516
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 517,
                                "end": 518,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 519,
                                "end": 522,
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 531,
                          "end": 538,
                          "argument": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 549,
                    "end": 553,
                    "expression": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 552,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 558,
                    "end": 570,
                    "expression": {
                      "type": "CallExpression",
                      "start": 558,
                      "end": 569,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 558,
                        "end": 564,
                        "object": {
                          "type": "ThisExpression",
                          "start": 558,
                          "end": 562
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 563,
                          "end": 564,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 565,
                          "end": 568,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
