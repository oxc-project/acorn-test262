__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Val",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 12
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 12
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Val2",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 18
          }
        ],
        "start": 7,
        "end": 20
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 44
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
              "start": 51,
              "end": 52
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 45,
            "end": 52
          }
        ],
        "start": 44,
        "end": 53
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 69
                  },
                  "typeArguments": null,
                  "start": 68,
                  "end": 69
                },
                "start": 65,
                "end": 69
              },
              "start": 62,
              "end": 69
            },
            "start": 60,
            "end": 69
          },
          "start": 54,
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
      "body": null,
      "expression": false,
      "start": 22,
      "end": 74
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 89
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 105,
                      "end": 108
                    }
                  ],
                  "start": 104,
                  "end": 109
                },
                "id": null,
                "generator": false,
                "start": 98,
                "end": 109
              }
            ],
            "optional": false,
            "start": 92,
            "end": 110
          },
          "definite": false,
          "start": 82,
          "end": 110
        }
      ],
      "declare": false,
      "start": 76,
      "end": 111
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "a",
                        "cooked": "a"
                      },
                      "tail": false,
                      "start": 140,
                      "end": 144
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 157,
                      "end": 159
                    }
                  ],
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 148
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 144,
                        "end": 155
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 144,
                      "end": 157
                    }
                  ],
                  "start": 140,
                  "end": 159
                },
                "id": null,
                "generator": false,
                "start": 134,
                "end": 159
              }
            ],
            "optional": false,
            "start": 128,
            "end": 160
          },
          "definite": false,
          "start": 118,
          "end": 160
        }
      ],
      "declare": false,
      "start": 112,
      "end": 161
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 190,
                  "end": 193
                },
                "id": null,
                "generator": false,
                "start": 184,
                "end": 193
              }
            ],
            "optional": false,
            "start": 178,
            "end": 194
          },
          "definite": false,
          "start": 168,
          "end": 194
        }
      ],
      "declare": false,
      "start": 162,
      "end": 195
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 209
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 217
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 224,
                  "end": 228
                },
                "id": null,
                "generator": false,
                "start": 218,
                "end": 228
              }
            ],
            "optional": false,
            "start": 212,
            "end": 229
          },
          "definite": false,
          "start": 202,
          "end": 229
        }
      ],
      "declare": false,
      "start": 196,
      "end": 230
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 244
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 252
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "101n",
                  "bigint": "101",
                  "start": 259,
                  "end": 263
                },
                "id": null,
                "generator": false,
                "start": 253,
                "end": 263
              }
            ],
            "optional": false,
            "start": 247,
            "end": 264
          },
          "definite": false,
          "start": 237,
          "end": 264
        }
      ],
      "declare": false,
      "start": 231,
      "end": 265
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 279
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 294,
                  "end": 299
                },
                "id": null,
                "generator": false,
                "start": 288,
                "end": 299
              }
            ],
            "optional": false,
            "start": 282,
            "end": 300
          },
          "definite": false,
          "start": 272,
          "end": 300
        }
      ],
      "declare": false,
      "start": 266,
      "end": 301
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
            "name": "result7",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 315
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 323
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 11111,
                  "raw": "11111",
                  "start": 330,
                  "end": 335
                },
                "id": null,
                "generator": false,
                "start": 324,
                "end": 335
              }
            ],
            "optional": false,
            "start": 318,
            "end": 336
          },
          "definite": false,
          "start": 308,
          "end": 336
        }
      ],
      "declare": false,
      "start": 302,
      "end": 337
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
            "name": "result8",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 351
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 359
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 371
                  },
                  "optional": false,
                  "computed": false,
                  "start": 366,
                  "end": 371
                },
                "id": null,
                "generator": false,
                "start": 360,
                "end": 371
              }
            ],
            "optional": false,
            "start": 354,
            "end": 372
          },
          "definite": false,
          "start": 344,
          "end": 372
        }
      ],
      "declare": false,
      "start": 338,
      "end": 373
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
            "name": "result9",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 388
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 413,
                            "end": 416
                          }
                        ],
                        "start": 412,
                        "end": 417
                      },
                      "start": 405,
                      "end": 418
                    }
                  ],
                  "start": 403,
                  "end": 420
                },
                "id": null,
                "generator": false,
                "start": 397,
                "end": 420
              }
            ],
            "optional": false,
            "start": 391,
            "end": 421
          },
          "definite": false,
          "start": 381,
          "end": 421
        }
      ],
      "declare": false,
      "start": 375,
      "end": 422
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
            "name": "result10",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 437
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 445
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "a",
                              "cooked": "a"
                            },
                            "tail": false,
                            "start": 461,
                            "end": 465
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 478,
                            "end": 480
                          }
                        ],
                        "expressions": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 465,
                                "end": 469
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "random",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 470,
                                "end": 476
                              },
                              "optional": false,
                              "computed": false,
                              "start": 465,
                              "end": 476
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 465,
                            "end": 478
                          }
                        ],
                        "start": 461,
                        "end": 480
                      },
                      "start": 454,
                      "end": 481
                    }
                  ],
                  "start": 452,
                  "end": 483
                },
                "id": null,
                "generator": false,
                "start": 446,
                "end": 483
              }
            ],
            "optional": false,
            "start": 440,
            "end": 484
          },
          "definite": false,
          "start": 429,
          "end": 484
        }
      ],
      "declare": false,
      "start": 423,
      "end": 485
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
            "name": "result11",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 500
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 508
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 524,
                        "end": 527
                      },
                      "start": 517,
                      "end": 528
                    }
                  ],
                  "start": 515,
                  "end": 530
                },
                "id": null,
                "generator": false,
                "start": 509,
                "end": 530
              }
            ],
            "optional": false,
            "start": 503,
            "end": 531
          },
          "definite": false,
          "start": 492,
          "end": 531
        }
      ],
      "declare": false,
      "start": 486,
      "end": 532
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
            "name": "result12",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 547
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 555
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 571,
                        "end": 575
                      },
                      "start": 564,
                      "end": 576
                    }
                  ],
                  "start": 562,
                  "end": 578
                },
                "id": null,
                "generator": false,
                "start": 556,
                "end": 578
              }
            ],
            "optional": false,
            "start": 550,
            "end": 579
          },
          "definite": false,
          "start": 539,
          "end": 579
        }
      ],
      "declare": false,
      "start": 533,
      "end": 580
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
            "name": "result13",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 595
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "101n",
                        "bigint": "101",
                        "start": 619,
                        "end": 623
                      },
                      "start": 612,
                      "end": 624
                    }
                  ],
                  "start": 610,
                  "end": 626
                },
                "id": null,
                "generator": false,
                "start": 604,
                "end": 626
              }
            ],
            "optional": false,
            "start": 598,
            "end": 627
          },
          "definite": false,
          "start": 587,
          "end": 627
        }
      ],
      "declare": false,
      "start": 581,
      "end": 628
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
            "name": "result14",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 643
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 651
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 667,
                        "end": 672
                      },
                      "start": 660,
                      "end": 673
                    }
                  ],
                  "start": 658,
                  "end": 675
                },
                "id": null,
                "generator": false,
                "start": 652,
                "end": 675
              }
            ],
            "optional": false,
            "start": 646,
            "end": 676
          },
          "definite": false,
          "start": 635,
          "end": 676
        }
      ],
      "declare": false,
      "start": 629,
      "end": 677
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
            "name": "result15",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 692
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 700
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 11111,
                        "raw": "11111",
                        "start": 716,
                        "end": 721
                      },
                      "start": 709,
                      "end": 722
                    }
                  ],
                  "start": 707,
                  "end": 724
                },
                "id": null,
                "generator": false,
                "start": 701,
                "end": 724
              }
            ],
            "optional": false,
            "start": 695,
            "end": 725
          },
          "definite": false,
          "start": 684,
          "end": 725
        }
      ],
      "declare": false,
      "start": 678,
      "end": 726
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
            "name": "result16",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 741
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 749
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 765,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 770
                        },
                        "optional": false,
                        "computed": false,
                        "start": 765,
                        "end": 770
                      },
                      "start": 758,
                      "end": 771
                    }
                  ],
                  "start": 756,
                  "end": 773
                },
                "id": null,
                "generator": false,
                "start": 750,
                "end": 773
              }
            ],
            "optional": false,
            "start": 744,
            "end": 774
          },
          "definite": false,
          "start": 733,
          "end": 774
        }
      ],
      "declare": false,
      "start": 727,
      "end": 775
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
            "name": "result17",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 791
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 799
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 812,
                  "end": 817
                },
                "id": null,
                "generator": false,
                "start": 800,
                "end": 817
              }
            ],
            "optional": false,
            "start": 794,
            "end": 818
          },
          "definite": false,
          "start": 783,
          "end": 818
        }
      ],
      "declare": false,
      "start": 777,
      "end": 819
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
            "name": "result18",
            "optional": false,
            "typeAnnotation": null,
            "start": 826,
            "end": 834
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 842
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 864,
                        "end": 869
                      },
                      "start": 857,
                      "end": 870
                    }
                  ],
                  "start": 855,
                  "end": 872
                },
                "id": null,
                "generator": false,
                "start": 843,
                "end": 872
              }
            ],
            "optional": false,
            "start": 837,
            "end": 873
          },
          "definite": false,
          "start": 826,
          "end": 873
        }
      ],
      "declare": false,
      "start": 820,
      "end": 874
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 898
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
              "start": 905,
              "end": 906
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 899,
            "end": 906
          }
        ],
        "start": 898,
        "end": 907
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 929
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
                          "start": 930,
                          "end": 931
                        },
                        "typeArguments": null,
                        "start": 930,
                        "end": 931
                      }
                    ],
                    "start": 929,
                    "end": 932
                  },
                  "start": 922,
                  "end": 932
                },
                "start": 919,
                "end": 932
              },
              "start": 916,
              "end": 932
            },
            "start": 914,
            "end": 932
          },
          "start": 908,
          "end": 932
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
            "start": 935,
            "end": 936
          },
          "typeArguments": null,
          "start": 935,
          "end": 936
        },
        "start": 933,
        "end": 936
      },
      "body": null,
      "expression": false,
      "start": 876,
      "end": 937
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
            "name": "result19",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 953
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 961
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 974,
                  "end": 979
                },
                "id": null,
                "generator": false,
                "start": 962,
                "end": 979
              }
            ],
            "optional": false,
            "start": 956,
            "end": 980
          },
          "definite": false,
          "start": 945,
          "end": 980
        }
      ],
      "declare": false,
      "start": 939,
      "end": 981
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
            "name": "result20",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 996
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1004
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 1026,
                        "end": 1031
                      },
                      "start": 1019,
                      "end": 1032
                    }
                  ],
                  "start": 1017,
                  "end": 1034
                },
                "id": null,
                "generator": false,
                "start": 1005,
                "end": 1034
              }
            ],
            "optional": false,
            "start": 999,
            "end": 1035
          },
          "definite": false,
          "start": 988,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1036
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1055,
        "end": 1060
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
              "start": 1067,
              "end": 1068
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1061,
            "end": 1068
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1070,
            "end": 1077
          }
        ],
        "start": 1060,
        "end": 1078
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1090,
                    "end": 1099
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
                          "start": 1100,
                          "end": 1101
                        },
                        "typeArguments": null,
                        "start": 1100,
                        "end": 1101
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1103,
                          "end": 1104
                        },
                        "typeArguments": null,
                        "start": 1103,
                        "end": 1104
                      }
                    ],
                    "start": 1099,
                    "end": 1105
                  },
                  "start": 1090,
                  "end": 1105
                },
                "start": 1087,
                "end": 1105
              },
              "start": 1084,
              "end": 1105
            },
            "start": 1082,
            "end": 1105
          },
          "start": 1079,
          "end": 1105
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1109,
              "end": 1110
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1113
              },
              "typeArguments": null,
              "start": 1112,
              "end": 1113
            }
          ],
          "start": 1108,
          "end": 1114
        },
        "start": 1106,
        "end": 1114
      },
      "body": null,
      "expression": false,
      "start": 1038,
      "end": 1114
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
            "name": "result21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1122,
            "end": 1130
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1133,
              "end": 1138
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1163,
                          "end": 1165
                        },
                        "start": 1157,
                        "end": 1165
                      },
                      "directive": null,
                      "start": 1157,
                      "end": 1166
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 1178,
                        "end": 1181
                      },
                      "start": 1171,
                      "end": 1182
                    }
                  ],
                  "start": 1151,
                  "end": 1184
                },
                "expression": false,
                "start": 1139,
                "end": 1184
              }
            ],
            "optional": false,
            "start": 1133,
            "end": 1185
          },
          "definite": false,
          "start": 1122,
          "end": 1185
        }
      ],
      "declare": false,
      "start": 1116,
      "end": 1186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1210
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
              "start": 1217,
              "end": 1218
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1211,
            "end": 1218
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1226,
              "end": 1227
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1220,
            "end": 1227
          }
        ],
        "start": 1210,
        "end": 1228
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1254
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
                          "start": 1255,
                          "end": 1256
                        },
                        "typeArguments": null,
                        "start": 1255,
                        "end": 1256
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1258,
                          "end": 1259
                        },
                        "typeArguments": null,
                        "start": 1258,
                        "end": 1259
                      }
                    ],
                    "start": 1254,
                    "end": 1260
                  },
                  "start": 1240,
                  "end": 1260
                },
                "start": 1237,
                "end": 1260
              },
              "start": 1234,
              "end": 1260
            },
            "start": 1232,
            "end": 1260
          },
          "start": 1229,
          "end": 1260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1265
              },
              "typeArguments": null,
              "start": 1264,
              "end": 1265
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1267,
                "end": 1268
              },
              "typeArguments": null,
              "start": 1267,
              "end": 1268
            }
          ],
          "start": 1263,
          "end": 1269
        },
        "start": 1261,
        "end": 1269
      },
      "body": null,
      "expression": false,
      "start": 1188,
      "end": 1269
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
            "name": "result22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1277,
            "end": 1285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1288,
              "end": 1293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1324,
                          "end": 1326
                        },
                        "start": 1318,
                        "end": 1326
                      },
                      "directive": null,
                      "start": 1318,
                      "end": 1327
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 1339,
                        "end": 1342
                      },
                      "start": 1332,
                      "end": 1343
                    }
                  ],
                  "start": 1312,
                  "end": 1345
                },
                "expression": false,
                "start": 1294,
                "end": 1345
              }
            ],
            "optional": false,
            "start": 1288,
            "end": 1346
          },
          "definite": false,
          "start": 1277,
          "end": 1346
        }
      ],
      "declare": false,
      "start": 1271,
      "end": 1347
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
            "name": "UploadThingServerHelper",
            "optional": false,
            "typeAnnotation": null,
            "start": 1411,
            "end": 1434
          },
          "init": {
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
                    "name": "ValidRoutes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1444,
                    "end": 1455
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1438,
                  "end": 1455
                }
              ],
              "start": 1437,
              "end": 1457
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "route",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Route",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1479,
                      "end": 1484
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ValidRoutes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1505
                        },
                        "typeArguments": null,
                        "start": 1494,
                        "end": 1505
                      },
                      "start": 1488,
                      "end": 1505
                    },
                    "nameType": null,
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
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1514,
                            "end": 1524
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ValidRoutes",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1532,
                                      "end": 1543
                                    },
                                    "typeArguments": null,
                                    "start": 1532,
                                    "end": 1543
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Route",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1544,
                                      "end": 1549
                                    },
                                    "typeArguments": null,
                                    "start": 1544,
                                    "end": 1549
                                  },
                                  "start": 1532,
                                  "end": 1550
                                },
                                "start": 1529,
                                "end": 1550
                              },
                              "start": 1526,
                              "end": 1550
                            },
                            "start": 1524,
                            "end": 1550
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1514,
                          "end": 1551
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onUpload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1556,
                            "end": 1564
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "response",
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
                                            "name": "metadata",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1579,
                                            "end": 1587
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSIndexedAccessType",
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ValidRoutes",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1589,
                                                  "end": 1600
                                                },
                                                "typeArguments": null,
                                                "start": 1589,
                                                "end": 1600
                                              },
                                              "indexType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Route",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1601,
                                                  "end": 1606
                                                },
                                                "typeArguments": null,
                                                "start": 1601,
                                                "end": 1606
                                              },
                                              "start": 1589,
                                              "end": 1607
                                            },
                                            "start": 1587,
                                            "end": 1607
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1579,
                                          "end": 1607
                                        }
                                      ],
                                      "start": 1577,
                                      "end": 1609
                                    },
                                    "start": 1575,
                                    "end": 1609
                                  },
                                  "start": 1567,
                                  "end": 1609
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1614,
                                  "end": 1618
                                },
                                "start": 1611,
                                "end": 1618
                              },
                              "start": 1566,
                              "end": 1618
                            },
                            "start": 1564,
                            "end": 1618
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1556,
                          "end": 1619
                        }
                      ],
                      "start": 1508,
                      "end": 1623
                    },
                    "optional": false,
                    "readonly": true,
                    "start": 1465,
                    "end": 1626
                  },
                  "start": 1463,
                  "end": 1626
                },
                "start": 1458,
                "end": 1626
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1631,
              "end": 1633
            },
            "id": null,
            "generator": false,
            "start": 1437,
            "end": 1633
          },
          "definite": false,
          "start": 1411,
          "end": 1633
        }
      ],
      "declare": false,
      "start": 1405,
      "end": 1634
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
            "name": "FileRouter",
            "optional": false,
            "typeAnnotation": null,
            "start": 1642,
            "end": 1652
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "UploadThingServerHelper",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1678
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
                      "name": "example",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1683,
                      "end": 1690
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1698,
                            "end": 1708
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "someValue",
                              "raw": "\"someValue\"",
                              "start": 1716,
                              "end": 1727
                            },
                            "id": null,
                            "generator": false,
                            "start": 1710,
                            "end": 1727
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1698,
                          "end": 1727
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onUpload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1733,
                            "end": 1741
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "response",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1744,
                                "end": 1752
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "kind": "const",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "v",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": "someValue",
                                              "raw": "\"someValue\"",
                                              "start": 1774,
                                              "end": 1785
                                            },
                                            "start": 1774,
                                            "end": 1785
                                          },
                                          "start": 1772,
                                          "end": 1785
                                        },
                                        "start": 1771,
                                        "end": 1785
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "response",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1788,
                                          "end": 1796
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "metadata",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1797,
                                          "end": 1805
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1788,
                                        "end": 1805
                                      },
                                      "definite": false,
                                      "start": 1771,
                                      "end": 1805
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1765,
                                  "end": 1806
                                }
                              ],
                              "start": 1757,
                              "end": 1812
                            },
                            "id": null,
                            "generator": false,
                            "start": 1743,
                            "end": 1812
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1733,
                          "end": 1812
                        }
                      ],
                      "start": 1692,
                      "end": 1817
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1683,
                    "end": 1817
                  }
                ],
                "start": 1679,
                "end": 1820
              }
            ],
            "optional": false,
            "start": 1655,
            "end": 1821
          },
          "definite": false,
          "start": 1642,
          "end": 1821
        }
      ],
      "declare": false,
      "start": 1636,
      "end": 1822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1833,
        "end": 1839
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
              "start": 1846,
              "end": 1847
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1840,
            "end": 1847
          }
        ],
        "start": 1839,
        "end": 1848
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1859,
                    "end": 1860
                  },
                  "typeArguments": null,
                  "start": 1859,
                  "end": 1860
                },
                "start": 1856,
                "end": 1860
              },
              "start": 1853,
              "end": 1860
            },
            "start": 1851,
            "end": 1860
          },
          "start": 1849,
          "end": 1860
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1881
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1889
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1882,
                  "end": 1889
                }
              ],
              "start": 1881,
              "end": 1890
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1902,
                          "end": 1903
                        },
                        "typeArguments": null,
                        "start": 1902,
                        "end": 1903
                      },
                      "start": 1899,
                      "end": 1903
                    },
                    "start": 1896,
                    "end": 1903
                  },
                  "start": 1894,
                  "end": 1903
                },
                "start": 1891,
                "end": 1903
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1919,
                          "end": 1921
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1919,
                        "end": 1923
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1925,
                          "end": 1928
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1925,
                        "end": 1930
                      }
                    ],
                    "start": 1918,
                    "end": 1931
                  },
                  "start": 1911,
                  "end": 1932
                }
              ],
              "start": 1905,
              "end": 1936
            },
            "expression": false,
            "start": 1866,
            "end": 1936
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1946,
              "end": 1952
            },
            "start": 1939,
            "end": 1953
          }
        ],
        "start": 1862,
        "end": 1955
      },
      "expression": false,
      "start": 1824,
      "end": 1955
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
            "name": "nestedResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1962,
            "end": 1975
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1978,
                "end": 1984
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1991,
                    "end": 1992
                  },
                  "id": null,
                  "generator": false,
                  "start": 1985,
                  "end": 1992
                }
              ],
              "optional": false,
              "start": 1978,
              "end": 1993
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 2000,
                  "end": 2005
                },
                "id": null,
                "generator": false,
                "start": 1994,
                "end": 2005
              }
            ],
            "optional": false,
            "start": 1978,
            "end": 2006
          },
          "definite": false,
          "start": 1962,
          "end": 2006
        }
      ],
      "declare": false,
      "start": 1956,
      "end": 2007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2018,
        "end": 2024
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
              "start": 2025,
              "end": 2026
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2025,
            "end": 2026
          }
        ],
        "start": 2024,
        "end": 2027
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2038,
                    "end": 2039
                  },
                  "typeArguments": null,
                  "start": 2038,
                  "end": 2039
                },
                "start": 2035,
                "end": 2039
              },
              "start": 2032,
              "end": 2039
            },
            "start": 2030,
            "end": 2039
          },
          "start": 2028,
          "end": 2039
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2054,
              "end": 2060
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2067,
                    "end": 2068
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 2061,
                  "end": 2068
                }
              ],
              "start": 2060,
              "end": 2069
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2081,
                          "end": 2082
                        },
                        "typeArguments": null,
                        "start": 2081,
                        "end": 2082
                      },
                      "start": 2078,
                      "end": 2082
                    },
                    "start": 2075,
                    "end": 2082
                  },
                  "start": 2073,
                  "end": 2082
                },
                "start": 2070,
                "end": 2082
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2098,
                          "end": 2100
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2098,
                        "end": 2102
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2104,
                          "end": 2107
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2104,
                        "end": 2109
                      }
                    ],
                    "start": 2097,
                    "end": 2110
                  },
                  "start": 2090,
                  "end": 2111
                }
              ],
              "start": 2084,
              "end": 2115
            },
            "expression": false,
            "start": 2045,
            "end": 2115
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2125,
              "end": 2131
            },
            "start": 2118,
            "end": 2132
          }
        ],
        "start": 2041,
        "end": 2134
      },
      "expression": false,
      "start": 2009,
      "end": 2134
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
            "name": "nestedResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2141,
            "end": 2154
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2157,
                "end": 2163
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2170,
                    "end": 2171
                  },
                  "id": null,
                  "generator": false,
                  "start": 2164,
                  "end": 2171
                }
              ],
              "optional": false,
              "start": 2157,
              "end": 2172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 2179,
                  "end": 2184
                },
                "id": null,
                "generator": false,
                "start": 2173,
                "end": 2184
              }
            ],
            "optional": false,
            "start": 2157,
            "end": 2185
          },
          "definite": false,
          "start": 2141,
          "end": 2185
        }
      ],
      "declare": false,
      "start": 2135,
      "end": 2186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2197,
        "end": 2203
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
              "start": 2210,
              "end": 2211
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2204,
            "end": 2211
          }
        ],
        "start": 2203,
        "end": 2212
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2223,
                    "end": 2224
                  },
                  "typeArguments": null,
                  "start": 2223,
                  "end": 2224
                },
                "start": 2220,
                "end": 2224
              },
              "start": 2217,
              "end": 2224
            },
            "start": 2215,
            "end": 2224
          },
          "start": 2213,
          "end": 2224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2245
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2246,
                    "end": 2247
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2246,
                  "end": 2247
                }
              ],
              "start": 2245,
              "end": 2248
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2260,
                          "end": 2261
                        },
                        "typeArguments": null,
                        "start": 2260,
                        "end": 2261
                      },
                      "start": 2257,
                      "end": 2261
                    },
                    "start": 2254,
                    "end": 2261
                  },
                  "start": 2252,
                  "end": 2261
                },
                "start": 2249,
                "end": 2261
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2277,
                          "end": 2279
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2277,
                        "end": 2281
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2283,
                          "end": 2286
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2283,
                        "end": 2288
                      }
                    ],
                    "start": 2276,
                    "end": 2289
                  },
                  "start": 2269,
                  "end": 2290
                }
              ],
              "start": 2263,
              "end": 2294
            },
            "expression": false,
            "start": 2230,
            "end": 2294
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2304,
              "end": 2310
            },
            "start": 2297,
            "end": 2311
          }
        ],
        "start": 2226,
        "end": 2313
      },
      "expression": false,
      "start": 2188,
      "end": 2313
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
            "name": "nestedResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2320,
            "end": 2333
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2336,
                "end": 2342
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2349,
                    "end": 2350
                  },
                  "id": null,
                  "generator": false,
                  "start": 2343,
                  "end": 2350
                }
              ],
              "optional": false,
              "start": 2336,
              "end": 2351
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 2358,
                  "end": 2363
                },
                "id": null,
                "generator": false,
                "start": 2352,
                "end": 2363
              }
            ],
            "optional": false,
            "start": 2336,
            "end": 2364
          },
          "definite": false,
          "start": 2320,
          "end": 2364
        }
      ],
      "declare": false,
      "start": 2314,
      "end": 2365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2384,
        "end": 2395
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
              "start": 2402,
              "end": 2403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2396,
            "end": 2403
          }
        ],
        "start": 2395,
        "end": 2404
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2415,
                    "end": 2416
                  },
                  "typeArguments": null,
                  "start": 2415,
                  "end": 2416
                },
                "start": 2412,
                "end": 2416
              },
              "start": 2409,
              "end": 2416
            },
            "start": 2407,
            "end": 2416
          },
          "start": 2405,
          "end": 2416
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
            "start": 2419,
            "end": 2420
          },
          "typeArguments": null,
          "start": 2419,
          "end": 2420
        },
        "start": 2417,
        "end": 2420
      },
      "body": null,
      "expression": false,
      "start": 2367,
      "end": 2421
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2439,
        "end": 2450
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
              "start": 2457,
              "end": 2458
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2451,
            "end": 2458
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2466,
              "end": 2467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2460,
            "end": 2467
          }
        ],
        "start": 2450,
        "end": 2468
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2480
                  },
                  "typeArguments": null,
                  "start": 2479,
                  "end": 2480
                },
                "start": 2476,
                "end": 2480
              },
              "start": 2473,
              "end": 2480
            },
            "start": 2471,
            "end": 2480
          },
          "start": 2469,
          "end": 2480
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2493,
                    "end": 2494
                  },
                  "typeArguments": null,
                  "start": 2493,
                  "end": 2494
                },
                "start": 2490,
                "end": 2494
              },
              "start": 2487,
              "end": 2494
            },
            "start": 2485,
            "end": 2494
          },
          "start": 2482,
          "end": 2494
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2498,
                "end": 2499
              },
              "typeArguments": null,
              "start": 2498,
              "end": 2499
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2502
              },
              "typeArguments": null,
              "start": 2501,
              "end": 2502
            }
          ],
          "start": 2497,
          "end": 2503
        },
        "start": 2495,
        "end": 2503
      },
      "body": null,
      "expression": false,
      "start": 2422,
      "end": 2504
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
            "name": "overloadA",
            "optional": false,
            "typeAnnotation": null,
            "start": 2511,
            "end": 2520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2523,
              "end": 2534
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2541,
                  "end": 2543
                },
                "id": null,
                "generator": false,
                "start": 2535,
                "end": 2543
              }
            ],
            "optional": false,
            "start": 2523,
            "end": 2544
          },
          "definite": false,
          "start": 2511,
          "end": 2544
        }
      ],
      "declare": false,
      "start": 2505,
      "end": 2545
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
            "name": "overloadB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2552,
            "end": 2561
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2564,
              "end": 2575
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2582,
                  "end": 2586
                },
                "id": null,
                "generator": false,
                "start": 2576,
                "end": 2586
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2594,
                  "end": 2598
                },
                "id": null,
                "generator": false,
                "start": 2588,
                "end": 2598
              }
            ],
            "optional": false,
            "start": 2564,
            "end": 2599
          },
          "definite": false,
          "start": 2552,
          "end": 2599
        }
      ],
      "declare": false,
      "start": 2546,
      "end": 2600
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2619,
        "end": 2630
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
              "start": 2631,
              "end": 2632
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2631,
            "end": 2632
          }
        ],
        "start": 2630,
        "end": 2633
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2644,
                    "end": 2645
                  },
                  "typeArguments": null,
                  "start": 2644,
                  "end": 2645
                },
                "start": 2641,
                "end": 2645
              },
              "start": 2638,
              "end": 2645
            },
            "start": 2636,
            "end": 2645
          },
          "start": 2634,
          "end": 2645
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
            "start": 2648,
            "end": 2649
          },
          "typeArguments": null,
          "start": 2648,
          "end": 2649
        },
        "start": 2646,
        "end": 2649
      },
      "body": null,
      "expression": false,
      "start": 2602,
      "end": 2650
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2668,
        "end": 2679
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
              "start": 2680,
              "end": 2681
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2680,
            "end": 2681
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2689,
              "end": 2690
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2683,
            "end": 2690
          }
        ],
        "start": 2679,
        "end": 2691
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2702,
                    "end": 2703
                  },
                  "typeArguments": null,
                  "start": 2702,
                  "end": 2703
                },
                "start": 2699,
                "end": 2703
              },
              "start": 2696,
              "end": 2703
            },
            "start": 2694,
            "end": 2703
          },
          "start": 2692,
          "end": 2703
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2716,
                    "end": 2717
                  },
                  "typeArguments": null,
                  "start": 2716,
                  "end": 2717
                },
                "start": 2713,
                "end": 2717
              },
              "start": 2710,
              "end": 2717
            },
            "start": 2708,
            "end": 2717
          },
          "start": 2705,
          "end": 2717
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2721,
                "end": 2722
              },
              "typeArguments": null,
              "start": 2721,
              "end": 2722
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2724,
                "end": 2725
              },
              "typeArguments": null,
              "start": 2724,
              "end": 2725
            }
          ],
          "start": 2720,
          "end": 2726
        },
        "start": 2718,
        "end": 2726
      },
      "body": null,
      "expression": false,
      "start": 2651,
      "end": 2727
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
            "name": "overloadC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2734,
            "end": 2743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2746,
              "end": 2757
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2764,
                  "end": 2766
                },
                "id": null,
                "generator": false,
                "start": 2758,
                "end": 2766
              }
            ],
            "optional": false,
            "start": 2746,
            "end": 2767
          },
          "definite": false,
          "start": 2734,
          "end": 2767
        }
      ],
      "declare": false,
      "start": 2728,
      "end": 2768
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
            "name": "overloadD",
            "optional": false,
            "typeAnnotation": null,
            "start": 2775,
            "end": 2784
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2787,
              "end": 2798
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2805,
                  "end": 2809
                },
                "id": null,
                "generator": false,
                "start": 2799,
                "end": 2809
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2817,
                  "end": 2821
                },
                "id": null,
                "generator": false,
                "start": 2811,
                "end": 2821
              }
            ],
            "optional": false,
            "start": 2787,
            "end": 2822
          },
          "definite": false,
          "start": 2775,
          "end": 2822
        }
      ],
      "declare": false,
      "start": 2769,
      "end": 2823
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2842,
        "end": 2853
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
              "start": 2860,
              "end": 2861
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2854,
            "end": 2861
          }
        ],
        "start": 2853,
        "end": 2862
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2873,
                    "end": 2874
                  },
                  "typeArguments": null,
                  "start": 2873,
                  "end": 2874
                },
                "start": 2870,
                "end": 2874
              },
              "start": 2867,
              "end": 2874
            },
            "start": 2865,
            "end": 2874
          },
          "start": 2863,
          "end": 2874
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
            "start": 2877,
            "end": 2878
          },
          "typeArguments": null,
          "start": 2877,
          "end": 2878
        },
        "start": 2875,
        "end": 2878
      },
      "body": null,
      "expression": false,
      "start": 2825,
      "end": 2879
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2897,
        "end": 2908
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
              "start": 2915,
              "end": 2916
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2909,
            "end": 2916
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2919
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2918,
            "end": 2919
          }
        ],
        "start": 2908,
        "end": 2920
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2931,
                    "end": 2932
                  },
                  "typeArguments": null,
                  "start": 2931,
                  "end": 2932
                },
                "start": 2928,
                "end": 2932
              },
              "start": 2925,
              "end": 2932
            },
            "start": 2923,
            "end": 2932
          },
          "start": 2921,
          "end": 2932
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2945,
                    "end": 2946
                  },
                  "typeArguments": null,
                  "start": 2945,
                  "end": 2946
                },
                "start": 2942,
                "end": 2946
              },
              "start": 2939,
              "end": 2946
            },
            "start": 2937,
            "end": 2946
          },
          "start": 2934,
          "end": 2946
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2950,
                "end": 2951
              },
              "typeArguments": null,
              "start": 2950,
              "end": 2951
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2953,
                "end": 2954
              },
              "typeArguments": null,
              "start": 2953,
              "end": 2954
            }
          ],
          "start": 2949,
          "end": 2955
        },
        "start": 2947,
        "end": 2955
      },
      "body": null,
      "expression": false,
      "start": 2880,
      "end": 2956
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
            "name": "overloadE",
            "optional": false,
            "typeAnnotation": null,
            "start": 2963,
            "end": 2972
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2975,
              "end": 2986
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2993,
                  "end": 2995
                },
                "id": null,
                "generator": false,
                "start": 2987,
                "end": 2995
              }
            ],
            "optional": false,
            "start": 2975,
            "end": 2996
          },
          "definite": false,
          "start": 2963,
          "end": 2996
        }
      ],
      "declare": false,
      "start": 2957,
      "end": 2997
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
            "name": "overloadF",
            "optional": false,
            "typeAnnotation": null,
            "start": 3004,
            "end": 3013
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3027
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 3034,
                  "end": 3038
                },
                "id": null,
                "generator": false,
                "start": 3028,
                "end": 3038
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3046,
                  "end": 3050
                },
                "id": null,
                "generator": false,
                "start": 3040,
                "end": 3050
              }
            ],
            "optional": false,
            "start": 3016,
            "end": 3051
          },
          "definite": false,
          "start": 3004,
          "end": 3051
        }
      ],
      "declare": false,
      "start": 2998,
      "end": 3052
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3071,
        "end": 3082
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
              "start": 3089,
              "end": 3090
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3083,
            "end": 3090
          }
        ],
        "start": 3082,
        "end": 3091
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3102,
                    "end": 3103
                  },
                  "typeArguments": null,
                  "start": 3102,
                  "end": 3103
                },
                "start": 3099,
                "end": 3103
              },
              "start": 3096,
              "end": 3103
            },
            "start": 3094,
            "end": 3103
          },
          "start": 3092,
          "end": 3103
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
            "start": 3106,
            "end": 3107
          },
          "typeArguments": null,
          "start": 3106,
          "end": 3107
        },
        "start": 3104,
        "end": 3107
      },
      "body": null,
      "expression": false,
      "start": 3054,
      "end": 3108
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3126,
        "end": 3137
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
              "start": 3138,
              "end": 3139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3138,
            "end": 3139
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3141,
              "end": 3142
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3141,
            "end": 3142
          }
        ],
        "start": 3137,
        "end": 3143
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3154,
                    "end": 3155
                  },
                  "typeArguments": null,
                  "start": 3154,
                  "end": 3155
                },
                "start": 3151,
                "end": 3155
              },
              "start": 3148,
              "end": 3155
            },
            "start": 3146,
            "end": 3155
          },
          "start": 3144,
          "end": 3155
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3168,
                    "end": 3169
                  },
                  "typeArguments": null,
                  "start": 3168,
                  "end": 3169
                },
                "start": 3165,
                "end": 3169
              },
              "start": 3162,
              "end": 3169
            },
            "start": 3160,
            "end": 3169
          },
          "start": 3157,
          "end": 3169
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3173,
                "end": 3174
              },
              "typeArguments": null,
              "start": 3173,
              "end": 3174
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3176,
                "end": 3177
              },
              "typeArguments": null,
              "start": 3176,
              "end": 3177
            }
          ],
          "start": 3172,
          "end": 3178
        },
        "start": 3170,
        "end": 3178
      },
      "body": null,
      "expression": false,
      "start": 3109,
      "end": 3179
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
            "name": "overloadG",
            "optional": false,
            "typeAnnotation": null,
            "start": 3186,
            "end": 3195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3198,
              "end": 3209
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 3216,
                  "end": 3218
                },
                "id": null,
                "generator": false,
                "start": 3210,
                "end": 3218
              }
            ],
            "optional": false,
            "start": 3198,
            "end": 3219
          },
          "definite": false,
          "start": 3186,
          "end": 3219
        }
      ],
      "declare": false,
      "start": 3180,
      "end": 3220
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
            "name": "overloadH",
            "optional": false,
            "typeAnnotation": null,
            "start": 3227,
            "end": 3236
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3239,
              "end": 3250
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 3257,
                  "end": 3261
                },
                "id": null,
                "generator": false,
                "start": 3251,
                "end": 3261
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3269,
                  "end": 3273
                },
                "id": null,
                "generator": false,
                "start": 3263,
                "end": 3273
              }
            ],
            "optional": false,
            "start": 3239,
            "end": 3274
          },
          "definite": false,
          "start": 3227,
          "end": 3274
        }
      ],
      "declare": false,
      "start": 3221,
      "end": 3275
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3294,
        "end": 3305
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
              "start": 3306,
              "end": 3307
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3306,
            "end": 3307
          }
        ],
        "start": 3305,
        "end": 3308
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3320
                  },
                  "typeArguments": null,
                  "start": 3319,
                  "end": 3320
                },
                "start": 3316,
                "end": 3320
              },
              "start": 3313,
              "end": 3320
            },
            "start": 3311,
            "end": 3320
          },
          "start": 3309,
          "end": 3320
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
            "start": 3323,
            "end": 3324
          },
          "typeArguments": null,
          "start": 3323,
          "end": 3324
        },
        "start": 3321,
        "end": 3324
      },
      "body": null,
      "expression": false,
      "start": 3277,
      "end": 3325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3343,
        "end": 3354
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
              "start": 3361,
              "end": 3362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3355,
            "end": 3362
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3364,
              "end": 3365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3364,
            "end": 3365
          }
        ],
        "start": 3354,
        "end": 3366
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3377,
                    "end": 3378
                  },
                  "typeArguments": null,
                  "start": 3377,
                  "end": 3378
                },
                "start": 3374,
                "end": 3378
              },
              "start": 3371,
              "end": 3378
            },
            "start": 3369,
            "end": 3378
          },
          "start": 3367,
          "end": 3378
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3391,
                    "end": 3392
                  },
                  "typeArguments": null,
                  "start": 3391,
                  "end": 3392
                },
                "start": 3388,
                "end": 3392
              },
              "start": 3385,
              "end": 3392
            },
            "start": 3383,
            "end": 3392
          },
          "start": 3380,
          "end": 3392
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3396,
                "end": 3397
              },
              "typeArguments": null,
              "start": 3396,
              "end": 3397
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3399,
                "end": 3400
              },
              "typeArguments": null,
              "start": 3399,
              "end": 3400
            }
          ],
          "start": 3395,
          "end": 3401
        },
        "start": 3393,
        "end": 3401
      },
      "body": null,
      "expression": false,
      "start": 3326,
      "end": 3402
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
            "name": "overloadI",
            "optional": false,
            "typeAnnotation": null,
            "start": 3409,
            "end": 3418
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3421,
              "end": 3432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 3439,
                  "end": 3441
                },
                "id": null,
                "generator": false,
                "start": 3433,
                "end": 3441
              }
            ],
            "optional": false,
            "start": 3421,
            "end": 3442
          },
          "definite": false,
          "start": 3409,
          "end": 3442
        }
      ],
      "declare": false,
      "start": 3403,
      "end": 3443
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
            "name": "overloadJ",
            "optional": false,
            "typeAnnotation": null,
            "start": 3450,
            "end": 3459
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3462,
              "end": 3473
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 3480,
                  "end": 3484
                },
                "id": null,
                "generator": false,
                "start": 3474,
                "end": 3484
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3492,
                  "end": 3496
                },
                "id": null,
                "generator": false,
                "start": 3486,
                "end": 3496
              }
            ],
            "optional": false,
            "start": 3462,
            "end": 3497
          },
          "definite": false,
          "start": 3450,
          "end": 3497
        }
      ],
      "declare": false,
      "start": 3444,
      "end": 3498
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3498
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Val",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "Val2",
    "start": 14,
    "end": 18,
    "range": [
      14,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38,
    "range": [
      30,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 39,
    "end": 44,
    "range": [
      39,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50,
    "range": [
      45,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 65,
    "end": 67,
    "range": [
      65,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 76,
    "end": 81,
    "range": [
      76,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 82,
    "end": 89,
    "range": [
      82,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 92,
    "end": 97,
    "range": [
      92,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103,
    "range": [
      101,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 118,
    "end": 125,
    "range": [
      118,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 137,
    "end": 139,
    "range": [
      137,
      139
    ]
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 140,
    "end": 144,
    "range": [
      140,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 144,
    "end": 148,
    "range": [
      144,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 157,
    "end": 159,
    "range": [
      157,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 168,
    "end": 175,
    "range": [
      168,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 202,
    "end": 209,
    "range": [
      202,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
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
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 224,
    "end": 228,
    "range": [
      224,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 231,
    "end": 236,
    "range": [
      231,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 237,
    "end": 244,
    "range": [
      237,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 256,
    "end": 258,
    "range": [
      256,
      258
    ]
  },
  {
    "type": "Numeric",
    "value": "101n",
    "start": 259,
    "end": 263,
    "range": [
      259,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 266,
    "end": 271,
    "range": [
      266,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 282,
    "end": 287,
    "range": [
      282,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293,
    "range": [
      291,
      293
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 294,
    "end": 299,
    "range": [
      294,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 302,
    "end": 307,
    "range": [
      302,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "result7",
    "start": 308,
    "end": 315,
    "range": [
      308,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 318,
    "end": 323,
    "range": [
      318,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 327,
    "end": 329,
    "range": [
      327,
      329
    ]
  },
  {
    "type": "Numeric",
    "value": "11111",
    "start": 330,
    "end": 335,
    "range": [
      330,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343,
    "range": [
      338,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "result8",
    "start": 344,
    "end": 351,
    "range": [
      344,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 363,
    "end": 365,
    "range": [
      363,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "Val",
    "start": 368,
    "end": 371,
    "range": [
      368,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 375,
    "end": 380,
    "range": [
      375,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "result9",
    "start": 381,
    "end": 388,
    "range": [
      381,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 391,
    "end": 396,
    "range": [
      391,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 400,
    "end": 402,
    "range": [
      400,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428,
    "range": [
      423,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "result10",
    "start": 429,
    "end": 437,
    "range": [
      429,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451,
    "range": [
      449,
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
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460,
    "range": [
      454,
      460
    ]
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 461,
    "end": 465,
    "range": [
      461,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 465,
    "end": 469,
    "range": [
      465,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 470,
    "end": 476,
    "range": [
      470,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 478,
    "end": 480,
    "range": [
      478,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 486,
    "end": 491,
    "range": [
      486,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "result11",
    "start": 492,
    "end": 500,
    "range": [
      492,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 503,
    "end": 508,
    "range": [
      503,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 512,
    "end": 514,
    "range": [
      512,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 517,
    "end": 523,
    "range": [
      517,
      523
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 524,
    "end": 527,
    "range": [
      524,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 533,
    "end": 538,
    "range": [
      533,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "result12",
    "start": 539,
    "end": 547,
    "range": [
      539,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 550,
    "end": 555,
    "range": [
      550,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 559,
    "end": 561,
    "range": [
      559,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 564,
    "end": 570,
    "range": [
      564,
      570
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 571,
    "end": 575,
    "range": [
      571,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 581,
    "end": 586,
    "range": [
      581,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "result13",
    "start": 587,
    "end": 595,
    "range": [
      587,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 598,
    "end": 603,
    "range": [
      598,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 607,
    "end": 609,
    "range": [
      607,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 612,
    "end": 618,
    "range": [
      612,
      618
    ]
  },
  {
    "type": "Numeric",
    "value": "101n",
    "start": 619,
    "end": 623,
    "range": [
      619,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 629,
    "end": 634,
    "range": [
      629,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "result14",
    "start": 635,
    "end": 643,
    "range": [
      635,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 646,
    "end": 651,
    "range": [
      646,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 655,
    "end": 657,
    "range": [
      655,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 660,
    "end": 666,
    "range": [
      660,
      666
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 667,
    "end": 672,
    "range": [
      667,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "result15",
    "start": 684,
    "end": 692,
    "range": [
      684,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 695,
    "end": 700,
    "range": [
      695,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 704,
    "end": 706,
    "range": [
      704,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 709,
    "end": 715,
    "range": [
      709,
      715
    ]
  },
  {
    "type": "Numeric",
    "value": "11111",
    "start": 716,
    "end": 721,
    "range": [
      716,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732,
    "range": [
      727,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "result16",
    "start": 733,
    "end": 741,
    "range": [
      733,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 744,
    "end": 749,
    "range": [
      744,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 758,
    "end": 764,
    "range": [
      758,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "Val",
    "start": 767,
    "end": 770,
    "range": [
      767,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 777,
    "end": 782,
    "range": [
      777,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "result17",
    "start": 783,
    "end": 791,
    "range": [
      783,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 794,
    "end": 799,
    "range": [
      794,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 800,
    "end": 805,
    "range": [
      800,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 809,
    "end": 811,
    "range": [
      809,
      811
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 812,
    "end": 817,
    "range": [
      812,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 820,
    "end": 825,
    "range": [
      820,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "result18",
    "start": 826,
    "end": 834,
    "range": [
      826,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 837,
    "end": 842,
    "range": [
      837,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 843,
    "end": 848,
    "range": [
      843,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 852,
    "end": 854,
    "range": [
      852,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 857,
    "end": 863,
    "range": [
      857,
      863
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 864,
    "end": 869,
    "range": [
      864,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 876,
    "end": 883,
    "range": [
      876,
      883
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 884,
    "end": 892,
    "range": [
      884,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 893,
    "end": 898,
    "range": [
      893,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 899,
    "end": 904,
    "range": [
      899,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 908,
    "end": 914,
    "range": [
      908,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 919,
    "end": 921,
    "range": [
      919,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 922,
    "end": 929,
    "range": [
      922,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 939,
    "end": 944,
    "range": [
      939,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "result19",
    "start": 945,
    "end": 953,
    "range": [
      945,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 956,
    "end": 961,
    "range": [
      956,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 962,
    "end": 967,
    "range": [
      962,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 971,
    "end": 973,
    "range": [
      971,
      973
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 974,
    "end": 979,
    "range": [
      974,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 982,
    "end": 987,
    "range": [
      982,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "result20",
    "start": 988,
    "end": 996,
    "range": [
      988,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 999,
    "end": 1004,
    "range": [
      999,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1005,
    "end": 1010,
    "range": [
      1005,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1014,
    "end": 1016,
    "range": [
      1014,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1019,
    "end": 1025,
    "range": [
      1019,
      1025
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1026,
    "end": 1031,
    "range": [
      1026,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1038,
    "end": 1045,
    "range": [
      1038,
      1045
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1046,
    "end": 1054,
    "range": [
      1046,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1055,
    "end": 1060,
    "range": [
      1055,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1061,
    "end": 1066,
    "range": [
      1061,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1070,
    "end": 1075,
    "range": [
      1070,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1079,
    "end": 1082,
    "range": [
      1079,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1087,
    "end": 1089,
    "range": [
      1087,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1090,
    "end": 1099,
    "range": [
      1090,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1116,
    "end": 1121,
    "range": [
      1116,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "result21",
    "start": 1122,
    "end": 1130,
    "range": [
      1122,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1133,
    "end": 1138,
    "range": [
      1133,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1139,
    "end": 1147,
    "range": [
      1139,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1157,
    "end": 1162,
    "range": [
      1157,
      1162
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1163,
    "end": 1165,
    "range": [
      1163,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1171,
    "end": 1177,
    "range": [
      1171,
      1177
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1178,
    "end": 1181,
    "range": [
      1178,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1188,
    "end": 1195,
    "range": [
      1188,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1196,
    "end": 1204,
    "range": [
      1196,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 1205,
    "end": 1210,
    "range": [
      1205,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1211,
    "end": 1216,
    "range": [
      1211,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1220,
    "end": 1225,
    "range": [
      1220,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1229,
    "end": 1232,
    "range": [
      1229,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1237,
    "end": 1239,
    "range": [
      1237,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 1240,
    "end": 1254,
    "range": [
      1240,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1271,
    "end": 1276,
    "range": [
      1271,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "result22",
    "start": 1277,
    "end": 1285,
    "range": [
      1277,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 1288,
    "end": 1293,
    "range": [
      1288,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1294,
    "end": 1299,
    "range": [
      1294,
      1299
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1300,
    "end": 1308,
    "range": [
      1300,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1318,
    "end": 1323,
    "range": [
      1318,
      1323
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1324,
    "end": 1326,
    "range": [
      1324,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1332,
    "end": 1338,
    "range": [
      1332,
      1338
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1339,
    "end": 1342,
    "range": [
      1339,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1405,
    "end": 1410,
    "range": [
      1405,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "UploadThingServerHelper",
    "start": 1411,
    "end": 1434,
    "range": [
      1411,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1438,
    "end": 1443,
    "range": [
      1438,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1444,
    "end": 1455,
    "range": [
      1444,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 1458,
    "end": 1463,
    "range": [
      1458,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1469,
    "end": 1477,
    "range": [
      1469,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 1479,
    "end": 1484,
    "range": [
      1479,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1485,
    "end": 1487,
    "range": [
      1485,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1488,
    "end": 1493,
    "range": [
      1488,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1494,
    "end": 1505,
    "range": [
      1494,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 1514,
    "end": 1524,
    "range": [
      1514,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1529,
    "end": 1531,
    "range": [
      1529,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1532,
    "end": 1543,
    "range": [
      1532,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 1544,
    "end": 1549,
    "range": [
      1544,
      1549
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "onUpload",
    "start": 1556,
    "end": 1564,
    "range": [
      1556,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1567,
    "end": 1575,
    "range": [
      1567,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 1579,
    "end": 1587,
    "range": [
      1579,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1589,
    "end": 1600,
    "range": [
      1589,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 1601,
    "end": 1606,
    "range": [
      1601,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1611,
    "end": 1613,
    "range": [
      1611,
      1613
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1614,
    "end": 1618,
    "range": [
      1614,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1628,
    "end": 1630,
    "range": [
      1628,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1636,
    "end": 1641,
    "range": [
      1636,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "FileRouter",
    "start": 1642,
    "end": 1652,
    "range": [
      1642,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "UploadThingServerHelper",
    "start": 1655,
    "end": 1678,
    "range": [
      1655,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 1683,
    "end": 1690,
    "range": [
      1683,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 1698,
    "end": 1708,
    "range": [
      1698,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1713,
    "end": 1715,
    "range": [
      1713,
      1715
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 1716,
    "end": 1727,
    "range": [
      1716,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "onUpload",
    "start": 1733,
    "end": 1741,
    "range": [
      1733,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1744,
    "end": 1752,
    "range": [
      1744,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1754,
    "end": 1756,
    "range": [
      1754,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1765,
    "end": 1770,
    "range": [
      1765,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 1774,
    "end": 1785,
    "range": [
      1774,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1788,
    "end": 1796,
    "range": [
      1788,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 1797,
    "end": 1805,
    "range": [
      1797,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1824,
    "end": 1832,
    "range": [
      1824,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "outer1",
    "start": 1833,
    "end": 1839,
    "range": [
      1833,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1840,
    "end": 1845,
    "range": [
      1840,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1849,
    "end": 1851,
    "range": [
      1849,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1856,
    "end": 1858,
    "range": [
      1856,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1866,
    "end": 1874,
    "range": [
      1866,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "inner1",
    "start": 1875,
    "end": 1881,
    "range": [
      1875,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1882,
    "end": 1887,
    "range": [
      1882,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 1891,
    "end": 1894,
    "range": [
      1891,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1899,
    "end": 1901,
    "range": [
      1899,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1911,
    "end": 1917,
    "range": [
      1911,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1919,
    "end": 1921,
    "range": [
      1919,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 1925,
    "end": 1928,
    "range": [
      1925,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1939,
    "end": 1945,
    "range": [
      1939,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "inner1",
    "start": 1946,
    "end": 1952,
    "range": [
      1946,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1956,
    "end": 1961,
    "range": [
      1956,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "nestedResult1",
    "start": 1962,
    "end": 1975,
    "range": [
      1962,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "outer1",
    "start": 1978,
    "end": 1984,
    "range": [
      1978,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1988,
    "end": 1990,
    "range": [
      1988,
      1990
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1997,
    "end": 1999,
    "range": [
      1997,
      1999
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2000,
    "end": 2005,
    "range": [
      2000,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2009,
    "end": 2017,
    "range": [
      2009,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 2018,
    "end": 2024,
    "range": [
      2018,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2028,
    "end": 2030,
    "range": [
      2028,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2035,
    "end": 2037,
    "range": [
      2035,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2045,
    "end": 2053,
    "range": [
      2045,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "inner2",
    "start": 2054,
    "end": 2060,
    "range": [
      2054,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2061,
    "end": 2066,
    "range": [
      2061,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2070,
    "end": 2073,
    "range": [
      2070,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2078,
    "end": 2080,
    "range": [
      2078,
      2080
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2090,
    "end": 2096,
    "range": [
      2090,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2098,
    "end": 2100,
    "range": [
      2098,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2104,
    "end": 2107,
    "range": [
      2104,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2118,
    "end": 2124,
    "range": [
      2118,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "inner2",
    "start": 2125,
    "end": 2131,
    "range": [
      2125,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2135,
    "end": 2140,
    "range": [
      2135,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "nestedResult2",
    "start": 2141,
    "end": 2154,
    "range": [
      2141,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 2157,
    "end": 2163,
    "range": [
      2157,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2167,
    "end": 2169,
    "range": [
      2167,
      2169
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2176,
    "end": 2178,
    "range": [
      2176,
      2178
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2179,
    "end": 2184,
    "range": [
      2179,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2188,
    "end": 2196,
    "range": [
      2188,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 2197,
    "end": 2203,
    "range": [
      2197,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2204,
    "end": 2209,
    "range": [
      2204,
      2209
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2213,
    "end": 2215,
    "range": [
      2213,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2220,
    "end": 2222,
    "range": [
      2220,
      2222
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2230,
    "end": 2238,
    "range": [
      2230,
      2238
    ]
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 2239,
    "end": 2245,
    "range": [
      2239,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2249,
    "end": 2252,
    "range": [
      2249,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2257,
    "end": 2259,
    "range": [
      2257,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2269,
    "end": 2275,
    "range": [
      2269,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2277,
    "end": 2279,
    "range": [
      2277,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2283,
    "end": 2286,
    "range": [
      2283,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2297,
    "end": 2303,
    "range": [
      2297,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 2304,
    "end": 2310,
    "range": [
      2304,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2314,
    "end": 2319,
    "range": [
      2314,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "nestedResult3",
    "start": 2320,
    "end": 2333,
    "range": [
      2320,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 2336,
    "end": 2342,
    "range": [
      2336,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2346,
    "end": 2348,
    "range": [
      2346,
      2348
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2355,
    "end": 2357,
    "range": [
      2355,
      2357
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2358,
    "end": 2363,
    "range": [
      2358,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2367,
    "end": 2374,
    "range": [
      2367,
      2374
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2375,
    "end": 2383,
    "range": [
      2375,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2384,
    "end": 2395,
    "range": [
      2384,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2396,
    "end": 2401,
    "range": [
      2396,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2405,
    "end": 2407,
    "range": [
      2405,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2412,
    "end": 2414,
    "range": [
      2412,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2422,
    "end": 2429,
    "range": [
      2422,
      2429
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2430,
    "end": 2438,
    "range": [
      2430,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2439,
    "end": 2450,
    "range": [
      2439,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2451,
    "end": 2456,
    "range": [
      2451,
      2456
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2460,
    "end": 2465,
    "range": [
      2460,
      2465
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2469,
    "end": 2471,
    "range": [
      2469,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2476,
    "end": 2478,
    "range": [
      2476,
      2478
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2482,
    "end": 2485,
    "range": [
      2482,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2490,
    "end": 2492,
    "range": [
      2490,
      2492
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2505,
    "end": 2510,
    "range": [
      2505,
      2510
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadA",
    "start": 2511,
    "end": 2520,
    "range": [
      2511,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2523,
    "end": 2534,
    "range": [
      2523,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2538,
    "end": 2540,
    "range": [
      2538,
      2540
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2541,
    "end": 2543,
    "range": [
      2541,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2546,
    "end": 2551,
    "range": [
      2546,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadB",
    "start": 2552,
    "end": 2561,
    "range": [
      2552,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2564,
    "end": 2575,
    "range": [
      2564,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2579,
    "end": 2581,
    "range": [
      2579,
      2581
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2582,
    "end": 2586,
    "range": [
      2582,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2591,
    "end": 2593,
    "range": [
      2591,
      2593
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2594,
    "end": 2598,
    "range": [
      2594,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599,
    "range": [
      2598,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2602,
    "end": 2609,
    "range": [
      2602,
      2609
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2610,
    "end": 2618,
    "range": [
      2610,
      2618
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2619,
    "end": 2630,
    "range": [
      2619,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2634,
    "end": 2636,
    "range": [
      2634,
      2636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2641,
    "end": 2643,
    "range": [
      2641,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2644,
    "end": 2645,
    "range": [
      2644,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2651,
    "end": 2658,
    "range": [
      2651,
      2658
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2659,
    "end": 2667,
    "range": [
      2659,
      2667
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2668,
    "end": 2679,
    "range": [
      2668,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2683,
    "end": 2688,
    "range": [
      2683,
      2688
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2692,
    "end": 2694,
    "range": [
      2692,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2699,
    "end": 2701,
    "range": [
      2699,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2705,
    "end": 2708,
    "range": [
      2705,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2713,
    "end": 2715,
    "range": [
      2713,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2728,
    "end": 2733,
    "range": [
      2728,
      2733
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadC",
    "start": 2734,
    "end": 2743,
    "range": [
      2734,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2746,
    "end": 2757,
    "range": [
      2746,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2758,
    "end": 2759,
    "range": [
      2758,
      2759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2761,
    "end": 2763,
    "range": [
      2761,
      2763
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2764,
    "end": 2766,
    "range": [
      2764,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2769,
    "end": 2774,
    "range": [
      2769,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadD",
    "start": 2775,
    "end": 2784,
    "range": [
      2775,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2787,
    "end": 2798,
    "range": [
      2787,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2802,
    "end": 2804,
    "range": [
      2802,
      2804
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2805,
    "end": 2809,
    "range": [
      2805,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2814,
    "end": 2816,
    "range": [
      2814,
      2816
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2817,
    "end": 2821,
    "range": [
      2817,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2825,
    "end": 2832,
    "range": [
      2825,
      2832
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2833,
    "end": 2841,
    "range": [
      2833,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 2842,
    "end": 2853,
    "range": [
      2842,
      2853
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2854,
    "end": 2859,
    "range": [
      2854,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2863,
    "end": 2865,
    "range": [
      2863,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2870,
    "end": 2872,
    "range": [
      2870,
      2872
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2880,
    "end": 2887,
    "range": [
      2880,
      2887
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2888,
    "end": 2896,
    "range": [
      2888,
      2896
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 2897,
    "end": 2908,
    "range": [
      2897,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2909,
    "end": 2914,
    "range": [
      2909,
      2914
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2921,
    "end": 2923,
    "range": [
      2921,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2928,
    "end": 2930,
    "range": [
      2928,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2932,
    "end": 2933,
    "range": [
      2932,
      2933
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2934,
    "end": 2937,
    "range": [
      2934,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2942,
    "end": 2944,
    "range": [
      2942,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2954,
    "end": 2955,
    "range": [
      2954,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2957,
    "end": 2962,
    "range": [
      2957,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadE",
    "start": 2963,
    "end": 2972,
    "range": [
      2963,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 2975,
    "end": 2986,
    "range": [
      2975,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2988,
    "end": 2989,
    "range": [
      2988,
      2989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2990,
    "end": 2992,
    "range": [
      2990,
      2992
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2993,
    "end": 2995,
    "range": [
      2993,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2998,
    "end": 3003,
    "range": [
      2998,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadF",
    "start": 3004,
    "end": 3013,
    "range": [
      3004,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 3016,
    "end": 3027,
    "range": [
      3016,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3031,
    "end": 3033,
    "range": [
      3031,
      3033
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3034,
    "end": 3038,
    "range": [
      3034,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3043,
    "end": 3045,
    "range": [
      3043,
      3045
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3046,
    "end": 3050,
    "range": [
      3046,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3051,
    "end": 3052,
    "range": [
      3051,
      3052
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3054,
    "end": 3061,
    "range": [
      3054,
      3061
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3062,
    "end": 3070,
    "range": [
      3062,
      3070
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3071,
    "end": 3082,
    "range": [
      3071,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3083,
    "end": 3088,
    "range": [
      3083,
      3088
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3089,
    "end": 3090,
    "range": [
      3089,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3091,
    "end": 3092,
    "range": [
      3091,
      3092
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3092,
    "end": 3094,
    "range": [
      3092,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3099,
    "end": 3101,
    "range": [
      3099,
      3101
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3102,
    "end": 3103,
    "range": [
      3102,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3109,
    "end": 3116,
    "range": [
      3109,
      3116
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3117,
    "end": 3125,
    "range": [
      3117,
      3125
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3126,
    "end": 3137,
    "range": [
      3126,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3142,
    "end": 3143,
    "range": [
      3142,
      3143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3143,
    "end": 3144,
    "range": [
      3143,
      3144
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3144,
    "end": 3146,
    "range": [
      3144,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3151,
    "end": 3153,
    "range": [
      3151,
      3153
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 3157,
    "end": 3160,
    "range": [
      3157,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3165,
    "end": 3167,
    "range": [
      3165,
      3167
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3172,
    "end": 3173,
    "range": [
      3172,
      3173
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3173,
    "end": 3174,
    "range": [
      3173,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3180,
    "end": 3185,
    "range": [
      3180,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadG",
    "start": 3186,
    "end": 3195,
    "range": [
      3186,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3198,
    "end": 3209,
    "range": [
      3198,
      3209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3213,
    "end": 3215,
    "range": [
      3213,
      3215
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3216,
    "end": 3218,
    "range": [
      3216,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3221,
    "end": 3226,
    "range": [
      3221,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadH",
    "start": 3227,
    "end": 3236,
    "range": [
      3227,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3239,
    "end": 3250,
    "range": [
      3239,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3254,
    "end": 3256,
    "range": [
      3254,
      3256
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3257,
    "end": 3261,
    "range": [
      3257,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3266,
    "end": 3268,
    "range": [
      3266,
      3268
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3269,
    "end": 3273,
    "range": [
      3269,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3277,
    "end": 3284,
    "range": [
      3277,
      3284
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3285,
    "end": 3293,
    "range": [
      3285,
      3293
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3294,
    "end": 3305,
    "range": [
      3294,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3309,
    "end": 3311,
    "range": [
      3309,
      3311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3316,
    "end": 3318,
    "range": [
      3316,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3326,
    "end": 3333,
    "range": [
      3326,
      3333
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3334,
    "end": 3342,
    "range": [
      3334,
      3342
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3343,
    "end": 3354,
    "range": [
      3343,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3355,
    "end": 3360,
    "range": [
      3355,
      3360
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3367,
    "end": 3369,
    "range": [
      3367,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3374,
    "end": 3376,
    "range": [
      3374,
      3376
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3378,
    "end": 3379,
    "range": [
      3378,
      3379
    ]
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 3380,
    "end": 3383,
    "range": [
      3380,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3388,
    "end": 3390,
    "range": [
      3388,
      3390
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3400,
    "end": 3401,
    "range": [
      3400,
      3401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3403,
    "end": 3408,
    "range": [
      3403,
      3408
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadI",
    "start": 3409,
    "end": 3418,
    "range": [
      3409,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3421,
    "end": 3432,
    "range": [
      3421,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3436,
    "end": 3438,
    "range": [
      3436,
      3438
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3439,
    "end": 3441,
    "range": [
      3439,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3444,
    "end": 3449,
    "range": [
      3444,
      3449
    ]
  },
  {
    "type": "Identifier",
    "value": "overloadJ",
    "start": 3450,
    "end": 3459,
    "range": [
      3450,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3462,
    "end": 3473,
    "range": [
      3462,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3477,
    "end": 3479,
    "range": [
      3477,
      3479
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3480,
    "end": 3484,
    "range": [
      3480,
      3484
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3486,
    "end": 3487,
    "range": [
      3486,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3489,
    "end": 3491,
    "range": [
      3489,
      3491
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3492,
    "end": 3496,
    "range": [
      3492,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  }
]
```
