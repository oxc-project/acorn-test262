__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 375,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 263,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 263,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 41,
              "name": "prop"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 58,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 58,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 56,
                    "argument": {
                      "type": "Literal",
                      "start": 53,
                      "end": 55,
                      "raw": "\"\"",
                      "value": ""
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
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 74,
              "end": 79,
              "name": "prop"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 98,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 80,
                  "end": 93,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 87,
                      "end": 93
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 261,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 261,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 261,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 150,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 149,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 140,
                          "end": 148,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 142,
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 143,
                            "end": 148,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 135,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 139,
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
                    "start": 159,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 163,
                        "end": 180,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 175,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 164,
                            "end": 175,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 166,
                              "end": 175,
                              "exprName": {
                                "type": "Identifier",
                                "start": 173,
                                "end": 175,
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 180,
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 190,
                    "end": 198,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 190,
                      "end": 197,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 192,
                        "end": 197,
                        "name": "prop"
                      }
                    }
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 207,
                    "end": 255,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 223,
                      "end": 255,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 237,
                          "end": 245,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 237,
                            "end": 244,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 237,
                              "end": 238,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 239,
                              "end": 244,
                              "name": "prop"
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
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
        "start": 16,
        "end": 18,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 274,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 265,
        "end": 273,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 268,
          "end": 273,
          "name": "prop"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 327,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 327,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 316,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 307,
              "end": 315,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 307,
                "end": 309,
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 310,
                "end": 315,
                "name": "prop"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 298,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 329,
      "end": 375,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 338,
        "end": 375,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 373,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 373,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 373,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 358,
                    "end": 367,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 358,
                      "end": 366,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 360,
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 361,
                        "end": 366,
                        "name": "prop"
                      }
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
        "start": 335,
        "end": 337,
        "decorators": [],
        "name": "B2",
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
