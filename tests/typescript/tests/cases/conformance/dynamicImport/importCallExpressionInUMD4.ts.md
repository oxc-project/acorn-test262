__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "print",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 26
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
                        "type": "Literal",
                        "value": "I am B",
                        "raw": "\"I am B\"",
                        "start": 38,
                        "end": 46
                      },
                      "start": 31,
                      "end": 46
                    }
                  ],
                  "start": 29,
                  "end": 47
                },
                "expression": false,
                "start": 26,
                "end": 47
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 47
            }
          ],
          "start": 15,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 70
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 82,
                "end": 87
              },
              "start": 75,
              "end": 87
            }
          ],
          "start": 73,
          "end": 89
        },
        "expression": false,
        "start": 58,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 22
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "backup",
                "raw": "\"backup\"",
                "start": 34,
                "end": 42
              },
              "start": 27,
              "end": 43
            }
          ],
          "start": 25,
          "end": 45
        },
        "expression": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 12,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 33
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
              "name": "myModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 66,
                "end": 71
              },
              "options": null,
              "phase": null,
              "start": 59,
              "end": 72
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 40,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 84
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "loadAsync",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 112
                        },
                        "init": {
                          "type": "ImportExpression",
                          "source": {
                            "type": "Literal",
                            "value": "./0",
                            "raw": "\"./0\"",
                            "start": 122,
                            "end": 127
                          },
                          "options": null,
                          "phase": null,
                          "start": 115,
                          "end": 128
                        },
                        "definite": false,
                        "start": 103,
                        "end": 128
                      }
                    ],
                    "declare": false,
                    "start": 97,
                    "end": 129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 151
                          },
                          "optional": false,
                          "computed": false,
                          "start": 138,
                          "end": 151
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 156
                        },
                        "optional": false,
                        "computed": false,
                        "start": 138,
                        "end": 156
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Zero",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 157,
                              "end": 161
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 179,
                                      "end": 186
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 190
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 179,
                                    "end": 190
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Zero",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 191,
                                          "end": 195
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 196,
                                          "end": 199
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 191,
                                        "end": 199
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 191,
                                      "end": 201
                                    }
                                  ],
                                  "optional": false,
                                  "start": 179,
                                  "end": 202
                                },
                                "directive": null,
                                "start": 179,
                                "end": 203
                              }
                            ],
                            "start": 165,
                            "end": 213
                          },
                          "id": null,
                          "generator": false,
                          "start": 157,
                          "end": 213
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": true,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "err",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 224
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 242,
                                      "end": 249
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 250,
                                      "end": 253
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 242,
                                    "end": 253
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 254,
                                      "end": 257
                                    }
                                  ],
                                  "optional": false,
                                  "start": 242,
                                  "end": 258
                                },
                                "directive": null,
                                "start": 242,
                                "end": 259
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
                                      "name": "one",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 276,
                                      "end": 279
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "ImportExpression",
                                        "source": {
                                          "type": "Literal",
                                          "value": "./1",
                                          "raw": "\"./1\"",
                                          "start": 295,
                                          "end": 300
                                        },
                                        "options": null,
                                        "phase": null,
                                        "start": 288,
                                        "end": 301
                                      },
                                      "start": 282,
                                      "end": 301
                                    },
                                    "definite": false,
                                    "start": 276,
                                    "end": 301
                                  }
                                ],
                                "declare": false,
                                "start": 272,
                                "end": 302
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 315,
                                      "end": 322
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 323,
                                      "end": 326
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 315,
                                    "end": 326
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "one",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 327,
                                          "end": 330
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 331,
                                          "end": 337
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 327,
                                        "end": 337
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 327,
                                      "end": 339
                                    }
                                  ],
                                  "optional": false,
                                  "start": 315,
                                  "end": 340
                                },
                                "directive": null,
                                "start": 315,
                                "end": 341
                              }
                            ],
                            "start": 228,
                            "end": 351
                          },
                          "id": null,
                          "generator": false,
                          "start": 215,
                          "end": 351
                        }
                      ],
                      "optional": false,
                      "start": 138,
                      "end": 352
                    },
                    "directive": null,
                    "start": 138,
                    "end": 353
                  }
                ],
                "start": 87,
                "end": 359
              },
              "expression": false,
              "start": 84,
              "end": 359
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 359
          }
        ],
        "start": 34,
        "end": 361
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 361
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
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
                "name": "myModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 400
              },
              "typeAnnotation": null,
              "value": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./0",
                  "raw": "\"./0\"",
                  "start": 410,
                  "end": 415
                },
                "options": null,
                "phase": null,
                "start": 403,
                "end": 416
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 384,
              "end": 417
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 428
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
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "loadAsync",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 447,
                            "end": 456
                          },
                          "init": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./0",
                              "raw": "\"./0\"",
                              "start": 466,
                              "end": 471
                            },
                            "options": null,
                            "phase": null,
                            "start": 459,
                            "end": 472
                          },
                          "definite": false,
                          "start": 447,
                          "end": 472
                        }
                      ],
                      "declare": false,
                      "start": 441,
                      "end": 473
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 482,
                              "end": 486
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "myModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 487,
                              "end": 495
                            },
                            "optional": false,
                            "computed": false,
                            "start": 482,
                            "end": 495
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 496,
                            "end": 500
                          },
                          "optional": false,
                          "computed": false,
                          "start": 482,
                          "end": 500
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Zero",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 501,
                                "end": 505
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 523,
                                        "end": 530
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 531,
                                        "end": 534
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 523,
                                      "end": 534
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Zero",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 535,
                                            "end": 539
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 540,
                                            "end": 543
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 535,
                                          "end": 543
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 535,
                                        "end": 545
                                      }
                                    ],
                                    "optional": false,
                                    "start": 523,
                                    "end": 546
                                  },
                                  "directive": null,
                                  "start": 523,
                                  "end": 547
                                }
                              ],
                              "start": 509,
                              "end": 557
                            },
                            "id": null,
                            "generator": false,
                            "start": 501,
                            "end": 557
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": true,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 565,
                                "end": 568
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 586,
                                        "end": 593
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 594,
                                        "end": 597
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 586,
                                      "end": 597
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "err",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 598,
                                        "end": 601
                                      }
                                    ],
                                    "optional": false,
                                    "start": 586,
                                    "end": 602
                                  },
                                  "directive": null,
                                  "start": 586,
                                  "end": 603
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
                                        "name": "one",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 620,
                                        "end": 623
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "ImportExpression",
                                          "source": {
                                            "type": "Literal",
                                            "value": "./1",
                                            "raw": "\"./1\"",
                                            "start": 639,
                                            "end": 644
                                          },
                                          "options": null,
                                          "phase": null,
                                          "start": 632,
                                          "end": 645
                                        },
                                        "start": 626,
                                        "end": 645
                                      },
                                      "definite": false,
                                      "start": 620,
                                      "end": 645
                                    }
                                  ],
                                  "declare": false,
                                  "start": 616,
                                  "end": 646
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 659,
                                        "end": 666
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 667,
                                        "end": 670
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 659,
                                      "end": 670
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "one",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 671,
                                            "end": 674
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "backup",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 675,
                                            "end": 681
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 671,
                                          "end": 681
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 671,
                                        "end": 683
                                      }
                                    ],
                                    "optional": false,
                                    "start": 659,
                                    "end": 684
                                  },
                                  "directive": null,
                                  "start": 659,
                                  "end": 685
                                }
                              ],
                              "start": 572,
                              "end": 695
                            },
                            "id": null,
                            "generator": false,
                            "start": 559,
                            "end": 695
                          }
                        ],
                        "optional": false,
                        "start": 482,
                        "end": 696
                      },
                      "directive": null,
                      "start": 482,
                      "end": 697
                    }
                  ],
                  "start": 431,
                  "end": 703
                },
                "expression": false,
                "start": 428,
                "end": 703
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 422,
              "end": 703
            }
          ],
          "start": 378,
          "end": 705
        },
        "abstract": false,
        "declare": false,
        "start": 370,
        "end": 705
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 363,
      "end": 705
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 705
}
```
