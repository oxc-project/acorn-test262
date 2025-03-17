__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Tags",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 26,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "P",
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
        "type": "TSConditionalType",
        "start": 33,
        "end": 73,
        "checkType": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 43,
          "end": 61,
          "typeName": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 49,
            "end": 61,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSInferType",
                "start": 53,
                "end": 60,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 60,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "X",
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
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 65,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 68,
          "end": 73
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 332,
            "name": "typeTags",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 332,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 100,
                "end": 332,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 100,
                  "end": 103,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 101,
                      "end": 102,
                      "name": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "name": "I",
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 332,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 109,
                    "end": 332,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 109,
                      "end": 305,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 113,
                          "end": 302,
                          "name": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSIntersectionType",
                            "start": 123,
                            "end": 302,
                            "types": [
                              {
                                "type": "TSMappedType",
                                "start": 123,
                                "end": 237,
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "start": 139,
                                  "end": 170,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 139,
                                    "end": 142,
                                    "name": "Tag",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSIntersectionType",
                                    "start": 146,
                                    "end": 170,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 146,
                                        "end": 161,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 146,
                                          "end": 150,
                                          "name": "Tags",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 150,
                                          "end": 161,
                                          "params": [
                                            {
                                              "type": "TSLiteralType",
                                              "start": 151,
                                              "end": 157,
                                              "literal": {
                                                "type": "Literal",
                                                "start": 151,
                                                "end": 157,
                                                "value": "_tag",
                                                "raw": "\"_tag\""
                                              }
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "start": 159,
                                              "end": 160,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 159,
                                                "end": 160,
                                                "name": "I",
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
                                        "type": "TSStringKeyword",
                                        "start": 164,
                                        "end": 170
                                      }
                                    ]
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                "nameType": null,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 173,
                                  "end": 232,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 181,
                                      "end": 218,
                                      "name": "_",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 182,
                                        "end": 218,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 184,
                                          "end": 218,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 184,
                                            "end": 191,
                                            "name": "Extract",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 191,
                                            "end": 218,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 192,
                                                "end": 193,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 192,
                                                  "end": 193,
                                                  "name": "I",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              },
                                              {
                                                "type": "TSTypeLiteral",
                                                "start": 195,
                                                "end": 217,
                                                "members": [
                                                  {
                                                    "type": "TSPropertySignature",
                                                    "start": 197,
                                                    "end": 215,
                                                    "computed": false,
                                                    "optional": false,
                                                    "readonly": true,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 206,
                                                      "end": 210,
                                                      "name": "_tag",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "start": 210,
                                                      "end": 215,
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "start": 212,
                                                        "end": 215,
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 212,
                                                          "end": 215,
                                                          "name": "Tag",
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
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 226,
                                    "end": 232,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 229,
                                      "end": 232
                                    }
                                  }
                                },
                                "optional": null,
                                "readonly": true,
                                "constraint": {
                                  "type": "TSIntersectionType",
                                  "start": 146,
                                  "end": 170,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 146,
                                      "end": 161,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 146,
                                        "end": 150,
                                        "name": "Tags",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 150,
                                        "end": 161,
                                        "params": [
                                          {
                                            "type": "TSLiteralType",
                                            "start": 151,
                                            "end": 157,
                                            "literal": {
                                              "type": "Literal",
                                              "start": 151,
                                              "end": 157,
                                              "value": "_tag",
                                              "raw": "\"_tag\""
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 159,
                                            "end": 160,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 159,
                                              "end": 160,
                                              "name": "I",
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
                                      "type": "TSStringKeyword",
                                      "start": 164,
                                      "end": 170
                                    }
                                  ]
                                },
                                "key": {
                                  "type": "Identifier",
                                  "start": 139,
                                  "end": 142,
                                  "name": "Tag",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSMappedType",
                                "start": 240,
                                "end": 302,
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "start": 252,
                                  "end": 292,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 252,
                                    "end": 255,
                                    "name": "Tag",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 259,
                                    "end": 292,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 259,
                                      "end": 266,
                                      "name": "Exclude",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 266,
                                      "end": 292,
                                      "params": [
                                        {
                                          "type": "TSTypeOperator",
                                          "start": 267,
                                          "end": 274,
                                          "operator": "keyof",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 273,
                                            "end": 274,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 273,
                                              "end": 274,
                                              "name": "P",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "start": 276,
                                          "end": 291,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 276,
                                            "end": 280,
                                            "name": "Tags",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 280,
                                            "end": 291,
                                            "params": [
                                              {
                                                "type": "TSLiteralType",
                                                "start": 281,
                                                "end": 287,
                                                "literal": {
                                                  "type": "Literal",
                                                  "start": 281,
                                                  "end": 287,
                                                  "value": "_tag",
                                                  "raw": "\"_tag\""
                                                }
                                              },
                                              {
                                                "type": "TSTypeReference",
                                                "start": 289,
                                                "end": 290,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 289,
                                                  "end": 290,
                                                  "name": "I",
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
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                "nameType": null,
                                "typeAnnotation": {
                                  "type": "TSNeverKeyword",
                                  "start": 295,
                                  "end": 300
                                },
                                "optional": null,
                                "readonly": true,
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 259,
                                  "end": 292,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 266,
                                    "name": "Exclude",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 266,
                                    "end": 292,
                                    "params": [
                                      {
                                        "type": "TSTypeOperator",
                                        "start": 267,
                                        "end": 274,
                                        "operator": "keyof",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 273,
                                          "end": 274,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 273,
                                            "end": 274,
                                            "name": "P",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 276,
                                        "end": 291,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 276,
                                          "end": 280,
                                          "name": "Tags",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 280,
                                          "end": 291,
                                          "params": [
                                            {
                                              "type": "TSLiteralType",
                                              "start": 281,
                                              "end": 287,
                                              "literal": {
                                                "type": "Literal",
                                                "start": 281,
                                                "end": 287,
                                                "value": "_tag",
                                                "raw": "\"_tag\""
                                              }
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "start": 289,
                                              "end": 290,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 289,
                                                "end": 290,
                                                "name": "I",
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
                                "key": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 255,
                                  "name": "Tag",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 318,
                        "name": "fields",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 315,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 317,
                            "end": 318,
                            "typeName": {
                              "type": "Identifier",
                              "start": 317,
                              "end": 318,
                              "name": "P",
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
                      "start": 322,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 325,
                        "end": 332
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 345,
        "name": "Value",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 348,
        "end": 399,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 348,
            "end": 372,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 350,
                "end": 360,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "name": "_tag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 354,
                  "end": 359,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 356,
                    "end": 359,
                    "literal": {
                      "type": "Literal",
                      "start": 356,
                      "end": 359,
                      "value": "A",
                      "raw": "\"A\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 361,
                "end": 370,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 370,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 364,
                    "end": 370
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 375,
            "end": 399,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 377,
                "end": 387,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 381,
                  "name": "_tag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 381,
                  "end": 386,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 383,
                    "end": 386,
                    "literal": {
                      "type": "Literal",
                      "start": 383,
                      "end": 386,
                      "value": "B",
                      "raw": "\"B\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 388,
                "end": 397,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 389,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 391,
                    "end": 397
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
      "type": "VariableDeclaration",
      "start": 401,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 414,
            "name": "matcher",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 434,
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 425,
              "name": "typeTags",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 425,
              "end": 432,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 426,
                  "end": 431,
                  "typeName": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 431,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 437,
      "end": 487,
      "expression": {
        "type": "CallExpression",
        "start": 437,
        "end": 486,
        "callee": {
          "type": "Identifier",
          "start": 437,
          "end": 444,
          "name": "matcher",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 445,
            "end": 485,
            "properties": [
              {
                "type": "Property",
                "start": 449,
                "end": 462,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 452,
                  "end": 462,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 459,
                    "end": 462,
                    "object": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 460,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 466,
                "end": 482,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 467,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 469,
                  "end": 482,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 476,
                    "end": 482,
                    "value": "fail",
                    "raw": "\"fail\""
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 489,
      "end": 559,
      "expression": {
        "type": "CallExpression",
        "start": 489,
        "end": 558,
        "callee": {
          "type": "Identifier",
          "start": 489,
          "end": 496,
          "name": "matcher",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 497,
            "end": 557,
            "properties": [
              {
                "type": "Property",
                "start": 501,
                "end": 514,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 504,
                  "end": 514,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 511,
                    "end": 514,
                    "object": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 512,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 518,
                "end": 534,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 521,
                  "end": 534,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 528,
                    "end": 534,
                    "value": "fail",
                    "raw": "\"fail\""
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 538,
                "end": 554,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 539,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 541,
                  "end": 554,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 542,
                      "end": 543,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 548,
                    "end": 554,
                    "value": "fail",
                    "raw": "\"fail\""
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
