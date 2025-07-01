__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "absorb",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
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
            "start": 30,
            "end": 31
          },
          "typeArguments": null,
          "start": 30,
          "end": 31
        },
        "start": 28,
        "end": 31
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 32
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 53
                        },
                        "computed": false,
                        "optional": true,
                        "kind": "method",
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
                                "start": 55,
                                "end": 56
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 55,
                              "end": 56
                            }
                          ],
                          "start": 54,
                          "end": 57
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 64,
                                      "end": 65
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
                                          "start": 67,
                                          "end": 68
                                        },
                                        "typeArguments": null,
                                        "start": 67,
                                        "end": 68
                                      },
                                      "start": 65,
                                      "end": 68
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 64,
                                    "end": 68
                                  }
                                ],
                                "start": 63,
                                "end": 69
                              },
                              "start": 61,
                              "end": 69
                            },
                            "start": 58,
                            "end": 69
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
                              "start": 72,
                              "end": 73
                            },
                            "typeArguments": null,
                            "start": 72,
                            "end": 73
                          },
                          "start": 70,
                          "end": 73
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 52,
                        "end": 73
                      }
                    ],
                    "start": 50,
                    "end": 75
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 78,
                    "end": 87
                  }
                ],
                "start": 50,
                "end": 87
              },
              "start": 48,
              "end": 87
            },
            "start": 47,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 87
        }
      ],
      "declare": true,
      "start": 33,
      "end": 88
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "start": 95,
            "end": 105
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 112
                },
                "optional": true,
                "computed": false,
                "start": 108,
                "end": 112
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 119,
                        "end": 121
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 116,
                      "end": 121
                    }
                  ],
                  "start": 115,
                  "end": 123
                }
              ],
              "optional": true,
              "start": 108,
              "end": 124
            },
            "start": 108,
            "end": 124
          },
          "definite": false,
          "start": 95,
          "end": 124
        }
      ],
      "declare": false,
      "start": 89,
      "end": 125
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "start": 198,
            "end": 208
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 215
                },
                "optional": true,
                "computed": false,
                "start": 211,
                "end": 215
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 220
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "absorb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 228
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 222,
                        "end": 230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 219,
                      "end": 230
                    }
                  ],
                  "start": 218,
                  "end": 231
                }
              ],
              "optional": true,
              "start": 211,
              "end": 232
            },
            "start": 211,
            "end": 232
          },
          "definite": false,
          "start": 198,
          "end": 232
        }
      ],
      "declare": false,
      "start": 192,
      "end": 233
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
            "name": "n3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 256,
                    "end": 262
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 265,
                    "end": 274
                  }
                ],
                "start": 256,
                "end": 274
              },
              "start": 254,
              "end": 274
            },
            "start": 252,
            "end": 274
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "optional": true,
                "computed": false,
                "start": 277,
                "end": 281
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 286
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 288,
                        "end": 290
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 285,
                      "end": 290
                    }
                  ],
                  "start": 284,
                  "end": 291
                }
              ],
              "optional": true,
              "start": 277,
              "end": 292
            },
            "start": 277,
            "end": 292
          },
          "definite": false,
          "start": 252,
          "end": 292
        }
      ],
      "declare": false,
      "start": 246,
      "end": 293
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
            "name": "n4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 320,
                    "end": 326
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 329,
                    "end": 338
                  }
                ],
                "start": 320,
                "end": 338
              },
              "start": 318,
              "end": 338
            },
            "start": 316,
            "end": 338
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "optional": true,
                "computed": false,
                "start": 341,
                "end": 345
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 350
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "absorb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 358
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 352,
                        "end": 360
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 349,
                      "end": 360
                    }
                  ],
                  "start": 348,
                  "end": 361
                }
              ],
              "optional": true,
              "start": 341,
              "end": 362
            },
            "start": 341,
            "end": 362
          },
          "definite": false,
          "start": 316,
          "end": 362
        }
      ],
      "declare": false,
      "start": 310,
      "end": 363
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 434
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 441
                },
                "optional": true,
                "computed": false,
                "start": 437,
                "end": 441
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 448,
                        "end": 450
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 445,
                      "end": 450
                    }
                  ],
                  "start": 444,
                  "end": 451
                }
              ],
              "optional": true,
              "start": 437,
              "end": 452
            },
            "start": 437,
            "end": 452
          },
          "definite": false,
          "start": 432,
          "end": 452
        }
      ],
      "declare": false,
      "start": 428,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 454,
          "end": 456
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                },
                "start": 459,
                "end": 461
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 463
              },
              "optional": false,
              "computed": false,
              "start": 459,
              "end": 463
            },
            "start": 459,
            "end": 464
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 467
                  },
                  "value": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 469,
                    "end": 471
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 466,
                  "end": 471
                }
              ],
              "start": 465,
              "end": 472
            }
          ],
          "optional": false,
          "start": 459,
          "end": 473
        },
        "start": 454,
        "end": 473
      },
      "directive": null,
      "start": 454,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 474
}
```
