__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 49,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 47,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 26,
                "end": 47,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 29,
                  "end": 47,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 31,
                      "end": 46,
                      "argument": {
                        "type": "Literal",
                        "start": 38,
                        "end": 46,
                        "raw": "\"I am B\"",
                        "value": "I am B"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 58,
        "end": 89,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 73,
          "end": 89,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 75,
              "end": 87,
              "argument": {
                "type": "Literal",
                "start": 82,
                "end": 87,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "async": false,
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
                "raw": "\"backup\"",
                "value": "backup"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 362,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 362,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 73,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 56,
              "decorators": [],
              "name": "myModule",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ImportExpression",
              "start": 59,
              "end": 72,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 66,
                "end": 71,
                "raw": "\"./0\"",
                "value": "./0"
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 360,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 360,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 112,
                          "decorators": [],
                          "name": "loadAsync",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ImportExpression",
                          "start": 115,
                          "end": 129,
                          "options": null,
                          "source": {
                            "type": "Literal",
                            "start": 123,
                            "end": 128,
                            "raw": "\"./0\"",
                            "value": "./0"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 139,
                    "end": 354,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 139,
                      "end": 353,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 158,
                          "end": 214,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 166,
                            "end": 214,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 180,
                                "end": 204,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 180,
                                  "end": 203,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 192,
                                      "end": 202,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 192,
                                        "end": 200,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 192,
                                          "end": 196,
                                          "decorators": [],
                                          "name": "Zero",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 197,
                                          "end": 200,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 180,
                                    "end": 191,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 187,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 188,
                                      "end": 191,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 158,
                              "end": 162,
                              "decorators": [],
                              "name": "Zero",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 216,
                          "end": 352,
                          "async": true,
                          "body": {
                            "type": "BlockStatement",
                            "start": 229,
                            "end": 352,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 243,
                                "end": 260,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 243,
                                  "end": 259,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 255,
                                      "end": 258,
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 243,
                                    "end": 254,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 243,
                                      "end": 250,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 251,
                                      "end": 254,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 277,
                                      "end": 280,
                                      "decorators": [],
                                      "name": "one",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "start": 283,
                                      "end": 302,
                                      "argument": {
                                        "type": "ImportExpression",
                                        "start": 289,
                                        "end": 302,
                                        "options": null,
                                        "source": {
                                          "type": "Literal",
                                          "start": 296,
                                          "end": 301,
                                          "raw": "\"./1\"",
                                          "value": "./1"
                                        }
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "let"
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 316,
                                "end": 342,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 316,
                                  "end": 341,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 328,
                                      "end": 340,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 328,
                                        "end": 338,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 328,
                                          "end": 331,
                                          "decorators": [],
                                          "name": "one",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 332,
                                          "end": 338,
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 316,
                                    "end": 327,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 316,
                                      "end": 323,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 324,
                                      "end": 327,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 222,
                              "end": 225,
                              "decorators": [],
                              "name": "err",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 139,
                        "end": 157,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 139,
                          "end": 152,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 139,
                            "end": 143
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 152,
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 157,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 364,
      "end": 706,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 371,
        "end": 706,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 706,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 385,
              "end": 418,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 393,
                "end": 401,
                "decorators": [],
                "name": "myModule",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ImportExpression",
                "start": 404,
                "end": 417,
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 411,
                  "end": 416,
                  "raw": "\"./0\"",
                  "value": "./0"
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 423,
              "end": 704,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 423,
                "end": 429,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 429,
                "end": 704,
                "async": false,
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
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 448,
                            "end": 457,
                            "decorators": [],
                            "name": "loadAsync",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ImportExpression",
                            "start": 460,
                            "end": 473,
                            "options": null,
                            "source": {
                              "type": "Literal",
                              "start": 467,
                              "end": 472,
                              "raw": "\"./0\"",
                              "value": "./0"
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 483,
                      "end": 698,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 483,
                        "end": 697,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 502,
                            "end": 558,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 510,
                              "end": 558,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 524,
                                  "end": 548,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 524,
                                    "end": 547,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "start": 536,
                                        "end": 546,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 536,
                                          "end": 544,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 536,
                                            "end": 540,
                                            "decorators": [],
                                            "name": "Zero",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 541,
                                            "end": 544,
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 524,
                                      "end": 535,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 524,
                                        "end": 531,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 532,
                                        "end": 535,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 502,
                                "end": 506,
                                "decorators": [],
                                "name": "Zero",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 560,
                            "end": 696,
                            "async": true,
                            "body": {
                              "type": "BlockStatement",
                              "start": 573,
                              "end": 696,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 587,
                                  "end": 604,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 587,
                                    "end": 603,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 599,
                                        "end": 602,
                                        "decorators": [],
                                        "name": "err",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 587,
                                      "end": 598,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 587,
                                        "end": 594,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 595,
                                        "end": 598,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
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
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 621,
                                        "end": 624,
                                        "decorators": [],
                                        "name": "one",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "start": 627,
                                        "end": 646,
                                        "argument": {
                                          "type": "ImportExpression",
                                          "start": 633,
                                          "end": 646,
                                          "options": null,
                                          "source": {
                                            "type": "Literal",
                                            "start": 640,
                                            "end": 645,
                                            "raw": "\"./1\"",
                                            "value": "./1"
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 660,
                                  "end": 686,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 660,
                                    "end": 685,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "start": 672,
                                        "end": 684,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 672,
                                          "end": 682,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 672,
                                            "end": 675,
                                            "decorators": [],
                                            "name": "one",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 676,
                                            "end": 682,
                                            "decorators": [],
                                            "name": "backup",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 660,
                                      "end": 671,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 660,
                                        "end": 667,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 668,
                                        "end": 671,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 566,
                                "end": 569,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 483,
                          "end": 501,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 483,
                            "end": 496,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 483,
                              "end": 487
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 496,
                              "decorators": [],
                              "name": "myModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 497,
                            "end": 501,
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 377,
          "end": 378,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
