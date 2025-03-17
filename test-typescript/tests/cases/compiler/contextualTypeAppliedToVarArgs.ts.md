__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "delegate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 31,
          "name": "instance",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 64,
          "name": "method",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 64,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 41,
              "end": 64,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 42,
                  "end": 56,
                  "argument": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 51,
                      "end": 56,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 61,
                  "end": 64
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 76,
          "name": "data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 76,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 73,
              "end": 76
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 103,
        "end": 134,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 109,
            "end": 132,
            "argument": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 131,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 77,
        "end": 102,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 79,
          "end": 102,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 80,
              "end": 94,
              "argument": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 89,
                  "end": 94,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 89,
                    "end": 92
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 102,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 99,
              "end": 102
            }
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 136,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 302,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 302,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 302,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 169,
                    "end": 296,
                    "expression": {
                      "type": "CallExpression",
                      "start": 169,
                      "end": 295,
                      "callee": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 177,
                        "name": "delegate",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 178,
                          "end": 182
                        },
                        {
                          "type": "FunctionExpression",
                          "start": 184,
                          "end": 293,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 194,
                              "end": 200,
                              "name": "source",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 202,
                              "end": 207,
                              "name": "args2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 217,
                            "end": 293,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 231,
                                "end": 251,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 235,
                                    "end": 250,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 235,
                                      "end": 236,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 239,
                                      "end": 250,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 239,
                                        "end": 245,
                                        "name": "source",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 246,
                                        "end": 250,
                                        "name": "node",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 264,
                                "end": 283,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 268,
                                    "end": 282,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 268,
                                      "end": 269,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 272,
                                      "end": 282,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 272,
                                        "end": 277,
                                        "name": "args2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 278,
                                        "end": 282,
                                        "name": "node",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
