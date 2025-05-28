__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 559,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Tags",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P",
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
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
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
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 332,
            "decorators": [],
            "name": "typeTags",
            "optional": false,
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
                        "decorators": [],
                        "name": "I",
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
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
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
                                "key": {
                                  "type": "Identifier",
                                  "start": 139,
                                  "end": 142,
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "Tags",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
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
                                            "decorators": [],
                                            "name": "Extract",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                                  "decorators": [],
                                                  "name": "I",
                                                  "optional": false,
                                                  "typeAnnotation": null
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
                                                      "decorators": [],
                                                      "name": "_tag",
                                                      "optional": false,
                                                      "typeAnnotation": null
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
                                                          "decorators": [],
                                                          "name": "Tag",
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
                                              }
                                            ]
                                          }
                                        }
                                      }
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
                                "optional": false,
                                "readonly": true
                              },
                              {
                                "type": "TSMappedType",
                                "start": 240,
                                "end": 302,
                                "key": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 255,
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 259,
                                  "end": 292,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 266,
                                    "decorators": [],
                                    "name": "Exclude",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                            "decorators": [],
                                            "name": "P",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                          "decorators": [],
                                          "name": "Tags",
                                          "optional": false,
                                          "typeAnnotation": null
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
                                                "decorators": [],
                                                "name": "I",
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
                                },
                                "nameType": null,
                                "typeAnnotation": {
                                  "type": "TSNeverKeyword",
                                  "start": 295,
                                  "end": 300
                                },
                                "optional": false,
                                "readonly": true
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
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
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
                              "decorators": [],
                              "name": "P",
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Value",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "_tag",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "_tag",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 414,
            "decorators": [],
            "name": "matcher",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 434,
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 425,
              "decorators": [],
              "name": "typeTags",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "matcher",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 452,
                  "end": 462,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 459,
                    "end": 462,
                    "object": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 460,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 466,
                "end": 482,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 467,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 469,
                  "end": 482,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 476,
                    "end": 482,
                    "value": "fail",
                    "raw": "\"fail\""
                  },
                  "id": null,
                  "generator": false
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
          "decorators": [],
          "name": "matcher",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 504,
                  "end": 514,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 511,
                    "end": 514,
                    "object": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 512,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 518,
                "end": 534,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 521,
                  "end": 534,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 528,
                    "end": 534,
                    "value": "fail",
                    "raw": "\"fail\""
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 538,
                "end": 554,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 539,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 541,
                  "end": 554,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 542,
                      "end": 543,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 548,
                    "end": 554,
                    "value": "fail",
                    "raw": "\"fail\""
                  },
                  "id": null,
                  "generator": false
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
