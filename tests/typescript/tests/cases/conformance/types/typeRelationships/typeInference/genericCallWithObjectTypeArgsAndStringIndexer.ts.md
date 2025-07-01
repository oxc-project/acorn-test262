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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 87
      },
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
              "start": 88,
              "end": 89
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 88,
            "end": 89
          }
        ],
        "start": 87,
        "end": 90
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
                "start": 94,
                "end": 95
              },
              "typeArguments": null,
              "start": 94,
              "end": 95
            },
            "start": 92,
            "end": 95
          },
          "start": 91,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "start": 103,
            "end": 112
          }
        ],
        "start": 97,
        "end": 114
      },
      "expression": false,
      "start": 75,
      "end": 114
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
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 129,
                            "end": 135
                          },
                          "start": 127,
                          "end": 135
                        },
                        "start": 126,
                        "end": 135
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 142
                        },
                        "typeArguments": null,
                        "start": 138,
                        "end": 142
                      },
                      "start": 136,
                      "end": 142
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 125,
                    "end": 142
                  }
                ],
                "start": 123,
                "end": 144
              },
              "start": 121,
              "end": 144
            },
            "start": 120,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 120,
          "end": 144
        }
      ],
      "declare": false,
      "start": 116,
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
            "start": 150,
            "end": 151
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 159
              }
            ],
            "optional": false,
            "start": 154,
            "end": 160
          },
          "definite": false,
          "start": 150,
          "end": 160
        }
      ],
      "declare": false,
      "start": 146,
      "end": 161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 177
      },
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
              "start": 178,
              "end": 179
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 178,
            "end": 179
          }
        ],
        "start": 177,
        "end": 180
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 186,
                "end": 187
              },
              "typeArguments": null,
              "start": 186,
              "end": 187
            },
            "start": 184,
            "end": 187
          },
          "start": 181,
          "end": 187
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 208,
                                  "end": 214
                                },
                                "start": 206,
                                "end": 214
                              },
                              "start": 205,
                              "end": 214
                            }
                          ],
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
                                "start": 217,
                                "end": 218
                              },
                              "typeArguments": null,
                              "start": 217,
                              "end": 218
                            },
                            "start": 215,
                            "end": 218
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 204,
                          "end": 218
                        }
                      ],
                      "start": 202,
                      "end": 220
                    },
                    "start": 200,
                    "end": 220
                  },
                  "start": 199,
                  "end": 220
                },
                "init": null,
                "definite": false,
                "start": 199,
                "end": 220
              }
            ],
            "declare": false,
            "start": 195,
            "end": 221
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
                  "start": 230,
                  "end": 232
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 238
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 240
                    }
                  ],
                  "optional": false,
                  "start": 235,
                  "end": 241
                },
                "definite": false,
                "start": 230,
                "end": 241
              }
            ],
            "declare": false,
            "start": 226,
            "end": 242
          }
        ],
        "start": 189,
        "end": 249
      },
      "expression": false,
      "start": 163,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 266
      },
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
              "start": 267,
              "end": 268
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 281
              },
              "typeArguments": null,
              "start": 277,
              "end": 281
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 281
          }
        ],
        "start": 266,
        "end": 282
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 288,
                "end": 289
              },
              "typeArguments": null,
              "start": 288,
              "end": 289
            },
            "start": 286,
            "end": 289
          },
          "start": 283,
          "end": 289
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 310,
                                  "end": 316
                                },
                                "start": 308,
                                "end": 316
                              },
                              "start": 307,
                              "end": 316
                            }
                          ],
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
                                "start": 319,
                                "end": 320
                              },
                              "typeArguments": null,
                              "start": 319,
                              "end": 320
                            },
                            "start": 317,
                            "end": 320
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 306,
                          "end": 320
                        }
                      ],
                      "start": 304,
                      "end": 322
                    },
                    "start": 302,
                    "end": 322
                  },
                  "start": 301,
                  "end": 322
                },
                "init": null,
                "definite": false,
                "start": 301,
                "end": 322
              }
            ],
            "declare": false,
            "start": 297,
            "end": 323
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
                  "start": 332,
                  "end": 334
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 340
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 342
                    }
                  ],
                  "optional": false,
                  "start": 337,
                  "end": 343
                },
                "definite": false,
                "start": 332,
                "end": 343
              }
            ],
            "declare": false,
            "start": 328,
            "end": 344
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 356,
                      "end": 360
                    },
                    "start": 354,
                    "end": 360
                  },
                  "start": 353,
                  "end": 360
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 365
                  },
                  "property": {
                    "type": "Literal",
                    "value": "hm",
                    "raw": "'hm'",
                    "start": 366,
                    "end": 370
                  },
                  "optional": false,
                  "computed": true,
                  "start": 363,
                  "end": 371
                },
                "definite": false,
                "start": 353,
                "end": 371
              }
            ],
            "declare": false,
            "start": 349,
            "end": 372
          }
        ],
        "start": 291,
        "end": 380
      },
      "expression": false,
      "start": 251,
      "end": 380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 397
      },
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
              "start": 398,
              "end": 399
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 412
              },
              "typeArguments": null,
              "start": 408,
              "end": 412
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 398,
            "end": 412
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 428
              },
              "typeArguments": null,
              "start": 424,
              "end": 428
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 414,
            "end": 428
          }
        ],
        "start": 397,
        "end": 429
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 435,
                "end": 436
              },
              "typeArguments": null,
              "start": 435,
              "end": 436
            },
            "start": 433,
            "end": 436
          },
          "start": 430,
          "end": 436
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 457,
                                  "end": 463
                                },
                                "start": 455,
                                "end": 463
                              },
                              "start": 454,
                              "end": 463
                            }
                          ],
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
                                "start": 466,
                                "end": 467
                              },
                              "typeArguments": null,
                              "start": 466,
                              "end": 467
                            },
                            "start": 464,
                            "end": 467
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 453,
                          "end": 467
                        }
                      ],
                      "start": 451,
                      "end": 469
                    },
                    "start": 449,
                    "end": 469
                  },
                  "start": 448,
                  "end": 469
                },
                "init": null,
                "definite": false,
                "start": 448,
                "end": 469
              }
            ],
            "declare": false,
            "start": 444,
            "end": 470
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
                  "start": 479,
                  "end": 481
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 487
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 488,
                      "end": 489
                    }
                  ],
                  "optional": false,
                  "start": 484,
                  "end": 490
                },
                "definite": false,
                "start": 479,
                "end": 490
              }
            ],
            "declare": false,
            "start": 475,
            "end": 491
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 507
                      },
                      "typeArguments": null,
                      "start": 503,
                      "end": 507
                    },
                    "start": 501,
                    "end": 507
                  },
                  "start": 500,
                  "end": 507
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 512
                  },
                  "property": {
                    "type": "Literal",
                    "value": "hm",
                    "raw": "'hm'",
                    "start": 513,
                    "end": 517
                  },
                  "optional": false,
                  "computed": true,
                  "start": 510,
                  "end": 518
                },
                "definite": false,
                "start": 500,
                "end": 518
              }
            ],
            "declare": false,
            "start": 496,
            "end": 519
          }
        ],
        "start": 438,
        "end": 578
      },
      "expression": false,
      "start": 382,
      "end": 578
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 75,
  "end": 787
}
```
