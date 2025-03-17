__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 481,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "name": "Request",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "name": "TSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 35,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "name": "Schema",
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
          }
        ]
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
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "name": "query",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 66,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 50,
                "end": 66,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 57,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 57,
                    "name": "TSchema",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 58,
                  "end": 65,
                  "literal": {
                    "type": "Literal",
                    "start": 58,
                    "end": 65,
                    "value": "query",
                    "raw": "\"query\""
                  }
                }
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
      "start": 72,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 83,
        "name": "Schema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 86,
        "end": 121,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 104,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "name": "query",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 103,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 96,
                "end": 103
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 119,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "name": "body",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 119,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 112,
                "end": 119
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
      "type": "TSDeclareFunction",
      "start": 124,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 146,
        "name": "route",
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
          "start": 171,
          "end": 270,
          "name": "obj",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "name": "pre",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 185,
                      "end": 205,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 186,
                          "end": 196,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 187,
                            "end": 196,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 189,
                              "end": 196,
                              "typeName": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 196,
                                "name": "TSchema",
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
                        "start": 198,
                        "end": 205,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 201,
                          "end": 205
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 209,
                  "end": 225,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 215,
                    "name": "schema",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 215,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 217,
                      "end": 224,
                      "typeName": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 224,
                        "name": "TSchema",
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
                  "start": 228,
                  "end": 268,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 234,
                    "name": "handle",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 236,
                      "end": 267,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 237,
                          "end": 258,
                          "name": "req",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 258,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 242,
                              "end": 258,
                              "typeName": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 249,
                                "name": "Request",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 249,
                                "end": 258,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 250,
                                    "end": 257,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 257,
                                      "name": "TSchema",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 260,
                        "end": 267,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 263,
                          "end": 267
                        }
                      }
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 154,
              "name": "TSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 163,
              "end": 169,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 169,
                "name": "Schema",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 271,
        "end": 277,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 273,
          "end": 277
        }
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
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 294,
            "name": "validate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 297,
            "end": 343,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 298,
                "end": 336,
                "name": "_",
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
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 308,
                          "name": "query",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 309,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 311,
                            "end": 318
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 320,
                        "end": 334,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 324,
                          "name": "body",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 325,
                          "end": 334,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 327,
                            "end": 334
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
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 341,
              "end": 343,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 467,
        "callee": {
          "type": "Identifier",
          "start": 346,
          "end": 351,
          "name": "route",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 359,
                  "name": "pre",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 369,
                  "name": "validate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 373,
                "end": 401,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 379,
                  "name": "schema",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 381,
                  "end": 401,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 387,
                      "end": 396,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 392,
                        "name": "query",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 394,
                        "end": 396,
                        "value": "",
                        "raw": "\"\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 405,
                "end": 463,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 411,
                  "name": "handle",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 413,
                  "end": 463,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 414,
                      "end": 417,
                      "name": "req",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 434,
                              "end": 446,
                              "name": "test",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 438,
                                "end": 446,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 440,
                                  "end": 446
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 449,
                              "end": 458,
                              "object": {
                                "type": "Identifier",
                                "start": 449,
                                "end": 452,
                                "name": "req",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 453,
                                "end": 458,
                                "name": "query",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
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
      "type": "ExportNamedDeclaration",
      "start": 470,
      "end": 480,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
