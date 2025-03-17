__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 73,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 64,
              "end": 68,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 71,
              "end": 72,
              "value": 3,
              "raw": "3"
            },
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
            "start": 79,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 124,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 79,
                "end": 107,
                "expression": {
                  "type": "CallExpression",
                  "start": 80,
                  "end": 107,
                  "callee": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 83,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 91,
                          "end": 95,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 92,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 94,
                              "end": 95,
                              "typeName": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 95,
                                "name": "A",
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
                        "type": "MemberExpression",
                        "start": 100,
                        "end": 106,
                        "object": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 102,
                          "end": 106,
                          "name": "foo"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 23,
          "end": 40,
          "expression": {
            "type": "CallExpression",
            "start": 24,
            "end": 40,
            "callee": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 28,
                "end": 39,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 33,
                  "end": 39,
                  "object": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 35,
                    "end": 39,
                    "name": "foo"
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 174,
            "end": 183,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 174,
              "end": 178,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 181,
              "end": 182,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 128,
          "end": 150,
          "expression": {
            "type": "CallExpression",
            "start": 129,
            "end": 150,
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 133,
                "end": 149,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 138,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 137,
                        "end": 138,
                        "typeName": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 138,
                          "name": "B",
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
                  "type": "MemberExpression",
                  "start": 143,
                  "end": 149,
                  "object": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 145,
                    "end": 149,
                    "name": "foo"
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 187,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 194,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 301,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 210,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 201,
              "end": 205,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 208,
              "end": 209,
              "value": 2,
              "raw": "2"
            },
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
            "start": 215,
            "end": 299,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 299,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 299,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 229,
                    "end": 275,
                    "id": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 273,
                      "end": 275,
                      "body": []
                    },
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 229,
                        "end": 250,
                        "expression": {
                          "type": "CallExpression",
                          "start": 230,
                          "end": 250,
                          "callee": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 233,
                            "name": "dec",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 234,
                              "end": 249,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "MemberExpression",
                                "start": 240,
                                "end": 249,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 240,
                                  "end": 244
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 245,
                                  "end": 249,
                                  "name": "foo"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 284,
                    "end": 293,
                    "argument": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
