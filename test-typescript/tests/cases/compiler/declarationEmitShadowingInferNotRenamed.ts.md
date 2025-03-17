__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 566,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "name": "Client",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 35,
        "end": 41
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 64,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 82,
        "name": "UpdatedClient",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 88,
        "end": 105,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 88,
            "end": 89,
            "typeName": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 92,
            "end": 105,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 93,
                "end": 104,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 96,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 566,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 566,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 120,
            "end": 566,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 132,
              "name": "createClient",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 135,
              "end": 566,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 295,
                  "name": "clientDef",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 292,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 294,
                      "end": 295,
                      "typeName": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
                        "name": "D",
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
                "start": 542,
                "end": 566,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 546,
                    "end": 564,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 553,
                      "end": 564,
                      "expression": {
                        "type": "Literal",
                        "start": 553,
                        "end": 557,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 561,
                        "end": 564
                      }
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 135,
                "end": 279,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 139,
                    "end": 256,
                    "name": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSUnionType",
                      "start": 153,
                      "end": 256,
                      "types": [
                        {
                          "type": "TSConstructorType",
                          "start": 156,
                          "end": 186,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "RestElement",
                              "start": 161,
                              "end": 175,
                              "argument": {
                                "type": "Identifier",
                                "start": 164,
                                "end": 168,
                                "name": "args",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 168,
                                "end": 175,
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 170,
                                  "end": 175,
                                  "elementType": {
                                    "type": "TSAnyKeyword",
                                    "start": 170,
                                    "end": 173
                                  }
                                }
                              },
                              "value": null
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 177,
                            "end": 186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 180,
                              "end": 186,
                              "typeName": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 186,
                                "name": "Client",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 210,
                          "end": 256,
                          "typeName": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 216,
                            "name": "Record",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 216,
                            "end": 256,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 217,
                                "end": 223
                              },
                              {
                                "type": "TSConstructorType",
                                "start": 225,
                                "end": 255,
                                "abstract": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "RestElement",
                                    "start": 230,
                                    "end": 244,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 233,
                                      "end": 237,
                                      "name": "args",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "decorators": [],
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 237,
                                      "end": 244,
                                      "typeAnnotation": {
                                        "type": "TSArrayType",
                                        "start": 239,
                                        "end": 244,
                                        "elementType": {
                                          "type": "TSAnyKeyword",
                                          "start": 239,
                                          "end": 242
                                        }
                                      }
                                    },
                                    "value": null
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 246,
                                  "end": 255,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 249,
                                    "end": 255,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 249,
                                      "end": 255,
                                      "name": "Client",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ]
                          }
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 297,
                "end": 538,
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "start": 299,
                  "end": 538,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSConstructorType",
                    "start": 309,
                    "end": 340,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 314,
                        "end": 328,
                        "argument": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 321,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 321,
                          "end": 328,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 323,
                            "end": 328,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 323,
                              "end": 326
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 330,
                      "end": 340,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 333,
                        "end": 340,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 339,
                          "end": 340,
                          "name": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 340,
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
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 361,
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 358,
                      "name": "UpdatedClient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 358,
                      "end": 361,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 359,
                          "end": 360,
                          "typeName": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
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
                  "falseType": {
                    "type": "TSMappedType",
                    "start": 385,
                    "end": 538,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 394,
                      "end": 406,
                      "name": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 399,
                        "end": 406,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 405,
                          "end": 406,
                          "typeName": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 406,
                            "name": "D",
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
                      "type": "TSConditionalType",
                      "start": 409,
                      "end": 532,
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "start": 409,
                        "end": 413,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 409,
                          "end": 410,
                          "typeName": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 410,
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 411,
                          "end": 412,
                          "typeName": {
                            "type": "Identifier",
                            "start": 411,
                            "end": 412,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "start": 422,
                        "end": 453,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 427,
                            "end": 441,
                            "argument": {
                              "type": "Identifier",
                              "start": 430,
                              "end": 434,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 434,
                              "end": 441,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 436,
                                "end": 441,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 436,
                                  "end": 439
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 443,
                          "end": 453,
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "start": 446,
                            "end": 453,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 452,
                              "end": 453,
                              "name": {
                                "type": "Identifier",
                                "start": 452,
                                "end": 453,
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
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 500,
                        "end": 516,
                        "typeName": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 513,
                          "name": "UpdatedClient",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 513,
                          "end": 516,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 514,
                              "end": 515,
                              "typeName": {
                                "type": "Identifier",
                                "start": 514,
                                "end": 515,
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
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 527,
                        "end": 532
                      }
                    },
                    "optional": null,
                    "readonly": null,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 399,
                      "end": 406,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 405,
                        "end": 406,
                        "typeName": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 406,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
