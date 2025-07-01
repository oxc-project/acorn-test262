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
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
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
              "start": 17,
              "end": 18
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
                                "start": 38,
                                "end": 39
                              },
                              "typeArguments": null,
                              "start": 38,
                              "end": 39
                            },
                            "start": 36,
                            "end": 39
                          },
                          "start": 35,
                          "end": 39
                        },
                        "init": null,
                        "definite": false,
                        "start": 35,
                        "end": 39
                      }
                    ],
                    "declare": false,
                    "start": 31,
                    "end": 40
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
                          "start": 53,
                          "end": 54
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
                              "start": 57,
                              "end": 58
                            },
                            "property": {
                              "type": "Literal",
                              "value": "toString",
                              "raw": "'toString'",
                              "start": 59,
                              "end": 69
                            },
                            "optional": false,
                            "computed": true,
                            "start": 57,
                            "end": 70
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 57,
                          "end": 72
                        },
                        "definite": false,
                        "start": 53,
                        "end": 72
                      }
                    ],
                    "declare": false,
                    "start": 49,
                    "end": 73
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
                        "start": 109,
                        "end": 110
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
                            "start": 113,
                            "end": 114
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toString",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 115,
                            "end": 123
                          },
                          "optional": false,
                          "computed": false,
                          "start": 113,
                          "end": 123
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 113,
                        "end": 125
                      },
                      "start": 109,
                      "end": 125
                    },
                    "start": 102,
                    "end": 126
                  }
                ],
                "start": 21,
                "end": 132
              },
              "expression": false,
              "start": 18,
              "end": 132
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 132
          }
        ],
        "start": 11,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 134
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
            "start": 140,
            "end": 141
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
                  "start": 149,
                  "end": 150
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  ],
                  "start": 150,
                  "end": 158
                },
                "arguments": [],
                "start": 145,
                "end": 160
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "optional": false,
              "computed": false,
              "start": 144,
              "end": 163
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 144,
            "end": 165
          },
          "definite": false,
          "start": 140,
          "end": 165
        }
      ],
      "declare": false,
      "start": 136,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 179
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
              "start": 180,
              "end": 181
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 180,
            "end": 181
          }
        ],
        "start": 179,
        "end": 182
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
              "start": 189,
              "end": 192
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
                  "start": 194,
                  "end": 195
                },
                "typeArguments": null,
                "start": 194,
                "end": 195
              },
              "start": 192,
              "end": 195
            },
            "accessibility": null,
            "static": false,
            "start": 189,
            "end": 196
          }
        ],
        "start": 183,
        "end": 198
      },
      "declare": false,
      "start": 168,
      "end": 198
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
              "end": 215
            },
            "start": 203,
            "end": 215
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 215
        }
      ],
      "declare": false,
      "start": 199,
      "end": 216
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
            "start": 221,
            "end": 223
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
                  "start": 226,
                  "end": 227
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 231
                },
                "optional": false,
                "computed": false,
                "start": 226,
                "end": 231
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 240
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 240
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 226,
            "end": 242
          },
          "definite": false,
          "start": 221,
          "end": 242
        }
      ],
      "declare": false,
      "start": 217,
      "end": 243
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
            "start": 248,
            "end": 251
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
                  "start": 254,
                  "end": 255
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 259
                },
                "optional": false,
                "computed": false,
                "start": 254,
                "end": 259
              },
              "property": {
                "type": "Literal",
                "value": "toString",
                "raw": "'toString'",
                "start": 260,
                "end": 270
              },
              "optional": false,
              "computed": true,
              "start": 254,
              "end": 271
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 254,
            "end": 273
          },
          "definite": false,
          "start": 248,
          "end": 273
        }
      ],
      "declare": false,
      "start": 244,
      "end": 274
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
                            "start": 290,
                            "end": 291
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 290,
                          "end": 291
                        }
                      ],
                      "start": 289,
                      "end": 292
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
                          "start": 296,
                          "end": 297
                        },
                        "typeArguments": null,
                        "start": 296,
                        "end": 297
                      },
                      "start": 294,
                      "end": 297
                    },
                    "start": 289,
                    "end": 298
                  }
                ],
                "start": 283,
                "end": 300
              },
              "start": 281,
              "end": 300
            },
            "start": 280,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 280,
          "end": 300
        }
      ],
      "declare": false,
      "start": 276,
      "end": 300
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
                "start": 309,
                "end": 315
              },
              "start": 307,
              "end": 315
            },
            "start": 305,
            "end": 315
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
                  "start": 318,
                  "end": 319
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 318,
                "end": 321
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 330
              },
              "optional": false,
              "computed": false,
              "start": 318,
              "end": 330
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 318,
            "end": 332
          },
          "definite": false,
          "start": 305,
          "end": 332
        }
      ],
      "declare": false,
      "start": 301,
      "end": 333
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
                "start": 343,
                "end": 349
              },
              "start": 341,
              "end": 349
            },
            "start": 338,
            "end": 349
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
                  "start": 352,
                  "end": 353
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 352,
                "end": 355
              },
              "property": {
                "type": "Literal",
                "value": "toString",
                "raw": "'toString'",
                "start": 356,
                "end": 366
              },
              "optional": false,
              "computed": true,
              "start": 352,
              "end": 367
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 352,
            "end": 369
          },
          "definite": false,
          "start": 338,
          "end": 369
        }
      ],
      "declare": false,
      "start": 334,
      "end": 370
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
            "start": 376,
            "end": 377
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
                  "start": 386,
                  "end": 389
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
                          "start": 392,
                          "end": 393
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 392,
                        "end": 393
                      }
                    ],
                    "start": 391,
                    "end": 394
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
                            "start": 398,
                            "end": 399
                          },
                          "typeArguments": null,
                          "start": 398,
                          "end": 399
                        },
                        "start": 396,
                        "end": 399
                      },
                      "start": 395,
                      "end": 399
                    }
                  ],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 418,
                              "end": 419
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
                                  "start": 422,
                                  "end": 423
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "toString",
                                  "raw": "'toString'",
                                  "start": 424,
                                  "end": 434
                                },
                                "optional": false,
                                "computed": true,
                                "start": 422,
                                "end": 435
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 422,
                              "end": 437
                            },
                            "definite": false,
                            "start": 418,
                            "end": 437
                          }
                        ],
                        "declare": false,
                        "start": 414,
                        "end": 438
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
                            "start": 474,
                            "end": 475
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
                                "start": 478,
                                "end": 479
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 480,
                                "end": 488
                              },
                              "optional": false,
                              "computed": false,
                              "start": 478,
                              "end": 488
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 478,
                            "end": 490
                          },
                          "start": 474,
                          "end": 490
                        },
                        "start": 467,
                        "end": 491
                      }
                    ],
                    "start": 404,
                    "end": 497
                  },
                  "id": null,
                  "generator": false,
                  "start": 391,
                  "end": 497
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 386,
                "end": 497
              }
            ],
            "start": 380,
            "end": 499
          },
          "definite": false,
          "start": 376,
          "end": 499
        }
      ],
      "declare": false,
      "start": 372,
      "end": 499
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
            "start": 505,
            "end": 507
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
                "start": 510,
                "end": 511
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 515
              },
              "optional": false,
              "computed": false,
              "start": 510,
              "end": 515
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 516,
                "end": 517
              }
            ],
            "optional": false,
            "start": 510,
            "end": 518
          },
          "definite": false,
          "start": 505,
          "end": 518
        }
      ],
      "declare": false,
      "start": 501,
      "end": 519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 519
}
```
