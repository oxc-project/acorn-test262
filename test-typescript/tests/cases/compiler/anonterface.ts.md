anonterface.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 132,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 130,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 130,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 130,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 124,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "m",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 41,
                      "end": 124,
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 112,
                                  "decorators": [],
                                  "name": "n2",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 109,
                                "decorators": [],
                                "name": "fn",
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
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 140,
            "end": 149,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 144,
              "end": 147,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 151,
        "end": 194,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 155,
            "end": 190,
            "async": false,
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
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 176,
                      "end": 185,
                      "raw": "\"hello: \"",
                      "value": "hello: "
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
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
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 191,
            "end": 193,
            "raw": "18",
            "value": 18
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 151,
          "end": 154,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
