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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "decorators": [],
        "name": "Client",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 35,
        "end": 41
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 64,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 82,
        "decorators": [],
        "name": "UpdatedClient",
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 96,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  }
                }
              }
            ]
          }
        ]
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 566,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 566,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 120,
            "end": 566,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 132,
              "decorators": [],
              "name": "createClient",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 135,
              "end": 566,
              "async": false,
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
                        "raw": "null",
                        "value": null,
                        "regex": null,
                        "bigint": null
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 295,
                  "decorators": [],
                  "name": "clientDef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 292,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 294,
                      "end": 295,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "extendsType": {
                    "type": "TSConstructorType",
                    "start": 309,
                    "end": 340,
                    "abstract": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 314,
                        "end": 328,
                        "argument": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 321,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
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
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 340,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  "falseType": {
                    "type": "TSMappedType",
                    "start": 385,
                    "end": 538,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 399,
                      "end": 406,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 405,
                        "end": 406,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 406,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "nameType": null,
                    "optional": false,
                    "readonly": null,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 409,
                      "end": 532,
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "start": 409,
                        "end": 413,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 411,
                          "end": 412,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 411,
                            "end": 412,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 409,
                          "end": 410,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 410,
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "start": 422,
                        "end": 453,
                        "abstract": false,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 427,
                            "end": 441,
                            "argument": {
                              "type": "Identifier",
                              "start": 430,
                              "end": 434,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
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
                              "const": false,
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 452,
                                "end": 453,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "out": false
                            }
                          }
                        },
                        "typeParameters": null
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 527,
                        "end": 532
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 500,
                        "end": 516,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 513,
                          "end": 516,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 514,
                              "end": 515,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 514,
                                "end": 515,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 513,
                          "decorators": [],
                          "name": "UpdatedClient",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 361,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 358,
                      "end": 361,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 359,
                          "end": 360,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 358,
                      "decorators": [],
                      "name": "UpdatedClient",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
                    "const": false,
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
                          "params": [
                            {
                              "type": "RestElement",
                              "start": 161,
                              "end": 175,
                              "argument": {
                                "type": "Identifier",
                                "start": 164,
                                "end": 168,
                                "decorators": [],
                                "name": "args",
                                "optional": false,
                                "typeAnnotation": null
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 186,
                                "decorators": [],
                                "name": "Client",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 210,
                          "end": 256,
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
                                "params": [
                                  {
                                    "type": "RestElement",
                                    "start": 230,
                                    "end": 244,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 233,
                                      "end": 237,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 249,
                                      "end": 255,
                                      "decorators": [],
                                      "name": "Client",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": null
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 216,
                            "decorators": [],
                            "name": "Record",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "D",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
