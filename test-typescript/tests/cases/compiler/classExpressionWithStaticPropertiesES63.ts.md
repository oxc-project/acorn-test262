__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 52,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 52,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 37,
                "end": 52,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 37,
                  "end": 50,
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "start": 38,
                      "end": 49,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 41,
                        "end": 49,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 43,
                          "end": 49
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 55,
            "end": 57,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForStatement",
      "start": 59,
      "end": 177,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 177,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 175,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 174,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 102,
                  "end": 173,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 110,
                    "end": 173,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 120,
                        "end": 133,
                        "accessibility": null,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 142,
                        "end": 167,
                        "accessibility": null,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": null,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 153,
                          "end": 166,
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "start": 159,
                            "end": 166,
                            "operator": "*",
                            "left": {
                              "type": "MemberExpression",
                              "start": 159,
                              "end": 162,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 159,
                                "end": 160,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 165,
                              "end": 166,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "expression": true,
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
                    "start": 108,
                    "end": 109,
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
              "callee": {
                "type": "MemberExpression",
                "start": 93,
                "end": 101,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 73,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 80,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 80,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 82,
        "end": 85,
        "argument": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 215,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 214,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 190,
            "end": 213,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 195,
              "end": 213,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 207,
                  "end": 212,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 207,
                    "end": 210,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 195,
                "end": 206,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 189,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 189,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
