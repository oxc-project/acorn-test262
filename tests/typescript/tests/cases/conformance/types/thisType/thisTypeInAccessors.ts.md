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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
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
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
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
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 63
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 75,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 72,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 98
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 98
                        },
                        "start": 93,
                        "end": 98
                      },
                      "start": 89,
                      "end": 98
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 117,
                            "end": 121
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 122,
                            "end": 123
                          },
                          "optional": false,
                          "computed": false,
                          "start": 117,
                          "end": 123
                        },
                        "start": 110,
                        "end": 124
                      }
                    ],
                    "start": 108,
                    "end": 126
                  },
                  "expression": false,
                  "start": 88,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 83,
                "end": 126
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 147
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 147
                        },
                        "start": 142,
                        "end": 147
                      },
                      "start": 138,
                      "end": 147
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 152,
                          "end": 158
                        },
                        "start": 150,
                        "end": 158
                      },
                      "start": 149,
                      "end": 158
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 162,
                              "end": 166
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 168
                            },
                            "optional": false,
                            "computed": false,
                            "start": 162,
                            "end": 168
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 172
                          },
                          "start": 162,
                          "end": 172
                        },
                        "directive": null,
                        "start": 162,
                        "end": 173
                      }
                    ],
                    "start": 160,
                    "end": 175
                  },
                  "expression": false,
                  "start": 137,
                  "end": 175
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 132,
                "end": 175
              }
            ],
            "start": 66,
            "end": 177
          },
          "definite": false,
          "start": 55,
          "end": 177
        }
      ],
      "declare": false,
      "start": 49,
      "end": 177
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
            "name": "copiedFromGetter",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 200
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "value": {
                  "type": "Literal",
                  "value": 14,
                  "raw": "14",
                  "start": 212,
                  "end": 214
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 214
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 232,
                            "end": 235
                          },
                          "typeArguments": null,
                          "start": 232,
                          "end": 235
                        },
                        "start": 230,
                        "end": 235
                      },
                      "start": 226,
                      "end": 235
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 238,
                      "end": 244
                    },
                    "start": 236,
                    "end": 244
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 254,
                            "end": 258
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 260
                          },
                          "optional": false,
                          "computed": false,
                          "start": 254,
                          "end": 260
                        },
                        "start": 247,
                        "end": 261
                      }
                    ],
                    "start": 245,
                    "end": 263
                  },
                  "expression": false,
                  "start": 225,
                  "end": 263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 220,
                "end": 263
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 276
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 280,
                              "end": 284
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 286
                            },
                            "optional": false,
                            "computed": false,
                            "start": 280,
                            "end": 286
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 289,
                            "end": 290
                          },
                          "start": 280,
                          "end": 290
                        },
                        "directive": null,
                        "start": 280,
                        "end": 291
                      }
                    ],
                    "start": 278,
                    "end": 293
                  },
                  "expression": false,
                  "start": 274,
                  "end": 293
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 269,
                "end": 293
              }
            ],
            "start": 203,
            "end": 295
          },
          "definite": false,
          "start": 184,
          "end": 295
        }
      ],
      "declare": false,
      "start": 178,
      "end": 295
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
            "name": "copiedFromSetter",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 328
                },
                "value": {
                  "type": "Literal",
                  "value": 15,
                  "raw": "15",
                  "start": 330,
                  "end": 332
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 327,
                "end": 332
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 355,
                            "end": 359
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 360,
                            "end": 361
                          },
                          "optional": false,
                          "computed": false,
                          "start": 355,
                          "end": 361
                        },
                        "start": 348,
                        "end": 361
                      }
                    ],
                    "start": 346,
                    "end": 363
                  },
                  "expression": false,
                  "start": 343,
                  "end": 363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 338,
                "end": 363
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 374
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 384
                          },
                          "typeArguments": null,
                          "start": 381,
                          "end": 384
                        },
                        "start": 379,
                        "end": 384
                      },
                      "start": 375,
                      "end": 384
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 389,
                          "end": 395
                        },
                        "start": 387,
                        "end": 395
                      },
                      "start": 386,
                      "end": 395
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 399,
                              "end": 403
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 405
                            },
                            "optional": false,
                            "computed": false,
                            "start": 399,
                            "end": 405
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 409
                          },
                          "start": 399,
                          "end": 409
                        },
                        "directive": null,
                        "start": 399,
                        "end": 410
                      }
                    ],
                    "start": 397,
                    "end": 412
                  },
                  "expression": false,
                  "start": 374,
                  "end": 412
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 369,
                "end": 412
              }
            ],
            "start": 321,
            "end": 414
          },
          "definite": false,
          "start": 302,
          "end": 414
        }
      ],
      "declare": false,
      "start": 296,
      "end": 414
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
            "name": "copiedFromGetterUnannotated",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 448
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 458
                },
                "value": {
                  "type": "Literal",
                  "value": 16,
                  "raw": "16",
                  "start": 460,
                  "end": 462
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 457,
                "end": 462
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 473
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 480,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 480,
                          "end": 483
                        },
                        "start": 478,
                        "end": 483
                      },
                      "start": 474,
                      "end": 483
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 494,
                            "end": 498
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 499,
                            "end": 500
                          },
                          "optional": false,
                          "computed": false,
                          "start": 494,
                          "end": 500
                        },
                        "start": 487,
                        "end": 500
                      }
                    ],
                    "start": 485,
                    "end": 502
                  },
                  "expression": false,
                  "start": 473,
                  "end": 502
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 468,
                "end": 502
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 518
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 521
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 525,
                              "end": 529
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 530,
                              "end": 531
                            },
                            "optional": false,
                            "computed": false,
                            "start": 525,
                            "end": 531
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 534,
                            "end": 535
                          },
                          "start": 525,
                          "end": 535
                        },
                        "directive": null,
                        "start": 525,
                        "end": 536
                      }
                    ],
                    "start": 523,
                    "end": 538
                  },
                  "expression": false,
                  "start": 513,
                  "end": 538
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 508,
                "end": 538
              }
            ],
            "start": 451,
            "end": 540
          },
          "definite": false,
          "start": 421,
          "end": 540
        }
      ],
      "declare": false,
      "start": 415,
      "end": 540
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 556
      },
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 564
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 17,
              "raw": "17",
              "start": 567,
              "end": 569
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 563,
            "end": 570
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 580
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 587,
                      "end": 590
                    },
                    "start": 585,
                    "end": 590
                  },
                  "start": 581,
                  "end": 590
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 593,
                  "end": 599
                },
                "start": 591,
                "end": 599
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 609,
                        "end": 613
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 615
                      },
                      "optional": false,
                      "computed": false,
                      "start": 609,
                      "end": 615
                    },
                    "start": 602,
                    "end": 616
                  }
                ],
                "start": 600,
                "end": 618
              },
              "expression": false,
              "start": 580,
              "end": 618
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 575,
            "end": 618
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 628
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 635,
                        "end": 638
                      },
                      "typeArguments": null,
                      "start": 635,
                      "end": 638
                    },
                    "start": 633,
                    "end": 638
                  },
                  "start": 629,
                  "end": 638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 643,
                      "end": 649
                    },
                    "start": 641,
                    "end": 649
                  },
                  "start": 640,
                  "end": 649
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 653,
                          "end": 657
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 659
                        },
                        "optional": false,
                        "computed": false,
                        "start": 653,
                        "end": 659
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 663
                      },
                      "start": 653,
                      "end": 663
                    },
                    "directive": null,
                    "start": 653,
                    "end": 664
                  }
                ],
                "start": 651,
                "end": 666
              },
              "expression": false,
              "start": 628,
              "end": 666
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 623,
            "end": 666
          }
        ],
        "start": 557,
        "end": 668
      },
      "abstract": false,
      "declare": false,
      "start": 542,
      "end": 668
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contextual",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 685
      },
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 693
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 21,
              "raw": "21",
              "start": 696,
              "end": 698
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 692,
            "end": 699
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 709
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 721,
                        "end": 725
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 726,
                        "end": 727
                      },
                      "optional": false,
                      "computed": false,
                      "start": 721,
                      "end": 727
                    },
                    "start": 714,
                    "end": 727
                  }
                ],
                "start": 712,
                "end": 729
              },
              "expression": false,
              "start": 709,
              "end": 729
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 704,
            "end": 729
          }
        ],
        "start": 686,
        "end": 769
      },
      "abstract": false,
      "declare": false,
      "start": 669,
      "end": 769
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 769
}
```
