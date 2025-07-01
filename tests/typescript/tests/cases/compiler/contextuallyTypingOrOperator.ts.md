__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9,
                      "end": 10
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 16,
                                "end": 22
                              },
                              "start": 14,
                              "end": 22
                            },
                            "start": 13,
                            "end": 22
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "start": 24,
                          "end": 33
                        },
                        "start": 12,
                        "end": 33
                      },
                      "start": 10,
                      "end": 33
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 9,
                    "end": 33
                  }
                ],
                "start": 7,
                "end": 35
              },
              "start": 5,
              "end": 35
            },
            "start": 4,
            "end": 35
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 44
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 56
                      },
                      "optional": false,
                      "computed": false,
                      "start": 48,
                      "end": 56
                    },
                    "id": null,
                    "generator": false,
                    "start": 43,
                    "end": 56
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 40,
                  "end": 56
                }
              ],
              "start": 38,
              "end": 58
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 68
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 72,
                      "end": 73
                    },
                    "id": null,
                    "generator": false,
                    "start": 67,
                    "end": 73
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 64,
                  "end": 73
                }
              ],
              "start": 62,
              "end": 75
            },
            "start": 38,
            "end": 75
          },
          "definite": false,
          "start": 4,
          "end": 75
        }
      ],
      "declare": false,
      "start": 0,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 84
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  },
                  "start": 89,
                  "end": 97
                },
                "start": 88,
                "end": 97
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 110
                },
                "optional": false,
                "computed": false,
                "start": 102,
                "end": 110
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 137
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 137
                      },
                      "directive": null,
                      "start": 129,
                      "end": 137
                    }
                  ],
                  "start": 127,
                  "end": 139
                },
                "expression": false,
                "start": 114,
                "end": 139
              },
              "start": 102,
              "end": 139
            },
            "id": null,
            "generator": false,
            "start": 87,
            "end": 139
          },
          "definite": false,
          "start": 82,
          "end": 139
        }
      ],
      "declare": false,
      "start": 78,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  },
                  "start": 153,
                  "end": 161
                },
                "start": 152,
                "end": 161
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 174
                },
                "optional": false,
                "computed": false,
                "start": 166,
                "end": 174
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 191,
                        "end": 197
                      },
                      "start": 189,
                      "end": 197
                    },
                    "start": 188,
                    "end": 197
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 208,
                        "end": 209
                      },
                      "start": 201,
                      "end": 209
                    }
                  ],
                  "start": 199,
                  "end": 211
                },
                "expression": false,
                "start": 178,
                "end": 211
              },
              "start": 166,
              "end": 211
            },
            "id": null,
            "generator": false,
            "start": 151,
            "end": 211
          },
          "definite": false,
          "start": 146,
          "end": 211
        }
      ],
      "declare": false,
      "start": 142,
      "end": 212
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 219
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 226,
                    "end": 232
                  },
                  "start": 224,
                  "end": 232
                },
                "start": 223,
                "end": 232
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 237,
                "end": 238
              },
              "operator": "||",
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      },
                      "start": 253,
                      "end": 261
                    },
                    "start": 252,
                    "end": 261
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 273
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 280
                        },
                        "optional": false,
                        "computed": false,
                        "start": 272,
                        "end": 280
                      },
                      "start": 265,
                      "end": 280
                    }
                  ],
                  "start": 263,
                  "end": 282
                },
                "expression": false,
                "start": 242,
                "end": 282
              },
              "start": 237,
              "end": 282
            },
            "id": null,
            "generator": false,
            "start": 222,
            "end": 282
          },
          "definite": false,
          "start": 217,
          "end": 282
        }
      ],
      "declare": false,
      "start": 213,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
