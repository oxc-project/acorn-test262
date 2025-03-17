__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 113,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 72,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 30,
        "end": 72,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 38,
          "end": 72,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 44,
              "end": 70,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 49,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 70,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 52,
                  "end": 70,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 54,
                      "end": 69,
                      "argument": {
                        "type": "Literal",
                        "start": 61,
                        "end": 69,
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
      "start": 74,
      "end": 112,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 81,
        "end": 112,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 93,
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
          "start": 96,
          "end": 112,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 98,
              "end": 110,
              "argument": {
                "type": "Literal",
                "start": 105,
                "end": 110,
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
  "end": 706,
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
      "end": 362,
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
        "end": 362,
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
            "end": 360,
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
              "end": 360,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 360,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 97,
                    "end": 130,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 103,
                        "end": 129,
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
                          "end": 129,
                          "source": {
                            "type": "Literal",
                            "start": 123,
                            "end": 128,
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
                    "start": 139,
                    "end": 354,
                    "expression": {
                      "type": "CallExpression",
                      "start": 139,
                      "end": 353,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 139,
                        "end": 157,
                        "object": {
                          "type": "MemberExpression",
                          "start": 139,
                          "end": 152,
                          "object": {
                            "type": "ThisExpression",
                            "start": 139,
                            "end": 143
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 152,
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
                          "start": 153,
                          "end": 157,
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
                          "start": 158,
                          "end": 214,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 158,
                              "end": 162,
                              "name": "Zero",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 166,
                            "end": 214,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 180,
                                "end": 204,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 180,
                                  "end": 203,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 180,
                                    "end": 191,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 187,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 188,
                                      "end": 191,
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
                                      "start": 192,
                                      "end": 202,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 192,
                                        "end": 200,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 192,
                                          "end": 196,
                                          "name": "Zero",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 197,
                                          "end": 200,
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
                          "start": 216,
                          "end": 352,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": true,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 222,
                              "end": 225,
                              "name": "err",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 229,
                            "end": 352,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 243,
                                "end": 260,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 243,
                                  "end": 259,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 243,
                                    "end": 254,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 243,
                                      "end": 250,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 251,
                                      "end": 254,
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
                                      "start": 255,
                                      "end": 258,
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
                                "start": 273,
                                "end": 303,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 277,
                                    "end": 302,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 277,
                                      "end": 280,
                                      "name": "one",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "start": 283,
                                      "end": 302,
                                      "argument": {
                                        "type": "ImportExpression",
                                        "start": 289,
                                        "end": 302,
                                        "source": {
                                          "type": "Literal",
                                          "start": 296,
                                          "end": 301,
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
                                "start": 316,
                                "end": 342,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 316,
                                  "end": 341,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 316,
                                    "end": 327,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 316,
                                      "end": 323,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 324,
                                      "end": 327,
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
                                      "start": 328,
                                      "end": 340,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 328,
                                        "end": 338,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 328,
                                          "end": 331,
                                          "name": "one",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 332,
                                          "end": 338,
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
      "start": 364,
      "end": 706,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 371,
        "end": 706,
        "id": {
          "type": "Identifier",
          "start": 377,
          "end": 378,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 706,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 385,
              "end": 418,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 393,
                "end": 401,
                "name": "myModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ImportExpression",
                "start": 404,
                "end": 417,
                "source": {
                  "type": "Literal",
                  "start": 411,
                  "end": 416,
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
              "start": 423,
              "end": 704,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 423,
                "end": 429,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 429,
                "end": 704,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 432,
                  "end": 704,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 442,
                      "end": 474,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 448,
                          "end": 473,
                          "id": {
                            "type": "Identifier",
                            "start": 448,
                            "end": 457,
                            "name": "loadAsync",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "ImportExpression",
                            "start": 460,
                            "end": 473,
                            "source": {
                              "type": "Literal",
                              "start": 467,
                              "end": 472,
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
                      "start": 483,
                      "end": 698,
                      "expression": {
                        "type": "CallExpression",
                        "start": 483,
                        "end": 697,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 483,
                          "end": 501,
                          "object": {
                            "type": "MemberExpression",
                            "start": 483,
                            "end": 496,
                            "object": {
                              "type": "ThisExpression",
                              "start": 483,
                              "end": 487
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 496,
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
                            "start": 497,
                            "end": 501,
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
                            "start": 502,
                            "end": 558,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 502,
                                "end": 506,
                                "name": "Zero",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 510,
                              "end": 558,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 524,
                                  "end": 548,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 524,
                                    "end": 547,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 524,
                                      "end": 535,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 524,
                                        "end": 531,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 532,
                                        "end": 535,
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
                                        "start": 536,
                                        "end": 546,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 536,
                                          "end": 544,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 536,
                                            "end": 540,
                                            "name": "Zero",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 541,
                                            "end": 544,
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
                            "start": 560,
                            "end": 696,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": true,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 566,
                                "end": 569,
                                "name": "err",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 573,
                              "end": 696,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 587,
                                  "end": 604,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 587,
                                    "end": 603,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 587,
                                      "end": 598,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 587,
                                        "end": 594,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 595,
                                        "end": 598,
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
                                        "start": 599,
                                        "end": 602,
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
                                  "start": 617,
                                  "end": 647,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 621,
                                      "end": 646,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 621,
                                        "end": 624,
                                        "name": "one",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "start": 627,
                                        "end": 646,
                                        "argument": {
                                          "type": "ImportExpression",
                                          "start": 633,
                                          "end": 646,
                                          "source": {
                                            "type": "Literal",
                                            "start": 640,
                                            "end": 645,
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
                                  "start": 660,
                                  "end": 686,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 660,
                                    "end": 685,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 660,
                                      "end": 671,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 660,
                                        "end": 667,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 668,
                                        "end": 671,
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
                                        "start": 672,
                                        "end": 684,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 672,
                                          "end": 682,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 672,
                                            "end": 675,
                                            "name": "one",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 676,
                                            "end": 682,
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
