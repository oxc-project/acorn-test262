__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "x"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 25,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 25,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 276,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 276,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 55,
                    "end": 270,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 69,
                      "end": 270,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 83,
                          "end": 91,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 83,
                            "end": 85,
                            "name": "x"
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 85,
                            "end": 91,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 88,
                              "end": 91,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 105,
                          "end": 173,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 113,
                            "decorators": [],
                            "name": "testBase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 113,
                            "end": 173,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 123,
                              "end": 173,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 141,
                                  "end": 159,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 141,
                                    "end": 158,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 153,
                                        "end": 157,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 153,
                                          "end": 154,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 155,
                                          "end": 157,
                                          "name": "x"
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 141,
                                      "end": 152,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 141,
                                        "end": 148,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 149,
                                        "end": 152,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 114,
                                "end": 121,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 115,
                                  "end": 121,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 117,
                                    "end": 121,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 117,
                                      "end": 121,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 186,
                          "end": 260,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 197,
                            "decorators": [],
                            "name": "testDerived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 197,
                            "end": 260,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 210,
                              "end": 260,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 228,
                                  "end": 246,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 228,
                                    "end": 245,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 240,
                                        "end": 244,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 240,
                                          "end": 241,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 242,
                                          "end": 244,
                                          "name": "x"
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 228,
                                      "end": 239,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 228,
                                        "end": 235,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 236,
                                        "end": 239,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 198,
                                "end": 208,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 199,
                                  "end": 208,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 201,
                                    "end": 208,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 201,
                                      "end": 208,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 68,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
