reverseMappedIntersectionInference1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 609,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 100,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Results",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 18,
        "end": 99,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 28,
          "end": 35,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 34,
            "end": 35,
            "typeName": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 38,
          "end": 96,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 44,
              "end": 55,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "data",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 50,
                  "end": 54,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 53,
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 51,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 60,
              "end": 92,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 69,
                "decorators": [],
                "name": "onSuccess",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 69,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 71,
                  "end": 91,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 72,
                      "end": 82,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 76,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 78,
                          "end": 82,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 80,
                            "end": 81,
                            "typeName": {
                              "type": "Identifier",
                              "start": 80,
                              "end": 81,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 78,
                            "end": 79,
                            "typeName": {
                              "type": "Identifier",
                              "start": 78,
                              "end": 79,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 87,
                      "end": 91
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 102,
      "end": 200,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 113,
        "decorators": [],
        "name": "Errors",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 119,
        "end": 199,
        "constraint": {
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
              "name": "E",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 139,
          "end": 196,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 145,
              "end": 157,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 150,
                "decorators": [],
                "name": "error",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 152,
                  "end": 156,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 153,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 162,
              "end": 192,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 162,
                "end": 169,
                "decorators": [],
                "name": "onError",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 169,
                "end": 191,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 171,
                  "end": 191,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 172,
                      "end": 182,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 176,
                        "end": 182,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 178,
                          "end": 182,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 180,
                            "end": 181,
                            "typeName": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 181,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 178,
                            "end": 179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "decorators": [],
                              "name": "E",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 187,
                      "end": 191
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 202,
      "end": 279,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 231,
        "decorators": [],
        "name": "withKeyedObj",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 268,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 244,
            "end": 268,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 246,
              "end": 268,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 246,
                  "end": 256,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 253,
                    "end": 256,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 254,
                        "end": 255,
                        "typeName": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 253,
                    "decorators": [],
                    "name": "Results",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 259,
                  "end": 268,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 265,
                    "end": 268,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 266,
                        "end": 267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "decorators": [],
                          "name": "E",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 265,
                    "decorators": [],
                    "name": "Errors",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 270,
        "end": 278,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 272,
          "end": 278,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 273,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 276,
              "end": 277,
              "typeName": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "E",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 231,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 232,
            "end": 233,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 235,
            "end": 236,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 607,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 290,
            "decorators": [],
            "name": "res",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 293,
            "end": 607,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 306,
                "end": 606,
                "properties": [
                  {
                    "type": "Property",
                    "start": 310,
                    "end": 455,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 311,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 313,
                      "end": 455,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 319,
                          "end": 330,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 319,
                            "end": 323,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 325,
                            "end": 330,
                            "raw": "\"foo\"",
                            "value": "foo"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 336,
                          "end": 382,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 345,
                            "decorators": [],
                            "name": "onSuccess",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 347,
                            "end": 382,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 360,
                              "end": 382,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 368,
                                  "end": 376,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 368,
                                    "end": 375,
                                    "decorators": [],
                                    "name": "dataArg",
                                    "optional": false
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
                                "start": 348,
                                "end": 355,
                                "decorators": [],
                                "name": "dataArg",
                                "optional": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 388,
                          "end": 398,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 393,
                            "decorators": [],
                            "name": "error",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 395,
                            "end": 398,
                            "raw": "404",
                            "value": 404
                          }
                        },
                        {
                          "type": "Property",
                          "start": 404,
                          "end": 450,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 411,
                            "decorators": [],
                            "name": "onError",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 413,
                            "end": 450,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 427,
                              "end": 450,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 435,
                                  "end": 444,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 435,
                                    "end": 443,
                                    "decorators": [],
                                    "name": "errorArg",
                                    "optional": false
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
                                "start": 414,
                                "end": 422,
                                "decorators": [],
                                "name": "errorArg",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 459,
                    "end": 603,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 460,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 462,
                      "end": 603,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 468,
                          "end": 478,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 468,
                            "end": 472,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 474,
                            "end": 478,
                            "raw": "true",
                            "value": true
                          }
                        },
                        {
                          "type": "Property",
                          "start": 484,
                          "end": 530,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 484,
                            "end": 493,
                            "decorators": [],
                            "name": "onSuccess",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 495,
                            "end": 530,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 508,
                              "end": 530,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 516,
                                  "end": 524,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 516,
                                    "end": 523,
                                    "decorators": [],
                                    "name": "dataArg",
                                    "optional": false
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
                                "start": 496,
                                "end": 503,
                                "decorators": [],
                                "name": "dataArg",
                                "optional": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 536,
                          "end": 546,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 536,
                            "end": 541,
                            "decorators": [],
                            "name": "error",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 543,
                            "end": 546,
                            "raw": "500",
                            "value": 500
                          }
                        },
                        {
                          "type": "Property",
                          "start": 552,
                          "end": 598,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 552,
                            "end": 559,
                            "decorators": [],
                            "name": "onError",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 561,
                            "end": 598,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 575,
                              "end": 598,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 583,
                                  "end": 592,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 583,
                                    "end": 591,
                                    "decorators": [],
                                    "name": "errorArg",
                                    "optional": false
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
                                "start": 562,
                                "end": 570,
                                "decorators": [],
                                "name": "errorArg",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 293,
              "end": 305,
              "decorators": [],
              "name": "withKeyedObj",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
