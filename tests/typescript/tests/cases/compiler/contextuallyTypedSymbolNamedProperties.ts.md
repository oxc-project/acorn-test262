__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 459,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 33,
            "end": 44,
            "arguments": [
              {
                "type": "Literal",
                "start": 40,
                "end": 43,
                "raw": "\"A\"",
                "value": "A"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 67,
            "arguments": [
              {
                "type": "Literal",
                "start": 63,
                "end": 66,
                "raw": "\"B\"",
                "value": "B"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 157,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 81,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 88,
        "end": 157,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 90,
            "end": 120,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 91,
                "end": 106,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 95,
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
                  "start": 95,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 97,
                    "end": 105,
                    "exprName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 107,
                "end": 119,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 127,
            "end": 157,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 128,
                "end": 143,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 132,
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
                  "start": 132,
                  "end": 142,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 134,
                    "end": 142,
                    "exprName": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 144,
                "end": 156,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 183,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 183,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 302,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 242,
          "end": 251,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 251,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 253,
          "end": 295,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 295,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 259,
              "end": 295,
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 267,
                "end": 276,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 269,
                  "end": 275,
                  "literal": {
                    "type": "Literal",
                    "start": 269,
                    "end": 275,
                    "raw": "'type'",
                    "value": "type"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 267,
                  "end": 268,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 279,
                "end": 293,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 280,
                    "end": 284,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 281,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 283,
                        "end": 284,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  }
                },
                "typeParameters": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 296,
        "end": 301,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 298,
          "end": 301
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 240,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 215,
              "end": 240,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 217,
                  "end": 238,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 221,
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
                    "start": 221,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 223,
                      "end": 238,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 223,
                          "end": 229
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "start": 232,
                          "end": 238
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
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
      "start": 304,
      "end": 384,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 304,
        "end": 384,
        "arguments": [
          {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 310,
            "end": 383,
            "properties": [
              {
                "type": "Property",
                "start": 316,
                "end": 345,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 321,
                  "end": 345,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 345,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 329,
                        "end": 343,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 329,
                          "end": 343,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 331,
                            "decorators": [],
                            "name": "ap",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 343,
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 321,
                      "end": 323,
                      "decorators": [],
                      "name": "ap",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 351,
                "end": 380,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 353,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 356,
                  "end": 380,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 362,
                    "end": 380,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 364,
                        "end": 378,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 364,
                          "end": 378,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 366,
                            "decorators": [],
                            "name": "bp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 378,
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 356,
                      "end": 358,
                      "decorators": [],
                      "name": "bp",
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
        ],
        "callee": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 458,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 433,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 433,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 395,
                "end": 433,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 397,
                    "end": 431,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 409,
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 409,
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 403,
                            "end": 409
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 410,
                      "end": 431,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 412,
                        "end": 431,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 413,
                            "end": 422,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 414,
                              "end": 422,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 416,
                                "end": 422
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 424,
                          "end": 431,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 427,
                            "end": 431
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 436,
            "end": 458,
            "properties": [
              {
                "type": "Property",
                "start": 438,
                "end": 456,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "decorators": [],
                  "name": "A",
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
                    "type": "MemberExpression",
                    "start": 448,
                    "end": 456,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 449,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 456,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
                      "decorators": [],
                      "name": "s",
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
