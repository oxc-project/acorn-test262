__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 351,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 209,
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
        "end": 209,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 38,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 38,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 38,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 27,
                    "end": 36,
                    "argument": {
                      "type": "Literal",
                      "start": 34,
                      "end": 36,
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
            "start": 43,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 54,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 207,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 93,
                    "expression": {
                      "type": "CallExpression",
                      "start": 67,
                      "end": 92,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 78,
                        "object": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 74,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 78,
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
                          "start": 79,
                          "end": 91,
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 84,
                            "end": 91,
                            "name": "method"
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
                    "start": 102,
                    "end": 119,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 106,
                        "end": 118,
                        "id": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 111,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 107,
                            "end": 111,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 109,
                              "end": 111,
                              "typeName": {
                                "type": "Identifier",
                                "start": 109,
                                "end": 111,
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
                          "start": 114,
                          "end": 118
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 140,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 139,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 137,
                        "object": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 130,
                          "end": 137,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 149,
                    "end": 201,
                    "id": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 162,
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
                      "start": 165,
                      "end": 201,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 179,
                          "end": 191,
                          "expression": {
                            "type": "CallExpression",
                            "start": 179,
                            "end": 190,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 179,
                              "end": 188,
                              "object": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 180,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 181,
                                "end": 188,
                                "name": "method"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
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
      "start": 210,
      "end": 229,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 228,
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 226,
          "object": {
            "type": "NewExpression",
            "start": 210,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 216,
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
            "start": 219,
            "end": 226,
            "name": "method"
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 240,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 253,
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
        "start": 256,
        "end": 292,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 262,
            "end": 281,
            "expression": {
              "type": "CallExpression",
              "start": 262,
              "end": 280,
              "callee": {
                "type": "MemberExpression",
                "start": 262,
                "end": 278,
                "object": {
                  "type": "NewExpression",
                  "start": 262,
                  "end": 270,
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 268,
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
                  "start": 271,
                  "end": 278,
                  "name": "method"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
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
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 302,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 303,
        "end": 350,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 309,
            "end": 348,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 348,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 348,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 342,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 341,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 323,
                        "end": 339,
                        "object": {
                          "type": "NewExpression",
                          "start": 323,
                          "end": 331,
                          "callee": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 329,
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
                          "start": 332,
                          "end": 339,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
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
  "sourceType": "script",
  "hashbang": null
}
```
