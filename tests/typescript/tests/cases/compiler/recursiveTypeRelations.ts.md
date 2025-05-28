__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 997,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 37,
        "decorators": [],
        "name": "Attributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 51,
              "end": 60,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 64,
        "end": 94,
        "key": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 78,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 85,
          "end": 91
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 207,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 107,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 138,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 137,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 128,
                "decorators": [],
                "name": "Attributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 137,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 129,
                    "end": 136,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
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
        "start": 139,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 153,
              "decorators": [],
              "name": "multiply",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 153,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 153,
                "end": 184,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 154,
                    "end": 183,
                    "name": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 174,
                        "decorators": [],
                        "name": "Attributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 174,
                        "end": 183,
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "start": 175,
                            "end": 182,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 181,
                              "end": 182,
                              "typeName": {
                                "type": "Identifier",
                                "start": 181,
                                "end": 182,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 189,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "B",
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
                "start": 190,
                "end": 204,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 204,
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 197,
                    "decorators": [],
                    "name": "Query",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 197,
                    "end": 204,
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "start": 198,
                        "end": 203,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 198,
                            "end": 199,
                            "typeName": {
                              "type": "Identifier",
                              "start": 198,
                              "end": 199,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 202,
                            "end": 203,
                            "typeName": {
                              "type": "Identifier",
                              "start": 202,
                              "end": 203,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              "body": null,
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
      "type": "TSTypeAliasDeclaration",
      "start": 231,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 245,
        "decorators": [],
        "name": "ClassName",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 245,
        "end": 248,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 246,
            "end": 247,
            "name": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "S",
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
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 251,
        "end": 258,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 257,
          "end": 258,
          "typeName": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 260,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 277,
        "decorators": [],
        "name": "ClassNameMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 277,
        "end": 280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 278,
            "end": 279,
            "name": {
              "type": "Identifier",
              "start": 278,
              "end": 279,
              "decorators": [],
              "name": "S",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 283,
        "end": 311,
        "key": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 291,
          "end": 298,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 297,
            "end": 298,
            "typeName": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 302,
          "end": 309
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 312,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 335,
        "decorators": [],
        "name": "ClassNameObjectMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 335,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 336,
            "end": 337,
            "name": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "S",
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 341,
        "end": 365,
        "types": [
          {
            "type": "TSObjectKeyword",
            "start": 341,
            "end": 347
          },
          {
            "type": "TSTypeReference",
            "start": 350,
            "end": 365,
            "typeName": {
              "type": "Identifier",
              "start": 350,
              "end": 362,
              "decorators": [],
              "name": "ClassNameMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 362,
              "end": 365,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 363,
                  "end": 364,
                  "typeName": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 367,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 384,
        "decorators": [],
        "name": "ClassNameArg",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 384,
        "end": 387,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 386,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "S",
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 390,
        "end": 426,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 390,
            "end": 402,
            "typeName": {
              "type": "Identifier",
              "start": 390,
              "end": 399,
              "decorators": [],
              "name": "ClassName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 399,
              "end": 402,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 400,
                  "end": 401,
                  "typeName": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 405,
            "end": 426,
            "typeName": {
              "type": "Identifier",
              "start": 405,
              "end": 423,
              "decorators": [],
              "name": "ClassNameObjectMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 423,
              "end": 426,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 429,
      "end": 997,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 436,
        "end": 997,
        "id": {
          "type": "Identifier",
          "start": 445,
          "end": 448,
          "decorators": [],
          "name": "css",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 448,
          "end": 486,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 449,
              "end": 485,
              "name": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSMappedType",
                "start": 459,
                "end": 485,
                "key": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 467,
                  "end": 474,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 477,
                  "end": 483
                },
                "optional": false,
                "readonly": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 487,
            "end": 496,
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 496,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 495,
                "end": 496,
                "typeName": {
                  "type": "Identifier",
                  "start": 495,
                  "end": 496,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "RestElement",
            "start": 498,
            "end": 530,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 501,
              "end": 511,
              "decorators": [],
              "name": "classNames",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 511,
              "end": 530,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 513,
                "end": 530,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 513,
                  "end": 528,
                  "typeName": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 525,
                    "decorators": [],
                    "name": "ClassNameArg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 525,
                    "end": 528,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 526,
                        "end": 527,
                        "typeName": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 527,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 531,
          "end": 539,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 533,
            "end": 539
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 540,
          "end": 997,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 544,
              "end": 982,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 550,
                  "end": 981,
                  "id": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 554,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 557,
                    "end": 981,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 557,
                      "end": 571,
                      "object": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 567,
                        "decorators": [],
                        "name": "classNames",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 571,
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 572,
                        "end": 980,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 572,
                            "end": 575,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 579,
                          "end": 980,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 585,
                              "end": 628,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 589,
                                "end": 600,
                                "left": {
                                  "type": "Identifier",
                                  "start": 589,
                                  "end": 592,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "start": 596,
                                  "end": 600,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 602,
                                "end": 628,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 610,
                                    "end": 622,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 617,
                                      "end": 621,
                                      "value": null,
                                      "raw": "null"
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 633,
                              "end": 694,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 637,
                                "end": 659,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 637,
                                  "end": 647,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 644,
                                    "end": 647,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "start": 651,
                                  "end": 659,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 661,
                                "end": 694,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 669,
                                    "end": 688,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "start": 676,
                                      "end": 687,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 676,
                                        "end": 682,
                                        "decorators": [],
                                        "name": "styles",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 683,
                                        "end": 686,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": true
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 699,
                              "end": 976,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 703,
                                "end": 725,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 703,
                                  "end": 713,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 710,
                                    "end": 713,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "start": 717,
                                  "end": 725,
                                  "value": "object",
                                  "raw": "\"object\""
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 727,
                                "end": 976,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 735,
                                    "end": 970,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 742,
                                      "end": 969,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 742,
                                        "end": 765,
                                        "object": {
                                          "type": "CallExpression",
                                          "start": 742,
                                          "end": 758,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 742,
                                            "end": 753,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 742,
                                              "end": 748,
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 749,
                                              "end": 753,
                                              "decorators": [],
                                              "name": "keys",
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
                                              "start": 754,
                                              "end": 757,
                                              "decorators": [],
                                              "name": "arg",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 759,
                                          "end": 765,
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 765,
                                        "end": 782,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 766,
                                            "end": 781,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 766,
                                              "end": 781,
                                              "decorators": [],
                                              "name": "ClassNameObject",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "start": 783,
                                          "end": 964,
                                          "expression": false,
                                          "async": false,
                                          "typeParameters": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "start": 784,
                                              "end": 804,
                                              "decorators": [],
                                              "name": "obj",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "start": 787,
                                                "end": 804,
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "start": 789,
                                                  "end": 804,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 789,
                                                    "end": 804,
                                                    "decorators": [],
                                                    "name": "ClassNameObject",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeArguments": null
                                                }
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 806,
                                              "end": 818,
                                              "decorators": [],
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "start": 809,
                                                "end": 818,
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "start": 811,
                                                  "end": 818,
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 817,
                                                    "end": 818,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 817,
                                                      "end": 818,
                                                      "decorators": [],
                                                      "name": "S",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "typeArguments": null
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "returnType": null,
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 823,
                                            "end": 964,
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "start": 833,
                                                "end": 871,
                                                "kind": "const",
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "start": 839,
                                                    "end": 870,
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 839,
                                                      "end": 856,
                                                      "decorators": [],
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "init": {
                                                      "type": "MemberExpression",
                                                      "start": 859,
                                                      "end": 870,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 859,
                                                        "end": 865,
                                                        "decorators": [],
                                                        "name": "styles",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 866,
                                                        "end": 869,
                                                        "decorators": [],
                                                        "name": "key",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "optional": false,
                                                      "computed": true
                                                    },
                                                    "definite": false
                                                  }
                                                ],
                                                "declare": false
                                              },
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 880,
                                                "end": 935,
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "start": 880,
                                                  "end": 934,
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "start": 880,
                                                    "end": 902,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 880,
                                                      "end": 883,
                                                      "decorators": [],
                                                      "name": "obj",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 884,
                                                      "end": 901,
                                                      "decorators": [],
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": true
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "start": 905,
                                                    "end": 934,
                                                    "object": {
                                                      "type": "TSAsExpression",
                                                      "start": 906,
                                                      "end": 928,
                                                      "expression": {
                                                        "type": "Identifier",
                                                        "start": 906,
                                                        "end": 909,
                                                        "decorators": [],
                                                        "name": "arg",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "start": 913,
                                                        "end": 928,
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 913,
                                                          "end": 925,
                                                          "decorators": [],
                                                          "name": "ClassNameMap",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "typeArguments": {
                                                          "type": "TSTypeParameterInstantiation",
                                                          "start": 925,
                                                          "end": 928,
                                                          "params": [
                                                            {
                                                              "type": "TSTypeReference",
                                                              "start": 926,
                                                              "end": 927,
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "start": 926,
                                                                "end": 927,
                                                                "decorators": [],
                                                                "name": "S",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              },
                                                              "typeArguments": null
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 930,
                                                      "end": 933,
                                                      "decorators": [],
                                                      "name": "key",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": true
                                                  }
                                                },
                                                "directive": null
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "start": 945,
                                                "end": 956,
                                                "argument": {
                                                  "type": "Identifier",
                                                  "start": 952,
                                                  "end": 955,
                                                  "decorators": [],
                                                  "name": "obj",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            ]
                                          },
                                          "id": null,
                                          "generator": false
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "start": 966,
                                          "end": 968,
                                          "properties": []
                                        }
                                      ],
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 985,
              "end": 995,
              "argument": {
                "type": "Literal",
                "start": 992,
                "end": 994,
                "value": "",
                "raw": "\"\""
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
