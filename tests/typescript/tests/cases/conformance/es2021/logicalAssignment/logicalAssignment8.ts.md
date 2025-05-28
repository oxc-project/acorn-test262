__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 339,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 51,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 51,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 19,
                "end": 51,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 19,
                    "end": 39,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 21,
                        "end": 37,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 21,
                          "end": 26,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 27,
                          "end": 37,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 29,
                            "end": 37,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 29,
                              "end": 35
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 42,
                    "end": 51
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 96,
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 96,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 76,
              "end": 96,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 76,
                  "end": 84,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 76,
                    "end": 82
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 87,
                  "end": 96
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 147,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 145,
            "expression": {
              "type": "CallExpression",
              "start": 104,
              "end": 144,
              "callee": {
                "type": "MemberExpression",
                "start": 104,
                "end": 139,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 105,
                  "end": 133,
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 112,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "start": 117,
                    "end": 133,
                    "left": {
                      "type": "ChainExpression",
                      "start": 117,
                      "end": 127,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 117,
                        "end": 127,
                        "object": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 120,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 127,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "computed": false
                      }
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "start": 131,
                      "end": 133,
                      "elements": []
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 139,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 140,
                  "end": 143,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 163,
          "end": 192,
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 192,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 172,
              "end": 192,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 172,
                  "end": 180,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 172,
                    "end": 178
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 183,
                  "end": 192
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 243,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 241,
            "expression": {
              "type": "CallExpression",
              "start": 200,
              "end": 240,
              "callee": {
                "type": "MemberExpression",
                "start": 200,
                "end": 235,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 201,
                  "end": 229,
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 208,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "start": 213,
                    "end": 229,
                    "left": {
                      "type": "ChainExpression",
                      "start": 213,
                      "end": 223,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 213,
                        "end": 223,
                        "object": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 216,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 223,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "computed": false
                      }
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "start": 227,
                      "end": 229,
                      "elements": []
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 235,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 236,
                  "end": 239,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 245,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 258,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 259,
          "end": 288,
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 288,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 268,
              "end": 288,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 268,
                  "end": 276,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 268,
                    "end": 274
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 279,
                  "end": 288
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 290,
        "end": 339,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 296,
            "end": 337,
            "expression": {
              "type": "CallExpression",
              "start": 296,
              "end": 336,
              "callee": {
                "type": "MemberExpression",
                "start": 296,
                "end": 331,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 297,
                  "end": 325,
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 304,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "start": 309,
                    "end": 325,
                    "left": {
                      "type": "ChainExpression",
                      "start": 309,
                      "end": 319,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 309,
                        "end": 319,
                        "object": {
                          "type": "Identifier",
                          "start": 309,
                          "end": 312,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 319,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "computed": false
                      }
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "start": 323,
                      "end": 325,
                      "elements": []
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 331,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 332,
                  "end": 335,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
