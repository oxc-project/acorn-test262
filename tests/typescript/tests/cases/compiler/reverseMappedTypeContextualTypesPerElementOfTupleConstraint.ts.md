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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "bindAll",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 74,
              "decorators": [],
              "name": "TTarget",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 94,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "EventTarget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 146,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 104,
              "decorators": [],
              "name": "TTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 146,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 118,
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null
              },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 132,
                            "decorators": [],
                            "name": "TTarget",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                            "value": {
                              "raw": "on",
                              "cooked": "on"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 143,
                            "end": 145,
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true
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
              }
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
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 167,
                "decorators": [],
                "name": "TTarget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 193,
                "end": 205,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 205,
                  "typeName": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 205,
                    "decorators": [],
                    "name": "TTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 208,
                "end": 353,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 216,
                    "end": 232,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 220,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 231,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 222,
                        "end": 231,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 222,
                          "end": 228,
                          "typeName": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 228,
                            "decorators": [],
                            "name": "TTypes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 229,
                          "end": 230,
                          "typeName": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 230,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 239,
                    "end": 347,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 247,
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 249,
                        "end": 346,
                        "typeParameters": null,
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
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 263,
                                  "end": 327,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 263,
                                    "end": 273,
                                    "decorators": [],
                                    "name": "Parameters",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 273,
                                    "end": 327,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 274,
                                        "end": 326,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 274,
                                          "end": 281,
                                          "decorators": [],
                                          "name": "Extract",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 281,
                                          "end": 326,
                                          "params": [
                                            {
                                              "type": "TSIndexedAccessType",
                                              "start": 282,
                                              "end": 300,
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "start": 282,
                                                "end": 289,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 282,
                                                  "end": 289,
                                                  "decorators": [],
                                                  "name": "TTarget",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null
                                              },
                                              "indexType": {
                                                "type": "TSIndexedAccessType",
                                                "start": 290,
                                                "end": 299,
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "start": 290,
                                                  "end": 296,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 290,
                                                    "end": 296,
                                                    "decorators": [],
                                                    "name": "TTypes",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeArguments": null
                                                },
                                                "indexType": {
                                                  "type": "TSTypeReference",
                                                  "start": 297,
                                                  "end": 298,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 297,
                                                    "end": 298,
                                                    "decorators": [],
                                                    "name": "K",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeArguments": null
                                                }
                                              }
                                            },
                                            {
                                              "type": "TSFunctionType",
                                              "start": 302,
                                              "end": 325,
                                              "typeParameters": null,
                                              "params": [
                                                {
                                                  "type": "RestElement",
                                                  "start": 303,
                                                  "end": 317,
                                                  "decorators": [],
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "start": 306,
                                                    "end": 310,
                                                    "decorators": [],
                                                    "name": "args",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
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
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "start": 328,
                                  "end": 329,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 328,
                                    "end": 329,
                                    "value": 0,
                                    "raw": "0"
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
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "optional": false,
              "readonly": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 527,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 526,
        "callee": {
          "type": "Identifier",
          "start": 369,
          "end": 376,
          "decorators": [],
          "name": "bindAll",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 383,
                "end": 400,
                "decorators": [],
                "name": "HTMLButtonElement",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 416,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 427,
                      "value": "onclick",
                      "raw": "\"onclick\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 433,
                    "end": 456,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 441,
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 443,
                      "end": 456,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 454,
                        "end": 456,
                        "body": []
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 475,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 477,
                      "end": 488,
                      "value": "onkeydown",
                      "raw": "\"onkeydown\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 494,
                    "end": 517,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 502,
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 504,
                      "end": 517,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 515,
                        "end": 517,
                        "body": []
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
