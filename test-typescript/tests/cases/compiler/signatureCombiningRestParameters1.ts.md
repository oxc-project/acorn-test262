__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 436,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 226,
            "name": "map",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 226,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 144,
                "end": 226,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 149,
                  "end": 167,
                  "name": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "T2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
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
                      "argument": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 178,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                "name": "T2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "name": "T2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "name": "K",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                "optional": null,
                "readonly": null,
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
                        "name": "T1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "T2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "key": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "start": 229,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 252,
            "name": "args",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 252,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 249,
                "end": 252
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
      "type": "ForOfStatement",
      "start": 255,
      "end": 318,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 260,
        "end": 275,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 266,
            "end": 275,
            "id": {
              "type": "ArrayPattern",
              "start": 266,
              "end": 275,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 270,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 274,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
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
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 293,
            "name": "entries",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 294,
            "end": 297,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 307,
                  "end": 314,
                  "argument": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 314,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 420,
            "name": "test2",
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
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 336,
                          "end": 344,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 338,
                            "end": 344
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 346,
                        "end": 357,
                        "argument": {
                          "type": "Identifier",
                          "start": 349,
                          "end": 353,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 410,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 403,
                            "end": 410
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 423,
            "end": 434,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 432,
              "end": 434,
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
