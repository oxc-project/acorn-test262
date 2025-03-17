__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 577,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 72,
        "name": "TestClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 89,
              "name": "typeguard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 102,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 95,
                      "end": 102
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 160,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 160,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 150,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 160,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 153,
                  "end": 157
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 169,
                  "name": "v",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 179,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 176,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 172,
                  "end": 176
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 302,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 186,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 302,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 187,
                  "end": 202,
                  "name": "val",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "typeguard",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                                "name": "h",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 256,
                                "end": 259,
                                "name": "val",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 293,
                          "end": 296,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 203,
                "end": 209,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 205,
                  "end": 209
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 306,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 322,
        "name": "TestClass2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 339,
        "end": 576,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 399,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 352,
              "name": "typeguard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 399,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 353,
                  "end": 365,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 356,
                    "end": 365,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 358,
                      "end": 365
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 402,
            "end": 423,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 403,
              "end": 423,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 413,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 405,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 407,
                      "end": 413
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 421,
                "end": 423,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 414,
                "end": 420,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 416,
                  "end": 420
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 426,
            "end": 442,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 442,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 428,
                  "end": 432,
                  "name": "v",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 440,
                "end": 442,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 433,
                "end": 439,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 435,
                  "end": 439
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 445,
            "end": 574,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 449,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 449,
              "end": 574,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 450,
                  "end": 465,
                  "name": "val",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "typeguard",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 498,
                          "end": 501,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                                "name": "h",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 519,
                                "end": 522,
                                "name": "val",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
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
                      "name": "val",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 565,
                          "end": 568,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 466,
                "end": 472,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 468,
                  "end": 472
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 333,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 333,
                "end": 337,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
