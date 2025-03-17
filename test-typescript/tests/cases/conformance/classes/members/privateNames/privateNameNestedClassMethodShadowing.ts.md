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
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "x"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 25,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 25,
                "body": []
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
            "start": 31,
            "end": 276,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 276,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 276,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 55,
                    "end": 270,
                    "id": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 68,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 69,
                      "end": 270,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 83,
                          "end": 91,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 83,
                            "end": 85,
                            "name": "x"
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 85,
                            "end": 91,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 88,
                              "end": 91,
                              "body": []
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
                          "start": 105,
                          "end": 173,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 113,
                            "name": "testBase",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 113,
                            "end": 173,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 114,
                                "end": 121,
                                "name": "x",
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
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 149,
                                        "end": 152,
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
                                        "start": 153,
                                        "end": 157,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 153,
                                          "end": 154,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 155,
                                          "end": 157,
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
                          "start": 186,
                          "end": 260,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 197,
                            "name": "testDerived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 197,
                            "end": 260,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 198,
                                "end": 208,
                                "name": "x",
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
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 236,
                                        "end": 239,
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
                                        "start": 240,
                                        "end": 244,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 240,
                                          "end": 241,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 242,
                                          "end": 244,
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
