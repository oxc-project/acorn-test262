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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 21,
        "end": 63,
        "id": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 29,
          "end": 63,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 35,
              "end": 61,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 40,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 61,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
      "start": 65,
      "end": 103,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 72,
        "end": 103,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 84,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
