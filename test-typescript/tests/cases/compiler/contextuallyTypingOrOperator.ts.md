__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 35,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 33,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 12,
                        "end": 33,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 13,
                            "end": 22,
                            "name": "_",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 14,
                              "end": 22,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 16,
                                "end": 22
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 38,
            "end": 75,
            "left": {
              "type": "ObjectExpression",
              "start": 38,
              "end": 58,
              "properties": [
                {
                  "type": "Property",
                  "start": 40,
                  "end": 56,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 43,
                    "end": 56,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 48,
                      "end": 56,
                      "object": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 56,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 62,
              "end": 75,
              "properties": [
                {
                  "type": "Property",
                  "start": 64,
                  "end": 73,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 67,
                    "end": 73,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 72,
                      "end": 73,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 87,
            "end": 139,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 97,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "LogicalExpression",
              "start": 102,
              "end": 139,
              "left": {
                "type": "MemberExpression",
                "start": 102,
                "end": 110,
                "object": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 110,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "start": 114,
                "end": 139,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 127,
                  "end": 139,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 129,
                      "end": 137,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 137,
                        "object": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 137,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "name": "v3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 211,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 161,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "LogicalExpression",
              "start": 166,
              "end": 211,
              "left": {
                "type": "MemberExpression",
                "start": 166,
                "end": 174,
                "object": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 174,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "start": 178,
                "end": 211,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 188,
                    "end": 197,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 197,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 191,
                        "end": 197
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 199,
                  "end": 211,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 201,
                      "end": 209,
                      "argument": {
                        "type": "Literal",
                        "start": 208,
                        "end": 209,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "name": "v4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 222,
            "end": 282,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 223,
                "end": 232,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 224,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 226,
                    "end": 232
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "LogicalExpression",
              "start": 237,
              "end": 282,
              "left": {
                "type": "Literal",
                "start": 237,
                "end": 238,
                "value": 1,
                "raw": "1"
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "start": 242,
                "end": 282,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 252,
                    "end": 261,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 263,
                  "end": 282,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 265,
                      "end": 280,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 272,
                        "end": 280,
                        "object": {
                          "type": "Identifier",
                          "start": 272,
                          "end": 273,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 280,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
