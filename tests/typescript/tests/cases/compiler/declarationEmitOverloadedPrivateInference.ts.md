__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 19,
          "end": 25
        },
        "start": 17,
        "end": 25
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 39,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              },
              "start": 39,
              "end": 50
            },
            "start": 32,
            "end": 51
          }
        ],
        "start": 26,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneArg",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 70
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            },
            "start": 76,
            "end": 84
          },
          "start": 71,
          "end": 84
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 87,
          "end": 93
        },
        "start": 85,
        "end": 93
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 107,
                "end": 111
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 115,
                "end": 118
              },
              "start": 107,
              "end": 118
            },
            "start": 100,
            "end": 119
          }
        ],
        "start": 94,
        "end": 121
      },
      "expression": false,
      "start": 55,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Wrapper",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 143
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
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 163
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
                        "start": 164,
                        "end": 165
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 164,
                      "end": 165
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 168
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 167,
                      "end": 168
                    }
                  ],
                  "start": 163,
                  "end": 169
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
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
                                  "start": 184,
                                  "end": 185
                                },
                                "typeArguments": null,
                                "start": 184,
                                "end": 185
                              },
                              "start": 182,
                              "end": 185
                            },
                            "start": 175,
                            "end": 185
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 190,
                              "end": 191
                            },
                            "typeArguments": null,
                            "start": 190,
                            "end": 191
                          },
                          "start": 187,
                          "end": 191
                        },
                        "start": 174,
                        "end": 191
                      },
                      "start": 172,
                      "end": 191
                    },
                    "start": 170,
                    "end": 191
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
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
                              "start": 204,
                              "end": 205
                            },
                            "typeArguments": null,
                            "start": 204,
                            "end": 205
                          },
                          "start": 202,
                          "end": 205
                        },
                        "start": 195,
                        "end": 205
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 211
                        },
                        "typeArguments": null,
                        "start": 210,
                        "end": 211
                      },
                      "start": 207,
                      "end": 211
                    },
                    "start": 194,
                    "end": 211
                  },
                  "start": 192,
                  "end": 211
                },
                "body": null,
                "expression": false,
                "start": 163,
                "end": 212
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 150,
              "end": 212
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 230
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
                        "start": 231,
                        "end": 232
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 231,
                      "end": 232
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
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
                  "start": 230,
                  "end": 236
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
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
                                  "start": 252,
                                  "end": 253
                                },
                                "typeArguments": null,
                                "start": 252,
                                "end": 253
                              },
                              "start": 250,
                              "end": 253
                            },
                            "start": 242,
                            "end": 253
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 258,
                              "end": 259
                            },
                            "typeArguments": null,
                            "start": 258,
                            "end": 259
                          },
                          "start": 255,
                          "end": 259
                        },
                        "start": 241,
                        "end": 259
                      },
                      "start": 239,
                      "end": 259
                    },
                    "start": 237,
                    "end": 259
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noArgs",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 269,
                          "end": 273
                        },
                        "start": 269,
                        "end": 273
                      },
                      "start": 267,
                      "end": 273
                    },
                    "start": 261,
                    "end": 273
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
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
                              "start": 287,
                              "end": 288
                            },
                            "typeArguments": null,
                            "start": 287,
                            "end": 288
                          },
                          "start": 285,
                          "end": 288
                        },
                        "start": 277,
                        "end": 288
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 294
                        },
                        "typeArguments": null,
                        "start": 293,
                        "end": 294
                      },
                      "start": 290,
                      "end": 294
                    },
                    "start": 276,
                    "end": 294
                  },
                  "start": 274,
                  "end": 294
                },
                "body": null,
                "expression": false,
                "start": 230,
                "end": 295
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 217,
              "end": 295
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 314
              },
              "value": {
                "type": "FunctionExpression",
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
                        "start": 315,
                        "end": 316
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 315,
                      "end": 316
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 318,
                        "end": 319
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 318,
                      "end": 319
                    }
                  ],
                  "start": 314,
                  "end": 320
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
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
                                  "start": 335,
                                  "end": 336
                                },
                                "typeArguments": null,
                                "start": 335,
                                "end": 336
                              },
                              "start": 333,
                              "end": 336
                            },
                            "start": 326,
                            "end": 336
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 341,
                              "end": 342
                            },
                            "typeArguments": null,
                            "start": 341,
                            "end": 342
                          },
                          "start": 338,
                          "end": 342
                        },
                        "start": 325,
                        "end": 342
                      },
                      "start": 323,
                      "end": 342
                    },
                    "start": 321,
                    "end": 342
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 361,
                          "end": 365
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 369,
                          "end": 372
                        },
                        "start": 361,
                        "end": 372
                      },
                      "start": 354,
                      "end": 373
                    }
                  ],
                  "start": 344,
                  "end": 379
                },
                "expression": false,
                "start": 314,
                "end": 379
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 301,
              "end": 379
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Proxies",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 399
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
                      "name": "Failure",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 419
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 421,
                          "end": 425
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "proxy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 431
                        },
                        "optional": false,
                        "computed": false,
                        "start": 421,
                        "end": 431
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "noArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 438
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 440,
                          "end": 444
                        }
                      ],
                      "optional": false,
                      "start": 421,
                      "end": 445
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 412,
                    "end": 445
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Success",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 462
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "proxy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 474
                        },
                        "optional": false,
                        "computed": false,
                        "start": 464,
                        "end": 474
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "oneArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 481
                        }
                      ],
                      "optional": false,
                      "start": 464,
                      "end": 482
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 455,
                    "end": 482
                  }
                ],
                "start": 402,
                "end": 489
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 385,
              "end": 490
            }
          ],
          "start": 144,
          "end": 492
        },
        "abstract": false,
        "declare": false,
        "start": 130,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 492
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 492
}
```
