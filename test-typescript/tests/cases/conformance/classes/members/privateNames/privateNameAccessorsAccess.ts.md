__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 24,
              "name": "prop"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 41,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 29,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 36,
                      "end": 38,
                      "value": "",
                      "raw": "\"\""
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
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 55,
              "name": "prop"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 74,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 69,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 63,
                      "end": 69
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 74,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 234,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 91,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 234,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 234,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 104,
                    "end": 128,
                    "expression": {
                      "type": "CallExpression",
                      "start": 104,
                      "end": 127,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 104,
                        "end": 115,
                        "object": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 111,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 115,
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
                          "type": "MemberExpression",
                          "start": 116,
                          "end": 126,
                          "object": {
                            "type": "ThisExpression",
                            "start": 116,
                            "end": 120
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 121,
                            "end": 126,
                            "name": "prop"
                          },
                          "computed": false,
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
                    "start": 137,
                    "end": 154,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 141,
                        "end": 153,
                        "id": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 146,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 142,
                            "end": 146,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 144,
                              "end": 146,
                              "typeName": {
                                "type": "Identifier",
                                "start": 144,
                                "end": 146,
                                "name": "A2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 171,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 163,
                      "end": 170,
                      "object": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 165,
                        "end": 170,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 180,
                    "end": 228,
                    "id": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 193,
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
                      "start": 196,
                      "end": 228,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 210,
                          "end": 218,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 210,
                            "end": 217,
                            "object": {
                              "type": "Identifier",
                              "start": 210,
                              "end": 211,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 212,
                              "end": 217,
                              "name": "prop"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
      "type": "ExpressionStatement",
      "start": 237,
      "end": 252,
      "expression": {
        "type": "MemberExpression",
        "start": 237,
        "end": 251,
        "object": {
          "type": "NewExpression",
          "start": 237,
          "end": 245,
          "callee": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "name": "A2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 246,
          "end": 251,
          "name": "prop"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 276,
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
        "start": 279,
        "end": 311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 285,
            "end": 300,
            "expression": {
              "type": "MemberExpression",
              "start": 285,
              "end": 299,
              "object": {
                "type": "NewExpression",
                "start": 285,
                "end": 293,
                "callee": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 291,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 294,
                "end": 299,
                "name": "prop"
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 321,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 365,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 363,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 363,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 363,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 357,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 342,
                      "end": 356,
                      "object": {
                        "type": "NewExpression",
                        "start": 342,
                        "end": 350,
                        "callee": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 348,
                          "name": "A2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 351,
                        "end": 356,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
