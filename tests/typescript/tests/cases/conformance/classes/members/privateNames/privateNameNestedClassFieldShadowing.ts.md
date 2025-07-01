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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 17,
              "end": 19
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 20
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
              "start": 25,
              "end": 36
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
                      "start": 55,
                      "end": 62
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "name": "x",
                            "start": 77,
                            "end": 79
                          },
                          "typeAnnotation": null,
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 77,
                          "end": 80
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
                            "start": 93,
                            "end": 101
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
                                      "start": 105,
                                      "end": 109
                                    },
                                    "typeArguments": null,
                                    "start": 105,
                                    "end": 109
                                  },
                                  "start": 103,
                                  "end": 109
                                },
                                "start": 102,
                                "end": 109
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
                                        "start": 129,
                                        "end": 136
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 137,
                                        "end": 140
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 129,
                                      "end": 140
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
                                          "start": 141,
                                          "end": 142
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "x",
                                          "start": 143,
                                          "end": 145
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 141,
                                        "end": 145
                                      }
                                    ],
                                    "optional": false,
                                    "start": 129,
                                    "end": 146
                                  },
                                  "directive": null,
                                  "start": 129,
                                  "end": 147
                                }
                              ],
                              "start": 111,
                              "end": 161
                            },
                            "expression": false,
                            "start": 101,
                            "end": 161
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 93,
                          "end": 161
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
                            "start": 174,
                            "end": 185
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
                                      "start": 189,
                                      "end": 196
                                    },
                                    "typeArguments": null,
                                    "start": 189,
                                    "end": 196
                                  },
                                  "start": 187,
                                  "end": 196
                                },
                                "start": 186,
                                "end": 196
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
                                        "start": 216,
                                        "end": 223
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 224,
                                        "end": 227
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 216,
                                      "end": 227
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
                                          "start": 228,
                                          "end": 229
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "x",
                                          "start": 230,
                                          "end": 232
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 228,
                                        "end": 232
                                      }
                                    ],
                                    "optional": false,
                                    "start": 216,
                                    "end": 233
                                  },
                                  "directive": null,
                                  "start": 216,
                                  "end": 234
                                }
                              ],
                              "start": 198,
                              "end": 248
                            },
                            "expression": false,
                            "start": 185,
                            "end": 248
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 174,
                          "end": 248
                        }
                      ],
                      "start": 63,
                      "end": 258
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 49,
                    "end": 258
                  }
                ],
                "start": 39,
                "end": 264
              },
              "expression": false,
              "start": 36,
              "end": 264
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 264
          }
        ],
        "start": 11,
        "end": 266
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 266
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 266
}
```
