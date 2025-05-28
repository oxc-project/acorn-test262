__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 867,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 166,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 25,
        "end": 166,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 31,
          "end": 35,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 35,
          "end": 41,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 36,
              "end": 37,
              "name": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "A",
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
              "start": 39,
              "end": 40,
              "name": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "B",
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
          "start": 42,
          "end": 166,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 48,
              "end": 89,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 59,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 59,
                "end": 89,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 60,
                    "end": 71,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 71,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 68,
                        "end": 71,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 70,
                          "end": 71,
                          "typeName": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 71,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 73,
                    "end": 84,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 81,
                        "end": 84,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 83,
                          "end": 84,
                          "typeName": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                  "start": 86,
                  "end": 89,
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
              "start": 95,
              "end": 164,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 99,
                "end": 164,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 99,
                  "end": 102,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 100,
                      "end": 101,
                      "name": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 103,
                    "end": 107,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 106,
                        "end": 107,
                        "typeName": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
                          "decorators": [],
                          "name": "C",
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
                  "start": 108,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 114,
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 114,
                      "end": 120,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 115,
                          "end": 116,
                          "typeName": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 116,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 118,
                          "end": 119,
                          "typeName": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
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
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 121,
                  "end": 164,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 131,
                      "end": 158,
                      "argument": {
                        "type": "NewExpression",
                        "start": 138,
                        "end": 157,
                        "callee": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 146,
                          "decorators": [],
                          "name": "Test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 147,
                            "end": 153,
                            "object": {
                              "type": "ThisExpression",
                              "start": 147,
                              "end": 151
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 152,
                              "end": 153,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "Identifier",
                            "start": 155,
                            "end": 156,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
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
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 207,
        "decorators": [],
        "name": "Supervisor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 213,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 215,
        "end": 272,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 221,
            "end": 270,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 224,
              "end": 227,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 225,
                  "end": 226,
                  "name": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "A",
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
            "params": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 248,
                "decorators": [],
                "name": "right",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 233,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 235,
                    "end": 248,
                    "typeName": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 245,
                      "decorators": [],
                      "name": "Supervisor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 245,
                      "end": 248,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 246,
                          "end": 247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 251,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 261,
                  "decorators": [],
                  "name": "Supervisor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 261,
                  "end": 269,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 262,
                      "end": 268,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 263,
                          "end": 264,
                          "typeName": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 264,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 266,
                          "end": 267,
                          "typeName": {
                            "type": "Identifier",
                            "start": 266,
                            "end": 267,
                            "decorators": [],
                            "name": "A",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 274,
      "end": 563,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 281,
        "end": 563,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 287,
          "end": 290,
          "decorators": [],
          "name": "Zip",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 290,
          "end": 306,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 291,
              "end": 297,
              "name": {
                "type": "Identifier",
                "start": 295,
                "end": 297,
                "decorators": [],
                "name": "T0",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": true,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 299,
              "end": 305,
              "name": {
                "type": "Identifier",
                "start": 303,
                "end": 305,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": true,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 318,
            "end": 347,
            "expression": {
              "type": "Identifier",
              "start": 318,
              "end": 328,
              "decorators": [],
              "name": "Supervisor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 328,
              "end": 347,
              "params": [
                {
                  "type": "TSTypeOperator",
                  "start": 329,
                  "end": 346,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 338,
                    "end": 346,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 339,
                        "end": 341,
                        "typeName": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 341,
                          "decorators": [],
                          "name": "T0",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 343,
                        "end": 345,
                        "typeName": {
                          "type": "Identifier",
                          "start": 343,
                          "end": 345,
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 348,
          "end": 563,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 354,
              "end": 455,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 354,
                "end": 365,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 365,
                "end": 455,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 375,
                    "end": 404,
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 404,
                      "decorators": [],
                      "name": "left",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 388,
                        "end": 404,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 390,
                          "end": 404,
                          "typeName": {
                            "type": "Identifier",
                            "start": 390,
                            "end": 400,
                            "decorators": [],
                            "name": "Supervisor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 400,
                            "end": 404,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 401,
                                "end": 403,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 401,
                                  "end": 403,
                                  "decorators": [],
                                  "name": "T0",
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
                    "readonly": true,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 414,
                    "end": 444,
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 423,
                      "end": 444,
                      "decorators": [],
                      "name": "right",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 428,
                        "end": 444,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 430,
                          "end": 444,
                          "typeName": {
                            "type": "Identifier",
                            "start": 430,
                            "end": 440,
                            "decorators": [],
                            "name": "Supervisor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 440,
                            "end": 444,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 441,
                                "end": 443,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 441,
                                  "end": 443,
                                  "decorators": [],
                                  "name": "T1",
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
                    "readonly": true,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 452,
                  "end": 455,
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
              "start": 461,
              "end": 561,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 461,
                "end": 464,
                "decorators": [],
                "name": "zip",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 464,
                "end": 561,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 464,
                  "end": 467,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 465,
                      "end": 466,
                      "name": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 466,
                        "decorators": [],
                        "name": "A",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 468,
                    "end": 488,
                    "decorators": [],
                    "name": "right",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 473,
                      "end": 488,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 475,
                        "end": 488,
                        "typeName": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 485,
                          "decorators": [],
                          "name": "Supervisor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 485,
                          "end": 488,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 486,
                              "end": 487,
                              "typeName": {
                                "type": "Identifier",
                                "start": 486,
                                "end": 487,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 489,
                  "end": 516,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 491,
                    "end": 516,
                    "typeName": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 501,
                      "decorators": [],
                      "name": "Supervisor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 501,
                      "end": 516,
                      "params": [
                        {
                          "type": "TSTupleType",
                          "start": 502,
                          "end": 515,
                          "elementTypes": [
                            {
                              "type": "TSTupleType",
                              "start": 503,
                              "end": 511,
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 504,
                                  "end": 506,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 504,
                                    "end": 506,
                                    "decorators": [],
                                    "name": "T0",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 508,
                                  "end": 510,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 508,
                                    "end": 510,
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 513,
                              "end": 514,
                              "typeName": {
                                "type": "Identifier",
                                "start": 513,
                                "end": 514,
                                "decorators": [],
                                "name": "A",
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
                "body": {
                  "type": "BlockStatement",
                  "start": 517,
                  "end": 561,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 527,
                      "end": 555,
                      "argument": {
                        "type": "NewExpression",
                        "start": 534,
                        "end": 554,
                        "callee": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 541,
                          "decorators": [],
                          "name": "Zip",
                          "optional": false,
                          "typeAnnotation": null
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
                            "start": 548,
                            "end": 553,
                            "decorators": [],
                            "name": "right",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 577,
      "end": 618,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 588,
        "decorators": [],
        "name": "Assign",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 588,
        "end": 594,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 589,
            "end": 590,
            "name": {
              "type": "Identifier",
              "start": 589,
              "end": 590,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 593,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "U",
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
        "start": 597,
        "end": 617,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 597,
            "end": 613,
            "typeName": {
              "type": "Identifier",
              "start": 597,
              "end": 601,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 601,
              "end": 613,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 602,
                  "end": 603,
                  "typeName": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 603,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeOperator",
                  "start": 605,
                  "end": 612,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 611,
                    "end": 612,
                    "typeName": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 612,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 616,
            "end": 617,
            "typeName": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 620,
      "end": 670,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 626,
        "end": 630,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 630,
        "end": 633,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 631,
            "end": 632,
            "name": {
              "type": "Identifier",
              "start": 631,
              "end": 632,
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
        "start": 634,
        "end": 670,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 640,
            "end": 668,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 640,
              "end": 651,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 651,
              "end": 668,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 652,
                  "end": 663,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 659,
                    "end": 663,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 660,
                      "end": 663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 662,
                        "end": 663,
                        "typeName": {
                          "type": "Identifier",
                          "start": 662,
                          "end": 663,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                "start": 665,
                "end": 668,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 672,
      "end": 867,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 679,
        "end": 867,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 685,
          "end": 688,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 688,
          "end": 691,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 689,
              "end": 690,
              "name": {
                "type": "Identifier",
                "start": 689,
                "end": 690,
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
        "superClass": {
          "type": "Identifier",
          "start": 700,
          "end": 704,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 704,
          "end": 707,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 705,
              "end": 706,
              "typeName": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
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
          "start": 708,
          "end": 867,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 714,
              "end": 865,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 714,
                "end": 720,
                "decorators": [],
                "name": "update",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 720,
                "end": 865,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 722,
                  "end": 753,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 724,
                    "end": 753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 724,
                      "end": 727,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 727,
                      "end": 753,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 728,
                          "end": 752,
                          "typeName": {
                            "type": "Identifier",
                            "start": 728,
                            "end": 734,
                            "decorators": [],
                            "name": "Assign",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 734,
                            "end": 752,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 735,
                                "end": 736,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 735,
                                  "end": 736,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 738,
                                "end": 751,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 740,
                                    "end": 749,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 740,
                                      "end": 741,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 741,
                                      "end": 749,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 743,
                                        "end": 749
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 754,
                  "end": 865,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 764,
                      "end": 832,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 770,
                          "end": 831,
                          "id": {
                            "type": "Identifier",
                            "start": 770,
                            "end": 797,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 771,
                              "end": 797,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 773,
                                "end": 797,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 773,
                                  "end": 779,
                                  "decorators": [],
                                  "name": "Assign",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 779,
                                  "end": 797,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 780,
                                      "end": 781,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 780,
                                        "end": 781,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeLiteral",
                                      "start": 783,
                                      "end": 796,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 785,
                                          "end": 794,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 785,
                                            "end": 786,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 786,
                                            "end": 794,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 788,
                                              "end": 794
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 800,
                            "end": 831,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 800,
                              "end": 813,
                              "object": {
                                "type": "Identifier",
                                "start": 800,
                                "end": 806,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 807,
                                "end": 813,
                                "decorators": [],
                                "name": "assign",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 814,
                                "end": 820,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 814,
                                  "end": 818
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 819,
                                  "end": 820,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "ObjectExpression",
                                "start": 822,
                                "end": 830,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 824,
                                    "end": 828,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 824,
                                      "end": 825,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 827,
                                      "end": 828,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
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
                      "start": 841,
                      "end": 859,
                      "argument": {
                        "type": "NewExpression",
                        "start": 848,
                        "end": 858,
                        "callee": {
                          "type": "Identifier",
                          "start": 852,
                          "end": 855,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 856,
                            "end": 857,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
