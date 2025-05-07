__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 527,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 37,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 16,
        "end": 36,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 25,
          "end": 36,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 26,
              "end": 27,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSRestType",
              "start": 29,
              "end": 35,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 32,
                "end": 35,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 367,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "bindAll",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 152,
          "end": 167,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 167,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 167,
                "decorators": [],
                "name": "TTarget",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 358,
          "decorators": [],
          "name": "bindings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 358,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 181,
              "end": 358,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 193,
                "end": 205,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 205,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 205,
                    "decorators": [],
                    "name": "TTypes",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 208,
                "end": 353,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 216,
                    "end": 232,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 220,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 231,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 222,
                        "end": 231,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 229,
                          "end": 230,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 230,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 222,
                          "end": 228,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 228,
                            "decorators": [],
                            "name": "TTypes",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 239,
                    "end": 347,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 247,
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 249,
                        "end": 346,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 259,
                            "end": 330,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 261,
                              "end": 330,
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "start": 263,
                                "end": 330,
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "start": 328,
                                  "end": 329,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 328,
                                    "end": 329,
                                    "raw": "0",
                                    "value": 0,
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 263,
                                  "end": 327,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 273,
                                    "end": 327,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 274,
                                        "end": 326,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 281,
                                          "end": 326,
                                          "params": [
                                            {
                                              "type": "TSIndexedAccessType",
                                              "start": 282,
                                              "end": 300,
                                              "indexType": {
                                                "type": "TSIndexedAccessType",
                                                "start": 290,
                                                "end": 299,
                                                "indexType": {
                                                  "type": "TSTypeReference",
                                                  "start": 297,
                                                  "end": 298,
                                                  "typeArguments": null,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 297,
                                                    "end": 298,
                                                    "decorators": [],
                                                    "name": "K",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                },
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "start": 290,
                                                  "end": 296,
                                                  "typeArguments": null,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 290,
                                                    "end": 296,
                                                    "decorators": [],
                                                    "name": "TTypes",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              },
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "start": 282,
                                                "end": 289,
                                                "typeArguments": null,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 282,
                                                  "end": 289,
                                                  "decorators": [],
                                                  "name": "TTarget",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            },
                                            {
                                              "type": "TSFunctionType",
                                              "start": 302,
                                              "end": 325,
                                              "params": [
                                                {
                                                  "type": "RestElement",
                                                  "start": 303,
                                                  "end": 317,
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "start": 306,
                                                    "end": 310,
                                                    "decorators": [],
                                                    "name": "args",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "decorators": [],
                                                  "optional": false,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "start": 310,
                                                    "end": 317,
                                                    "typeAnnotation": {
                                                      "type": "TSArrayType",
                                                      "start": 312,
                                                      "end": 317,
                                                      "elementType": {
                                                        "type": "TSAnyKeyword",
                                                        "start": 312,
                                                        "end": 315
                                                      }
                                                    }
                                                  },
                                                  "value": null
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "start": 319,
                                                "end": 325,
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "start": 322,
                                                  "end": 325
                                                }
                                              },
                                              "typeParameters": null
                                            }
                                          ]
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 274,
                                          "end": 281,
                                          "decorators": [],
                                          "name": "Extract",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 263,
                                    "end": 273,
                                    "decorators": [],
                                    "name": "Parameters",
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
                          "start": 339,
                          "end": 346,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 342,
                            "end": 346
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 360,
        "end": 366,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 94,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 94,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "EventTarget",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 74,
              "decorators": [],
              "name": "TTarget",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 146,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 146,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 118,
                "end": 146,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 119,
                    "end": 145,
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "start": 119,
                        "end": 132,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 125,
                          "end": 132,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 132,
                            "decorators": [],
                            "name": "TTarget",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "start": 135,
                        "end": 145,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 135,
                            "end": 140,
                            "tail": false,
                            "value": {
                              "cooked": "on",
                              "raw": "on"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 143,
                            "end": 145,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ],
                        "types": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 140,
                            "end": 143
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 118,
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 104,
              "decorators": [],
              "name": "TTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 527,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 526,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 377,
            "end": 400,
            "expression": {
              "type": "ObjectExpression",
              "start": 377,
              "end": 379,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 383,
              "end": 400,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 383,
                "end": 400,
                "decorators": [],
                "name": "HTMLButtonElement",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ArrayExpression",
            "start": 402,
            "end": 525,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 406,
                "end": 461,
                "properties": [
                  {
                    "type": "Property",
                    "start": 412,
                    "end": 427,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 416,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 427,
                      "raw": "\"onclick\"",
                      "value": "onclick",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 433,
                    "end": 456,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 441,
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 443,
                      "end": 456,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 454,
                        "end": 456,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 444,
                          "end": 449,
                          "decorators": [],
                          "name": "event",
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
                "start": 465,
                "end": 522,
                "properties": [
                  {
                    "type": "Property",
                    "start": 471,
                    "end": 488,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 475,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 477,
                      "end": 488,
                      "raw": "\"onkeydown\"",
                      "value": "onkeydown",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 494,
                    "end": 517,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 502,
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 504,
                      "end": 517,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 515,
                        "end": 517,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 505,
                          "end": 510,
                          "decorators": [],
                          "name": "event",
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
          "start": 369,
          "end": 376,
          "decorators": [],
          "name": "bindAll",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
