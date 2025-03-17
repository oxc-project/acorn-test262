__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 306,
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
        "end": 306,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 23,
              "name": "x"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 39,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 39,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 28,
                    "end": 37,
                    "argument": {
                      "type": "Literal",
                      "start": 35,
                      "end": 36,
                      "value": 1,
                      "raw": "1"
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
            "start": 45,
            "end": 304,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 304,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 304,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 69,
                    "end": 298,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 82,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 83,
                      "end": 298,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 97,
                          "end": 119,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "x"
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 103,
                            "end": 119,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 106,
                              "end": 119,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 108,
                                  "end": 117,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 115,
                                    "end": 116,
                                    "value": 1,
                                    "raw": "1"
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
                          "start": 133,
                          "end": 201,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 141,
                            "name": "testBase",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 141,
                            "end": 201,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 142,
                                "end": 149,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 143,
                                  "end": 149,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 145,
                                    "end": 149,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 145,
                                      "end": 149,
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
                              "start": 151,
                              "end": 201,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 169,
                                  "end": 187,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 169,
                                    "end": 186,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 169,
                                      "end": 180,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 169,
                                        "end": 176,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 177,
                                        "end": 180,
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
                                        "start": 181,
                                        "end": 185,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 181,
                                          "end": 182,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 183,
                                          "end": 185,
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
                          "start": 214,
                          "end": 288,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 214,
                            "end": 225,
                            "name": "testDerived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 225,
                            "end": 288,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 226,
                                "end": 236,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 227,
                                  "end": 236,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 229,
                                    "end": 236,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 229,
                                      "end": 236,
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
                              "start": 238,
                              "end": 288,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 256,
                                  "end": 274,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 256,
                                    "end": 273,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 256,
                                      "end": 267,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 256,
                                        "end": 263,
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 264,
                                        "end": 267,
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
                                        "start": 268,
                                        "end": 272,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 268,
                                          "end": 269,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 270,
                                          "end": 272,
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
