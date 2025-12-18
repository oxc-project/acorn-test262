__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 43
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 54
          }
        ],
        "start": 30,
        "end": 56
      },
      "declare": false,
      "start": 13,
      "end": 56
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shapes",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 123
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPoint",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 135,
                  "end": 141
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "con",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 165,
                          "end": 172
                        },
                        "start": 165,
                        "end": 172
                      },
                      "start": 163,
                      "end": 172
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 153,
                    "end": 173
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 216
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 228,
                                "end": 234
                              },
                              "start": 226,
                              "end": 234
                            },
                            "start": 225,
                            "end": 234
                          },
                          "readonly": false,
                          "static": false,
                          "start": 218,
                          "end": 234
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 246,
                                "end": 252
                              },
                              "start": 244,
                              "end": 252
                            },
                            "start": 243,
                            "end": 252
                          },
                          "readonly": false,
                          "static": false,
                          "start": 236,
                          "end": 252
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 254,
                        "end": 257
                      },
                      "expression": false,
                      "start": 217,
                      "end": 257
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 205,
                    "end": 257
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getDist",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 301
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 313,
                                  "end": 317
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 318,
                                  "end": 322
                                },
                                "optional": false,
                                "computed": false,
                                "start": 313,
                                "end": 322
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 323,
                                        "end": 327
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 328,
                                        "end": 329
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 323,
                                      "end": 329
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 332,
                                        "end": 336
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 337,
                                        "end": 338
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 332,
                                      "end": 338
                                    },
                                    "start": 323,
                                    "end": 338
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 341,
                                        "end": 345
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 346,
                                        "end": 347
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 341,
                                      "end": 347
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 350,
                                        "end": 354
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 355,
                                        "end": 356
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 350,
                                      "end": 356
                                    },
                                    "start": 341,
                                    "end": 356
                                  },
                                  "start": 323,
                                  "end": 356
                                }
                              ],
                              "optional": false,
                              "start": 313,
                              "end": 357
                            },
                            "start": 306,
                            "end": 358
                          }
                        ],
                        "start": 304,
                        "end": 360
                      },
                      "expression": false,
                      "start": 301,
                      "end": 360
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 294,
                    "end": 360
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "origin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 408
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 420
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 421,
                          "end": 422
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 424,
                          "end": 425
                        }
                      ],
                      "start": 411,
                      "end": 426
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 395,
                    "end": 427
                  }
                ],
                "start": 142,
                "end": 433
              },
              "abstract": false,
              "declare": false,
              "start": 112,
              "end": 433
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 433
          }
        ],
        "start": 85,
        "end": 436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 436
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPoint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 470
                },
                "typeArguments": null,
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "start": 461,
            "end": 470
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shapes",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 489
              },
              "optional": false,
              "computed": false,
              "start": 477,
              "end": 489
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 490,
                "end": 491
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 493,
                "end": 494
              }
            ],
            "start": 473,
            "end": 495
          },
          "definite": false,
          "start": 461,
          "end": 495
        }
      ],
      "declare": false,
      "start": 457,
      "end": 496
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dist",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 505
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 517
              },
              "optional": false,
              "computed": false,
              "start": 508,
              "end": 517
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 508,
            "end": 519
          },
          "definite": false,
          "start": 501,
          "end": 519
        }
      ],
      "declare": false,
      "start": 497,
      "end": 520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 520
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 13,
    "end": 22,
    "range": [
      13,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "IPoint",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "getDist",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 68,
    "end": 77,
    "range": [
      68,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 118,
    "end": 123,
    "range": [
      118,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 124,
    "end": 134,
    "range": [
      124,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "IPoint",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "con",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 205,
    "end": 216,
    "range": [
      205,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
    "end": 234,
    "range": [
      228,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 236,
    "end": 242,
    "range": [
      236,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "getDist",
    "start": 294,
    "end": 301,
    "range": [
      294,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 318,
    "end": 322,
    "range": [
      318,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 323,
    "end": 327,
    "range": [
      323,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 341,
    "end": 345,
    "range": [
      341,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 350,
    "end": 354,
    "range": [
      350,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 402,
    "end": 408,
    "range": [
      402,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 411,
    "end": 414,
    "range": [
      411,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 415,
    "end": 420,
    "range": [
      415,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460,
    "range": [
      457,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "IPoint",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 477,
    "end": 483,
    "range": [
      477,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 484,
    "end": 489,
    "range": [
      484,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 497,
    "end": 500,
    "range": [
      497,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "dist",
    "start": 501,
    "end": 505,
    "range": [
      501,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "getDist",
    "start": 510,
    "end": 517,
    "range": [
      510,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  }
]
```
