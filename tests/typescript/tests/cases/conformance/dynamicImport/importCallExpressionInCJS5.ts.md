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
                            "start": 123,
                            "end": 128
                          },
                          "options": null,
                          "phase": null,
                          "start": 115,
                          "end": 129
                        },
                        "definite": false,
                        "start": 103,
                        "end": 129
                      }
                    ],
                    "declare": false,
                    "start": 97,
                    "end": 130
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
                            "start": 139,
                            "end": 143
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 152
                          },
                          "optional": false,
                          "computed": false,
                          "start": 139,
                          "end": 152
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 153,
                          "end": 157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 139,
                        "end": 157
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
                              "start": 158,
                              "end": 162
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
                                      "start": 180,
                                      "end": 187
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 188,
                                      "end": 191
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 180,
                                    "end": 191
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
                                          "start": 192,
                                          "end": 196
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 197,
                                          "end": 200
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 192,
                                        "end": 200
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 192,
                                      "end": 202
                                    }
                                  ],
                                  "optional": false,
                                  "start": 180,
                                  "end": 203
                                },
                                "directive": null,
                                "start": 180,
                                "end": 204
                              }
                            ],
                            "start": 166,
                            "end": 214
                          },
                          "id": null,
                          "generator": false,
                          "start": 158,
                          "end": 214
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
                              "start": 222,
                              "end": 225
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
                                      "start": 243,
                                      "end": 250
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 251,
                                      "end": 254
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 243,
                                    "end": 254
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 255,
                                      "end": 258
                                    }
                                  ],
                                  "optional": false,
                                  "start": 243,
                                  "end": 259
                                },
                                "directive": null,
                                "start": 243,
                                "end": 260
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
                                      "start": 277,
                                      "end": 280
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "ImportExpression",
                                        "source": {
                                          "type": "Literal",
                                          "value": "./1",
                                          "raw": "\"./1\"",
                                          "start": 296,
                                          "end": 301
                                        },
                                        "options": null,
                                        "phase": null,
                                        "start": 289,
                                        "end": 302
                                      },
                                      "start": 283,
                                      "end": 302
                                    },
                                    "definite": false,
                                    "start": 277,
                                    "end": 302
                                  }
                                ],
                                "declare": false,
                                "start": 273,
                                "end": 303
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
                                      "start": 316,
                                      "end": 323
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 324,
                                      "end": 327
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 316,
                                    "end": 327
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
                                          "start": 328,
                                          "end": 331
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 332,
                                          "end": 338
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 328,
                                        "end": 338
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 328,
                                      "end": 340
                                    }
                                  ],
                                  "optional": false,
                                  "start": 316,
                                  "end": 341
                                },
                                "directive": null,
                                "start": 316,
                                "end": 342
                              }
                            ],
                            "start": 229,
                            "end": 352
                          },
                          "id": null,
                          "generator": false,
                          "start": 216,
                          "end": 352
                        }
                      ],
                      "optional": false,
                      "start": 139,
                      "end": 353
                    },
                    "directive": null,
                    "start": 139,
                    "end": 354
                  }
                ],
                "start": 87,
                "end": 360
              },
              "expression": false,
              "start": 84,
              "end": 360
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 360
          }
        ],
        "start": 34,
        "end": 362
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 362
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
          "start": 377,
          "end": 378
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
                "start": 393,
                "end": 401
              },
              "typeAnnotation": null,
              "value": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./0",
                  "raw": "\"./0\"",
                  "start": 411,
                  "end": 416
                },
                "options": null,
                "phase": null,
                "start": 404,
                "end": 417
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 385,
              "end": 418
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
                "start": 423,
                "end": 429
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
                            "start": 448,
                            "end": 457
                          },
                          "init": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./0",
                              "raw": "\"./0\"",
                              "start": 467,
                              "end": 472
                            },
                            "options": null,
                            "phase": null,
                            "start": 460,
                            "end": 473
                          },
                          "definite": false,
                          "start": 448,
                          "end": 473
                        }
                      ],
                      "declare": false,
                      "start": 442,
                      "end": 474
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
                              "start": 483,
                              "end": 487
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "myModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 488,
                              "end": 496
                            },
                            "optional": false,
                            "computed": false,
                            "start": 483,
                            "end": 496
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 497,
                            "end": 501
                          },
                          "optional": false,
                          "computed": false,
                          "start": 483,
                          "end": 501
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
                                "start": 502,
                                "end": 506
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
                                        "start": 524,
                                        "end": 531
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 532,
                                        "end": 535
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 524,
                                      "end": 535
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
                                            "start": 536,
                                            "end": 540
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 541,
                                            "end": 544
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 536,
                                          "end": 544
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 536,
                                        "end": 546
                                      }
                                    ],
                                    "optional": false,
                                    "start": 524,
                                    "end": 547
                                  },
                                  "directive": null,
                                  "start": 524,
                                  "end": 548
                                }
                              ],
                              "start": 510,
                              "end": 558
                            },
                            "id": null,
                            "generator": false,
                            "start": 502,
                            "end": 558
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
                                "start": 566,
                                "end": 569
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
                                        "start": 587,
                                        "end": 594
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 595,
                                        "end": 598
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 587,
                                      "end": 598
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "err",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 599,
                                        "end": 602
                                      }
                                    ],
                                    "optional": false,
                                    "start": 587,
                                    "end": 603
                                  },
                                  "directive": null,
                                  "start": 587,
                                  "end": 604
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
                                        "start": 621,
                                        "end": 624
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "ImportExpression",
                                          "source": {
                                            "type": "Literal",
                                            "value": "./1",
                                            "raw": "\"./1\"",
                                            "start": 640,
                                            "end": 645
                                          },
                                          "options": null,
                                          "phase": null,
                                          "start": 633,
                                          "end": 646
                                        },
                                        "start": 627,
                                        "end": 646
                                      },
                                      "definite": false,
                                      "start": 621,
                                      "end": 646
                                    }
                                  ],
                                  "declare": false,
                                  "start": 617,
                                  "end": 647
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
                                        "start": 660,
                                        "end": 667
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 668,
                                        "end": 671
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 660,
                                      "end": 671
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
                                            "start": 672,
                                            "end": 675
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "backup",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 676,
                                            "end": 682
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 672,
                                          "end": 682
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 672,
                                        "end": 684
                                      }
                                    ],
                                    "optional": false,
                                    "start": 660,
                                    "end": 685
                                  },
                                  "directive": null,
                                  "start": 660,
                                  "end": 686
                                }
                              ],
                              "start": 573,
                              "end": 696
                            },
                            "id": null,
                            "generator": false,
                            "start": 560,
                            "end": 696
                          }
                        ],
                        "optional": false,
                        "start": 483,
                        "end": 697
                      },
                      "directive": null,
                      "start": 483,
                      "end": 698
                    }
                  ],
                  "start": 432,
                  "end": 704
                },
                "expression": false,
                "start": 429,
                "end": 704
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 423,
              "end": 704
            }
          ],
          "start": 379,
          "end": 706
        },
        "abstract": false,
        "declare": false,
        "start": 371,
        "end": 706
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 364,
      "end": 706
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 706
}
```
