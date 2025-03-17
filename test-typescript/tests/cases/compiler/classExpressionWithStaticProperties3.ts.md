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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 52,
            "name": "arr",
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
                      "key": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
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
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 55,
            "end": 57,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 59,
      "end": 177,
      "init": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 80,
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 80,
          "value": 3,
          "raw": "3"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 82,
        "end": 85,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 177,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 175,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 174,
              "callee": {
                "type": "MemberExpression",
                "start": 93,
                "end": 101,
                "object": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 102,
                  "end": 173,
                  "id": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 110,
                    "end": 173,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 120,
                        "end": 133,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                        "type": "PropertyDefinition",
                        "start": 142,
                        "end": 167,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 153,
                          "end": 166,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BinaryExpression",
                            "start": 159,
                            "end": 166,
                            "left": {
                              "type": "MemberExpression",
                              "start": 159,
                              "end": 162,
                              "object": {
                                "type": "Identifier",
                                "start": 159,
                                "end": 160,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "Literal",
                              "start": 165,
                              "end": 166,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "typeParameters": null,
                          "returnType": null
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
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 214,
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 189,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 189,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 190,
            "end": 213,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 195,
              "end": 213,
              "callee": {
                "type": "MemberExpression",
                "start": 195,
                "end": 206,
                "object": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
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
                  "type": "CallExpression",
                  "start": 207,
                  "end": 212,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 207,
                    "end": 210,
                    "object": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
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
