__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "XNumber_",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 16,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 124,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "foo_",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 73,
          "end": 119,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 119,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 80,
              "end": 119,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 87,
                "end": 111,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 87,
                    "end": 94,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 94,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 97,
                    "end": 111,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 111,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 111,
                        "decorators": [],
                        "name": "XNumber_",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 114,
                "end": 118,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 116,
                  "end": 117,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 115,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 123,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 123,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 52,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 53,
            "end": 71,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 71,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 71,
                "decorators": [],
                "name": "XNumber_",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
      "type": "ExpressionStatement",
      "start": 126,
      "end": 149,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 148,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 131,
            "end": 147,
            "properties": [
              {
                "type": "Property",
                "start": 132,
                "end": 136,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 135,
                  "end": 136,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 138,
                "end": 146,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 141,
                  "end": 146,
                  "raw": "'foo'",
                  "value": "foo"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 126,
          "end": 130,
          "decorators": [],
          "name": "foo_",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 261,
            "decorators": [],
            "name": "checkType_",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 264,
            "end": 338,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 273,
              "end": 338,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 333,
                "end": 338,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 287,
                  "end": 328,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 292,
                    "end": 328,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 294,
                      "end": 328,
                      "constraint": {
                        "type": "TSIntersectionType",
                        "start": 302,
                        "end": 319,
                        "types": [
                          {
                            "type": "TSTypeOperator",
                            "start": 302,
                            "end": 309,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 308,
                              "end": 309,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 308,
                                "end": 309,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "TSTypeOperator",
                            "start": 312,
                            "end": 319,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 318,
                              "end": 319,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 319,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": false,
                      "readonly": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 322,
                        "end": 326,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 324,
                          "end": 325,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 324,
                            "end": 325,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 322,
                          "end": 323,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 323,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 273,
                "end": 286,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 274,
                    "end": 285,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 284,
                      "end": 285,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 275,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 264,
              "end": 267,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 265,
                  "end": 266,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 355,
            "decorators": [],
            "name": "checked_",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 358,
            "end": 437,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 395,
                "end": 436,
                "properties": [
                  {
                    "type": "Property",
                    "start": 399,
                    "end": 413,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "start": 402,
                      "end": 413,
                      "expression": {
                        "type": "Literal",
                        "start": 402,
                        "end": 403,
                        "raw": "1",
                        "value": 1
                      },
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 417,
                    "end": 423,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 420,
                      "end": 423,
                      "raw": "\"y\"",
                      "value": "y"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 427,
                    "end": 433,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 430,
                      "end": 433,
                      "raw": "\"z\"",
                      "value": "z"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 358,
              "end": 394,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 358,
                "end": 368,
                "decorators": [],
                "name": "checkType_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 368,
                "end": 392,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 369,
                    "end": 391,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 370,
                        "end": 380,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 371,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 371,
                          "end": 379,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 373,
                            "end": 379
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 381,
                        "end": 390,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 381,
                          "end": 382,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 382,
                          "end": 390,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 384,
                            "end": 390
                          }
                        }
                      }
                    ]
                  }
                ]
              }
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
