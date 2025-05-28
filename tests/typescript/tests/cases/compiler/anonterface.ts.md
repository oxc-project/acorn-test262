__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 130,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 124,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 41,
                      "end": 124,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 42,
                          "end": 67,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
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
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 49,
                                        "end": 56,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 50,
                                          "end": 56
                                        }
                                      }
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
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 68,
                          "end": 77,
                          "decorators": [],
                          "name": "n2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 70,
                            "end": 77,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 71,
                              "end": 77
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      },
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
                                "decorators": [],
                                "name": "fn",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 112,
                                  "decorators": [],
                                  "name": "n2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            }
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
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 155,
            "end": 190,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "Literal",
            "start": 191,
            "end": 193,
            "value": 18,
            "raw": "18"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
