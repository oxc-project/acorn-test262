__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 278,
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
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "x"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 25,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 25,
                "body": []
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
            "start": 31,
            "end": 276,
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
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 276,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 276,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 55,
                    "end": 270,
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
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 69,
                      "end": 270,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 83,
                          "end": 91,
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 83,
                            "end": 85,
                            "name": "x"
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 85,
                            "end": 91,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 88,
                              "end": 91,
                              "body": []
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
                          "start": 105,
                          "end": 173,
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
                          "value": {
                            "type": "FunctionExpression",
                            "start": 113,
                            "end": 173,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
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
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 117,
                                      "end": 121,
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
                              "start": 123,
                              "end": 173,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 141,
                                  "end": 159,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 141,
                                    "end": 158,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 141,
                                      "end": 152,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 141,
                                        "end": 148,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 149,
                                        "end": 152,
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
                                        "start": 153,
                                        "end": 157,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 153,
                                          "end": 154,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 155,
                                          "end": 157,
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
                          "start": 186,
                          "end": 260,
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
                          "value": {
                            "type": "FunctionExpression",
                            "start": 197,
                            "end": 260,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
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
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 201,
                                      "end": 208,
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
                              "start": 210,
                              "end": 260,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 228,
                                  "end": 246,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 228,
                                    "end": 245,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 228,
                                      "end": 239,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 228,
                                        "end": 235,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 236,
                                        "end": 239,
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
                                        "start": 240,
                                        "end": 244,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 240,
                                          "end": 241,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 242,
                                          "end": 244,
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
