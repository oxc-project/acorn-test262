__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2254,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "name": "Mapped1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 36,
          "end": 42,
          "name": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 41,
            "end": 42,
            "typeName": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "P",
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
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 42,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f1",
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
          "start": 88,
          "end": 103,
          "name": "obj",
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
                "name": "Mapped1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 105,
          "end": 111,
          "name": "key",
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
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 150,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 136,
                  "name": "x",
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "K",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 139,
                  "end": 147,
                  "object": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 142,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 146,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "name": "Mapped2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 188,
          "end": 194,
          "name": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 193,
            "end": 194,
            "typeName": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
                "cooked": "get",
                "raw": "get"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 205,
              "end": 207,
              "value": {
                "cooked": "",
                "raw": ""
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "P",
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
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 193,
          "end": 194,
          "typeName": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 188,
          "end": 189,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f2",
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
          "start": 253,
          "end": 268,
          "name": "obj",
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
                "name": "Mapped2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 270,
          "end": 284,
          "name": "key",
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
                    "cooked": "get",
                    "raw": "get"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 282,
                  "end": 284,
                  "value": {
                    "cooked": "",
                    "raw": ""
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 333,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 320,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 309,
                  "name": "x",
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "K",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 312,
                  "end": 320,
                  "object": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 315,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 319,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 347,
        "name": "Mapped3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 371,
          "end": 377,
          "name": {
            "type": "Identifier",
            "start": 371,
            "end": 372,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 377,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 381,
          "end": 393,
          "typeName": {
            "type": "Identifier",
            "start": 381,
            "end": 390,
            "name": "Uppercase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "P",
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
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 376,
          "end": 377,
          "typeName": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 371,
          "end": 372,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f3",
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
          "start": 439,
          "end": 454,
          "name": "obj",
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
                "name": "Mapped3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 456,
          "end": 473,
          "name": "key",
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
                "name": "Uppercase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 475,
        "end": 522,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 481,
            "end": 510,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 487,
                "end": 509,
                "id": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 498,
                  "name": "x",
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "K",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 501,
                  "end": 509,
                  "object": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 504,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 508,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 524,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 536,
        "name": "Mapped4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "cooked": "_",
                    "raw": "_"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 557,
                  "end": 559,
                  "value": {
                    "cooked": "",
                    "raw": ""
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 568,
          "end": 574,
          "name": {
            "type": "Identifier",
            "start": 568,
            "end": 569,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 573,
            "end": 574,
            "typeName": {
              "type": "Identifier",
              "start": 573,
              "end": 574,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 573,
          "end": 574,
          "typeName": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 568,
          "end": 569,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f4",
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
          "start": 620,
          "end": 635,
          "name": "obj",
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
                "name": "Mapped4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 637,
          "end": 658,
          "name": "key",
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
                  "name": "Mapped4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "K",
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 697,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 664,
            "end": 695,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 668,
                "end": 694,
                "id": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 683,
                  "name": "s",
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
                            "cooked": "_",
                            "raw": "_"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 681,
                          "end": 683,
                          "value": {
                            "cooked": "",
                            "raw": ""
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 686,
                  "end": 694,
                  "object": {
                    "type": "Identifier",
                    "start": 686,
                    "end": 689,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 693,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "cooked": "_",
                    "raw": "_"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 616,
                  "end": 618,
                  "value": {
                    "cooked": "",
                    "raw": ""
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 699,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 704,
        "end": 711,
        "name": "Mapped5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 737,
          "end": 743,
          "name": {
            "type": "Identifier",
            "start": 737,
            "end": 738,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 742,
            "end": 743,
            "typeName": {
              "type": "Identifier",
              "start": 742,
              "end": 743,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "cooked": "_",
                  "raw": "_"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 767,
                "end": 769,
                "value": {
                  "cooked": "",
                  "raw": ""
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 742,
          "end": 743,
          "typeName": {
            "type": "Identifier",
            "start": 742,
            "end": 743,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 737,
          "end": 738,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f5",
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
          "start": 821,
          "end": 836,
          "name": "obj",
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
                "name": "Mapped5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 838,
          "end": 859,
          "name": "key",
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
                  "name": "Mapped5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "K",
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 861,
        "end": 898,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 865,
            "end": 896,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 869,
                "end": 895,
                "id": {
                  "type": "Identifier",
                  "start": 869,
                  "end": 884,
                  "name": "s",
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
                            "cooked": "_",
                            "raw": "_"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 882,
                          "end": 884,
                          "value": {
                            "cooked": "",
                            "raw": ""
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 887,
                  "end": 895,
                  "object": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 890,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 894,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 946,
      "end": 1009,
      "id": {
        "type": "Identifier",
        "start": 951,
        "end": 958,
        "name": "Mapped6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 984,
          "end": 990,
          "name": {
            "type": "Identifier",
            "start": 984,
            "end": 985,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 989,
            "end": 990,
            "typeName": {
              "type": "Identifier",
              "start": 989,
              "end": 990,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
                "cooked": "_",
                "raw": "_"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 999,
              "end": 1001,
              "value": {
                "cooked": "",
                "raw": ""
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 989,
          "end": 990,
          "typeName": {
            "type": "Identifier",
            "start": 989,
            "end": 990,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 984,
          "end": 985,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f6",
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
          "start": 1041,
          "end": 1056,
          "name": "obj",
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
                "name": "Mapped6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 1058,
          "end": 1079,
          "name": "key",
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
                  "name": "Mapped6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "K",
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1081,
        "end": 1127,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1116,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1115,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1104,
                  "name": "s",
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
                            "cooked": "_",
                            "raw": "_"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1102,
                          "end": 1104,
                          "value": {
                            "cooked": "",
                            "raw": ""
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1107,
                  "end": 1115,
                  "object": {
                    "type": "Identifier",
                    "start": 1107,
                    "end": 1110,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1114,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1151,
      "end": 1238,
      "id": {
        "type": "Identifier",
        "start": 1156,
        "end": 1159,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1187,
          "end": 1201,
          "name": {
            "type": "Identifier",
            "start": 1187,
            "end": 1196,
            "name": "RemappedT",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 1200,
            "end": 1201,
            "typeName": {
              "type": "Identifier",
              "start": 1200,
              "end": 1201,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
                "cooked": "get",
                "raw": "get"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1220,
              "end": 1222,
              "value": {
                "cooked": "",
                "raw": ""
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
                "name": "RemappedT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "RemappedT",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 1200,
          "end": 1201,
          "typeName": {
            "type": "Identifier",
            "start": 1200,
            "end": 1201,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 1187,
          "end": 1196,
          "name": "RemappedT",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1240,
      "end": 1311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1246,
          "end": 1310,
          "id": {
            "type": "Identifier",
            "start": 1246,
            "end": 1249,
            "name": "get",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1252,
            "end": 1310,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1271,
                "end": 1275,
                "name": "t",
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
                      "name": "T",
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
                "start": 1277,
                "end": 1288,
                "name": "foo",
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
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
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
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 1296,
              "end": 1310,
              "object": {
                "type": "Identifier",
                "start": 1296,
                "end": 1299,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "TemplateLiteral",
                "start": 1300,
                "end": 1309,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1307,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1300,
                    "end": 1306,
                    "value": {
                      "cooked": "get",
                      "raw": "get"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1307,
                    "end": 1309,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ]
              },
              "computed": true,
              "optional": false
            },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Bounds",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "min",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "max",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "NumericBoundsOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "type": "TSMappedType",
        "start": 1476,
        "end": 1554,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1483,
          "end": 1495,
          "name": {
            "type": "Identifier",
            "start": 1483,
            "end": 1484,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "Bounds",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1483,
          "end": 1484,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "validate",
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
          "start": 1592,
          "end": 1598,
          "name": "obj",
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
                "name": "T",
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
          "start": 1600,
          "end": 1626,
          "name": "bounds",
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
                "name": "NumericBoundsOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "T",
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
        }
      ],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1645,
                  "end": 1655,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 1645,
                    "end": 1655,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1646,
                        "end": 1649,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1651,
                        "end": 1654,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
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
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1666,
                  "end": 1673,
                  "name": "entries",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1674,
                  "end": 1677,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1696,
                      "end": 1750,
                      "id": {
                        "type": "Identifier",
                        "start": 1696,
                        "end": 1708,
                        "name": "boundsForKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1711,
                        "end": 1750,
                        "object": {
                          "type": "Identifier",
                          "start": 1711,
                          "end": 1717,
                          "name": "bounds",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "TSAsExpression",
                          "start": 1718,
                          "end": 1749,
                          "expression": {
                            "type": "Identifier",
                            "start": 1718,
                            "end": 1721,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "NumericBoundsOf",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
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
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
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
                    "name": "boundsForKey",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1798,
                            "end": 1825,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 1798,
                              "end": 1810,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1800,
                                  "end": 1803,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1800,
                                    "end": 1803,
                                    "name": "min",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1800,
                                    "end": 1803,
                                    "name": "min",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 1805,
                                  "end": 1808,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1805,
                                    "end": 1808,
                                    "name": "max",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1805,
                                    "end": 1808,
                                    "name": "max",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1813,
                              "end": 1825,
                              "name": "boundsForKey",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
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
                              "name": "min",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": ">",
                            "right": {
                              "type": "Identifier",
                              "start": 1849,
                              "end": 1852,
                              "name": "val",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "max",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "start": 1862,
                              "end": 1865,
                              "name": "val",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1939,
      "end": 2025,
      "id": {
        "type": "Identifier",
        "start": 1944,
        "end": 1969,
        "name": "ObjectWithUnderscoredKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1997,
          "end": 2003,
          "name": {
            "type": "Identifier",
            "start": 1997,
            "end": 1998,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 2002,
            "end": 2003,
            "typeName": {
              "type": "Identifier",
              "start": 2002,
              "end": 2003,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
                "cooked": "_",
                "raw": "_"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2012,
              "end": 2014,
              "value": {
                "cooked": "",
                "raw": ""
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
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 2002,
          "end": 2003,
          "typeName": {
            "type": "Identifier",
            "start": 2002,
            "end": 2003,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 1997,
          "end": 1998,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "genericTest",
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
          "start": 2066,
          "end": 2121,
          "name": "objectWithUnderscoredKeys",
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
                "name": "ObjectWithUnderscoredKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
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
        {
          "type": "Identifier",
          "start": 2123,
          "end": 2129,
          "name": "key",
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
      "body": {
        "type": "BlockStatement",
        "start": 2131,
        "end": 2253,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2135,
            "end": 2199,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2141,
                "end": 2198,
                "id": {
                  "type": "Identifier",
                  "start": 2141,
                  "end": 2159,
                  "name": "shouldBeTrue",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2162,
                  "end": 2198,
                  "object": {
                    "type": "Identifier",
                    "start": 2162,
                    "end": 2187,
                    "name": "objectWithUnderscoredKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "start": 2188,
                    "end": 2197,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2192,
                        "end": 2195,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2188,
                        "end": 2192,
                        "value": {
                          "cooked": "_",
                          "raw": "_"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2195,
                        "end": 2197,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ]
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
