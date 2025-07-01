__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tags",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 26
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 9,
        "end": 30
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "typeArguments": null,
          "start": 33,
          "end": 34
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 49
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "typeArguments": null,
                "start": 50,
                "end": 51
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 59,
                  "end": 60
                },
                "start": 53,
                "end": 60
              }
            ],
            "start": 49,
            "end": 61
          },
          "start": 43,
          "end": 61
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "typeArguments": null,
          "start": 64,
          "end": 65
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 68,
          "end": 73
        },
        "start": 33,
        "end": 73
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeTags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 102
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 101,
                      "end": 102
                    }
                  ],
                  "start": 100,
                  "end": 103
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 114
                          },
                          "constraint": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSMappedType",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 142
                                },
                                "constraint": {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tags",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 146,
                                        "end": 150
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": "_tag",
                                              "raw": "\"_tag\"",
                                              "start": 151,
                                              "end": 157
                                            },
                                            "start": 151,
                                            "end": 157
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 159,
                                              "end": 160
                                            },
                                            "typeArguments": null,
                                            "start": 159,
                                            "end": 160
                                          }
                                        ],
                                        "start": 150,
                                        "end": 161
                                      },
                                      "start": 146,
                                      "end": 161
                                    },
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 164,
                                      "end": 170
                                    }
                                  ],
                                  "start": 146,
                                  "end": 170
                                },
                                "nameType": null,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Extract",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 184,
                                            "end": 191
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "I",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 192,
                                                  "end": 193
                                                },
                                                "typeArguments": null,
                                                "start": 192,
                                                "end": 193
                                              },
                                              {
                                                "type": "TSTypeLiteral",
                                                "members": [
                                                  {
                                                    "type": "TSPropertySignature",
                                                    "computed": false,
                                                    "optional": false,
                                                    "readonly": true,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "_tag",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 206,
                                                      "end": 210
                                                    },
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "Tag",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 212,
                                                          "end": 215
                                                        },
                                                        "typeArguments": null,
                                                        "start": 212,
                                                        "end": 215
                                                      },
                                                      "start": 210,
                                                      "end": 215
                                                    },
                                                    "accessibility": null,
                                                    "static": false,
                                                    "start": 197,
                                                    "end": 215
                                                  }
                                                ],
                                                "start": 195,
                                                "end": 217
                                              }
                                            ],
                                            "start": 191,
                                            "end": 218
                                          },
                                          "start": 184,
                                          "end": 218
                                        },
                                        "start": 182,
                                        "end": 218
                                      },
                                      "start": 181,
                                      "end": 218
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 229,
                                      "end": 232
                                    },
                                    "start": 226,
                                    "end": 232
                                  },
                                  "start": 173,
                                  "end": 232
                                },
                                "optional": false,
                                "readonly": true,
                                "start": 123,
                                "end": 237
                              },
                              {
                                "type": "TSMappedType",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 252,
                                  "end": 255
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Exclude",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 259,
                                    "end": 266
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeOperator",
                                        "operator": "keyof",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "P",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 273,
                                            "end": 274
                                          },
                                          "typeArguments": null,
                                          "start": 273,
                                          "end": 274
                                        },
                                        "start": 267,
                                        "end": 274
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Tags",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 276,
                                          "end": 280
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "value": "_tag",
                                                "raw": "\"_tag\"",
                                                "start": 281,
                                                "end": 287
                                              },
                                              "start": 281,
                                              "end": 287
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "I",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 289,
                                                "end": 290
                                              },
                                              "typeArguments": null,
                                              "start": 289,
                                              "end": 290
                                            }
                                          ],
                                          "start": 280,
                                          "end": 291
                                        },
                                        "start": 276,
                                        "end": 291
                                      }
                                    ],
                                    "start": 266,
                                    "end": 292
                                  },
                                  "start": 259,
                                  "end": 292
                                },
                                "nameType": null,
                                "typeAnnotation": {
                                  "type": "TSNeverKeyword",
                                  "start": 295,
                                  "end": 300
                                },
                                "optional": false,
                                "readonly": true,
                                "start": 240,
                                "end": 302
                              }
                            ],
                            "start": 123,
                            "end": 302
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 113,
                          "end": 302
                        }
                      ],
                      "start": 109,
                      "end": 305
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 317,
                              "end": 318
                            },
                            "typeArguments": null,
                            "start": 317,
                            "end": 318
                          },
                          "start": 315,
                          "end": 318
                        },
                        "start": 309,
                        "end": 318
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 325,
                        "end": 332
                      },
                      "start": 322,
                      "end": 332
                    },
                    "start": 109,
                    "end": 332
                  },
                  "start": 106,
                  "end": 332
                },
                "start": 100,
                "end": 332
              },
              "start": 98,
              "end": 332
            },
            "start": 90,
            "end": 332
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 332
        }
      ],
      "declare": true,
      "start": 76,
      "end": 333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Value",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 345
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 354
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 356,
                      "end": 359
                    },
                    "start": 356,
                    "end": 359
                  },
                  "start": 354,
                  "end": 359
                },
                "accessibility": null,
                "static": false,
                "start": 350,
                "end": 360
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 362
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 364,
                    "end": 370
                  },
                  "start": 362,
                  "end": 370
                },
                "accessibility": null,
                "static": false,
                "start": 361,
                "end": 370
              }
            ],
            "start": 348,
            "end": 372
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 381
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 383,
                      "end": 386
                    },
                    "start": 383,
                    "end": 386
                  },
                  "start": 381,
                  "end": 386
                },
                "accessibility": null,
                "static": false,
                "start": 377,
                "end": 387
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 389
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 391,
                    "end": 397
                  },
                  "start": 389,
                  "end": 397
                },
                "accessibility": null,
                "static": false,
                "start": 388,
                "end": 397
              }
            ],
            "start": 375,
            "end": 399
          }
        ],
        "start": 348,
        "end": 399
      },
      "declare": false,
      "start": 335,
      "end": 400
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "matcher",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 414
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "typeTags",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 425
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 431
                  },
                  "typeArguments": null,
                  "start": 426,
                  "end": 431
                }
              ],
              "start": 425,
              "end": 432
            },
            "arguments": [],
            "optional": false,
            "start": 417,
            "end": 434
          },
          "definite": false,
          "start": 407,
          "end": 434
        }
      ],
      "declare": false,
      "start": 401,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "matcher",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 444
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 450
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 453,
                      "end": 454
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 460
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 462
                    },
                    "optional": false,
                    "computed": false,
                    "start": 459,
                    "end": 462
                  },
                  "id": null,
                  "generator": false,
                  "start": 452,
                  "end": 462
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 449,
                "end": 462
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 467
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 471
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "fail",
                    "raw": "\"fail\"",
                    "start": 476,
                    "end": 482
                  },
                  "id": null,
                  "generator": false,
                  "start": 469,
                  "end": 482
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 466,
                "end": 482
              }
            ],
            "start": 445,
            "end": 485
          }
        ],
        "optional": false,
        "start": 437,
        "end": 486
      },
      "directive": null,
      "start": 437,
      "end": 487
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "matcher",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 502
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 506
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 511,
                      "end": 512
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 514
                    },
                    "optional": false,
                    "computed": false,
                    "start": 511,
                    "end": 514
                  },
                  "id": null,
                  "generator": false,
                  "start": 504,
                  "end": 514
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 501,
                "end": 514
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 519
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 522,
                      "end": 523
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "fail",
                    "raw": "\"fail\"",
                    "start": 528,
                    "end": 534
                  },
                  "id": null,
                  "generator": false,
                  "start": 521,
                  "end": 534
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 518,
                "end": 534
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 539
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 542,
                      "end": 543
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "fail",
                    "raw": "\"fail\"",
                    "start": 548,
                    "end": 554
                  },
                  "id": null,
                  "generator": false,
                  "start": 541,
                  "end": 554
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 538,
                "end": 554
              }
            ],
            "start": 497,
            "end": 557
          }
        ],
        "optional": false,
        "start": 489,
        "end": 558
      },
      "directive": null,
      "start": 489,
      "end": 559
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
