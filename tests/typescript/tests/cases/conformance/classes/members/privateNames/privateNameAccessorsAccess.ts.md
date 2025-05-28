__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 236,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 24,
              "name": "prop"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 41,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 55,
              "name": "prop"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 74,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 69,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 63,
                      "end": 69
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 74,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 91,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 234,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 115,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 137,
                    "end": 154,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 141,
                        "end": 153,
                        "id": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 146,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
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
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "definite": false
                      }
                    ],
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 165,
                        "end": 170,
                        "name": "prop"
                      },
                      "optional": false,
                      "computed": false
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 212,
                              "end": 217,
                              "name": "prop"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 246,
          "end": 251,
          "name": "prop"
        },
        "optional": false,
        "computed": false
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 294,
                "end": 299,
                "name": "prop"
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 365,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 321,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 365,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 363,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 363,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 351,
                        "end": 356,
                        "name": "prop"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
