__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 528,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Tuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "name": "bindAll",
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
          "start": 152,
          "end": 167,
          "name": "target",
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
                "name": "TTarget",
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
          "start": 171,
          "end": 358,
          "name": "bindings",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 358,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 181,
              "end": 358,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 188,
                "end": 205,
                "name": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "TTypes",
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
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "TTypes",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "name": "listener",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "ev",
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
                                    "name": "Parameters",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                          "name": "Extract",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
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
                                                  "name": "TTarget",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
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
                                                    "name": "TTypes",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
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
                                                    "name": "K",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
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
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "start": 306,
                                                    "end": 310,
                                                    "name": "args",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
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
                            },
                            "decorators": [],
                            "optional": false
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
              "optional": null,
              "readonly": null,
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
                    "name": "TTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
              "name": "TTarget",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 94,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "name": "EventTarget",
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
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 146,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 104,
              "name": "TTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 146,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 118,
                "name": "Tuple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                            "name": "TTarget",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                              "cooked": "on",
                              "raw": "on"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 143,
                            "end": 145,
                            "value": {
                              "cooked": "",
                              "raw": ""
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 360,
        "end": 366,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        }
      }
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
          "name": "bindAll",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "HTMLButtonElement",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 416,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 427,
                      "value": "onclick",
                      "raw": "\"onclick\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 433,
                    "end": 456,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 441,
                      "name": "listener",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 443,
                      "end": 456,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 444,
                          "end": 449,
                          "name": "event",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 454,
                        "end": 456,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 475,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 477,
                      "end": 488,
                      "value": "onkeydown",
                      "raw": "\"onkeydown\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 494,
                    "end": 517,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 502,
                      "name": "listener",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 504,
                      "end": 517,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 505,
                          "end": 510,
                          "name": "event",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 515,
                        "end": 517,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
