__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 435,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 67,
        "end": 76,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 67,
            "end": 70,
            "literal": {
              "type": "Literal",
              "start": 67,
              "end": 70,
              "value": "A",
              "raw": "\"A\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 73,
            "end": 76,
            "literal": {
              "type": "Literal",
              "start": 73,
              "end": 76,
              "value": "B",
              "raw": "\"B\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 89,
        "end": 122,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 105,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 96,
                "end": 104,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 108,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 111,
                "end": 119,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 125,
      "end": 227,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 226,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 226,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 144,
                "end": 226,
                "key": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSUnionType",
                  "start": 154,
                  "end": 167,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 154,
                      "end": 156,
                      "typeName": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 156,
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 159,
                      "end": 167,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 167,
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 170,
                  "end": 223,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 171,
                      "end": 211,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 178,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 178,
                        "end": 211,
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "start": 180,
                          "end": 211,
                          "checkType": {
                            "type": "TSTypeReference",
                            "start": 180,
                            "end": 181,
                            "typeName": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 181,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "extendsType": {
                            "type": "TSTypeOperator",
                            "start": 190,
                            "end": 198,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 196,
                              "end": 198,
                              "typeName": {
                                "type": "Identifier",
                                "start": 196,
                                "end": 198,
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "trueType": {
                            "type": "TSIndexedAccessType",
                            "start": 201,
                            "end": 206,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 201,
                              "end": 203,
                              "typeName": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 203,
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 204,
                              "end": 205,
                              "typeName": {
                                "type": "Identifier",
                                "start": 204,
                                "end": 205,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "falseType": {
                            "type": "TSTupleType",
                            "start": 209,
                            "end": 211,
                            "elementTypes": []
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 213,
                    "end": 223,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 216,
                      "end": 223
                    }
                  }
                },
                "optional": false,
                "readonly": null
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
      "start": 229,
      "end": 253,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 252,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 252,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 249,
                "end": 252
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
      "type": "ForOfStatement",
      "start": 255,
      "end": 318,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 260,
        "end": 275,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 266,
            "end": 275,
            "id": {
              "type": "ArrayPattern",
              "start": 266,
              "end": 275,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 270,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 274,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 279,
        "end": 298,
        "callee": {
          "type": "MemberExpression",
          "start": 279,
          "end": 293,
          "object": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 293,
            "decorators": [],
            "name": "entries",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 294,
            "end": 297,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 300,
        "end": 318,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 304,
            "end": 316,
            "expression": {
              "type": "CallExpression",
              "start": 304,
              "end": 315,
              "callee": {
                "type": "Identifier",
                "start": 304,
                "end": 306,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 307,
                  "end": 314,
                  "argument": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 314,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 435,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 420,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 420,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 333,
                "end": 420,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 334,
                    "end": 366,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 335,
                        "end": 344,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 336,
                          "end": 344,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 338,
                            "end": 344
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 346,
                        "end": 357,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 349,
                          "end": 353,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 353,
                          "end": 357,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "start": 355,
                            "end": 357,
                            "elementTypes": []
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 359,
                      "end": 366,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 362,
                        "end": 366
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 373,
                    "end": 392,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 374,
                        "end": 383,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 392,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 388,
                        "end": 392
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 399,
                    "end": 419,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 400,
                        "end": 410,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 410,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 403,
                            "end": 410
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 412,
                      "end": 419,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 415,
                        "end": 419
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 423,
            "end": 434,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 432,
              "end": 434,
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
