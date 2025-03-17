__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 21,
        "end": 63,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 29,
          "end": 63,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 35,
              "end": 61,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 40,
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
                "start": 40,
                "end": 61,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 61,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 45,
                      "end": 60,
                      "argument": {
                        "type": "Literal",
                        "start": 52,
                        "end": 60,
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
          "start": 27,
          "end": 28,
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
      "start": 65,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 72,
        "end": 103,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 87,
          "end": 103,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 89,
              "end": 101,
              "argument": {
                "type": "Literal",
                "start": 96,
                "end": 101,
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
          "start": 81,
          "end": 84,
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
  "end": 361,
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
      "end": 361,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 361,
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
            "end": 359,
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
              "end": 359,
              "async": false,
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
                          "end": 128,
                          "options": null,
                          "source": {
                            "type": "Literal",
                            "start": 122,
                            "end": 127,
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
                    "start": 138,
                    "end": 353,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 138,
                      "end": 352,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 157,
                          "end": 213,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 165,
                            "end": 213,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 179,
                                "end": 203,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 179,
                                  "end": 202,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 191,
                                      "end": 201,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 191,
                                        "end": 199,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 191,
                                          "end": 195,
                                          "decorators": [],
                                          "name": "Zero",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 196,
                                          "end": 199,
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
                                    "start": 179,
                                    "end": 190,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 179,
                                      "end": 186,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 187,
                                      "end": 190,
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
                              "start": 157,
                              "end": 161,
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
                          "start": 215,
                          "end": 351,
                          "async": true,
                          "body": {
                            "type": "BlockStatement",
                            "start": 228,
                            "end": 351,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 242,
                                "end": 259,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 242,
                                  "end": 258,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 254,
                                      "end": 257,
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 242,
                                    "end": 253,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 242,
                                      "end": 249,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 253,
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
                                "start": 272,
                                "end": 302,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 276,
                                    "end": 301,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 276,
                                      "end": 279,
                                      "decorators": [],
                                      "name": "one",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "start": 282,
                                      "end": 301,
                                      "argument": {
                                        "type": "ImportExpression",
                                        "start": 288,
                                        "end": 301,
                                        "options": null,
                                        "source": {
                                          "type": "Literal",
                                          "start": 295,
                                          "end": 300,
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
                                "start": 315,
                                "end": 341,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 315,
                                  "end": 340,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 327,
                                      "end": 339,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 327,
                                        "end": 337,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 327,
                                          "end": 330,
                                          "decorators": [],
                                          "name": "one",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 331,
                                          "end": 337,
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
                                    "start": 315,
                                    "end": 326,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 315,
                                      "end": 322,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 323,
                                      "end": 326,
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
                              "start": 221,
                              "end": 224,
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
                        "start": 138,
                        "end": 156,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 138,
                          "end": 151,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 151,
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
