__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 163,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 136,
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 138,
          "end": 155,
          "decorators": [],
          "name": "methods",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 155,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 155,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 156,
        "end": 162,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 158,
          "end": 162
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 34,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 34,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 115,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 115,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 61,
                "end": 115,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 70,
                    "end": 114,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 71,
                        "end": 84,
                        "decorators": [],
                        "name": "ctx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 74,
                          "end": 84,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 76,
                            "end": 84,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 76,
                              "end": 84,
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 86,
                        "end": 102,
                        "argument": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 93,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 102,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 95,
                            "end": 102,
                            "elementType": {
                              "type": "TSNeverKeyword",
                              "start": 95,
                              "end": 100
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 107,
                        "end": 114
                      }
                    },
                    "typeParameters": null
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 61,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 46,
              "decorators": [],
              "name": "TMethods",
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
      "start": 165,
      "end": 298,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 165,
        "end": 297,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 174,
            "end": 193,
            "properties": [
              {
                "type": "Property",
                "start": 180,
                "end": 188,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 197,
            "end": 294,
            "properties": [
              {
                "type": "Property",
                "start": 203,
                "end": 237,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 213,
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 215,
                  "end": 237,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 235,
                    "end": 237,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 216,
                      "end": 219,
                      "decorators": [],
                      "name": "ctx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 221,
                      "end": 230,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 224,
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 230,
                        "raw": "500",
                        "value": 500
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 243,
                "end": 289,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "decorators": [],
                  "name": "hasAccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 254,
                  "end": 289,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 287,
                    "end": 289,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 258,
                      "decorators": [],
                      "name": "ctx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 260,
                      "end": 282,
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 264,
                        "end": 282,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 266,
                          "end": 282,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 268,
                              "end": 280,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 272,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 272,
                                "end": 280,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 274,
                                  "end": 280
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
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 165,
          "end": 170,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 325,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 325,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 319,
                "end": 325
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
      "type": "VariableDeclaration",
      "start": 327,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 360,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 360,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 340,
                "end": 360,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 341,
                    "end": 351,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 344,
                      "end": 351,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 346,
                        "end": 351,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 346,
                            "end": 347,
                            "literal": {
                              "type": "Literal",
                              "start": 346,
                              "end": 347,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 350,
                            "end": 351,
                            "literal": {
                              "type": "Literal",
                              "start": 350,
                              "end": 351,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 353,
                  "end": 360,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 356,
                    "end": 360
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 363,
            "end": 380,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 378,
              "end": 380,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 364,
                "end": 373,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 367,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 373,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 383,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 417,
            "decorators": [],
            "name": "test3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 417,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 396,
                "end": 417,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 397,
                    "end": 408,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 402,
                        "end": 408
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 413,
                    "end": 417
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 420,
            "end": 435,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 433,
              "end": 435,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 421,
                "end": 428,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 424,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 427,
                  "end": 428,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
