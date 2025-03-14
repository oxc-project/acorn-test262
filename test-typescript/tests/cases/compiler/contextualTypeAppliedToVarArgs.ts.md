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
      "async": false,
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
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 131,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "delegate",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 31,
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 64,
          "decorators": [],
          "name": "method",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 64,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 41,
              "end": 64,
              "params": [
                {
                  "type": "RestElement",
                  "start": 42,
                  "end": 56,
                  "argument": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "decorators": [],
                    "name": "args",
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
                  }
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
          }
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 76,
          "decorators": [],
          "name": "data",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 76,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 73,
              "end": 76
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 77,
        "end": 102,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 79,
          "end": 102,
          "params": [
            {
              "type": "RestElement",
              "start": 80,
              "end": 94,
              "argument": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "args",
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
              }
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 302,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 302,
              "async": false,
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
                          "async": false,
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 235,
                                      "end": 236,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 239,
                                      "end": 250,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 239,
                                        "end": 245,
                                        "decorators": [],
                                        "name": "source",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 246,
                                        "end": 250,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 268,
                                      "end": 269,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 272,
                                      "end": 282,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 272,
                                        "end": 277,
                                        "decorators": [],
                                        "name": "args2",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 278,
                                        "end": 282,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
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
                              "start": 194,
                              "end": 200,
                              "decorators": [],
                              "name": "source",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 202,
                              "end": 207,
                              "decorators": [],
                              "name": "args2",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 177,
                        "decorators": [],
                        "name": "delegate",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
