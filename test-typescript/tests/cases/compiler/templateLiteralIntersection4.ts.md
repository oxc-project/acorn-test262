__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 453,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "StateHook",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 20,
        "end": 38,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 23,
          "end": 38,
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 26,
            "end": 38,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              },
              {
                "type": "TSUnknownKeyword",
                "start": 30,
                "end": 37
              }
            ]
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 251,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 56,
        "decorators": [],
        "name": "StoreUtils",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 95,
        "end": 250,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 194,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 99,
              "end": 194,
              "params": [
                {
                  "type": "TSMappedType",
                  "start": 100,
                  "end": 181,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 112,
                    "end": 123,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 123,
                        "decorators": [],
                        "name": "Store",
                        "optional": false
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "nameType": {
                    "type": "TSTemplateLiteralType",
                    "start": 127,
                    "end": 157,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 127,
                        "end": 133,
                        "tail": false,
                        "value": {
                          "cooked": "use",
                          "raw": "use"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 155,
                        "end": 157,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 155,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 143,
                          "end": 155,
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "start": 144,
                              "end": 154,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 144,
                                  "end": 150
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 153,
                                  "end": 154,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 153,
                                    "end": 154,
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 143,
                          "decorators": [],
                          "name": "Capitalize",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 179,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 169,
                      "end": 179,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 170,
                          "end": 178,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 176,
                            "end": 177,
                            "typeName": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 177,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 170,
                            "end": 175,
                            "typeName": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 175,
                              "decorators": [],
                              "name": "Store",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 169,
                      "decorators": [],
                      "name": "StateHook",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 183,
                  "end": 193,
                  "literal": {
                    "type": "Literal",
                    "start": 183,
                    "end": 193,
                    "raw": "'useStore'",
                    "value": "useStore"
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 99,
              "decorators": [],
              "name": "Omit",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 197,
            "end": 250,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 201,
                "end": 219,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 209,
                  "decorators": [],
                  "name": "Provider",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 209,
                  "end": 218,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 211,
                    "end": 218
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 222,
                "end": 248,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 230,
                  "decorators": [],
                  "name": "useStore",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 248,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 241,
                      "end": 248,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 242,
                          "end": 247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 247,
                            "decorators": [],
                            "name": "Store",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 241,
                      "decorators": [],
                      "name": "StateHook",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 91,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 71,
              "end": 91,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 73,
                  "end": 89,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 74,
                      "end": 83,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 77,
                          "end": 83
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "decorators": [],
              "name": "Store",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 253,
      "end": 351,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 281,
        "decorators": [],
        "name": "createStore",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 318,
          "end": 330,
          "decorators": [],
          "name": "store",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 330,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 330,
                "decorators": [],
                "name": "Store",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 331,
        "end": 350,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 333,
          "end": 350,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 343,
            "end": 350,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 344,
                "end": 349,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 349,
                  "decorators": [],
                  "name": "Store",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 333,
            "end": 343,
            "decorators": [],
            "name": "StoreUtils",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 281,
        "end": 317,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 282,
            "end": 316,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 296,
              "end": 316,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 298,
                  "end": 314,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 299,
                      "end": 308,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 300,
                        "end": 308,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 302,
                          "end": 308
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 309,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 311,
                      "end": 314
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "decorators": [],
              "name": "Store",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 451,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 359,
            "end": 402,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 369,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 369,
                  "decorators": [],
                  "name": "Provider",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 369,
                  "decorators": [],
                  "name": "Provider",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 371,
                "end": 382,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 382,
                  "decorators": [],
                  "name": "useUsername",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 382,
                  "decorators": [],
                  "name": "useUsername",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 384,
                "end": 390,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 390,
                  "decorators": [],
                  "name": "useAge",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 390,
                  "decorators": [],
                  "name": "useAge",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 392,
                "end": 400,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 400,
                  "decorators": [],
                  "name": "useStore",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 400,
                  "decorators": [],
                  "name": "useStore",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "CallExpression",
            "start": 405,
            "end": 451,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 417,
                "end": 450,
                "properties": [
                  {
                    "type": "Property",
                    "start": 421,
                    "end": 437,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 429,
                      "decorators": [],
                      "name": "username",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 431,
                      "end": 437,
                      "raw": "\"Aral\"",
                      "value": "Aral"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 441,
                    "end": 448,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 444,
                      "decorators": [],
                      "name": "age",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 446,
                      "end": 448,
                      "raw": "31",
                      "value": 31
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 416,
              "decorators": [],
              "name": "createStore",
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
  "sourceType": "script",
  "hashbang": null
}
```
