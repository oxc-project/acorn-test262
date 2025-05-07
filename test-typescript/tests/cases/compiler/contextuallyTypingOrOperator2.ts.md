__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
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
          "definite": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 12,
                        "end": 33,
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
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 38,
            "end": 75,
            "operator": "||",
            "left": {
              "type": "ObjectExpression",
              "start": 38,
              "end": 58,
              "properties": [
                {
                  "type": "Property",
                  "start": 40,
                  "end": 56,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 43,
                    "end": 56,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 48,
                      "end": 56,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 56,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  }
                }
              ]
            },
            "right": {
              "type": "ObjectExpression",
              "start": 62,
              "end": 75,
              "properties": [
                {
                  "type": "Property",
                  "start": 64,
                  "end": 73,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 67,
                    "end": 73,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 72,
                      "end": 73,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 136,
          "definite": false,
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
            "end": 136,
            "async": false,
            "body": {
              "type": "LogicalExpression",
              "start": 102,
              "end": 136,
              "operator": "||",
              "left": {
                "type": "MemberExpression",
                "start": 102,
                "end": 110,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 110,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "FunctionExpression",
                "start": 114,
                "end": 136,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 127,
                  "end": 136,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 129,
                      "end": 134,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 134,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 134,
                          "decorators": [],
                          "name": "aaa",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
