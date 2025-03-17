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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "StateHook",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "S",
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
        "type": "TSFunctionType",
        "start": 20,
        "end": 38,
        "typeParameters": null,
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
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 56,
        "name": "StoreUtils",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "name": "Store",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "K",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 77,
                          "end": 83
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
        "type": "TSIntersectionType",
        "start": 95,
        "end": 250,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 194,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 99,
              "name": "Omit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 99,
              "end": 194,
              "params": [
                {
                  "type": "TSMappedType",
                  "start": 100,
                  "end": 181,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 107,
                    "end": 123,
                    "name": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "Store",
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
                    "type": "TSTemplateLiteralType",
                    "start": 127,
                    "end": 157,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 127,
                        "end": 133,
                        "value": {
                          "cooked": "use",
                          "raw": "use"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 155,
                        "end": 157,
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
                        "start": 133,
                        "end": 155,
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 143,
                          "name": "Capitalize",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                    "name": "K",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 169,
                      "name": "StateHook",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 169,
                      "end": 179,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 170,
                          "end": 178,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 170,
                            "end": 175,
                            "typeName": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 175,
                              "name": "Store",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 176,
                            "end": 177,
                            "typeName": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 177,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  },
                  "optional": null,
                  "readonly": null,
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
                        "name": "Store",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "value": "useStore",
                    "raw": "'useStore'"
                  }
                }
              ]
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 209,
                  "name": "Provider",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 209,
                  "end": 218,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 211,
                    "end": 218
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 222,
                "end": 248,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 230,
                  "name": "useStore",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 248,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 241,
                      "name": "StateHook",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "Store",
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
      "type": "TSDeclareFunction",
      "start": 253,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 281,
        "name": "createStore",
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
          "start": 318,
          "end": 330,
          "name": "store",
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
                "name": "Store",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 281,
        "end": 317,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 282,
            "end": 316,
            "name": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "name": "Store",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "K",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 300,
                        "end": 308,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 302,
                          "end": 308
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 309,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 311,
                      "end": 314
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
        "start": 331,
        "end": 350,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 333,
          "end": 350,
          "typeName": {
            "type": "Identifier",
            "start": 333,
            "end": 343,
            "name": "StoreUtils",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "Store",
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
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 451,
          "id": {
            "type": "ObjectPattern",
            "start": 359,
            "end": 402,
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 369,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 369,
                  "name": "Provider",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 369,
                  "name": "Provider",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 371,
                "end": 382,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 382,
                  "name": "useUsername",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 382,
                  "name": "useUsername",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 384,
                "end": 390,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 390,
                  "name": "useAge",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 390,
                  "name": "useAge",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 392,
                "end": 400,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 400,
                  "name": "useStore",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 400,
                  "name": "useStore",
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
            "type": "CallExpression",
            "start": 405,
            "end": 451,
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 416,
              "name": "createStore",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 429,
                      "name": "username",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 431,
                      "end": 437,
                      "value": "Aral",
                      "raw": "\"Aral\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 441,
                    "end": 448,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 444,
                      "name": "age",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 446,
                      "end": 448,
                      "value": 31,
                      "raw": "31"
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
