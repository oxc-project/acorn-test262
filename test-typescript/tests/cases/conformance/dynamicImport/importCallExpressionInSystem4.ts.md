__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 111,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 70,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 28,
        "end": 70,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 36,
          "end": 70,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 42,
              "end": 68,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 47,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 47,
                "end": 68,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 50,
                  "end": 68,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 52,
                      "end": 67,
                      "argument": {
                        "type": "Literal",
                        "start": 59,
                        "end": 67,
                        "value": "I am B",
                        "raw": "\"I am B\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 110,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 79,
        "end": 110,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 91,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 94,
          "end": 110,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 96,
              "end": 108,
              "argument": {
                "type": "Literal",
                "start": 103,
                "end": 108,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "name": "backup",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 25,
          "end": 45,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 27,
              "end": 43,
              "argument": {
                "type": "Literal",
                "start": 34,
                "end": 42,
                "value": "backup",
                "raw": "\"backup\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 705,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 361,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 73,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 56,
              "name": "myModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ImportExpression",
              "start": 59,
              "end": 72,
              "source": {
                "type": "Literal",
                "start": 66,
                "end": 71,
                "value": "./0",
                "raw": "\"./0\""
              },
              "options": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 359,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 359,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 359,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 97,
                    "end": 129,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 103,
                        "end": 128,
                        "id": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 112,
                          "name": "loadAsync",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ImportExpression",
                          "start": 115,
                          "end": 128,
                          "source": {
                            "type": "Literal",
                            "start": 122,
                            "end": 127,
                            "value": "./0",
                            "raw": "\"./0\""
                          },
                          "options": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 138,
                    "end": 353,
                    "expression": {
                      "type": "CallExpression",
                      "start": 138,
                      "end": 352,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 138,
                        "end": 156,
                        "object": {
                          "type": "MemberExpression",
                          "start": 138,
                          "end": 151,
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 151,
                            "name": "myModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "name": "then",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 157,
                          "end": 213,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 157,
                              "end": 161,
                              "name": "Zero",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 165,
                            "end": 213,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 179,
                                "end": 203,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 179,
                                  "end": 202,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 179,
                                    "end": 190,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 179,
                                      "end": 186,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 187,
                                      "end": 190,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 191,
                                      "end": 201,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 191,
                                        "end": 199,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 191,
                                          "end": 195,
                                          "name": "Zero",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 196,
                                          "end": 199,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 215,
                          "end": 351,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": true,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 221,
                              "end": 224,
                              "name": "err",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 228,
                            "end": 351,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 242,
                                "end": 259,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 242,
                                  "end": 258,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 242,
                                    "end": 253,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 242,
                                      "end": 249,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 253,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 254,
                                      "end": 257,
                                      "name": "err",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 272,
                                "end": 302,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 276,
                                    "end": 301,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 276,
                                      "end": 279,
                                      "name": "one",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "start": 282,
                                      "end": 301,
                                      "argument": {
                                        "type": "ImportExpression",
                                        "start": 288,
                                        "end": 301,
                                        "source": {
                                          "type": "Literal",
                                          "start": 295,
                                          "end": 300,
                                          "value": "./1",
                                          "raw": "\"./1\""
                                        },
                                        "options": null
                                      }
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 315,
                                "end": 341,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 315,
                                  "end": 340,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 315,
                                    "end": 326,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 315,
                                      "end": 322,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 323,
                                      "end": 326,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 327,
                                      "end": 339,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 327,
                                        "end": 337,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 327,
                                          "end": 330,
                                          "name": "one",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 331,
                                          "end": 337,
                                          "name": "backup",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 363,
      "end": 705,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 370,
        "end": 705,
        "id": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 378,
          "end": 705,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 384,
              "end": 417,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 392,
                "end": 400,
                "name": "myModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ImportExpression",
                "start": 403,
                "end": 416,
                "source": {
                  "type": "Literal",
                  "start": 410,
                  "end": 415,
                  "value": "./0",
                  "raw": "\"./0\""
                },
                "options": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 422,
              "end": 703,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 422,
                "end": 428,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 428,
                "end": 703,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 431,
                  "end": 703,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 441,
                      "end": 473,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 447,
                          "end": 472,
                          "id": {
                            "type": "Identifier",
                            "start": 447,
                            "end": 456,
                            "name": "loadAsync",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "ImportExpression",
                            "start": 459,
                            "end": 472,
                            "source": {
                              "type": "Literal",
                              "start": 466,
                              "end": 471,
                              "value": "./0",
                              "raw": "\"./0\""
                            },
                            "options": null
                          },
                          "definite": false
                        }
                      ],
                      "kind": "const",
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 482,
                      "end": 697,
                      "expression": {
                        "type": "CallExpression",
                        "start": 482,
                        "end": 696,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 482,
                          "end": 500,
                          "object": {
                            "type": "MemberExpression",
                            "start": 482,
                            "end": 495,
                            "object": {
                              "type": "ThisExpression",
                              "start": 482,
                              "end": 486
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 487,
                              "end": 495,
                              "name": "myModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 496,
                            "end": 500,
                            "name": "then",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 501,
                            "end": 557,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 501,
                                "end": 505,
                                "name": "Zero",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 509,
                              "end": 557,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 523,
                                  "end": 547,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 523,
                                    "end": 546,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 523,
                                      "end": 534,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 523,
                                        "end": 530,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 531,
                                        "end": 534,
                                        "name": "log",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "start": 535,
                                        "end": 545,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 535,
                                          "end": 543,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 535,
                                            "end": 539,
                                            "name": "Zero",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 540,
                                            "end": 543,
                                            "name": "foo",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 559,
                            "end": 695,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": true,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 565,
                                "end": 568,
                                "name": "err",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 572,
                              "end": 695,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 586,
                                  "end": 603,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 586,
                                    "end": 602,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 586,
                                      "end": 597,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 586,
                                        "end": 593,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 594,
                                        "end": 597,
                                        "name": "log",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 598,
                                        "end": 601,
                                        "name": "err",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 616,
                                  "end": 646,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 620,
                                      "end": 645,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 620,
                                        "end": 623,
                                        "name": "one",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "start": 626,
                                        "end": 645,
                                        "argument": {
                                          "type": "ImportExpression",
                                          "start": 632,
                                          "end": 645,
                                          "source": {
                                            "type": "Literal",
                                            "start": 639,
                                            "end": 644,
                                            "value": "./1",
                                            "raw": "\"./1\""
                                          },
                                          "options": null
                                        }
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 659,
                                  "end": 685,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 659,
                                    "end": 684,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 659,
                                      "end": 670,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 659,
                                        "end": 666,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 667,
                                        "end": 670,
                                        "name": "log",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "start": 671,
                                        "end": 683,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 671,
                                          "end": 681,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 671,
                                            "end": 674,
                                            "name": "one",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 675,
                                            "end": 681,
                                            "name": "backup",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
