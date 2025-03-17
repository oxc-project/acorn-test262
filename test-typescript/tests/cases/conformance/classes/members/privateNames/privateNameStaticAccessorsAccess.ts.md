__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 376,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 18,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 263,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 58,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 41,
              "name": "prop"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 58,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "start": 63,
            "end": 98,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 74,
              "end": 79,
              "name": "prop"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 98,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 80,
                  "end": 93,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 87,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 98,
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
            "start": 104,
            "end": 261,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 261,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 261,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 150,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 149,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 139,
                        "object": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 135,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 139,
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
                          "start": 140,
                          "end": 148,
                          "object": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 142,
                            "name": "A2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 143,
                            "end": 148,
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
                    "start": 159,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 163,
                        "end": 180,
                        "id": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 175,
                          "name": "a",
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
                          "type": "Identifier",
                          "start": 178,
                          "end": 180,
                          "name": "A2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 190,
                    "end": 198,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 190,
                      "end": 197,
                      "object": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 192,
                        "end": 197,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 207,
                    "end": 255,
                    "id": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
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
                      "start": 223,
                      "end": 255,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 237,
                          "end": 245,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 237,
                            "end": 244,
                            "object": {
                              "type": "Identifier",
                              "start": 237,
                              "end": 238,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 239,
                              "end": 244,
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
      "start": 265,
      "end": 274,
      "expression": {
        "type": "MemberExpression",
        "start": 265,
        "end": 273,
        "object": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "name": "A2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 268,
          "end": 273,
          "name": "prop"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 298,
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
        "start": 301,
        "end": 327,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 316,
            "expression": {
              "type": "MemberExpression",
              "start": 307,
              "end": 315,
              "object": {
                "type": "Identifier",
                "start": 307,
                "end": 309,
                "name": "A2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 310,
                "end": 315,
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
      "start": 329,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 337,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 338,
        "end": 375,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 373,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 373,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 358,
                    "end": 367,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 358,
                      "end": 366,
                      "object": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 360,
                        "name": "A2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 361,
                        "end": 366,
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
