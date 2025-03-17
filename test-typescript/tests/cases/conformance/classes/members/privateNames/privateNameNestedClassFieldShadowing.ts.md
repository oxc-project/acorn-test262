__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 266,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 20,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "x"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 264,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 264,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 264,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 49,
                    "end": 258,
                    "id": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 62,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 63,
                      "end": 258,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 77,
                          "end": 80,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 77,
                            "end": 79,
                            "name": "x"
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": null,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 93,
                          "end": 161,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 101,
                            "name": "testBase",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 101,
                            "end": 161,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 102,
                                "end": 109,
                                "name": "x",
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
                                      "name": "Base",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
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
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 137,
                                        "end": 140,
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
                                        "start": 141,
                                        "end": 145,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 141,
                                          "end": 142,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 143,
                                          "end": 145,
                                          "name": "x"
                                        },
                                        "computed": false,
                                        "optional": false
                                      }
                                    ],
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 174,
                          "end": 248,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 185,
                            "name": "testDerived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 185,
                            "end": 248,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 186,
                                "end": 196,
                                "name": "x",
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
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
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
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 224,
                                        "end": 227,
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
                                        "start": 228,
                                        "end": 232,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 228,
                                          "end": 229,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 230,
                                          "end": 232,
                                          "name": "x"
                                        },
                                        "computed": false,
                                        "optional": false
                                      }
                                    ],
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
