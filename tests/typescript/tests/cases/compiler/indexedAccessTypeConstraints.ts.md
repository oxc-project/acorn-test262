__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 612,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 77,
        "end": 127,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 83,
            "end": 125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 124,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 88,
                "end": 124,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 88,
                  "end": 107,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 89,
                      "end": 106,
                      "name": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 99,
                        "end": 106,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                    "start": 108,
                    "end": 115,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 114,
                        "end": 115,
                        "typeName": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "K",
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
                  "start": 117,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 120,
                    "end": 124,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 248,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 142,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "M",
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
        "start": 146,
        "end": 248,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 189,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 163,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 189,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 164,
                  "end": 185,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 185,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 176,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 178,
                        "end": 185,
                        "typeName": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 182,
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 182,
                          "end": 185,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 183,
                              "end": 184,
                              "typeName": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 184,
                                "decorators": [],
                                "name": "M",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 187,
                "end": 189,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 194,
            "end": 246,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 201,
              "decorators": [],
              "name": "getData",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 201,
              "end": 246,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 203,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 205,
                  "end": 212,
                  "typeName": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 209,
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 209,
                    "end": 212,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 210,
                        "end": 211,
                        "typeName": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 246,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 223,
                    "end": 240,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 230,
                      "end": 239,
                      "object": {
                        "type": "ThisExpression",
                        "start": 230,
                        "end": 234
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 239,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 250,
      "end": 372,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 257,
        "end": 372,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 263,
          "end": 266,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 266,
          "end": 269,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 267,
              "end": 268,
              "name": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "C",
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
        "superClass": {
          "type": "Identifier",
          "start": 278,
          "end": 284,
          "decorators": [],
          "name": "Parent",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 284,
          "end": 294,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 285,
              "end": 293,
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 290,
                "decorators": [],
                "name": "IData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 290,
                "end": 293,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 291,
                    "end": 292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "C",
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 295,
          "end": 372,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 301,
              "end": 370,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 301,
                "end": 311,
                "decorators": [],
                "name": "getContent",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 311,
                "end": 370,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 315,
                    "end": 316,
                    "typeName": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 317,
                  "end": 370,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 327,
                      "end": 364,
                      "argument": {
                        "type": "CallExpression",
                        "start": 334,
                        "end": 363,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 334,
                          "end": 352,
                          "object": {
                            "type": "CallExpression",
                            "start": 334,
                            "end": 348,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 334,
                              "end": 346,
                              "object": {
                                "type": "ThisExpression",
                                "start": 334,
                                "end": 338
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 339,
                                "end": 346,
                                "decorators": [],
                                "name": "getData",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 352,
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 353,
                            "end": 362,
                            "value": "content",
                            "raw": "'content'"
                          }
                        ],
                        "optional": false
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
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 374,
      "end": 509,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 381,
        "end": 509,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 387,
          "end": 390,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 390,
          "end": 413,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 391,
              "end": 392,
              "name": {
                "type": "Identifier",
                "start": 391,
                "end": 392,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 394,
              "end": 412,
              "name": {
                "type": "Identifier",
                "start": 394,
                "end": 395,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 404,
                "end": 412,
                "typeName": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 409,
                  "decorators": [],
                  "name": "IData",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 409,
                  "end": 412,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 411,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 411,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
        "superClass": {
          "type": "Identifier",
          "start": 422,
          "end": 428,
          "decorators": [],
          "name": "Parent",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 428,
          "end": 431,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 429,
              "end": 430,
              "typeName": {
                "type": "Identifier",
                "start": 429,
                "end": 430,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 432,
          "end": 509,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 438,
              "end": 507,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 438,
                "end": 448,
                "decorators": [],
                "name": "getContent",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 448,
                "end": 507,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 450,
                  "end": 453,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 452,
                    "end": 453,
                    "typeName": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 453,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 454,
                  "end": 507,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 464,
                      "end": 501,
                      "argument": {
                        "type": "CallExpression",
                        "start": 471,
                        "end": 500,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 471,
                          "end": 489,
                          "object": {
                            "type": "CallExpression",
                            "start": 471,
                            "end": 485,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 471,
                              "end": 483,
                              "object": {
                                "type": "ThisExpression",
                                "start": 471,
                                "end": 475
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 476,
                                "end": 483,
                                "decorators": [],
                                "name": "getData",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 486,
                            "end": 489,
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 490,
                            "end": 499,
                            "value": "content",
                            "raw": "'content'"
                          }
                        ],
                        "optional": false
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
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 533,
      "end": 612,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 545,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 545,
        "end": 574,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 546,
            "end": 547,
            "name": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 549,
            "end": 573,
            "name": {
              "type": "Identifier",
              "start": 549,
              "end": 550,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 559,
              "end": 573,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 561,
                  "end": 571,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 568,
                    "decorators": [],
                    "name": "content",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 568,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 570,
                      "end": 571,
                      "typeName": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 571,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
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
          "start": 575,
          "end": 579,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 576,
            "end": 579,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 578,
              "end": 579,
              "typeName": {
                "type": "Identifier",
                "start": 578,
                "end": 579,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 581,
          "end": 596,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 582,
            "end": 596,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 584,
              "end": 596,
              "objectType": {
                "type": "TSTypeReference",
                "start": 584,
                "end": 585,
                "typeName": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 585,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 586,
                "end": 595,
                "literal": {
                  "type": "Literal",
                  "start": 586,
                  "end": 595,
                  "value": "content",
                  "raw": "'content'"
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 612,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 604,
            "end": 610,
            "expression": {
              "type": "AssignmentExpression",
              "start": 604,
              "end": 609,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 604,
                "end": 605,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 608,
                "end": 609,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
