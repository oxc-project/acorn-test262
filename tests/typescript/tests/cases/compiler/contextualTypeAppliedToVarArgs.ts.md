__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "delegate",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            },
            "start": 26,
            "end": 31
          },
          "start": 18,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "method",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 49
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      },
                      "start": 51,
                      "end": 56
                    },
                    "start": 49,
                    "end": 56
                  },
                  "value": null,
                  "start": 42,
                  "end": 56
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 61,
                  "end": 64
                },
                "start": 58,
                "end": 64
              },
              "start": 41,
              "end": 64
            },
            "start": 39,
            "end": 64
          },
          "start": 33,
          "end": 64
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 73,
              "end": 76
            },
            "start": 71,
            "end": 76
          },
          "start": 66,
          "end": 76
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 89,
                    "end": 92
                  },
                  "start": 89,
                  "end": 94
                },
                "start": 87,
                "end": 94
              },
              "value": null,
              "start": 80,
              "end": 94
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 99,
              "end": 102
            },
            "start": 96,
            "end": 102
          },
          "start": 79,
          "end": 102
        },
        "start": 77,
        "end": 102
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                "body": [],
                "start": 128,
                "end": 131
              },
              "expression": false,
              "start": 116,
              "end": 131
            },
            "start": 109,
            "end": 132
          }
        ],
        "start": 103,
        "end": 134
      },
      "expression": false,
      "start": 0,
      "end": 134
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 145
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
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "delegate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 177
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 178,
                          "end": 182
                        },
                        {
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
                              "name": "source",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 194,
                              "end": 200
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 202,
                              "end": 207
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 235,
                                      "end": 236
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "source",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 239,
                                        "end": 245
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 246,
                                        "end": 250
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 239,
                                      "end": 250
                                    },
                                    "definite": false,
                                    "start": 235,
                                    "end": 250
                                  }
                                ],
                                "declare": false,
                                "start": 231,
                                "end": 251
                              },
                              {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 268,
                                      "end": 269
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "args2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 272,
                                        "end": 277
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 278,
                                        "end": 282
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 272,
                                      "end": 282
                                    },
                                    "definite": false,
                                    "start": 268,
                                    "end": 282
                                  }
                                ],
                                "declare": false,
                                "start": 264,
                                "end": 283
                              }
                            ],
                            "start": 217,
                            "end": 293
                          },
                          "expression": false,
                          "start": 184,
                          "end": 293
                        }
                      ],
                      "optional": false,
                      "start": 169,
                      "end": 295
                    },
                    "directive": null,
                    "start": 169,
                    "end": 296
                  }
                ],
                "start": 159,
                "end": 302
              },
              "expression": false,
              "start": 156,
              "end": 302
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 153,
            "end": 302
          }
        ],
        "start": 145,
        "end": 304
      },
      "abstract": false,
      "declare": false,
      "start": 136,
      "end": 304
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 304
}
```
