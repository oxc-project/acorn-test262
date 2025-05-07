__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 48,
      "end": 119,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 117,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "decorators": [],
              "name": "wrong",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 116,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 116,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 75,
                    "end": 82,
                    "literal": {
                      "type": "Literal",
                      "start": 75,
                      "end": 82,
                      "raw": "\"place\"",
                      "value": "place",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 85,
                    "end": 91,
                    "literal": {
                      "type": "Literal",
                      "start": 85,
                      "end": 91,
                      "raw": "\"time\"",
                      "value": "time",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 94,
                    "end": 102,
                    "literal": {
                      "type": "Literal",
                      "start": 94,
                      "end": 102,
                      "raw": "\"method\"",
                      "value": "method",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 105,
                    "end": 116,
                    "literal": {
                      "type": "Literal",
                      "start": 105,
                      "end": 116,
                      "raw": "\"technique\"",
                      "value": "technique",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 134,
            "decorators": [],
            "name": "mismatch",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 137,
            "end": 243,
            "properties": [
              {
                "type": "Property",
                "start": 143,
                "end": 148,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 148,
                  "raw": "13",
                  "value": 13,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 154,
                "end": 189,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 159,
                  "end": 189,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 171,
                    "end": 189,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 173,
                        "end": 187,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 180,
                          "end": 186,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 186,
                            "decorators": [],
                            "name": "n",
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
                      "start": 160,
                      "end": 169,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 169,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 169,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 169,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 195,
                "end": 241,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 200,
                  "end": 241,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 215,
                    "end": 241,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 217,
                        "end": 239,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 217,
                          "end": 238,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 217,
                            "end": 227,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 217,
                              "end": 221
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 222,
                              "end": 227,
                              "decorators": [],
                              "name": "wrong",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 230,
                            "end": 238,
                            "raw": "\"method\"",
                            "value": "method",
                            "regex": null,
                            "bigint": null
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
                      "start": 201,
                      "end": 210,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 205,
                        "end": 210,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 207,
                          "end": 210,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 210,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "decorators": [],
                      "name": "n",
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
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 265,
            "decorators": [],
            "name": "contextual",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 265,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 265,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 268,
            "end": 313,
            "properties": [
              {
                "type": "Property",
                "start": 274,
                "end": 279,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 277,
                  "end": 279,
                  "raw": "16",
                  "value": 16,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 285,
                "end": 311,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 290,
                  "end": 311,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 293,
                    "end": 311,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 295,
                        "end": 309,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 302,
                          "end": 308,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 302,
                            "end": 306
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 308,
                            "decorators": [],
                            "name": "n",
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
