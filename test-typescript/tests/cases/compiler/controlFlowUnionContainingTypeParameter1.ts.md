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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 136,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 136,
              "async": false,
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
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 112,
                      "end": 113,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 160,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 160,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 160,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 179,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 179,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 302,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 302,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 302,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 216,
                    "end": 281,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 241,
                      "end": 281,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 249,
                          "end": 261,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 249,
                            "end": 260,
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 249,
                              "end": 255,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 249,
                                "end": 253
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 255,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 268,
                          "end": 275,
                          "argument": null
                        }
                      ]
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 220,
                      "end": 239,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 220,
                        "end": 234,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 220,
                          "end": 224
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 234,
                          "decorators": [],
                          "name": "typeguard",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 286,
                    "end": 298,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 286,
                      "end": 297,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 286,
                        "end": 292,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 286,
                          "end": 290
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 292,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 193,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 306,
      "end": 576,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 339,
        "end": 576,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 399,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 399,
              "async": false,
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
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 371,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 376,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 375,
                      "end": 376,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 402,
            "end": 423,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 403,
              "end": 423,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 421,
                "end": 423,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 426,
            "end": 442,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 427,
              "end": 442,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 440,
                "end": 442,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 432,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 445,
            "end": 574,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 449,
              "end": 574,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 574,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 479,
                    "end": 544,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 504,
                      "end": 544,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 512,
                          "end": 524,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 512,
                            "end": 523,
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 512,
                              "end": 518,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 512,
                                "end": 516
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 517,
                                "end": 518,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 531,
                          "end": 538,
                          "argument": null
                        }
                      ]
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 483,
                      "end": 502,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 483,
                        "end": 497,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 483,
                          "end": 487
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 497,
                          "decorators": [],
                          "name": "typeguard",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 549,
                    "end": 553,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 552,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 558,
                    "end": 570,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 558,
                      "end": 569,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 558,
                        "end": 564,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 558,
                          "end": 562
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 563,
                          "end": 564,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 456,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 322,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 323,
            "end": 337,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 333,
              "end": 337,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 333,
                "end": 337,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
