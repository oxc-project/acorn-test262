__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 998,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 37,
        "name": "Attributes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Keys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 71,
          "end": 82,
          "name": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "name": "Key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 78,
            "end": 82,
            "typeName": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "name": "Keys",
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 85,
          "end": 91
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 78,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "name": "Keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "name": "Key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 107,
        "name": "Query",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 153,
              "name": "multiply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 153,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "name": "x",
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
                        "name": "B",
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
              "body": null,
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
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 174,
                        "name": "Attributes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                    "name": "Query",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    ]
                  }
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 128,
                "name": "Attributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 231,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 245,
        "name": "ClassName",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "S",
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
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "ClassNameMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "S",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 283,
        "end": 311,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 286,
          "end": 298,
          "name": {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 302,
          "end": 309
        },
        "optional": true,
        "readonly": null,
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
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "ClassNameObjectMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "S",
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
              "name": "ClassNameMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "name": "ClassNameArg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "S",
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
              "name": "ClassName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": "ClassNameObjectMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          "name": "css",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 487,
            "end": 496,
            "name": "styles",
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
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 498,
            "end": 530,
            "argument": {
              "type": "Identifier",
              "start": 501,
              "end": 511,
              "name": "classNames",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
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
                    "name": "ClassNameArg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
        "body": {
          "type": "BlockStatement",
          "start": 540,
          "end": 997,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 544,
              "end": 982,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 550,
                  "end": 981,
                  "id": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 554,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "classNames",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 571,
                        "name": "map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 572,
                        "end": 980,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 572,
                            "end": 575,
                            "name": "arg",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "prefix": true,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 644,
                                    "end": 647,
                                    "name": "arg",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
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
                                        "name": "styles",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 683,
                                        "end": 686,
                                        "name": "arg",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": true,
                                      "optional": false
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
                                  "prefix": true,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 710,
                                    "end": 713,
                                    "name": "arg",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
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
                                              "name": "Object",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 749,
                                              "end": 753,
                                              "name": "keys",
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
                                              "start": 754,
                                              "end": 757,
                                              "name": "arg",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 759,
                                          "end": 765,
                                          "name": "reduce",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "start": 783,
                                          "end": 964,
                                          "id": null,
                                          "expression": false,
                                          "generator": false,
                                          "async": false,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "start": 784,
                                              "end": 804,
                                              "name": "obj",
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
                                                    "name": "ClassNameObject",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "typeArguments": null
                                                }
                                              },
                                              "decorators": [],
                                              "optional": false
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 806,
                                              "end": 818,
                                              "name": "key",
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
                                                      "name": "S",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                }
                                              },
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 823,
                                            "end": 964,
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "start": 833,
                                                "end": 871,
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "start": 839,
                                                    "end": 870,
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 839,
                                                      "end": 856,
                                                      "name": "exportedClassName",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "init": {
                                                      "type": "MemberExpression",
                                                      "start": 859,
                                                      "end": 870,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 859,
                                                        "end": 865,
                                                        "name": "styles",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 866,
                                                        "end": 869,
                                                        "name": "key",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "computed": true,
                                                      "optional": false
                                                    },
                                                    "definite": false
                                                  }
                                                ],
                                                "kind": "const",
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
                                                      "name": "obj",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 884,
                                                      "end": 901,
                                                      "name": "exportedClassName",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "computed": true,
                                                    "optional": false
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
                                                        "name": "arg",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "start": 913,
                                                        "end": 928,
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 913,
                                                          "end": 925,
                                                          "name": "ClassNameMap",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
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
                                                                "name": "S",
                                                                "typeAnnotation": null,
                                                                "decorators": [],
                                                                "optional": false
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
                                                      "name": "key",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "computed": true,
                                                    "optional": false
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
                                                  "name": "obj",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "typeParameters": null,
                                          "returnType": null
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "start": 966,
                                          "end": 968,
                                          "properties": []
                                        }
                                      ],
                                      "optional": false,
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
                                              "name": "ClassNameObject",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSMappedType",
                "start": 459,
                "end": 485,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 462,
                  "end": 474,
                  "name": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 477,
                  "end": 483
                },
                "optional": null,
                "readonly": null,
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
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 531,
          "end": 539,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 533,
            "end": 539
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
