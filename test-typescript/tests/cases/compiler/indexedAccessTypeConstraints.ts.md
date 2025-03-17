__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 613,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "IData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "content",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "Data",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "T",
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
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 108,
                    "end": 115,
                    "name": "prop",
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
                          "name": "K",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "K",
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
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 142,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 248,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 189,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 163,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 189,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "data",
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
                          "name": "Data",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "M",
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
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 187,
                "end": 189,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 194,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 201,
              "name": "getData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 201,
              "end": 246,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "Data",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "M",
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
              "name": "M",
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
      "type": "ExportNamedDeclaration",
      "start": 250,
      "end": 372,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 257,
        "end": 372,
        "id": {
          "type": "Identifier",
          "start": 263,
          "end": 266,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 278,
          "end": 284,
          "name": "Parent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 295,
          "end": 372,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 301,
              "end": 370,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 301,
                "end": 311,
                "name": "getContent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 311,
                "end": 370,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                                "name": "getData",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 352,
                            "name": "get",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 353,
                            "end": 362,
                            "value": "content",
                            "raw": "'content'"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                "name": "C",
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
                "name": "IData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "C",
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 374,
      "end": 509,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 381,
        "end": 509,
        "id": {
          "type": "Identifier",
          "start": 387,
          "end": 390,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 422,
          "end": 428,
          "name": "Parent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 432,
          "end": 509,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 438,
              "end": 507,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 438,
                "end": 448,
                "name": "getContent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 448,
                "end": 507,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                                "name": "getData",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 486,
                            "end": 489,
                            "name": "get",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 490,
                            "end": 499,
                            "value": "content",
                            "raw": "'content'"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 404,
                "end": 412,
                "typeName": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 409,
                  "name": "IData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
        "implements": [],
        "abstract": false,
        "declare": false,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 533,
      "end": 612,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 545,
        "name": "foo",
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
          "start": 575,
          "end": 579,
          "name": "x",
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
                "name": "C",
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
          "start": 581,
          "end": 596,
          "name": "y",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 608,
                "end": 609,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "content",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
