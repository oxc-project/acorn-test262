__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1286,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 22,
        "end": 46,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 26,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 40,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 35,
                "end": 40,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 46,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 46,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "start": 49,
      "end": 118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 116,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 78,
                  "end": 94,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 96,
                  "end": 112,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 112,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 233,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 164,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 233,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 233,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 227,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 226,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 221,
                          "end": 222,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 224,
                          "end": 225,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
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
                  "start": 165,
                  "end": 174,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 185,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 177,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 187,
                  "end": 203,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 203,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 197,
                        "end": 203
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 142,
        "end": 146,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 252,
            "decorators": [],
            "name": "Printable",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 255,
            "end": 427,
            "async": false,
            "body": {
              "type": "ClassExpression",
              "start": 303,
              "end": 427,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 328,
                "end": 427,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 334,
                    "end": 359,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 348,
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 351,
                      "end": 358,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 364,
                    "end": 425,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 369,
                      "decorators": [],
                      "name": "print",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 369,
                      "end": 425,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 372,
                        "end": 425,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 382,
                            "end": 419,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 388,
                                "end": 418,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 388,
                                  "end": 394,
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "start": 397,
                                  "end": 418,
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 397,
                                    "end": 409,
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 397,
                                      "end": 403,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 397,
                                        "end": 401
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 402,
                                        "end": 403,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 406,
                                      "end": 409,
                                      "raw": "\",\"",
                                      "value": ","
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 412,
                                    "end": 418,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 412,
                                      "end": 416
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 417,
                                      "end": 418,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 317,
                "end": 327,
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 298,
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 295,
                  "end": 298,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 297,
                    "end": 298,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 255,
              "end": 284,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 256,
                  "end": 283,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 266,
                    "end": 283,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 277,
                      "end": 283,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 278,
                          "end": 282,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 282,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 277,
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 257,
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
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 429,
      "end": 674,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 487,
        "end": 674,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 493,
            "end": 658,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 520,
              "end": 658,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 530,
                  "end": 543,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 534,
                    "decorators": [],
                    "name": "_tag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 534,
                    "end": 542,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 536,
                      "end": 542
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 552,
                  "end": 652,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 563,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 563,
                    "end": 652,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 580,
                      "end": 652,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 594,
                          "end": 609,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 594,
                            "end": 608,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "start": 600,
                                "end": 607,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 603,
                                  "end": 607,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 594,
                              "end": 599
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 622,
                          "end": 642,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 622,
                            "end": 641,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 622,
                              "end": 631,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 622,
                                "end": 626
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 627,
                                "end": 631,
                                "decorators": [],
                                "name": "_tag",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 634,
                              "end": 641,
                              "raw": "\"hello\"",
                              "value": "hello"
                            }
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
                        "type": "RestElement",
                        "start": 564,
                        "end": 578,
                        "argument": {
                          "type": "Identifier",
                          "start": 567,
                          "end": 571,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 571,
                          "end": 578,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 573,
                            "end": 578,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 573,
                              "end": 576
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 509,
              "end": 519,
              "decorators": [],
              "name": "superClass",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ReturnStatement",
            "start": 663,
            "end": 672,
            "argument": {
              "type": "Identifier",
              "start": 670,
              "end": 671,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 444,
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 472,
          "end": 485,
          "decorators": [],
          "name": "superClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 482,
            "end": 485,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 484,
              "end": 485,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 484,
                "end": 485,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 444,
        "end": 471,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 445,
            "end": 470,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 455,
              "end": 470,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 466,
                "end": 470,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 467,
                    "end": 469,
                    "members": []
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 455,
                "end": 466,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
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
      "type": "VariableDeclaration",
      "start": 676,
      "end": 707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 682,
          "end": 706,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 682,
            "end": 688,
            "decorators": [],
            "name": "Thing1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 691,
            "end": 706,
            "arguments": [
              {
                "type": "Identifier",
                "start": 698,
                "end": 705,
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 691,
              "end": 697,
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 714,
          "end": 749,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 720,
            "decorators": [],
            "name": "Thing2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 723,
            "end": 749,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 730,
                "end": 748,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 740,
                    "end": 747,
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 739,
                  "decorators": [],
                  "name": "Printable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 723,
              "end": 729,
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 751,
      "end": 766,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 751,
        "end": 765,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 751,
          "end": 757,
          "decorators": [],
          "name": "Thing2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 758,
          "end": 765,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 768,
      "end": 853,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 782,
        "end": 853,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 788,
            "end": 822,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 794,
                "end": 821,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 799,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 802,
                  "end": 821,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 813,
                      "end": 814,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 816,
                      "end": 817,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 819,
                      "end": 820,
                      "raw": "3",
                      "value": 3
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 812,
                    "decorators": [],
                    "name": "Thing1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 827,
            "end": 835,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 827,
              "end": 834,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 827,
                "end": 832,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 833,
                "end": 834,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 840,
            "end": 851,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 840,
              "end": 850,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 840,
                "end": 845,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 846,
                "end": 850,
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 779,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 959,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 869,
        "end": 959,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 875,
            "end": 909,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 881,
                "end": 908,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 886,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 889,
                  "end": 908,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 900,
                      "end": 901,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 903,
                      "end": 904,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 906,
                      "end": 907,
                      "raw": "3",
                      "value": 3
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 899,
                    "decorators": [],
                    "name": "Thing2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 914,
            "end": 922,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 914,
              "end": 921,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 914,
                "end": 919,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 920,
                "end": 921,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 927,
            "end": 938,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 927,
              "end": 937,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 927,
                "end": 932,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 933,
                "end": 937,
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 943,
            "end": 957,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 943,
              "end": 956,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 943,
                "end": 954,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 948,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 954,
                  "decorators": [],
                  "name": "print",
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
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 866,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 961,
      "end": 1122,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 989,
        "end": 1122,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1079,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 995,
              "end": 1006,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1006,
              "end": 1079,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1020,
                "end": 1079,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1030,
                    "end": 1048,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1030,
                      "end": 1047,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1036,
                          "end": 1038,
                          "raw": "10",
                          "value": 10
                        },
                        {
                          "type": "Literal",
                          "start": 1040,
                          "end": 1042,
                          "raw": "20",
                          "value": 20
                        },
                        {
                          "type": "Literal",
                          "start": 1044,
                          "end": 1046,
                          "raw": "30",
                          "value": 30
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1030,
                        "end": 1035
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1057,
                    "end": 1073,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1057,
                      "end": 1072,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1057,
                        "end": 1066,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1057,
                          "end": 1061
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1062,
                          "end": 1066,
                          "decorators": [],
                          "name": "_tag",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1069,
                        "end": 1072,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "start": 1007,
                  "end": 1018,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1010,
                    "end": 1018,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1012,
                      "end": 1018
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1084,
            "end": 1120,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1084,
              "end": 1088,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1088,
              "end": 1120,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1091,
                "end": 1120,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1101,
                    "end": 1114,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1101,
                      "end": 1113,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1101,
                        "end": 1111,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1101,
                          "end": 1105
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1106,
                          "end": 1111,
                          "decorators": [],
                          "name": "print",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 973,
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 982,
        "end": 988,
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1146,
      "end": 1286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1152,
          "end": 1286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1152,
            "end": 1163,
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1166,
            "end": 1286,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1212,
              "end": 1286,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1218,
                  "end": 1284,
                  "argument": {
                    "type": "ClassExpression",
                    "start": 1225,
                    "end": 1283,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 1244,
                      "end": 1283,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1254,
                          "end": 1277,
                          "accessibility": null,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1254,
                            "end": 1263,
                            "decorators": [],
                            "name": "timestamp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": null,
                          "value": {
                            "type": "NewExpression",
                            "start": 1266,
                            "end": 1276,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 1270,
                              "end": 1274,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "start": 1239,
                      "end": 1243,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "superTypeArguments": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1199,
                "end": 1207,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1203,
                  "end": 1207,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1205,
                    "end": 1207,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1205,
                      "end": 1207,
                      "decorators": [],
                      "name": "CT",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1166,
              "end": 1198,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1167,
                  "end": 1197,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1178,
                    "end": 1197,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1189,
                      "end": 1197,
                      "params": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1190,
                          "end": 1196
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1178,
                      "end": 1189,
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1167,
                    "end": 1169,
                    "decorators": [],
                    "name": "CT",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
