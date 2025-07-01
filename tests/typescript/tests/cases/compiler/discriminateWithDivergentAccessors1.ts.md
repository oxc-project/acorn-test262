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
        "name": "WeirdoBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 34
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 38,
                      "end": 43
                    },
                    "start": 38,
                    "end": 43
                  },
                  "start": 36,
                  "end": 43
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 26,
                "end": 44
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 53
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 57,
                              "end": 58
                            },
                            "typeArguments": null,
                            "start": 57,
                            "end": 58
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 61,
                            "end": 65
                          }
                        ],
                        "start": 57,
                        "end": 65
                      },
                      "start": 55,
                      "end": 65
                    },
                    "start": 54,
                    "end": 65
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 45,
                "end": 66
              }
            ],
            "start": 24,
            "end": 68
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 83
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 87,
                      "end": 91
                    },
                    "start": 87,
                    "end": 91
                  },
                  "start": 85,
                  "end": 91
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 75,
                "end": 92
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 101
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 106
                            },
                            "typeArguments": null,
                            "start": 105,
                            "end": 106
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 109,
                            "end": 113
                          }
                        ],
                        "start": 105,
                        "end": 113
                      },
                      "start": 103,
                      "end": 113
                    },
                    "start": 102,
                    "end": 113
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 93,
                "end": 115
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 124
                    },
                    "typeArguments": null,
                    "start": 123,
                    "end": 124
                  },
                  "start": 121,
                  "end": 124
                },
                "accessibility": null,
                "static": false,
                "start": 116,
                "end": 124
              }
            ],
            "start": 73,
            "end": 126
          }
        ],
        "start": 22,
        "end": 126
      },
      "declare": false,
      "start": 0,
      "end": 127
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
            "name": "weirdoBox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeirdoBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 163
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 164,
                      "end": 170
                    }
                  ],
                  "start": 163,
                  "end": 171
                },
                "start": 154,
                "end": 171
              },
              "start": 152,
              "end": 171
            },
            "start": 143,
            "end": 171
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 171
        }
      ],
      "declare": true,
      "start": 129,
      "end": 172
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "weirdoBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 187
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 192
        },
        "optional": false,
        "computed": false,
        "start": 178,
        "end": 192
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "weirdoBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 207
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 213
              },
              "optional": false,
              "computed": false,
              "start": 198,
              "end": 213
            },
            "directive": null,
            "start": 198,
            "end": 214
          }
        ],
        "start": 194,
        "end": 216
      },
      "alternate": null,
      "start": 174,
      "end": 216
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeirdoBox2",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 233
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 235
          }
        ],
        "start": 233,
        "end": 236
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 253
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 257,
                      "end": 262
                    },
                    "start": 257,
                    "end": 262
                  },
                  "start": 255,
                  "end": 262
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 245,
                "end": 263
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 272
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 276,
                              "end": 277
                            },
                            "typeArguments": null,
                            "start": 276,
                            "end": 277
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 280,
                            "end": 284
                          }
                        ],
                        "start": 276,
                        "end": 284
                      },
                      "start": 274,
                      "end": 284
                    },
                    "start": 273,
                    "end": 284
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 264,
                "end": 285
              }
            ],
            "start": 243,
            "end": 287
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 302
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 306,
                      "end": 310
                    },
                    "start": 306,
                    "end": 310
                  },
                  "start": 304,
                  "end": 310
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 294,
                "end": 311
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 324,
                              "end": 325
                            },
                            "typeArguments": null,
                            "start": 324,
                            "end": 325
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 328,
                            "end": 332
                          }
                        ],
                        "start": 324,
                        "end": 332
                      },
                      "start": 322,
                      "end": 332
                    },
                    "start": 321,
                    "end": 332
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 312,
                "end": 334
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 340
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 342,
                    "end": 343
                  },
                  "start": 340,
                  "end": 343
                },
                "accessibility": null,
                "static": false,
                "start": 335,
                "end": 343
              }
            ],
            "start": 292,
            "end": 345
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 360
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 364,
                      "end": 368
                    },
                    "start": 364,
                    "end": 368
                  },
                  "start": 362,
                  "end": 368
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 352,
                "end": 369
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 378
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 382,
                              "end": 383
                            },
                            "typeArguments": null,
                            "start": 382,
                            "end": 383
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 386,
                            "end": 390
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 393,
                            "end": 402
                          }
                        ],
                        "start": 382,
                        "end": 402
                      },
                      "start": 380,
                      "end": 402
                    },
                    "start": 379,
                    "end": 402
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 370,
                "end": 404
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 410
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 412,
                    "end": 418
                  },
                  "start": 410,
                  "end": 418
                },
                "accessibility": null,
                "static": false,
                "start": 405,
                "end": 418
              }
            ],
            "start": 350,
            "end": 420
          }
        ],
        "start": 241,
        "end": 420
      },
      "declare": false,
      "start": 218,
      "end": 421
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
            "name": "weirdoBox2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeirdoBox2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 459
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    }
                  ],
                  "start": 459,
                  "end": 467
                },
                "start": 449,
                "end": 467
              },
              "start": 447,
              "end": 467
            },
            "start": 437,
            "end": 467
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 467
        }
      ],
      "declare": true,
      "start": 423,
      "end": 468
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "weirdoBox2",
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 484
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null,
          "start": 485,
          "end": 489
        },
        "optional": false,
        "computed": false,
        "start": 474,
        "end": 489
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "weirdoBox2",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 505
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 511
              },
              "optional": false,
              "computed": false,
              "start": 495,
              "end": 511
            },
            "directive": null,
            "start": 495,
            "end": 512
          }
        ],
        "start": 491,
        "end": 514
      },
      "alternate": null,
      "start": 470,
      "end": 514
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 514
}
```
