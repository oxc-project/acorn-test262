__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 266,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 266,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 20,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "x"
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 264,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 264,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 264,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 49,
                    "end": 258,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 62,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 63,
                      "end": 258,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 77,
                          "end": 80,
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 77,
                            "end": 79,
                            "name": "x"
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
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 93,
                          "end": 161,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 101,
                            "decorators": [],
                            "name": "testBase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 101,
                            "end": 161,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 102,
                                "end": 109,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 103,
                                  "end": 109,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 105,
                                    "end": 109,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 105,
                                      "end": 109,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 111,
                              "end": 161,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 129,
                                  "end": 147,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 129,
                                    "end": 146,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 129,
                                      "end": 140,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 129,
                                        "end": 136,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 137,
                                        "end": 140,
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
                                        "start": 141,
                                        "end": 145,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 141,
                                          "end": 142,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 143,
                                          "end": 145,
                                          "name": "x"
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    ],
                                    "optional": false
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 174,
                          "end": 248,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 185,
                            "decorators": [],
                            "name": "testDerived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 185,
                            "end": 248,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 186,
                                "end": 196,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 187,
                                  "end": 196,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 189,
                                    "end": 196,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 189,
                                      "end": 196,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 198,
                              "end": 248,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 216,
                                  "end": 234,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 216,
                                    "end": 233,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 216,
                                      "end": 227,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 216,
                                        "end": 223,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 224,
                                        "end": 227,
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
                                        "start": 228,
                                        "end": 232,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 228,
                                          "end": 229,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 230,
                                          "end": 232,
                                          "name": "x"
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    ],
                                    "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
