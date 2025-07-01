__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 24
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 26,
                          "end": 29
                        },
                        "start": 26,
                        "end": 29
                      },
                      "start": 24,
                      "end": 29
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 23,
                    "end": 29
                  }
                ],
                "start": 21,
                "end": 31
              },
              "start": 19,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 32
          }
        ],
        "start": 12,
        "end": 34
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "typeArguments": null,
                "start": 42,
                "end": 43
              },
              "start": 40,
              "end": 43
            },
            "start": 39,
            "end": 43
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 122
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 124,
                          "end": 127
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 121,
                        "end": 127
                      }
                    ],
                    "start": 119,
                    "end": 129
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 108,
                  "end": 130
                }
              ],
              "start": 52,
              "end": 132
            },
            "abstract": false,
            "declare": false,
            "start": 46,
            "end": 132
          },
          "definite": false,
          "start": 39,
          "end": 132
        }
      ],
      "declare": false,
      "start": 35,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 134,
          "end": 137
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 145,
                "end": 148
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 142,
              "end": 148
            }
          ],
          "start": 140,
          "end": 150
        },
        "start": 134,
        "end": 150
      },
      "directive": null,
      "start": 134,
      "end": 151
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
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 164,
            "end": 167
          },
          "definite": false,
          "start": 159,
          "end": 167
        }
      ],
      "declare": false,
      "start": 153,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "typeArguments": null,
                "start": 177,
                "end": 178
              },
              "start": 175,
              "end": 178
            },
            "start": 173,
            "end": 178
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 199
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 208,
                          "end": 211
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 205,
                        "end": 211
                      }
                    ],
                    "start": 203,
                    "end": 213
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 189,
                  "end": 214
                }
              ],
              "start": 187,
              "end": 216
            },
            "abstract": false,
            "declare": false,
            "start": 181,
            "end": 216
          },
          "definite": false,
          "start": 173,
          "end": 216
        }
      ],
      "declare": false,
      "start": 169,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 222
          },
          "optional": false,
          "computed": true,
          "start": 218,
          "end": 223
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 231,
                "end": 234
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 228,
              "end": 234
            }
          ],
          "start": 226,
          "end": 236
        },
        "start": 218,
        "end": 236
      },
      "directive": null,
      "start": 218,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 249
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "typeArguments": null,
                "start": 253,
                "end": 254
              },
              "start": 251,
              "end": 254
            },
            "start": 250,
            "end": 254
          },
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 278,
                          "end": 279
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 281,
                          "end": 284
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 278,
                        "end": 284
                      }
                    ],
                    "start": 276,
                    "end": 286
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 265,
                  "end": 286
                }
              ],
              "start": 263,
              "end": 288
            },
            "abstract": false,
            "declare": false,
            "start": 257,
            "end": 288
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 290,
        "end": 293
      },
      "expression": false,
      "start": 239,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 302
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 301,
                "end": 306
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 313
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 316
                        },
                        "typeArguments": null,
                        "start": 315,
                        "end": 316
                      },
                      "start": 313,
                      "end": 316
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 312,
                    "end": 316
                  }
                ],
                "start": 310,
                "end": 318
              },
              "start": 308,
              "end": 318
            },
            "start": 299,
            "end": 318
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 324
                },
                "value": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 341,
                          "end": 342
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 347,
                                "end": 348
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 350,
                                "end": 353
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 347,
                              "end": 353
                            }
                          ],
                          "start": 345,
                          "end": 355
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 334,
                        "end": 355
                      }
                    ],
                    "start": 332,
                    "end": 357
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 326,
                  "end": 357
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 323,
                "end": 357
              }
            ],
            "start": 321,
            "end": 359
          },
          "definite": false,
          "start": 299,
          "end": 359
        }
      ],
      "declare": false,
      "start": 295,
      "end": 360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 372
                  },
                  "right": {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 390,
                            "end": 391
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 396,
                                  "end": 397
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 399,
                                  "end": 402
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 396,
                                "end": 402
                              }
                            ],
                            "start": 394,
                            "end": 404
                          },
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 383,
                          "end": 404
                        }
                      ],
                      "start": 381,
                      "end": 406
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 375,
                    "end": 406
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 367,
                "end": 406
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 412
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 416
                        },
                        "typeArguments": null,
                        "start": 415,
                        "end": 416
                      },
                      "start": 413,
                      "end": 416
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 411,
                    "end": 416
                  }
                ],
                "start": 409,
                "end": 418
              },
              "start": 407,
              "end": 418
            },
            "start": 365,
            "end": 418
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 421,
            "end": 424
          },
          "definite": false,
          "start": 365,
          "end": 424
        }
      ],
      "declare": false,
      "start": 361,
      "end": 425
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "right": {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 455,
                            "end": 456
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 461,
                                  "end": 462
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 464,
                                  "end": 467
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 461,
                                "end": 467
                              }
                            ],
                            "start": 459,
                            "end": 469
                          },
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 448,
                          "end": 469
                        }
                      ],
                      "start": 446,
                      "end": 471
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 440,
                    "end": 471
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 471
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 432,
                "end": 471
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 480,
                          "end": 481
                        },
                        "typeArguments": null,
                        "start": 480,
                        "end": 481
                      },
                      "start": 478,
                      "end": 481
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 476,
                    "end": 481
                  }
                ],
                "start": 474,
                "end": 483
              },
              "start": 472,
              "end": 483
            },
            "start": 430,
            "end": 483
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 489
                },
                "value": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 506,
                          "end": 507
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 512,
                                "end": 513
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 515,
                                "end": 518
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 512,
                              "end": 518
                            }
                          ],
                          "start": 510,
                          "end": 520
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 499,
                        "end": 520
                      }
                    ],
                    "start": 497,
                    "end": 522
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 491,
                  "end": 522
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 488,
                "end": 522
              }
            ],
            "start": 486,
            "end": 524
          },
          "definite": false,
          "start": 430,
          "end": 524
        }
      ],
      "declare": false,
      "start": 426,
      "end": 525
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c6",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 534
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 539,
                    "end": 540
                  }
                ],
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "start": 530,
            "end": 541
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 561
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 566,
                              "end": 567
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 569,
                              "end": 572
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 566,
                            "end": 572
                          }
                        ],
                        "start": 564,
                        "end": 574
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 553,
                      "end": 574
                    }
                  ],
                  "start": 551,
                  "end": 576
                },
                "abstract": false,
                "declare": false,
                "start": 545,
                "end": 576
              }
            ],
            "start": 544,
            "end": 577
          },
          "definite": false,
          "start": 530,
          "end": 577
        }
      ],
      "declare": false,
      "start": 526,
      "end": 578
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c7",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 587
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 592
                  },
                  "typeArguments": null,
                  "start": 591,
                  "end": 592
                },
                "start": 591,
                "end": 594
              },
              "start": 589,
              "end": 594
            },
            "start": 583,
            "end": 594
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 613,
                        "end": 614
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 619,
                              "end": 620
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 622,
                              "end": 625
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 619,
                            "end": 625
                          }
                        ],
                        "start": 617,
                        "end": 627
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 606,
                      "end": 627
                    }
                  ],
                  "start": 604,
                  "end": 629
                },
                "abstract": false,
                "declare": false,
                "start": 598,
                "end": 629
              }
            ],
            "start": 597,
            "end": 630
          },
          "definite": false,
          "start": 583,
          "end": 630
        }
      ],
      "declare": false,
      "start": 579,
      "end": 631
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 641
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 659,
                          "end": 660
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 665,
                                "end": 666
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 668,
                                "end": 671
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 665,
                              "end": 671
                            }
                          ],
                          "start": 663,
                          "end": 673
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 652,
                        "end": 673
                      }
                    ],
                    "start": 650,
                    "end": 675
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 644,
                  "end": 675
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 675
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "typeArguments": null,
                      "start": 680,
                      "end": 681
                    },
                    "start": 680,
                    "end": 682
                  }
                ],
                "start": 679,
                "end": 683
              },
              "start": 677,
              "end": 683
            },
            "start": 637,
            "end": 683
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 686,
            "end": 688
          },
          "definite": false,
          "start": 637,
          "end": 688
        }
      ],
      "declare": false,
      "start": 633,
      "end": 689
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 698
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 717
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 722,
                                "end": 723
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 725,
                                "end": 728
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 722,
                              "end": 728
                            }
                          ],
                          "start": 720,
                          "end": 730
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 709,
                        "end": 730
                      }
                    ],
                    "start": 707,
                    "end": 732
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 701,
                  "end": 732
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 732
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 736,
                    "end": 737
                  },
                  "typeArguments": null,
                  "start": 736,
                  "end": 737
                },
                "start": 736,
                "end": 739
              },
              "start": 734,
              "end": 739
            },
            "start": 694,
            "end": 739
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 742,
            "end": 744
          },
          "definite": false,
          "start": 694,
          "end": 744
        }
      ],
      "declare": false,
      "start": 690,
      "end": 745
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 755
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 773,
                          "end": 774
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 779,
                                "end": 780
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 782,
                                "end": 785
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 779,
                              "end": 785
                            }
                          ],
                          "start": 777,
                          "end": 787
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 766,
                        "end": 787
                      }
                    ],
                    "start": 764,
                    "end": 789
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 758,
                  "end": 789
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 789
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 795
                      },
                      "typeArguments": null,
                      "start": 794,
                      "end": 795
                    },
                    "start": 794,
                    "end": 796
                  }
                ],
                "start": 793,
                "end": 797
              },
              "start": 791,
              "end": 797
            },
            "start": 750,
            "end": 797
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 816,
                        "end": 817
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 822,
                              "end": 823
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 825,
                              "end": 828
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 822,
                            "end": 828
                          }
                        ],
                        "start": 820,
                        "end": 830
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 809,
                      "end": 830
                    }
                  ],
                  "start": 807,
                  "end": 832
                },
                "abstract": false,
                "declare": false,
                "start": 801,
                "end": 832
              }
            ],
            "start": 800,
            "end": 833
          },
          "definite": false,
          "start": 750,
          "end": 833
        }
      ],
      "declare": false,
      "start": 746,
      "end": 834
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 844
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 862,
                          "end": 863
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 868,
                                "end": 869
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 871,
                                "end": 874
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 868,
                              "end": 874
                            }
                          ],
                          "start": 866,
                          "end": 876
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 855,
                        "end": 876
                      }
                    ],
                    "start": 853,
                    "end": 878
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 847,
                  "end": 878
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 878
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 882,
                    "end": 883
                  },
                  "typeArguments": null,
                  "start": 882,
                  "end": 883
                },
                "start": 882,
                "end": 885
              },
              "start": 880,
              "end": 885
            },
            "start": 839,
            "end": 885
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 905
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 910,
                              "end": 911
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 913,
                              "end": 916
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 910,
                            "end": 916
                          }
                        ],
                        "start": 908,
                        "end": 918
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 897,
                      "end": 918
                    }
                  ],
                  "start": 895,
                  "end": 920
                },
                "abstract": false,
                "declare": false,
                "start": 889,
                "end": 920
              }
            ],
            "start": 888,
            "end": 921
          },
          "definite": false,
          "start": 839,
          "end": 921
        }
      ],
      "declare": false,
      "start": 835,
      "end": 922
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 922
}
```
