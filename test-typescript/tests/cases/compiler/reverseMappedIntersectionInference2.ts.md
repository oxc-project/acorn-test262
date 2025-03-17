__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 651,
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
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 38,
          "end": 96,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 44,
              "end": 55,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 51,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 60,
              "end": 92,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 69,
                "decorators": [],
                "name": "onSuccess",
                "optional": false,
                "typeAnnotation": null
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 80,
                              "end": 81,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 78,
                            "end": 79,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 78,
                              "end": 79,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                  },
                  "typeParameters": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 139,
          "end": 196,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 145,
              "end": 157,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 150,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 153,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 162,
              "end": 192,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 162,
                "end": 169,
                "decorators": [],
                "name": "onError",
                "optional": false,
                "typeAnnotation": null
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 181,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 178,
                            "end": 179,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null
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
                  },
                  "typeParameters": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 202,
      "end": 326,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 232,
        "decorators": [],
        "name": "withTupleLike",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 288,
          "end": 315,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 291,
            "end": 315,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 293,
              "end": 315,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 293,
                  "end": 303,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 300,
                    "end": 303,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 301,
                        "end": 302,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 302,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 300,
                    "decorators": [],
                    "name": "Results",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 306,
                  "end": 315,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 312,
                    "end": 315,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 313,
                        "end": 314,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 312,
                    "decorators": [],
                    "name": "Errors",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 317,
        "end": 325,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 319,
          "end": 325,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 320,
              "end": 321,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 320,
                "end": 321,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 323,
              "end": 324,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 284,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 257,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 243,
              "end": 257,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 245,
                  "end": 255,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 245,
                    "end": 246,
                    "raw": "0",
                    "value": 0
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 255,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 248,
                      "end": 255
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 283,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 269,
              "end": 283,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 271,
                  "end": 281,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 271,
                    "end": 272,
                    "raw": "0",
                    "value": 0
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 272,
                    "end": 281,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 274,
                      "end": 281
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "decorators": [],
              "name": "E",
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
      "start": 328,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 649,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 337,
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 340,
            "end": 649,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 354,
                "end": 648,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 358,
                    "end": 500,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 364,
                        "end": 375,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 368,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 370,
                          "end": 375,
                          "raw": "\"foo\"",
                          "value": "foo"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 381,
                        "end": 427,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 381,
                          "end": 390,
                          "decorators": [],
                          "name": "onSuccess",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 392,
                          "end": 427,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 405,
                            "end": 427,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 413,
                                "end": 421,
                                "directive": null,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 413,
                                  "end": 420,
                                  "decorators": [],
                                  "name": "dataArg",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 393,
                              "end": 400,
                              "decorators": [],
                              "name": "dataArg",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 433,
                        "end": 443,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 438,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 440,
                          "end": 443,
                          "raw": "404",
                          "value": 404
                        }
                      },
                      {
                        "type": "Property",
                        "start": 449,
                        "end": 495,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 456,
                          "decorators": [],
                          "name": "onError",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 458,
                          "end": 495,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 472,
                            "end": 495,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 480,
                                "end": 489,
                                "directive": null,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 480,
                                  "end": 488,
                                  "decorators": [],
                                  "name": "errorArg",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 459,
                              "end": 467,
                              "decorators": [],
                              "name": "errorArg",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 504,
                    "end": 645,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 510,
                        "end": 520,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 510,
                          "end": 514,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 516,
                          "end": 520,
                          "raw": "true",
                          "value": true
                        }
                      },
                      {
                        "type": "Property",
                        "start": 526,
                        "end": 572,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 535,
                          "decorators": [],
                          "name": "onSuccess",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 537,
                          "end": 572,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 550,
                            "end": 572,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 558,
                                "end": 566,
                                "directive": null,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 558,
                                  "end": 565,
                                  "decorators": [],
                                  "name": "dataArg",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 538,
                              "end": 545,
                              "decorators": [],
                              "name": "dataArg",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 578,
                        "end": 588,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 583,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 585,
                          "end": 588,
                          "raw": "500",
                          "value": 500
                        }
                      },
                      {
                        "type": "Property",
                        "start": 594,
                        "end": 640,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 594,
                          "end": 601,
                          "decorators": [],
                          "name": "onError",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 603,
                          "end": 640,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 617,
                            "end": 640,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 625,
                                "end": 634,
                                "directive": null,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 625,
                                  "end": 633,
                                  "decorators": [],
                                  "name": "errorArg",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "start": 604,
                              "end": 612,
                              "decorators": [],
                              "name": "errorArg",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 340,
              "end": 353,
              "decorators": [],
              "name": "withTupleLike",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
