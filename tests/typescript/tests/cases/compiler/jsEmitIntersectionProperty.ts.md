__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoreObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 66
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 84
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Statics",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 97
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 90,
                    "end": 97
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Instance",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 111
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 122
                      },
                      "typeArguments": null,
                      "start": 120,
                      "end": 122
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 122
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 130
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 128,
                    "end": 130
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 138
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 136,
                    "end": 138
                  }
                ],
                "start": 84,
                "end": 142
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Statics",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 161
                          },
                          "typeArguments": null,
                          "start": 154,
                          "end": 161
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Instance",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 173,
                                    "end": 181
                                  },
                                  "typeArguments": null,
                                  "start": 173,
                                  "end": 181
                                },
                                "start": 171,
                                "end": 181
                              },
                              "start": 166,
                              "end": 181
                            }
                          ],
                          "start": 164,
                          "end": 183
                        }
                      ],
                      "start": 154,
                      "end": 183
                    },
                    "start": 152,
                    "end": 183
                  },
                  "start": 148,
                  "end": 183
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 197
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 197
                    },
                    "start": 193,
                    "end": 197
                  },
                  "start": 189,
                  "end": 197
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 211
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Statics",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 212,
                              "end": 219
                            },
                            "typeArguments": null,
                            "start": 212,
                            "end": 219
                          }
                        ],
                        "start": 211,
                        "end": 220
                      },
                      "start": 203,
                      "end": 220
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 232,
                                    "end": 234
                                  },
                                  "typeArguments": null,
                                  "start": 232,
                                  "end": 234
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Instance",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 237,
                                    "end": 245
                                  },
                                  "typeArguments": null,
                                  "start": 237,
                                  "end": 245
                                }
                              ],
                              "start": 232,
                              "end": 245
                            },
                            "start": 230,
                            "end": 245
                          },
                          "start": 225,
                          "end": 245
                        }
                      ],
                      "start": 223,
                      "end": 247
                    }
                  ],
                  "start": 203,
                  "end": 247
                },
                "start": 201,
                "end": 247
              },
              "body": null,
              "expression": false,
              "start": 84,
              "end": 248
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 71,
            "end": 248
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 260
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 264,
                  "end": 270
                },
                "start": 262,
                "end": 270
              },
              "body": null,
              "expression": false,
              "start": 260,
              "end": 271
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 252,
            "end": 271
          }
        ],
        "start": 67,
        "end": 273
      },
      "abstract": false,
      "declare": true,
      "start": 42,
      "end": 273
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 294
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
              "start": 295,
              "end": 296
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 295,
            "end": 296
          }
        ],
        "start": 294,
        "end": 297
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 315
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 316,
                      "end": 317
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 316,
                    "end": 317
                  }
                ],
                "start": 315,
                "end": 318
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": true,
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
                        "start": 333,
                        "end": 334
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 334
                    },
                    "start": 331,
                    "end": 334
                  },
                  "start": 326,
                  "end": 334
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 345
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 347
                        },
                        "typeArguments": null,
                        "start": 346,
                        "end": 347
                      }
                    ],
                    "start": 345,
                    "end": 348
                  },
                  "start": 340,
                  "end": 348
                },
                "start": 338,
                "end": 348
              },
              "body": null,
              "expression": false,
              "start": 315,
              "end": 349
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 302,
            "end": 349
          }
        ],
        "start": 298,
        "end": 351
      },
      "abstract": false,
      "declare": true,
      "start": 275,
      "end": 351
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
            "name": "Observable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 383
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 384,
                      "end": 386
                    }
                  ],
                  "start": 383,
                  "end": 387
                },
                "start": 378,
                "end": 387
              },
              "start": 376,
              "end": 387
            },
            "start": 366,
            "end": 387
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 387
        }
      ],
      "declare": true,
      "start": 352,
      "end": 387
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmberObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 413
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "CoreObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 432
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 439
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 439
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 450
          }
        ],
        "optional": false,
        "start": 422,
        "end": 451
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 452,
        "end": 454
      },
      "abstract": false,
      "declare": true,
      "start": 388,
      "end": 454
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoreView",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 477
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "EmberObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 497
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 504
          },
          "optional": false,
          "computed": false,
          "start": 486,
          "end": 504
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 505,
            "end": 507
          }
        ],
        "optional": false,
        "start": 486,
        "end": 508
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 509,
        "end": 511
      },
      "abstract": false,
      "declare": true,
      "start": 455,
      "end": 511
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 535
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "CoreView",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 552
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 559
          },
          "optional": false,
          "computed": false,
          "start": 544,
          "end": 559
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 560,
            "end": 562
          }
        ],
        "optional": false,
        "start": 544,
        "end": 563
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 564,
        "end": 566
      },
      "abstract": false,
      "declare": true,
      "start": 512,
      "end": 566
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 567
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49,
    "range": [
      42,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "CoreObject",
    "start": 56,
    "end": 66,
    "range": [
      56,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "Statics",
    "start": 90,
    "end": 97,
    "range": [
      90,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 103,
    "end": 111,
    "range": [
      103,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 120,
    "end": 122,
    "range": [
      120,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 128,
    "end": 130,
    "range": [
      128,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 148,
    "end": 152,
    "range": [
      148,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "Statics",
    "start": 154,
    "end": 161,
    "range": [
      154,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 173,
    "end": 181,
    "range": [
      173,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 189,
    "end": 193,
    "range": [
      189,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 203,
    "end": 211,
    "range": [
      203,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "Statics",
    "start": 212,
    "end": 219,
    "range": [
      212,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 237,
    "end": 245,
    "range": [
      237,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 252,
    "end": 260,
    "range": [
      252,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 275,
    "end": 282,
    "range": [
      275,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 283,
    "end": 288,
    "range": [
      283,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 289,
    "end": 294,
    "range": [
      289,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 302,
    "end": 308,
    "range": [
      302,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 309,
    "end": 315,
    "range": [
      309,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 326,
    "end": 330,
    "range": [
      326,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 340,
    "end": 345,
    "range": [
      340,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359,
    "range": [
      352,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 360,
    "end": 365,
    "range": [
      360,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 366,
    "end": 376,
    "range": [
      366,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 378,
    "end": 383,
    "range": [
      378,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 388,
    "end": 395,
    "range": [
      388,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 396,
    "end": 401,
    "range": [
      396,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "EmberObject",
    "start": 402,
    "end": 413,
    "range": [
      402,
      413
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421,
    "range": [
      414,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "CoreObject",
    "start": 422,
    "end": 432,
    "range": [
      422,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 433,
    "end": 439,
    "range": [
      433,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 440,
    "end": 450,
    "range": [
      440,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 455,
    "end": 462,
    "range": [
      455,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 463,
    "end": 468,
    "range": [
      463,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "CoreView",
    "start": 469,
    "end": 477,
    "range": [
      469,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 478,
    "end": 485,
    "range": [
      478,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "EmberObject",
    "start": 486,
    "end": 497,
    "range": [
      486,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 512,
    "end": 519,
    "range": [
      512,
      519
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 520,
    "end": 525,
    "range": [
      520,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 526,
    "end": 535,
    "range": [
      526,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "CoreView",
    "start": 544,
    "end": 552,
    "range": [
      544,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 553,
    "end": 559,
    "range": [
      553,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 24
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 42
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 43,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 13,
    "end": 24,
    "range": [
      13,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 33,
    "end": 42,
    "range": [
      33,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  }
]
```
