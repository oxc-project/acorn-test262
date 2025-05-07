__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 64,
              "end": 68,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 71,
              "end": 72,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 79,
                "end": 107,
                "expression": {
                  "type": "CallExpression",
                  "start": 80,
                  "end": 107,
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 84,
                      "end": 88
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 90,
                      "end": 106,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 100,
                        "end": 106,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 102,
                          "end": 106,
                          "name": "foo"
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 91,
                          "end": 95,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 92,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 94,
                              "end": 95,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 95,
                                "decorators": [],
                                "name": "A",
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
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 83,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 124,
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
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 23,
          "end": 40,
          "expression": {
            "type": "CallExpression",
            "start": 24,
            "end": 40,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 28,
                "end": 39,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 33,
                  "end": 39,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 35,
                    "end": 39,
                    "name": "foo"
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 185,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 174,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 174,
              "end": 178,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 181,
              "end": 182,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 128,
          "end": 150,
          "expression": {
            "type": "CallExpression",
            "start": 129,
            "end": 150,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 133,
                "end": 149,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 143,
                  "end": 149,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 145,
                    "end": 149,
                    "name": "foo"
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 138,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 137,
                        "end": 138,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 138,
                          "decorators": [],
                          "name": "B",
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
            ],
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 187,
      "end": 301,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 301,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 210,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 201,
              "end": 205,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 208,
              "end": 209,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 299,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 299,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 299,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 229,
                    "end": 275,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 273,
                      "end": 275,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 229,
                        "end": 250,
                        "expression": {
                          "type": "CallExpression",
                          "start": 230,
                          "end": 250,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 234,
                              "end": 249,
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "start": 240,
                                "end": 249,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 240,
                                  "end": 244
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 245,
                                  "end": 249,
                                  "name": "foo"
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 233,
                            "decorators": [],
                            "name": "dec",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "id": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 284,
                    "end": 293,
                    "argument": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
        "start": 193,
        "end": 194,
        "decorators": [],
        "name": "C",
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
