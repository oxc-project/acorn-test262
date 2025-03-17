__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "name": "test1",
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
          "start": 119,
          "end": 136,
          "name": "context",
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
                "name": "TContext",
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
          "start": 138,
          "end": 155,
          "name": "methods",
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
                "name": "TMethods",
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
      "body": null,
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
              "name": "TContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "TMethods",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 61,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "ctx",
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
                              "name": "TContext",
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
                        "type": "RestElement",
                        "start": 86,
                        "end": 102,
                        "argument": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 93,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 156,
        "end": 162,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 158,
          "end": 162
        }
      }
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
          "name": "test1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "name": "count",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 213,
                  "name": "checkLimit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 215,
                  "end": 237,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 216,
                      "end": 219,
                      "name": "ctx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 221,
                      "end": 230,
                      "left": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 224,
                        "name": "max",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 230,
                        "value": 500,
                        "raw": "500"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 235,
                    "end": 237,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 243,
                "end": 289,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "name": "hasAccess",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 254,
                  "end": 289,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 258,
                      "name": "ctx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 260,
                      "end": 282,
                      "name": "user",
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
                                "name": "name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 287,
                    "end": 289,
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
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 325,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 325,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 319,
                "end": 325
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
      "type": "VariableDeclaration",
      "start": 327,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 360,
            "name": "test2",
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
                    "name": "arg",
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
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 363,
            "end": 380,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 364,
                "end": 373,
                "left": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 367,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 373,
                  "name": "num",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 378,
              "end": 380,
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
      "type": "VariableDeclaration",
      "start": 383,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 417,
            "name": "test3",
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
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 402,
                        "end": 408
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 420,
            "end": 435,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 421,
                "end": 428,
                "left": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 424,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 427,
                  "end": 428,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 433,
              "end": 435,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
