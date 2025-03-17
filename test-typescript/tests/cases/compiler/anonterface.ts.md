__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 132,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 130,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 130,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 130,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 124,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 41,
                      "end": 124,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 42,
                          "end": 67,
                          "name": "fn",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 44,
                            "end": 67,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 45,
                              "end": 67,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 47,
                                  "end": 65,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 48,
                                      "end": 56,
                                      "name": "n",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 49,
                                        "end": 56,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 50,
                                          "end": 56
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 57,
                                    "end": 64,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 58,
                                      "end": 64
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 68,
                          "end": 77,
                          "name": "n2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 70,
                            "end": 77,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 71,
                              "end": 77
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 86,
                        "end": 124,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 100,
                            "end": 114,
                            "argument": {
                              "type": "CallExpression",
                              "start": 107,
                              "end": 113,
                              "callee": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 109,
                                "name": "fn",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 112,
                                  "name": "n2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      }
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 140,
            "end": 149,
            "callee": {
              "type": "MemberExpression",
              "start": 144,
              "end": 147,
              "object": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 151,
        "end": 194,
        "callee": {
          "type": "MemberExpression",
          "start": 151,
          "end": 154,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 155,
            "end": 190,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 167,
              "end": 190,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 169,
                  "end": 188,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 176,
                    "end": 187,
                    "left": {
                      "type": "Literal",
                      "start": 176,
                      "end": 185,
                      "value": "hello: ",
                      "raw": "\"hello: \""
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 191,
            "end": 193,
            "value": 18,
            "raw": "18"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
