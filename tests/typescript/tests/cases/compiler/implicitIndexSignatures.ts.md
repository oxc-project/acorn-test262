__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": null,
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
                    "start": 23,
                    "end": 29
                  },
                  "start": 21,
                  "end": 29
                },
                "start": 20,
                "end": 29
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 19,
            "end": 38
          }
        ],
        "start": 17,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "empty1",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 55
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 58,
            "end": 60
          },
          "definite": false,
          "start": 49,
          "end": 60
        }
      ],
      "declare": false,
      "start": 43,
      "end": 61
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
            "name": "empty2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 74,
                "end": 76
              },
              "start": 72,
              "end": 76
            },
            "start": 66,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 76
        }
      ],
      "declare": false,
      "start": 62,
      "end": 77
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
            "name": "names1",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 90
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 96
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 98,
                  "end": 103
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 95,
                "end": 103
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 106
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 108,
                  "end": 113
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 105,
                "end": 113
              }
            ],
            "start": 93,
            "end": 115
          },
          "definite": false,
          "start": 84,
          "end": 115
        }
      ],
      "declare": false,
      "start": 78,
      "end": 116
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
            "name": "names2",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 134,
                        "end": 140
                      },
                      "start": 132,
                      "end": 140
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 131,
                    "end": 141
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 145,
                        "end": 151
                      },
                      "start": 143,
                      "end": 151
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 151
                  }
                ],
                "start": 129,
                "end": 153
              },
              "start": 127,
              "end": 153
            },
            "start": 121,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 153
        }
      ],
      "declare": false,
      "start": 117,
      "end": 154
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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 173
                },
                "typeArguments": null,
                "start": 164,
                "end": 173
              },
              "start": 162,
              "end": 173
            },
            "start": 159,
            "end": 173
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 173
        }
      ],
      "declare": false,
      "start": 155,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 178
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 184
              },
              "value": {
                "type": "Literal",
                "value": "xxx",
                "raw": "\"xxx\"",
                "start": 186,
                "end": 191
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 183,
              "end": 191
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "value": {
                "type": "Literal",
                "value": "yyy",
                "raw": "\"yyy\"",
                "start": 196,
                "end": 201
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 193,
              "end": 201
            }
          ],
          "start": 181,
          "end": 203
        },
        "start": 175,
        "end": 203
      },
      "directive": null,
      "start": 175,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 208
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "empty1",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 217
        },
        "start": 205,
        "end": 217
      },
      "directive": null,
      "start": 205,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 222
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "empty2",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 231
        },
        "start": 219,
        "end": 231
      },
      "directive": null,
      "start": 219,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 236
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "names1",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 245
        },
        "start": 233,
        "end": 245
      },
      "directive": null,
      "start": 233,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 250
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "names2",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 259
        },
        "start": 247,
        "end": 259
      },
      "directive": null,
      "start": 247,
      "end": 260
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStringIndexValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 298
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
              "start": 299,
              "end": 300
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 299,
            "end": 300
          }
        ],
        "start": 298,
        "end": 301
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
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
                          "start": 313,
                          "end": 319
                        },
                        "start": 311,
                        "end": 319
                      },
                      "start": 310,
                      "end": 319
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
                        "start": 322,
                        "end": 323
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 323
                    },
                    "start": 320,
                    "end": 323
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 309,
                  "end": 323
                }
              ],
              "start": 307,
              "end": 325
            },
            "start": 305,
            "end": 325
          },
          "start": 302,
          "end": 325
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
            "start": 328,
            "end": 329
          },
          "typeArguments": null,
          "start": 328,
          "end": 329
        },
        "start": 326,
        "end": 329
      },
      "body": null,
      "expression": false,
      "start": 262,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNumberIndexValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 367
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
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 369
          }
        ],
        "start": 367,
        "end": 370
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
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
                          "type": "TSNumberKeyword",
                          "start": 382,
                          "end": 388
                        },
                        "start": 380,
                        "end": 388
                      },
                      "start": 379,
                      "end": 388
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
                        "start": 391,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 391,
                      "end": 392
                    },
                    "start": 389,
                    "end": 392
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 378,
                  "end": 392
                }
              ],
              "start": 376,
              "end": 394
            },
            "start": 374,
            "end": 394
          },
          "start": 371,
          "end": 394
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
            "start": 397,
            "end": 398
          },
          "typeArguments": null,
          "start": 397,
          "end": 398
        },
        "start": 395,
        "end": 398
      },
      "body": null,
      "expression": false,
      "start": 331,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 412
      },
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 435
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 437,
                        "end": 438
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 434,
                      "end": 438
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 441
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 443,
                        "end": 444
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 440,
                      "end": 444
                    }
                  ],
                  "start": 432,
                  "end": 446
                },
                "definite": false,
                "start": 427,
                "end": 446
              }
            ],
            "declare": false,
            "start": 421,
            "end": 447
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
                  "name": "o2",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 462,
                            "end": 463
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 465,
                              "end": 471
                            },
                            "start": 463,
                            "end": 471
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 462,
                          "end": 472
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 473,
                            "end": 474
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 476,
                              "end": 482
                            },
                            "start": 474,
                            "end": 482
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 473,
                          "end": 482
                        }
                      ],
                      "start": 460,
                      "end": 484
                    },
                    "start": 458,
                    "end": 484
                  },
                  "start": 456,
                  "end": 484
                },
                "init": null,
                "definite": false,
                "start": 456,
                "end": 484
              }
            ],
            "declare": false,
            "start": 452,
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 498
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 520
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 523
                    }
                  ],
                  "optional": false,
                  "start": 501,
                  "end": 524
                },
                "definite": false,
                "start": 496,
                "end": 524
              }
            ],
            "declare": false,
            "start": 490,
            "end": 525
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 538
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 560
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 563
                    }
                  ],
                  "optional": false,
                  "start": 541,
                  "end": 564
                },
                "definite": false,
                "start": 536,
                "end": 564
              }
            ],
            "declare": false,
            "start": 530,
            "end": 565
          }
        ],
        "start": 415,
        "end": 567
      },
      "expression": false,
      "start": 401,
      "end": 567
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 580
      },
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 597
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 602,
                        "end": 603
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "\"1\"",
                        "start": 605,
                        "end": 608
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 602,
                      "end": 608
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 611
                      },
                      "value": {
                        "type": "Literal",
                        "value": "2",
                        "raw": "\"2\"",
                        "start": 613,
                        "end": 616
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 610,
                      "end": 616
                    }
                  ],
                  "start": 600,
                  "end": 618
                },
                "definite": false,
                "start": 595,
                "end": 618
              }
            ],
            "declare": false,
            "start": 589,
            "end": 619
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
                  "name": "o2",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 634,
                            "end": 635
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 637,
                              "end": 643
                            },
                            "start": 635,
                            "end": 643
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 634,
                          "end": 644
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 646
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 648,
                              "end": 654
                            },
                            "start": 646,
                            "end": 654
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 645,
                          "end": 654
                        }
                      ],
                      "start": 632,
                      "end": 656
                    },
                    "start": 630,
                    "end": 656
                  },
                  "start": 628,
                  "end": 656
                },
                "init": null,
                "definite": false,
                "start": 628,
                "end": 656
              }
            ],
            "declare": false,
            "start": 624,
            "end": 657
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 668,
                  "end": 670
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 673,
                    "end": 692
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 695
                    }
                  ],
                  "optional": false,
                  "start": 673,
                  "end": 696
                },
                "definite": false,
                "start": 668,
                "end": 696
              }
            ],
            "declare": false,
            "start": 662,
            "end": 697
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 710
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 732
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 733,
                      "end": 735
                    }
                  ],
                  "optional": false,
                  "start": 713,
                  "end": 736
                },
                "definite": false,
                "start": 708,
                "end": 736
              }
            ],
            "declare": false,
            "start": 702,
            "end": 737
          }
        ],
        "start": 583,
        "end": 739
      },
      "expression": false,
      "start": 569,
      "end": 739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
      },
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 769
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 774,
                        "end": 775
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 777,
                        "end": 778
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 774,
                      "end": 778
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 780,
                        "end": 781
                      },
                      "value": {
                        "type": "Literal",
                        "value": "2",
                        "raw": "\"2\"",
                        "start": 783,
                        "end": 786
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 780,
                      "end": 786
                    }
                  ],
                  "start": 772,
                  "end": 788
                },
                "definite": false,
                "start": 767,
                "end": 788
              }
            ],
            "declare": false,
            "start": 761,
            "end": 789
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
                  "name": "o2",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 804,
                            "end": 805
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 807,
                              "end": 813
                            },
                            "start": 805,
                            "end": 813
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 804,
                          "end": 814
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 815,
                            "end": 816
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 818,
                              "end": 824
                            },
                            "start": 816,
                            "end": 824
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 815,
                          "end": 824
                        }
                      ],
                      "start": 802,
                      "end": 826
                    },
                    "start": 800,
                    "end": 826
                  },
                  "start": 798,
                  "end": 826
                },
                "init": null,
                "definite": false,
                "start": 798,
                "end": 826
              }
            ],
            "declare": false,
            "start": 794,
            "end": 827
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 840
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 862
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 865
                    }
                  ],
                  "optional": false,
                  "start": 843,
                  "end": 866
                },
                "definite": false,
                "start": 838,
                "end": 866
              }
            ],
            "declare": false,
            "start": 832,
            "end": 867
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 880
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 902
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 903,
                      "end": 905
                    }
                  ],
                  "optional": false,
                  "start": 883,
                  "end": 906
                },
                "definite": false,
                "start": 878,
                "end": 906
              }
            ],
            "declare": false,
            "start": 872,
            "end": 907
          }
        ],
        "start": 755,
        "end": 909
      },
      "expression": false,
      "start": 741,
      "end": 909
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 920,
        "end": 922
      },
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 939
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 944,
                        "end": 945
                      },
                      "value": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 947,
                        "end": 950
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 944,
                      "end": 950
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 952,
                        "end": 953
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "\"1\"",
                        "start": 955,
                        "end": 958
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 952,
                      "end": 958
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "count",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 965
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 967,
                        "end": 968
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 960,
                      "end": 968
                    }
                  ],
                  "start": 942,
                  "end": 970
                },
                "definite": false,
                "start": 937,
                "end": 970
              }
            ],
            "declare": false,
            "start": 931,
            "end": 971
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
                  "name": "o2",
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
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 986,
                            "end": 987
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 989,
                              "end": 995
                            },
                            "start": 987,
                            "end": 995
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 986,
                          "end": 996
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 997,
                            "end": 998
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1000,
                              "end": 1006
                            },
                            "start": 998,
                            "end": 1006
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 997,
                          "end": 1007
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "count",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1008,
                            "end": 1013
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1015,
                              "end": 1021
                            },
                            "start": 1013,
                            "end": 1021
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1008,
                          "end": 1021
                        }
                      ],
                      "start": 984,
                      "end": 1023
                    },
                    "start": 982,
                    "end": 1023
                  },
                  "start": 980,
                  "end": 1023
                },
                "init": null,
                "definite": false,
                "start": 980,
                "end": 1023
              }
            ],
            "declare": false,
            "start": 976,
            "end": 1024
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1041
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1063
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1066
                    }
                  ],
                  "optional": false,
                  "start": 1044,
                  "end": 1067
                },
                "definite": false,
                "start": 1039,
                "end": 1067
              }
            ],
            "declare": false,
            "start": 1033,
            "end": 1068
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1081
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1103
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1106
                    }
                  ],
                  "optional": false,
                  "start": 1084,
                  "end": 1107
                },
                "definite": false,
                "start": 1079,
                "end": 1107
              }
            ],
            "declare": false,
            "start": 1073,
            "end": 1108
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1119,
                  "end": 1121
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1143
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1146
                    }
                  ],
                  "optional": false,
                  "start": 1124,
                  "end": 1147
                },
                "definite": false,
                "start": 1119,
                "end": 1147
              }
            ],
            "declare": false,
            "start": 1113,
            "end": 1148
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1159,
                  "end": 1161
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1164,
                    "end": 1183
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1186
                    }
                  ],
                  "optional": false,
                  "start": 1164,
                  "end": 1187
                },
                "definite": false,
                "start": 1159,
                "end": 1187
              }
            ],
            "declare": false,
            "start": 1153,
            "end": 1188
          }
        ],
        "start": 925,
        "end": 1190
      },
      "expression": false,
      "start": 911,
      "end": 1190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1203
      },
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
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1217,
              "end": 1219
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1222,
                  "end": 1223
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1225,
                  "end": 1226
                }
              ],
              "start": 1220,
              "end": 1228
            },
            "const": false,
            "declare": false,
            "start": 1212,
            "end": 1228
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1240
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1243,
                    "end": 1244
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 1247,
                    "end": 1250
                  },
                  "computed": false,
                  "start": 1243,
                  "end": 1250
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 1256,
                    "end": 1259
                  },
                  "computed": false,
                  "start": 1252,
                  "end": 1259
                }
              ],
              "start": 1241,
              "end": 1261
            },
            "const": false,
            "declare": false,
            "start": 1233,
            "end": 1261
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1271,
              "end": 1273
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1276,
                    "end": 1277
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1280,
                    "end": 1281
                  },
                  "computed": false,
                  "start": 1276,
                  "end": 1281
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1283,
                    "end": 1284
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 1287,
                    "end": 1290
                  },
                  "computed": false,
                  "start": 1283,
                  "end": 1290
                }
              ],
              "start": 1274,
              "end": 1292
            },
            "const": false,
            "declare": false,
            "start": 1266,
            "end": 1292
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1305
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1327
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1328,
                      "end": 1330
                    }
                  ],
                  "optional": false,
                  "start": 1308,
                  "end": 1331
                },
                "definite": false,
                "start": 1303,
                "end": 1331
              }
            ],
            "declare": false,
            "start": 1297,
            "end": 1332
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1345
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1348,
                    "end": 1367
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1370
                    }
                  ],
                  "optional": false,
                  "start": 1348,
                  "end": 1371
                },
                "definite": false,
                "start": 1343,
                "end": 1371
              }
            ],
            "declare": false,
            "start": 1337,
            "end": 1372
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1383,
                  "end": 1385
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1388,
                    "end": 1407
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1410
                    }
                  ],
                  "optional": false,
                  "start": 1388,
                  "end": 1411
                },
                "definite": false,
                "start": 1383,
                "end": 1411
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1412
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1425
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1428,
                    "end": 1447
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1448,
                      "end": 1450
                    }
                  ],
                  "optional": false,
                  "start": 1428,
                  "end": 1451
                },
                "definite": false,
                "start": 1423,
                "end": 1451
              }
            ],
            "declare": false,
            "start": 1417,
            "end": 1452
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1463,
                  "end": 1465
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1468,
                    "end": 1487
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1488,
                      "end": 1490
                    }
                  ],
                  "optional": false,
                  "start": 1468,
                  "end": 1491
                },
                "definite": false,
                "start": 1463,
                "end": 1491
              }
            ],
            "declare": false,
            "start": 1457,
            "end": 1492
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
                  "name": "v6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1503,
                  "end": 1505
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1508,
                    "end": 1527
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1528,
                      "end": 1530
                    }
                  ],
                  "optional": false,
                  "start": 1508,
                  "end": 1531
                },
                "definite": false,
                "start": 1503,
                "end": 1531
              }
            ],
            "declare": false,
            "start": 1497,
            "end": 1532
          }
        ],
        "start": 1206,
        "end": 1534
      },
      "expression": false,
      "start": 1192,
      "end": 1534
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1534
}
```
