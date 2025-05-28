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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 34,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 46,
              "decorators": [],
              "name": "TMethods",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 61,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "typeParameters": null,
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 76,
                              "end": 84,
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 86,
                        "end": 102,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 93,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                    }
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
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 298,
      "expression": {
        "type": "CallExpression",
        "start": 165,
        "end": 297,
        "callee": {
          "type": "Identifier",
          "start": 165,
          "end": 170,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 0,
                  "raw": "0"
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
            "start": 197,
            "end": 294,
            "properties": [
              {
                "type": "Property",
                "start": 203,
                "end": 237,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 213,
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 215,
                  "end": 237,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 230,
                        "value": 500,
                        "raw": "500"
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 235,
                    "end": 237,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 243,
                "end": 289,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "decorators": [],
                  "name": "hasAccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 254,
                  "end": 289,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 272,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 272,
                                "end": 280,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 274,
                                  "end": 280
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 287,
                    "end": 289,
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
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 326,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 325,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 381,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 380,
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
                "typeParameters": null,
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
                              "value": 1,
                              "raw": "1"
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
                              "value": 2,
                              "raw": "2"
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
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 363,
            "end": 380,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                "right": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 373,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 378,
              "end": 380,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 436,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 435,
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
                "typeParameters": null,
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
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 420,
            "end": 435,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                "right": {
                  "type": "Literal",
                  "start": 427,
                  "end": 428,
                  "value": 1,
                  "raw": "1"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 433,
              "end": 435,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
