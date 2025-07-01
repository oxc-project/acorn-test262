__ESTREE_TEST__:PASS:
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 22
              },
              "typeArguments": null,
              "start": 18,
              "end": 22
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 22
          }
        ],
        "start": 7,
        "end": 23
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
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
                    "type": "VariableDeclaration",
                    "kind": "var",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 51,
                                "end": 52
                              },
                              "typeArguments": null,
                              "start": 51,
                              "end": 52
                            },
                            "start": 49,
                            "end": 52
                          },
                          "start": 48,
                          "end": 52
                        },
                        "init": null,
                        "definite": false,
                        "start": 48,
                        "end": 52
                      }
                    ],
                    "declare": false,
                    "start": 44,
                    "end": 53
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 66,
                          "end": 67
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 71
                            },
                            "property": {
                              "type": "Literal",
                              "value": "notHere",
                              "raw": "'notHere'",
                              "start": 72,
                              "end": 81
                            },
                            "optional": false,
                            "computed": true,
                            "start": 70,
                            "end": 82
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 70,
                          "end": 84
                        },
                        "definite": false,
                        "start": 66,
                        "end": 84
                      }
                    ],
                    "declare": false,
                    "start": 62,
                    "end": 85
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 122
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 126
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "notHere",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 134
                          },
                          "optional": false,
                          "computed": false,
                          "start": 125,
                          "end": 134
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 125,
                        "end": 136
                      },
                      "start": 121,
                      "end": 136
                    },
                    "start": 114,
                    "end": 137
                  }
                ],
                "start": 34,
                "end": 143
              },
              "expression": false,
              "start": 31,
              "end": 143
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 143
          }
        ],
        "start": 24,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 145
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 166
                      },
                      "typeArguments": null,
                      "start": 162,
                      "end": 166
                    }
                  ],
                  "start": 161,
                  "end": 167
                },
                "arguments": [],
                "start": 156,
                "end": 169
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "optional": false,
              "computed": false,
              "start": 155,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 155,
            "end": 174
          },
          "definite": false,
          "start": 151,
          "end": 174
        }
      ],
      "declare": false,
      "start": 147,
      "end": 175
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
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
              "start": 189,
              "end": 190
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 203
              },
              "typeArguments": null,
              "start": 199,
              "end": 203
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 189,
            "end": 203
          }
        ],
        "start": 188,
        "end": 204
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 214
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
                  "start": 216,
                  "end": 217
                },
                "typeArguments": null,
                "start": 216,
                "end": 217
              },
              "start": 214,
              "end": 217
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 218
          }
        ],
        "start": 205,
        "end": 220
      },
      "declare": false,
      "start": 177,
      "end": 220
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
            "name": "i",
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
                  "start": 228,
                  "end": 229
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 234
                      },
                      "typeArguments": null,
                      "start": 230,
                      "end": 234
                    }
                  ],
                  "start": 229,
                  "end": 235
                },
                "start": 228,
                "end": 235
              },
              "start": 226,
              "end": 235
            },
            "start": 225,
            "end": 235
          },
          "init": null,
          "definite": false,
          "start": 225,
          "end": 235
        }
      ],
      "declare": false,
      "start": 221,
      "end": 236
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 251
                },
                "optional": false,
                "computed": false,
                "start": 246,
                "end": 251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "notHere",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 246,
            "end": 261
          },
          "definite": false,
          "start": 241,
          "end": 261
        }
      ],
      "declare": false,
      "start": 237,
      "end": 262
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 270
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 278
                },
                "optional": false,
                "computed": false,
                "start": 273,
                "end": 278
              },
              "property": {
                "type": "Literal",
                "value": "notHere",
                "raw": "'notHere'",
                "start": 279,
                "end": 288
              },
              "optional": false,
              "computed": true,
              "start": 273,
              "end": 289
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 273,
            "end": 291
          },
          "definite": false,
          "start": 267,
          "end": 291
        }
      ],
      "declare": false,
      "start": 263,
      "end": 292
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 308,
                            "end": 309
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 318,
                              "end": 322
                            },
                            "typeArguments": null,
                            "start": 318,
                            "end": 322
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 308,
                          "end": 322
                        }
                      ],
                      "start": 307,
                      "end": 323
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "typeArguments": null,
                        "start": 327,
                        "end": 328
                      },
                      "start": 325,
                      "end": 328
                    },
                    "start": 307,
                    "end": 329
                  }
                ],
                "start": 301,
                "end": 331
              },
              "start": 299,
              "end": 331
            },
            "start": 298,
            "end": 331
          },
          "init": null,
          "definite": false,
          "start": 298,
          "end": 331
        }
      ],
      "declare": false,
      "start": 294,
      "end": 331
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              },
              "start": 338,
              "end": 346
            },
            "start": 336,
            "end": 346
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 349,
                "end": 352
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "notHere",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 349,
              "end": 360
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 349,
            "end": 362
          },
          "definite": false,
          "start": 336,
          "end": 362
        }
      ],
      "declare": false,
      "start": 332,
      "end": 363
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 373,
                "end": 379
              },
              "start": 371,
              "end": 379
            },
            "start": 368,
            "end": 379
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 383
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 382,
                "end": 385
              },
              "property": {
                "type": "Literal",
                "value": "notHere",
                "raw": "'notHere'",
                "start": 386,
                "end": 395
              },
              "optional": false,
              "computed": true,
              "start": 382,
              "end": 396
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 382,
            "end": 398
          },
          "definite": false,
          "start": 368,
          "end": 398
        }
      ],
      "declare": false,
      "start": 364,
      "end": 399
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 418
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                          "start": 421,
                          "end": 422
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 431,
                            "end": 435
                          },
                          "typeArguments": null,
                          "start": 431,
                          "end": 435
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 421,
                        "end": 435
                      }
                    ],
                    "start": 420,
                    "end": 436
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
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
                            "start": 440,
                            "end": 441
                          },
                          "typeArguments": null,
                          "start": 440,
                          "end": 441
                        },
                        "start": 438,
                        "end": 441
                      },
                      "start": 437,
                      "end": 441
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 445
                      },
                      "typeArguments": null,
                      "start": 444,
                      "end": 445
                    },
                    "start": 442,
                    "end": 445
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 463,
                              "end": 464
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 467,
                                  "end": 468
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "notHere",
                                  "raw": "'notHere'",
                                  "start": 469,
                                  "end": 478
                                },
                                "optional": false,
                                "computed": true,
                                "start": 467,
                                "end": 479
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 467,
                              "end": 481
                            },
                            "definite": false,
                            "start": 463,
                            "end": 481
                          }
                        ],
                        "declare": false,
                        "start": 459,
                        "end": 482
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 519
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 522,
                                "end": 523
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "notHere",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 524,
                                "end": 531
                              },
                              "optional": false,
                              "computed": false,
                              "start": 522,
                              "end": 531
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 522,
                            "end": 533
                          },
                          "start": 518,
                          "end": 533
                        },
                        "start": 511,
                        "end": 534
                      }
                    ],
                    "start": 449,
                    "end": 540
                  },
                  "id": null,
                  "generator": false,
                  "start": 420,
                  "end": 540
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 415,
                "end": 540
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 549
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 556
                        },
                        "optional": false,
                        "computed": false,
                        "start": 551,
                        "end": 556
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 551,
                      "end": 558
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notHere",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 559,
                      "end": 566
                    },
                    "optional": false,
                    "computed": false,
                    "start": 551,
                    "end": 566
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 551,
                  "end": 568
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 546,
                "end": 568
              }
            ],
            "start": 409,
            "end": 570
          },
          "definite": false,
          "start": 405,
          "end": 570
        }
      ],
      "declare": false,
      "start": 401,
      "end": 570
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 582
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 586
              },
              "optional": false,
              "computed": false,
              "start": 581,
              "end": 586
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 595
                },
                "typeArguments": null,
                "arguments": [],
                "start": 587,
                "end": 597
              }
            ],
            "optional": false,
            "start": 581,
            "end": 598
          },
          "definite": false,
          "start": 576,
          "end": 598
        }
      ],
      "declare": false,
      "start": 572,
      "end": 599
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 599
}
```
