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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "x",
              "start": 21,
              "end": 23
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
                      "value": 1,
                      "raw": "1",
                      "start": 35,
                      "end": 36
                    },
                    "start": 28,
                    "end": 37
                  }
                ],
                "start": 26,
                "end": 39
              },
              "expression": false,
              "start": 23,
              "end": 39
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 39
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
              "start": 45,
              "end": 56
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 82
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
                            "name": "x",
                            "start": 101,
                            "end": 103
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
                                    "value": 1,
                                    "raw": "1",
                                    "start": 115,
                                    "end": 116
                                  },
                                  "start": 108,
                                  "end": 117
                                }
                              ],
                              "start": 106,
                              "end": 119
                            },
                            "expression": false,
                            "start": 103,
                            "end": 119
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 97,
                          "end": 119
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testBase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 141
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 145,
                                      "end": 149
                                    },
                                    "typeArguments": null,
                                    "start": 145,
                                    "end": 149
                                  },
                                  "start": 143,
                                  "end": 149
                                },
                                "start": 142,
                                "end": 149
                              }
                            ],
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
                                        "start": 169,
                                        "end": 176
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 177,
                                        "end": 180
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 169,
                                      "end": 180
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 181,
                                          "end": 182
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "x",
                                          "start": 183,
                                          "end": 185
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 181,
                                        "end": 185
                                      }
                                    ],
                                    "optional": false,
                                    "start": 169,
                                    "end": 186
                                  },
                                  "directive": null,
                                  "start": 169,
                                  "end": 187
                                }
                              ],
                              "start": 151,
                              "end": 201
                            },
                            "expression": false,
                            "start": 141,
                            "end": 201
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 133,
                          "end": 201
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testDerived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 214,
                            "end": 225
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 229,
                                      "end": 236
                                    },
                                    "typeArguments": null,
                                    "start": 229,
                                    "end": 236
                                  },
                                  "start": 227,
                                  "end": 236
                                },
                                "start": 226,
                                "end": 236
                              }
                            ],
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
                                        "start": 256,
                                        "end": 263
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 264,
                                        "end": 267
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 256,
                                      "end": 267
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 268,
                                          "end": 269
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "x",
                                          "start": 270,
                                          "end": 272
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 268,
                                        "end": 272
                                      }
                                    ],
                                    "optional": false,
                                    "start": 256,
                                    "end": 273
                                  },
                                  "directive": null,
                                  "start": 256,
                                  "end": 274
                                }
                              ],
                              "start": 238,
                              "end": 288
                            },
                            "expression": false,
                            "start": 225,
                            "end": 288
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 214,
                          "end": 288
                        }
                      ],
                      "start": 83,
                      "end": 298
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 69,
                    "end": 298
                  }
                ],
                "start": 59,
                "end": 304
              },
              "expression": false,
              "start": 56,
              "end": 304
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 304
          }
        ],
        "start": 11,
        "end": 306
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 306
}
```
