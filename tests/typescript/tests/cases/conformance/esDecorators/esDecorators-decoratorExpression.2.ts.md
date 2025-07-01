__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
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
            "name": "g",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 36,
                        "end": 37
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 36,
                      "end": 37
                    }
                  ],
                  "start": 35,
                  "end": 38
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 46
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 48,
                        "end": 51
                      },
                      "start": 46,
                      "end": 51
                    },
                    "value": null,
                    "start": 39,
                    "end": 51
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 56,
                    "end": 59
                  },
                  "start": 53,
                  "end": 59
                },
                "start": 35,
                "end": 59
              },
              "start": 33,
              "end": 59
            },
            "start": 32,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 59
        }
      ],
      "declare": true,
      "start": 20,
      "end": 60
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 83,
                            "end": 84
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 83,
                          "end": 84
                        }
                      ],
                      "start": 82,
                      "end": 85
                    },
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 89,
                          "end": 93
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          },
                          "start": 93,
                          "end": 98
                        },
                        "value": null,
                        "start": 86,
                        "end": 98
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 103,
                        "end": 106
                      },
                      "start": 100,
                      "end": 106
                    },
                    "start": 82,
                    "end": 106
                  },
                  "start": 79,
                  "end": 106
                },
                "start": 76,
                "end": 106
              },
              "start": 74,
              "end": 106
            },
            "start": 73,
            "end": 106
          },
          "init": null,
          "definite": false,
          "start": 73,
          "end": 106
        }
      ],
      "declare": true,
      "start": 61,
      "end": 107
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "start": 112,
                "end": 114
              },
              "start": 111,
              "end": 114
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 123,
            "end": 125
          },
          "abstract": false,
          "declare": false,
          "start": 111,
          "end": 125
        }
      ],
      "start": 109,
      "end": 127
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 135
                  },
                  "optional": false,
                  "computed": false,
                  "start": 132,
                  "end": 135
                },
                "start": 132,
                "end": 136
              },
              "start": 131,
              "end": 136
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 144
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 145,
            "end": 147
          },
          "abstract": false,
          "declare": false,
          "start": 131,
          "end": 147
        }
      ],
      "start": 129,
      "end": 149
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "start": 154,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 154,
                "end": 158
              },
              "start": 153,
              "end": 158
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 167,
            "end": 169
          },
          "abstract": false,
          "declare": false,
          "start": 153,
          "end": 169
        }
      ],
      "start": 151,
      "end": 171
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 178,
                      "end": 184
                    }
                  ],
                  "start": 177,
                  "end": 185
                },
                "arguments": [],
                "optional": false,
                "start": 176,
                "end": 187
              },
              "start": 175,
              "end": 187
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 196,
            "end": 198
          },
          "abstract": false,
          "declare": false,
          "start": 175,
          "end": 198
        }
      ],
      "start": 173,
      "end": 200
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TSInstantiationExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 208,
                      "end": 214
                    }
                  ],
                  "start": 207,
                  "end": 215
                },
                "start": 206,
                "end": 215
              },
              "start": 204,
              "end": 216
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 225,
            "end": 227
          },
          "abstract": false,
          "declare": false,
          "start": 204,
          "end": 227
        }
      ],
      "start": 202,
      "end": 229
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TSInstantiationExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 235,
                  "end": 238
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  ],
                  "start": 238,
                  "end": 246
                },
                "start": 235,
                "end": 246
              },
              "start": 233,
              "end": 247
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 256,
            "end": 258
          },
          "abstract": false,
          "declare": false,
          "start": 233,
          "end": 258
        }
      ],
      "start": 231,
      "end": 260
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 267
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 266,
                  "end": 269
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 271
                },
                "optional": false,
                "computed": false,
                "start": 266,
                "end": 271
              },
              "start": 264,
              "end": 272
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 280
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 281,
            "end": 283
          },
          "abstract": false,
          "declare": false,
          "start": 264,
          "end": 283
        }
      ],
      "start": 262,
      "end": 285
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 291,
                    "end": 294
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 296
                  },
                  "optional": false,
                  "computed": false,
                  "start": 291,
                  "end": 296
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 291,
                "end": 298
              },
              "start": 289,
              "end": 299
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 308,
            "end": 310
          },
          "abstract": false,
          "declare": false,
          "start": 289,
          "end": 310
        }
      ],
      "start": 287,
      "end": 312
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 319
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 319,
                      "end": 321
                    }
                  ],
                  "expressions": [],
                  "start": 319,
                  "end": 321
                },
                "start": 318,
                "end": 321
              },
              "start": 316,
              "end": 322
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 331,
            "end": 333
          },
          "abstract": false,
          "declare": false,
          "start": 316,
          "end": 333
        }
      ],
      "start": 314,
      "end": 335
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 344
                  },
                  "optional": false,
                  "computed": false,
                  "start": 341,
                  "end": 344
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 344,
                      "end": 346
                    }
                  ],
                  "expressions": [],
                  "start": 344,
                  "end": 346
                },
                "start": 341,
                "end": 346
              },
              "start": 339,
              "end": 347
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 355
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 356,
            "end": 358
          },
          "abstract": false,
          "declare": false,
          "start": 339,
          "end": 358
        }
      ],
      "start": 337,
      "end": 360
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "optional": true,
                    "computed": false,
                    "start": 366,
                    "end": 370
                  },
                  "start": 366,
                  "end": 371
                },
                "start": 366,
                "end": 371
              },
              "start": 364,
              "end": 372
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 380
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 381,
            "end": 383
          },
          "abstract": false,
          "declare": false,
          "start": 364,
          "end": 383
        }
      ],
      "start": 362,
      "end": 385
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "property": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "\"y\"",
                  "start": 393,
                  "end": 396
                },
                "optional": false,
                "computed": true,
                "start": 391,
                "end": 397
              },
              "start": 389,
              "end": 398
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 407,
            "end": 409
          },
          "abstract": false,
          "declare": false,
          "start": 389,
          "end": 409
        }
      ],
      "start": 387,
      "end": 411
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "property": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 421,
                    "end": 424
                  },
                  "optional": true,
                  "computed": true,
                  "start": 417,
                  "end": 425
                },
                "start": 417,
                "end": 425
              },
              "start": 415,
              "end": 426
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 434
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 435,
            "end": 437
          },
          "abstract": false,
          "declare": false,
          "start": 415,
          "end": 437
        }
      ],
      "start": 413,
      "end": 439
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 450
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 455
                      },
                      "start": 454,
                      "end": 456
                    },
                    "start": 453,
                    "end": 456
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 458
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
                    "body": [],
                    "start": 461,
                    "end": 463
                  },
                  "expression": false,
                  "start": 458,
                  "end": 463
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 453,
                "end": 463
              }
            ],
            "start": 451,
            "end": 465
          },
          "abstract": false,
          "declare": false,
          "start": 443,
          "end": 465
        }
      ],
      "start": 441,
      "end": 467
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 478
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 482,
                          "end": 483
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 485
                        },
                        "optional": false,
                        "computed": false,
                        "start": 482,
                        "end": 485
                      },
                      "start": 482,
                      "end": 486
                    },
                    "start": 481,
                    "end": 486
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 488
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
                    "body": [],
                    "start": 491,
                    "end": 493
                  },
                  "expression": false,
                  "start": 488,
                  "end": 493
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 481,
                "end": 493
              }
            ],
            "start": 479,
            "end": 495
          },
          "abstract": false,
          "declare": false,
          "start": 471,
          "end": 495
        }
      ],
      "start": 469,
      "end": 497
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 512,
                          "end": 513
                        },
                        "start": 512,
                        "end": 514
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 516
                      },
                      "optional": false,
                      "computed": false,
                      "start": 512,
                      "end": 516
                    },
                    "start": 511,
                    "end": 516
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 518
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
                    "body": [],
                    "start": 521,
                    "end": 523
                  },
                  "expression": false,
                  "start": 518,
                  "end": 523
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 511,
                "end": 523
              }
            ],
            "start": 509,
            "end": 525
          },
          "abstract": false,
          "declare": false,
          "start": 501,
          "end": 525
        }
      ],
      "start": 499,
      "end": 527
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 538
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 543
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 544,
                            "end": 550
                          }
                        ],
                        "start": 543,
                        "end": 551
                      },
                      "arguments": [],
                      "optional": false,
                      "start": 542,
                      "end": 553
                    },
                    "start": 541,
                    "end": 553
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
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
                    "body": [],
                    "start": 558,
                    "end": 560
                  },
                  "expression": false,
                  "start": 555,
                  "end": 560
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 541,
                "end": 560
              }
            ],
            "start": 539,
            "end": 562
          },
          "abstract": false,
          "declare": false,
          "start": 531,
          "end": 562
        }
      ],
      "start": 529,
      "end": 564
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 575
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "TSInstantiationExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 581
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 582,
                            "end": 588
                          }
                        ],
                        "start": 581,
                        "end": 589
                      },
                      "start": 580,
                      "end": 589
                    },
                    "start": 578,
                    "end": 590
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 592
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
                    "body": [],
                    "start": 595,
                    "end": 597
                  },
                  "expression": false,
                  "start": 592,
                  "end": 597
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 578,
                "end": 597
              }
            ],
            "start": 576,
            "end": 599
          },
          "abstract": false,
          "declare": false,
          "start": 568,
          "end": 599
        }
      ],
      "start": 566,
      "end": 601
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 612
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "TSInstantiationExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 618
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 617,
                        "end": 620
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 621,
                            "end": 627
                          }
                        ],
                        "start": 620,
                        "end": 628
                      },
                      "start": 617,
                      "end": 628
                    },
                    "start": 615,
                    "end": 629
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
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
                    "body": [],
                    "start": 634,
                    "end": 636
                  },
                  "expression": false,
                  "start": 631,
                  "end": 636
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 615,
                "end": 636
              }
            ],
            "start": 613,
            "end": 638
          },
          "abstract": false,
          "declare": false,
          "start": 605,
          "end": 638
        }
      ],
      "start": 603,
      "end": 640
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 651
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 656,
                          "end": 657
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 656,
                        "end": 659
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 660,
                        "end": 661
                      },
                      "optional": false,
                      "computed": false,
                      "start": 656,
                      "end": 661
                    },
                    "start": 654,
                    "end": 662
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 664
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
                    "body": [],
                    "start": 667,
                    "end": 669
                  },
                  "expression": false,
                  "start": 664,
                  "end": 669
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 654,
                "end": 669
              }
            ],
            "start": 652,
            "end": 671
          },
          "abstract": false,
          "declare": false,
          "start": 644,
          "end": 671
        }
      ],
      "start": 642,
      "end": 673
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 683,
            "end": 684
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 689,
                            "end": 690
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 689,
                          "end": 692
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 693,
                          "end": 694
                        },
                        "optional": false,
                        "computed": false,
                        "start": 689,
                        "end": 694
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 689,
                      "end": 696
                    },
                    "start": 687,
                    "end": 697
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 699
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
                    "body": [],
                    "start": 702,
                    "end": 704
                  },
                  "expression": false,
                  "start": 699,
                  "end": 704
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 687,
                "end": 704
              }
            ],
            "start": 685,
            "end": 706
          },
          "abstract": false,
          "declare": false,
          "start": 677,
          "end": 706
        }
      ],
      "start": 675,
      "end": 708
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 719
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 724,
                        "end": 725
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 725,
                            "end": 727
                          }
                        ],
                        "expressions": [],
                        "start": 725,
                        "end": 727
                      },
                      "start": 724,
                      "end": 727
                    },
                    "start": 722,
                    "end": 728
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 730
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
                    "body": [],
                    "start": 733,
                    "end": 735
                  },
                  "expression": false,
                  "start": 730,
                  "end": 735
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 722,
                "end": 735
              }
            ],
            "start": 720,
            "end": 737
          },
          "abstract": false,
          "declare": false,
          "start": 712,
          "end": 737
        }
      ],
      "start": 710,
      "end": 739
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 750
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 755,
                          "end": 756
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 757,
                          "end": 758
                        },
                        "optional": false,
                        "computed": false,
                        "start": 755,
                        "end": 758
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 758,
                            "end": 760
                          }
                        ],
                        "expressions": [],
                        "start": 758,
                        "end": 760
                      },
                      "start": 755,
                      "end": 760
                    },
                    "start": 753,
                    "end": 761
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 763
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
                    "body": [],
                    "start": 766,
                    "end": 768
                  },
                  "expression": false,
                  "start": 763,
                  "end": 768
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 753,
                "end": 768
              }
            ],
            "start": 751,
            "end": 770
          },
          "abstract": false,
          "declare": false,
          "start": 743,
          "end": 770
        }
      ],
      "start": 741,
      "end": 772
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 783
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 788,
                            "end": 789
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 791,
                            "end": 792
                          },
                          "optional": true,
                          "computed": false,
                          "start": 788,
                          "end": 792
                        },
                        "start": 788,
                        "end": 793
                      },
                      "start": 788,
                      "end": 793
                    },
                    "start": 786,
                    "end": 794
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 795,
                  "end": 796
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
                    "body": [],
                    "start": 799,
                    "end": 801
                  },
                  "expression": false,
                  "start": 796,
                  "end": 801
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 786,
                "end": 801
              }
            ],
            "start": 784,
            "end": 803
          },
          "abstract": false,
          "declare": false,
          "start": 776,
          "end": 803
        }
      ],
      "start": 774,
      "end": 805
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 816
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 822
                      },
                      "property": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 823,
                        "end": 826
                      },
                      "optional": false,
                      "computed": true,
                      "start": 821,
                      "end": 827
                    },
                    "start": 819,
                    "end": 828
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 830
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
                    "body": [],
                    "start": 833,
                    "end": 835
                  },
                  "expression": false,
                  "start": 830,
                  "end": 835
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 819,
                "end": 835
              }
            ],
            "start": 817,
            "end": 837
          },
          "abstract": false,
          "declare": false,
          "start": 809,
          "end": 837
        }
      ],
      "start": 807,
      "end": 839
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 849,
            "end": 850
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 855,
                          "end": 856
                        },
                        "property": {
                          "type": "Literal",
                          "value": "y",
                          "raw": "\"y\"",
                          "start": 859,
                          "end": 862
                        },
                        "optional": true,
                        "computed": true,
                        "start": 855,
                        "end": 863
                      },
                      "start": 855,
                      "end": 863
                    },
                    "start": 853,
                    "end": 864
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 866
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
                    "body": [],
                    "start": 869,
                    "end": 871
                  },
                  "expression": false,
                  "start": 866,
                  "end": 871
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 853,
                "end": 871
              }
            ],
            "start": 851,
            "end": 873
          },
          "abstract": false,
          "declare": false,
          "start": 843,
          "end": 873
        }
      ],
      "start": 841,
      "end": 875
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 875
}
```
