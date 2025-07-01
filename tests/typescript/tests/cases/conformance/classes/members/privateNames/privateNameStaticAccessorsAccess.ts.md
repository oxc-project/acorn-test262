__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 18
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
              "start": 36,
              "end": 41
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
                      "start": 53,
                      "end": 55
                    },
                    "start": 46,
                    "end": 56
                  }
                ],
                "start": 44,
                "end": 58
              },
              "expression": false,
              "start": 41,
              "end": 58
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 58
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 74,
              "end": 79
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
                      "start": 87,
                      "end": 93
                    },
                    "start": 85,
                    "end": 93
                  },
                  "start": 80,
                  "end": 93
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 95,
                "end": 98
              },
              "expression": false,
              "start": 79,
              "end": 98
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 63,
            "end": 98
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
              "start": 104,
              "end": 115
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
                          "start": 128,
                          "end": 135
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 128,
                        "end": 139
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 140,
                            "end": 142
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "prop",
                            "start": 143,
                            "end": 148
                          },
                          "optional": false,
                          "computed": false,
                          "start": 140,
                          "end": 148
                        }
                      ],
                      "optional": false,
                      "start": 128,
                      "end": 149
                    },
                    "directive": null,
                    "start": 128,
                    "end": 150
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
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 173,
                                "end": 175
                              },
                              "typeArguments": null,
                              "start": 166,
                              "end": 175
                            },
                            "start": 164,
                            "end": 175
                          },
                          "start": 163,
                          "end": 175
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 178,
                          "end": 180
                        },
                        "definite": false,
                        "start": 163,
                        "end": 180
                      }
                    ],
                    "declare": false,
                    "start": 159,
                    "end": 181
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
                        "start": 190,
                        "end": 191
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 192,
                        "end": 197
                      },
                      "optional": false,
                      "computed": false,
                      "start": 190,
                      "end": 197
                    },
                    "directive": null,
                    "start": 190,
                    "end": 198
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 220
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
                              "start": 237,
                              "end": 238
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "prop",
                              "start": 239,
                              "end": 244
                            },
                            "optional": false,
                            "computed": false,
                            "start": 237,
                            "end": 244
                          },
                          "directive": null,
                          "start": 237,
                          "end": 245
                        }
                      ],
                      "start": 223,
                      "end": 255
                    },
                    "expression": false,
                    "start": 207,
                    "end": 255
                  }
                ],
                "start": 118,
                "end": 261
              },
              "expression": false,
              "start": 115,
              "end": 261
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 104,
            "end": 261
          }
        ],
        "start": 19,
        "end": 263
      },
      "abstract": false,
      "declare": false,
      "start": 10,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 267
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "prop",
          "start": 268,
          "end": 273
        },
        "optional": false,
        "computed": false,
        "start": 265,
        "end": 273
      },
      "directive": null,
      "start": 265,
      "end": 274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 298
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
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 309
              },
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "start": 310,
                "end": 315
              },
              "optional": false,
              "computed": false,
              "start": 307,
              "end": 315
            },
            "directive": null,
            "start": 307,
            "end": 316
          }
        ],
        "start": 301,
        "end": 327
      },
      "expression": false,
      "start": 285,
      "end": 327
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
        "start": 335,
        "end": 337
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
              "start": 344,
              "end": 345
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 358,
                        "end": 360
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 361,
                        "end": 366
                      },
                      "optional": false,
                      "computed": false,
                      "start": 358,
                      "end": 366
                    },
                    "directive": null,
                    "start": 358,
                    "end": 367
                  }
                ],
                "start": 348,
                "end": 373
              },
              "expression": false,
              "start": 345,
              "end": 373
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 373
          }
        ],
        "start": 338,
        "end": 375
      },
      "abstract": false,
      "declare": false,
      "start": 329,
      "end": 375
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 375
}
```
