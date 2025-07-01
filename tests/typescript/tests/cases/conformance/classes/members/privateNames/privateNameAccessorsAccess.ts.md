__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 19,
              "end": 24
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 36,
                      "end": 38
                    },
                    "start": 29,
                    "end": 39
                  }
                ],
                "start": 27,
                "end": 41
              },
              "expression": false,
              "start": 24,
              "end": 41
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 50,
              "end": 55
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 63,
                      "end": 69
                    },
                    "start": 61,
                    "end": 69
                  },
                  "start": 56,
                  "end": 69
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 71,
                "end": 74
              },
              "expression": false,
              "start": 55,
              "end": 74
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 74
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 91
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
                          "start": 104,
                          "end": 111
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 115
                        },
                        "optional": false,
                        "computed": false,
                        "start": 104,
                        "end": 115
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 116,
                            "end": 120
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "prop",
                            "start": 121,
                            "end": 126
                          },
                          "optional": false,
                          "computed": false,
                          "start": 116,
                          "end": 126
                        }
                      ],
                      "optional": false,
                      "start": 104,
                      "end": 127
                    },
                    "directive": null,
                    "start": 104,
                    "end": 128
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 144,
                                "end": 146
                              },
                              "typeArguments": null,
                              "start": 144,
                              "end": 146
                            },
                            "start": 142,
                            "end": 146
                          },
                          "start": 141,
                          "end": 146
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "definite": false,
                        "start": 141,
                        "end": 153
                      }
                    ],
                    "declare": false,
                    "start": 137,
                    "end": 154
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 165,
                        "end": 170
                      },
                      "optional": false,
                      "computed": false,
                      "start": 163,
                      "end": 170
                    },
                    "directive": null,
                    "start": 163,
                    "end": 171
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 193
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 210,
                              "end": 211
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "prop",
                              "start": 212,
                              "end": 217
                            },
                            "optional": false,
                            "computed": false,
                            "start": 210,
                            "end": 217
                          },
                          "directive": null,
                          "start": 210,
                          "end": 218
                        }
                      ],
                      "start": 196,
                      "end": 228
                    },
                    "expression": false,
                    "start": 180,
                    "end": 228
                  }
                ],
                "start": 94,
                "end": 234
              },
              "expression": false,
              "start": 91,
              "end": 234
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 234
          }
        ],
        "start": 9,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "typeArguments": null,
          "arguments": [],
          "start": 237,
          "end": 245
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "prop",
          "start": 246,
          "end": 251
        },
        "optional": false,
        "computed": false,
        "start": 237,
        "end": 251
      },
      "directive": null,
      "start": 237,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 276
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 291
                },
                "typeArguments": null,
                "arguments": [],
                "start": 285,
                "end": 293
              },
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "start": 294,
                "end": 299
              },
              "optional": false,
              "computed": false,
              "start": 285,
              "end": 299
            },
            "directive": null,
            "start": 285,
            "end": 300
          }
        ],
        "start": 279,
        "end": 311
      },
      "expression": false,
      "start": 263,
      "end": 311
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 321
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 348
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 342,
                        "end": 350
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 351,
                        "end": 356
                      },
                      "optional": false,
                      "computed": false,
                      "start": 342,
                      "end": 356
                    },
                    "directive": null,
                    "start": 342,
                    "end": 357
                  }
                ],
                "start": 332,
                "end": 363
              },
              "expression": false,
              "start": 329,
              "end": 363
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 328,
            "end": 363
          }
        ],
        "start": 322,
        "end": 365
      },
      "abstract": false,
      "declare": false,
      "start": 313,
      "end": 365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
}
```
