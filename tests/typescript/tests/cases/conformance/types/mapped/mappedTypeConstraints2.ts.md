__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2253,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Mapped1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
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
        "start": 33,
        "end": 55,
        "key": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 42,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 45,
          "end": 53,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 47,
              "end": 51,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "P",
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
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 58,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 69,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
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
          "start": 88,
          "end": 103,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 103,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 100,
                "decorators": [],
                "name": "Mapped1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 100,
                "end": 103,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 101,
                    "end": 102,
                    "typeName": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "decorators": [],
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 105,
          "end": 111,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 111,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 111,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 150,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 148,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 136,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 128,
                      "end": 136,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 130,
                          "end": 134,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 131,
                            "end": 134,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 133,
                              "end": 134,
                              "typeName": {
                                "type": "Identifier",
                                "start": 133,
                                "end": 134,
                                "decorators": [],
                                "name": "K",
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
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 139,
                  "end": 147,
                  "object": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 142,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 146,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "decorators": [],
        "name": "Mapped2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
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
        "start": 185,
        "end": 220,
        "key": {
          "type": "Identifier",
          "start": 188,
          "end": 189,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 193,
          "end": 194,
          "typeName": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 198,
          "end": 207,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 198,
              "end": 204,
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 205,
              "end": 207,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 204,
              "end": 205,
              "typeName": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 210,
          "end": 218,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 212,
              "end": 216,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 213,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 215,
                  "end": 216,
                  "typeName": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "decorators": [],
                    "name": "P",
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
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 234,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 235,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 245,
              "end": 251
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
          "start": 253,
          "end": 268,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 268,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 258,
              "end": 268,
              "typeName": {
                "type": "Identifier",
                "start": 258,
                "end": 265,
                "decorators": [],
                "name": "Mapped2",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 270,
          "end": 284,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 284,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 275,
              "end": 284,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 275,
                  "end": 281,
                  "value": {
                    "raw": "get",
                    "cooked": "get"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 282,
                  "end": 284,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 281,
                  "end": 282,
                  "typeName": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 282,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 333,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 321,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 320,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 309,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 299,
                    "end": 309,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 301,
                      "end": 309,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 303,
                          "end": 307,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 304,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 304,
                            "end": 307,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 306,
                              "end": 307,
                              "typeName": {
                                "type": "Identifier",
                                "start": 306,
                                "end": 307,
                                "decorators": [],
                                "name": "K",
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
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 312,
                  "end": 320,
                  "object": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 315,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 319,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 347,
        "decorators": [],
        "name": "Mapped3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 347,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 348,
            "end": 364,
            "name": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 358,
              "end": 364
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
        "start": 368,
        "end": 406,
        "key": {
          "type": "Identifier",
          "start": 371,
          "end": 372,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 376,
          "end": 377,
          "typeName": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 381,
          "end": 393,
          "typeName": {
            "type": "Identifier",
            "start": 381,
            "end": 390,
            "decorators": [],
            "name": "Uppercase",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 390,
            "end": 393,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 391,
                "end": 392,
                "typeName": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 396,
          "end": 404,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 398,
              "end": 402,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 399,
                "end": 402,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 401,
                  "end": 402,
                  "typeName": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 402,
                    "decorators": [],
                    "name": "P",
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
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 409,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 420,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 438,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 437,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 431,
              "end": 437
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
          "start": 439,
          "end": 454,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 442,
            "end": 454,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 444,
              "end": 454,
              "typeName": {
                "type": "Identifier",
                "start": 444,
                "end": 451,
                "decorators": [],
                "name": "Mapped3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 451,
                "end": 454,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 452,
                    "end": 453,
                    "typeName": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 453,
                      "decorators": [],
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 456,
          "end": 473,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 473,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 473,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 470,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 470,
                "end": 473,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 471,
                    "end": 472,
                    "typeName": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 472,
                      "decorators": [],
                      "name": "K",
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 475,
        "end": 522,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 481,
            "end": 510,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 487,
                "end": 509,
                "id": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 498,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 488,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 490,
                      "end": 498,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 492,
                          "end": 496,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 493,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                "decorators": [],
                                "name": "K",
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
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 501,
                  "end": 509,
                  "object": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 504,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 508,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 524,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 536,
        "decorators": [],
        "name": "Mapped4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 536,
        "end": 560,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 537,
            "end": 559,
            "name": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTemplateLiteralType",
              "start": 547,
              "end": 559,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 547,
                  "end": 551,
                  "value": {
                    "raw": "_",
                    "cooked": "_"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 557,
                  "end": 559,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 551,
                  "end": 557
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 563,
        "end": 581,
        "key": {
          "type": "Identifier",
          "start": 568,
          "end": 569,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 573,
          "end": 574,
          "typeName": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 577,
          "end": 578,
          "typeName": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 584,
      "end": 697,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 595,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 595,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 596,
            "end": 618,
            "name": {
              "type": "Identifier",
              "start": 596,
              "end": 597,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTemplateLiteralType",
              "start": 606,
              "end": 618,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 606,
                  "end": 610,
                  "value": {
                    "raw": "_",
                    "cooked": "_"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 616,
                  "end": 618,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
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
          "start": 620,
          "end": 635,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 623,
            "end": 635,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 625,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 625,
                "end": 632,
                "decorators": [],
                "name": "Mapped4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 632,
                "end": 635,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 633,
                    "end": 634,
                    "typeName": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
                      "decorators": [],
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 637,
          "end": 658,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 658,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 642,
              "end": 658,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 648,
                "end": 658,
                "typeName": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 655,
                  "decorators": [],
                  "name": "Mapped4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 655,
                  "end": 658,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 656,
                      "end": 657,
                      "typeName": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 657,
                        "decorators": [],
                        "name": "K",
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
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 697,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 664,
            "end": 695,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 668,
                "end": 694,
                "id": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 683,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 669,
                    "end": 683,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 671,
                      "end": 683,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 671,
                          "end": 675,
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 681,
                          "end": 683,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 675,
                          "end": 681
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 686,
                  "end": 694,
                  "object": {
                    "type": "Identifier",
                    "start": 686,
                    "end": 689,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 693,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 699,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 704,
        "end": 711,
        "decorators": [],
        "name": "Mapped5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 711,
        "end": 729,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 712,
            "end": 728,
            "name": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 722,
              "end": 728
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
        "start": 732,
        "end": 788,
        "key": {
          "type": "Identifier",
          "start": 737,
          "end": 738,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 742,
          "end": 743,
          "typeName": {
            "type": "Identifier",
            "start": 742,
            "end": 743,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 747,
          "end": 781,
          "checkType": {
            "type": "TSTypeReference",
            "start": 747,
            "end": 748,
            "typeName": {
              "type": "Identifier",
              "start": 747,
              "end": 748,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 757,
            "end": 769,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 757,
                "end": 761,
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 767,
                "end": 769,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 772,
            "end": 773,
            "typeName": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 776,
            "end": 781
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 784,
          "end": 785,
          "typeName": {
            "type": "Identifier",
            "start": 784,
            "end": 785,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 791,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 800,
        "end": 802,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 802,
        "end": 820,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 803,
            "end": 819,
            "name": {
              "type": "Identifier",
              "start": 803,
              "end": 804,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 813,
              "end": 819
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
          "start": 821,
          "end": 836,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 824,
            "end": 836,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 826,
              "end": 836,
              "typeName": {
                "type": "Identifier",
                "start": 826,
                "end": 833,
                "decorators": [],
                "name": "Mapped5",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 833,
                "end": 836,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 834,
                    "end": 835,
                    "typeName": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 835,
                      "decorators": [],
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 838,
          "end": 859,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 841,
            "end": 859,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 843,
              "end": 859,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 849,
                "end": 859,
                "typeName": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 856,
                  "decorators": [],
                  "name": "Mapped5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 856,
                  "end": 859,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 857,
                      "end": 858,
                      "typeName": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 858,
                        "decorators": [],
                        "name": "K",
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
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 861,
        "end": 898,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 865,
            "end": 896,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 869,
                "end": 895,
                "id": {
                  "type": "Identifier",
                  "start": 869,
                  "end": 884,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 870,
                    "end": 884,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 872,
                      "end": 884,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 872,
                          "end": 876,
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 882,
                          "end": 884,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 887,
                  "end": 895,
                  "object": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 890,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 894,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 946,
      "end": 1009,
      "id": {
        "type": "Identifier",
        "start": 951,
        "end": 958,
        "decorators": [],
        "name": "Mapped6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 958,
        "end": 976,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 959,
            "end": 975,
            "name": {
              "type": "Identifier",
              "start": 959,
              "end": 960,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 969,
              "end": 975
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
        "start": 979,
        "end": 1008,
        "key": {
          "type": "Identifier",
          "start": 984,
          "end": 985,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 989,
          "end": 990,
          "typeName": {
            "type": "Identifier",
            "start": 989,
            "end": 990,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 994,
          "end": 1001,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 994,
              "end": 998,
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 999,
              "end": 1001,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 998,
              "end": 999,
              "typeName": {
                "type": "Identifier",
                "start": 998,
                "end": 999,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1004,
          "end": 1005,
          "typeName": {
            "type": "Identifier",
            "start": 1004,
            "end": 1005,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1011,
      "end": 1127,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1022,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1022,
        "end": 1040,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1023,
            "end": 1039,
            "name": {
              "type": "Identifier",
              "start": 1023,
              "end": 1024,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1033,
              "end": 1039
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
          "start": 1041,
          "end": 1056,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1056,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1046,
              "end": 1056,
              "typeName": {
                "type": "Identifier",
                "start": 1046,
                "end": 1053,
                "decorators": [],
                "name": "Mapped6",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1053,
                "end": 1056,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1054,
                    "end": 1055,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1054,
                      "end": 1055,
                      "decorators": [],
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 1058,
          "end": 1079,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1061,
            "end": 1079,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1063,
              "end": 1079,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1069,
                "end": 1079,
                "typeName": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1076,
                  "decorators": [],
                  "name": "Mapped6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1076,
                  "end": 1079,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1077,
                      "end": 1078,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1077,
                        "end": 1078,
                        "decorators": [],
                        "name": "K",
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
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1081,
        "end": 1127,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1116,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1115,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1104,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1090,
                    "end": 1104,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 1092,
                      "end": 1104,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 1092,
                          "end": 1096,
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1102,
                          "end": 1104,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1096,
                          "end": 1102
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1107,
                  "end": 1115,
                  "object": {
                    "type": "Identifier",
                    "start": 1107,
                    "end": 1110,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1114,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1151,
      "end": 1238,
      "id": {
        "type": "Identifier",
        "start": 1156,
        "end": 1159,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1159,
        "end": 1177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1160,
            "end": 1176,
            "name": {
              "type": "Identifier",
              "start": 1160,
              "end": 1161,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1170,
              "end": 1176
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
        "start": 1180,
        "end": 1237,
        "key": {
          "type": "Identifier",
          "start": 1187,
          "end": 1196,
          "decorators": [],
          "name": "RemappedT",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 1200,
          "end": 1201,
          "typeName": {
            "type": "Identifier",
            "start": 1200,
            "end": 1201,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 1205,
          "end": 1222,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1205,
              "end": 1211,
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1220,
              "end": 1222,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1211,
              "end": 1220,
              "typeName": {
                "type": "Identifier",
                "start": 1211,
                "end": 1220,
                "decorators": [],
                "name": "RemappedT",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1225,
          "end": 1234,
          "typeName": {
            "type": "Identifier",
            "start": 1225,
            "end": 1234,
            "decorators": [],
            "name": "RemappedT",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1240,
      "end": 1311,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1246,
          "end": 1310,
          "id": {
            "type": "Identifier",
            "start": 1246,
            "end": 1249,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1252,
            "end": 1310,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1252,
              "end": 1270,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1253,
                  "end": 1269,
                  "name": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1254,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 1263,
                    "end": 1269
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
                "start": 1271,
                "end": 1275,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1272,
                  "end": 1275,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1274,
                    "end": 1275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1274,
                      "end": 1275,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1277,
                "end": 1288,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1280,
                  "end": 1288,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1282,
                    "end": 1288,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1282,
                      "end": 1285,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1285,
                      "end": 1288,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1286,
                          "end": 1287,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1286,
                            "end": 1287,
                            "decorators": [],
                            "name": "T",
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
              "start": 1289,
              "end": 1292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1291,
                "end": 1292,
                "typeName": {
                  "type": "Identifier",
                  "start": 1291,
                  "end": 1292,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "MemberExpression",
              "start": 1296,
              "end": 1310,
              "object": {
                "type": "Identifier",
                "start": 1296,
                "end": 1299,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "TemplateLiteral",
                "start": 1300,
                "end": 1309,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1300,
                    "end": 1306,
                    "value": {
                      "raw": "get",
                      "cooked": "get"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1307,
                    "end": 1309,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1307,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              "optional": false,
              "computed": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1394,
      "end": 1448,
      "id": {
        "type": "Identifier",
        "start": 1404,
        "end": 1410,
        "decorators": [],
        "name": "Bounds",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1411,
        "end": 1448,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1417,
            "end": 1429,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1417,
              "end": 1420,
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1420,
              "end": 1428,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1422,
                "end": 1428
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1434,
            "end": 1446,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1434,
              "end": 1437,
              "decorators": [],
              "name": "max",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1437,
              "end": 1445,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1439,
                "end": 1445
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
      "start": 1450,
      "end": 1554,
      "id": {
        "type": "Identifier",
        "start": 1455,
        "end": 1470,
        "decorators": [],
        "name": "NumericBoundsOf",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1470,
        "end": 1473,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1471,
            "end": 1472,
            "name": {
              "type": "Identifier",
              "start": 1471,
              "end": 1472,
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
        "type": "TSMappedType",
        "start": 1476,
        "end": 1554,
        "key": {
          "type": "Identifier",
          "start": 1483,
          "end": 1484,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1488,
          "end": 1495,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1494,
            "end": 1495,
            "typeName": {
              "type": "Identifier",
              "start": 1494,
              "end": 1495,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 1499,
          "end": 1542,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 1499,
            "end": 1503,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1499,
              "end": 1500,
              "typeName": {
                "type": "Identifier",
                "start": 1499,
                "end": 1500,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1501,
              "end": 1502,
              "typeName": {
                "type": "Identifier",
                "start": 1501,
                "end": 1502,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSUnionType",
            "start": 1512,
            "end": 1530,
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 1512,
                "end": 1518
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 1521,
                "end": 1530
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1533,
            "end": 1534,
            "typeName": {
              "type": "Identifier",
              "start": 1533,
              "end": 1534,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1537,
            "end": 1542
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1545,
          "end": 1551,
          "typeName": {
            "type": "Identifier",
            "start": 1545,
            "end": 1551,
            "decorators": [],
            "name": "Bounds",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1556,
      "end": 1915,
      "id": {
        "type": "Identifier",
        "start": 1565,
        "end": 1573,
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1573,
        "end": 1591,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1574,
            "end": 1590,
            "name": {
              "type": "Identifier",
              "start": 1574,
              "end": 1575,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1584,
              "end": 1590
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
          "start": 1592,
          "end": 1598,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1595,
            "end": 1598,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1597,
              "end": 1598,
              "typeName": {
                "type": "Identifier",
                "start": 1597,
                "end": 1598,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1600,
          "end": 1626,
          "decorators": [],
          "name": "bounds",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1606,
            "end": 1626,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1608,
              "end": 1626,
              "typeName": {
                "type": "Identifier",
                "start": 1608,
                "end": 1623,
                "decorators": [],
                "name": "NumericBoundsOf",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1623,
                "end": 1626,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1624,
                    "end": 1625,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1624,
                      "end": 1625,
                      "decorators": [],
                      "name": "T",
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1628,
        "end": 1915,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1634,
            "end": 1896,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 1639,
              "end": 1655,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1645,
                  "end": 1655,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 1645,
                    "end": 1655,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1646,
                        "end": 1649,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1651,
                        "end": 1654,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1659,
              "end": 1678,
              "callee": {
                "type": "MemberExpression",
                "start": 1659,
                "end": 1673,
                "object": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1665,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1666,
                  "end": 1673,
                  "decorators": [],
                  "name": "entries",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1674,
                  "end": 1677,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 1680,
              "end": 1896,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1690,
                  "end": 1751,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1696,
                      "end": 1750,
                      "id": {
                        "type": "Identifier",
                        "start": 1696,
                        "end": 1708,
                        "decorators": [],
                        "name": "boundsForKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1711,
                        "end": 1750,
                        "object": {
                          "type": "Identifier",
                          "start": 1711,
                          "end": 1717,
                          "decorators": [],
                          "name": "bounds",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "TSAsExpression",
                          "start": 1718,
                          "end": 1749,
                          "expression": {
                            "type": "Identifier",
                            "start": 1718,
                            "end": 1721,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeOperator",
                            "start": 1725,
                            "end": 1749,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1731,
                              "end": 1749,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1731,
                                "end": 1746,
                                "decorators": [],
                                "name": "NumericBoundsOf",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1746,
                                "end": 1749,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1747,
                                    "end": 1748,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1747,
                                      "end": 1748,
                                      "decorators": [],
                                      "name": "T",
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
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 1760,
                  "end": 1890,
                  "test": {
                    "type": "Identifier",
                    "start": 1764,
                    "end": 1776,
                    "decorators": [],
                    "name": "boundsForKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1778,
                    "end": 1890,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1792,
                        "end": 1826,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1798,
                            "end": 1825,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 1798,
                              "end": 1810,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1800,
                                  "end": 1803,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1800,
                                    "end": 1803,
                                    "decorators": [],
                                    "name": "min",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1800,
                                    "end": 1803,
                                    "decorators": [],
                                    "name": "min",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 1805,
                                  "end": 1808,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1805,
                                    "end": 1808,
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1805,
                                    "end": 1808,
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1813,
                              "end": 1825,
                              "decorators": [],
                              "name": "boundsForKey",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "IfStatement",
                        "start": 1839,
                        "end": 1880,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1843,
                          "end": 1865,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1843,
                            "end": 1852,
                            "left": {
                              "type": "Identifier",
                              "start": 1843,
                              "end": 1846,
                              "decorators": [],
                              "name": "min",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": ">",
                            "right": {
                              "type": "Identifier",
                              "start": 1849,
                              "end": 1852,
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "operator": "||",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 1856,
                            "end": 1865,
                            "left": {
                              "type": "Identifier",
                              "start": 1856,
                              "end": 1859,
                              "decorators": [],
                              "name": "max",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "start": 1862,
                              "end": 1865,
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "start": 1867,
                          "end": 1880,
                          "argument": {
                            "type": "Literal",
                            "start": 1874,
                            "end": 1879,
                            "value": false,
                            "raw": "false"
                          }
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1901,
            "end": 1913,
            "argument": {
              "type": "Literal",
              "start": 1908,
              "end": 1912,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1939,
      "end": 2025,
      "id": {
        "type": "Identifier",
        "start": 1944,
        "end": 1969,
        "decorators": [],
        "name": "ObjectWithUnderscoredKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1969,
        "end": 1987,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1970,
            "end": 1986,
            "name": {
              "type": "Identifier",
              "start": 1970,
              "end": 1971,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1980,
              "end": 1986
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
        "start": 1990,
        "end": 2024,
        "key": {
          "type": "Identifier",
          "start": 1997,
          "end": 1998,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 2002,
          "end": 2003,
          "typeName": {
            "type": "Identifier",
            "start": 2002,
            "end": 2003,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 2007,
          "end": 2014,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2007,
              "end": 2011,
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2012,
              "end": 2014,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2011,
              "end": 2012,
              "typeName": {
                "type": "Identifier",
                "start": 2011,
                "end": 2012,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 2017,
          "end": 2021,
          "literal": {
            "type": "Literal",
            "start": 2017,
            "end": 2021,
            "value": true,
            "raw": "true"
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2027,
      "end": 2253,
      "id": {
        "type": "Identifier",
        "start": 2036,
        "end": 2047,
        "decorators": [],
        "name": "genericTest",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2047,
        "end": 2065,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2048,
            "end": 2064,
            "name": {
              "type": "Identifier",
              "start": 2048,
              "end": 2049,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2058,
              "end": 2064
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
          "start": 2066,
          "end": 2121,
          "decorators": [],
          "name": "objectWithUnderscoredKeys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2091,
            "end": 2121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2093,
              "end": 2121,
              "typeName": {
                "type": "Identifier",
                "start": 2093,
                "end": 2118,
                "decorators": [],
                "name": "ObjectWithUnderscoredKeys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2118,
                "end": 2121,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2119,
                    "end": 2120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2119,
                      "end": 2120,
                      "decorators": [],
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 2123,
          "end": 2129,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2126,
            "end": 2129,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2128,
              "end": 2129,
              "typeName": {
                "type": "Identifier",
                "start": 2128,
                "end": 2129,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2131,
        "end": 2253,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2135,
            "end": 2199,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2141,
                "end": 2198,
                "id": {
                  "type": "Identifier",
                  "start": 2141,
                  "end": 2159,
                  "decorators": [],
                  "name": "shouldBeTrue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2153,
                    "end": 2159,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2155,
                      "end": 2159,
                      "literal": {
                        "type": "Literal",
                        "start": 2155,
                        "end": 2159,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2162,
                  "end": 2198,
                  "object": {
                    "type": "Identifier",
                    "start": 2162,
                    "end": 2187,
                    "decorators": [],
                    "name": "objectWithUnderscoredKeys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "start": 2188,
                    "end": 2197,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2188,
                        "end": 2192,
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2195,
                        "end": 2197,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2192,
                        "end": 2195,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
