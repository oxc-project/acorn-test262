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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "decorators": [],
            "name": "v",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 14,
                              "end": 22,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 16,
                                "end": 22
                              }
                            }
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
            }
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 43,
                    "end": 56,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 48,
                      "end": 56,
                      "object": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 56,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 67,
                    "end": 73,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 72,
                      "end": 73,
                      "value": 1,
                      "raw": "1"
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 140,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 87,
            "end": 139,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 97,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  }
                }
              }
            ],
            "returnType": null,
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
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 110,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "start": 114,
                "end": 139,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 137,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 211,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 161,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  }
                }
              }
            ],
            "returnType": null,
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
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 174,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "start": 178,
                "end": 211,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 188,
                    "end": 197,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 197,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 191,
                        "end": 197
                      }
                    }
                  }
                ],
                "returnType": null,
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
                "expression": false
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 283,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 222,
            "end": 282,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 223,
                "end": 232,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 224,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 226,
                    "end": 232
                  }
                }
              }
            ],
            "returnType": null,
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
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 252,
                    "end": 261,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      }
                    }
                  }
                ],
                "returnType": null,
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
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 280,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
