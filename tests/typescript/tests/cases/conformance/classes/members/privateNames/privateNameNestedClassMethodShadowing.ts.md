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
              "start": 17,
              "end": 19
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
                "body": [],
                "start": 22,
                "end": 25
              },
              "expression": false,
              "start": 19,
              "end": 25
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 25
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
              "start": 31,
              "end": 42
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
                      "start": 61,
                      "end": 68
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
                            "start": 83,
                            "end": 85
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
                              "body": [],
                              "start": 88,
                              "end": 91
                            },
                            "expression": false,
                            "start": 85,
                            "end": 91
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 83,
                          "end": 91
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
                            "start": 105,
                            "end": 113
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
                                      "start": 117,
                                      "end": 121
                                    },
                                    "typeArguments": null,
                                    "start": 117,
                                    "end": 121
                                  },
                                  "start": 115,
                                  "end": 121
                                },
                                "start": 114,
                                "end": 121
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
                                        "start": 141,
                                        "end": 148
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 149,
                                        "end": 152
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 141,
                                      "end": 152
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
                                          "start": 153,
                                          "end": 154
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "x",
                                          "start": 155,
                                          "end": 157
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 153,
                                        "end": 157
                                      }
                                    ],
                                    "optional": false,
                                    "start": 141,
                                    "end": 158
                                  },
                                  "directive": null,
                                  "start": 141,
                                  "end": 159
                                }
                              ],
                              "start": 123,
                              "end": 173
                            },
                            "expression": false,
                            "start": 113,
                            "end": 173
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 105,
                          "end": 173
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
                            "start": 186,
                            "end": 197
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
                                      "start": 201,
                                      "end": 208
                                    },
                                    "typeArguments": null,
                                    "start": 201,
                                    "end": 208
                                  },
                                  "start": 199,
                                  "end": 208
                                },
                                "start": 198,
                                "end": 208
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
                                        "start": 228,
                                        "end": 235
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 236,
                                        "end": 239
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 228,
                                      "end": 239
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
                                          "start": 240,
                                          "end": 241
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "x",
                                          "start": 242,
                                          "end": 244
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 240,
                                        "end": 244
                                      }
                                    ],
                                    "optional": false,
                                    "start": 228,
                                    "end": 245
                                  },
                                  "directive": null,
                                  "start": 228,
                                  "end": 246
                                }
                              ],
                              "start": 210,
                              "end": 260
                            },
                            "expression": false,
                            "start": 197,
                            "end": 260
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 186,
                          "end": 260
                        }
                      ],
                      "start": 69,
                      "end": 270
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 55,
                    "end": 270
                  }
                ],
                "start": 45,
                "end": 276
              },
              "expression": false,
              "start": 42,
              "end": 276
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 276
          }
        ],
        "start": 11,
        "end": 278
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 278
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 278
}
```
