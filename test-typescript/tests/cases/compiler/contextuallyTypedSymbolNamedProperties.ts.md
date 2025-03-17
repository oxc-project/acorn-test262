__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 460,
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
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 33,
            "end": 44,
            "callee": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 40,
                "end": 43,
                "value": "A",
                "raw": "\"A\""
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
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 67,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 63,
                "end": 66,
                "value": "B",
                "raw": "\"B\""
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 81,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 95,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 107,
                "end": 119,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 132,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 144,
                "end": 156,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
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
      "start": 159,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 183,
            "name": "ab",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "name": "Action",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "name": "f",
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
          "start": 242,
          "end": 251,
          "name": "action",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 251,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
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
          "start": 253,
          "end": 295,
          "name": "blah",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 295,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 259,
              "end": 295,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 262,
                "end": 276,
                "name": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIndexedAccessType",
                  "start": 267,
                  "end": 276,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 267,
                    "end": 268,
                    "typeName": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 269,
                    "end": 275,
                    "literal": {
                      "type": "Literal",
                      "start": 269,
                      "end": 275,
                      "value": "type",
                      "raw": "'type'"
                    }
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 279,
                "end": 293,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 280,
                    "end": 284,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 281,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 283,
                        "end": 284,
                        "typeName": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  }
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 267,
                "end": 276,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 267,
                  "end": 268,
                  "typeName": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 269,
                  "end": 275,
                  "literal": {
                    "type": "Literal",
                    "start": 269,
                    "end": 275,
                    "value": "type",
                    "raw": "'type'"
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
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
        "start": 204,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 240,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 215,
              "end": 240,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 217,
                  "end": 238,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 221,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  },
                  "accessibility": null,
                  "static": false
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
        "start": 296,
        "end": 301,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 298,
          "end": 301
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 384,
      "expression": {
        "type": "CallExpression",
        "start": 304,
        "end": 384,
        "callee": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "name": "ab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 321,
                  "end": 345,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 321,
                      "end": 323,
                      "name": "ap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 345,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 329,
                        "end": 343,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 329,
                          "end": 343,
                          "object": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 331,
                            "name": "ap",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 343,
                            "name": "description",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 351,
                "end": 380,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 353,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 356,
                  "end": 380,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 356,
                      "end": 358,
                      "name": "bp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 362,
                    "end": 380,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 364,
                        "end": 378,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 364,
                          "end": 378,
                          "object": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 366,
                            "name": "bp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 378,
                            "name": "description",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 433,
            "name": "x",
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 409,
                        "name": "sym",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 409,
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 403,
                            "end": 409
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 410,
                      "end": 431,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 412,
                        "end": 431,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 413,
                            "end": 422,
                            "name": "p",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 414,
                              "end": 422,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 416,
                                "end": 422
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 443,
                  "end": 456,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 448,
                    "end": 456,
                    "object": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 449,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 456,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
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
