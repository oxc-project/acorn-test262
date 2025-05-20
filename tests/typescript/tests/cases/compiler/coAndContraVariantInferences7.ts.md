__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 480,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 70,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Request",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 39,
        "end": 69,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 66,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 50,
                "end": 66,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 58,
                  "end": 65,
                  "literal": {
                    "type": "Literal",
                    "start": 58,
                    "end": 65,
                    "raw": "\"query\"",
                    "value": "query"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 57,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 57,
                    "decorators": [],
                    "name": "TSchema",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 35,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 35,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 122,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 83,
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 86,
        "end": 121,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 103,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 96,
                "end": 103
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 119,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 112,
                "end": 119
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 124,
      "end": 278,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 146,
        "decorators": [],
        "name": "route",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 270,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 176,
              "end": 270,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 180,
                  "end": 206,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "decorators": [],
                    "name": "pre",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 185,
                      "end": 205,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 186,
                          "end": 196,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 187,
                            "end": 196,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 189,
                              "end": 196,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 196,
                                "decorators": [],
                                "name": "TSchema",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 198,
                        "end": 205,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 201,
                          "end": 205
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 209,
                  "end": 225,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 215,
                    "decorators": [],
                    "name": "schema",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 215,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 217,
                      "end": 224,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 224,
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 228,
                  "end": 268,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 234,
                    "decorators": [],
                    "name": "handle",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 236,
                      "end": 267,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 237,
                          "end": 258,
                          "decorators": [],
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 258,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 242,
                              "end": 258,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 249,
                                "end": 258,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 250,
                                    "end": 257,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 257,
                                      "decorators": [],
                                      "name": "TSchema",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 249,
                                "decorators": [],
                                "name": "Request",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 260,
                        "end": 267,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 263,
                          "end": 267
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 271,
        "end": 277,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 273,
          "end": 277
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 169,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 163,
              "end": 169,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 169,
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 154,
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 294,
            "decorators": [],
            "name": "validate",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 297,
            "end": 343,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 341,
              "end": 343,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 298,
                "end": 336,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 299,
                  "end": 336,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 301,
                    "end": 336,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 303,
                        "end": 319,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 308,
                          "decorators": [],
                          "name": "query",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 309,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 311,
                            "end": 318
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 320,
                        "end": 334,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 324,
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 325,
                          "end": 334,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 327,
                            "end": 334
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 468,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 467,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 352,
            "end": 466,
            "properties": [
              {
                "type": "Property",
                "start": 356,
                "end": 369,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 359,
                  "decorators": [],
                  "name": "pre",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 369,
                  "decorators": [],
                  "name": "validate",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 373,
                "end": 401,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 379,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 381,
                  "end": 401,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 387,
                      "end": 396,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 392,
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 394,
                        "end": 396,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 405,
                "end": 463,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 411,
                  "decorators": [],
                  "name": "handle",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 413,
                  "end": 463,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 422,
                    "end": 463,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 428,
                        "end": 459,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 434,
                            "end": 458,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 434,
                              "end": 446,
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 438,
                                "end": 446,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 440,
                                  "end": 446
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 449,
                              "end": 458,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 449,
                                "end": 452,
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 453,
                                "end": 458,
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 414,
                      "end": 417,
                      "decorators": [],
                      "name": "req",
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
          "start": 346,
          "end": 351,
          "decorators": [],
          "name": "route",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 470,
      "end": 480,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
