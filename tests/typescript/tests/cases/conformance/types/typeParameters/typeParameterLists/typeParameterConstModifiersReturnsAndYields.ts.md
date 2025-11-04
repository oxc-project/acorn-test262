__ESTREE_TEST__:PASS:
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
