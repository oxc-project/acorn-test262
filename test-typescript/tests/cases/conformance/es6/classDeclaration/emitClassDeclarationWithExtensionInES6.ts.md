__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 18,
                  "end": 27,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 21,
                      "end": 27
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 29,
                  "end": 35,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 33,
                    "end": 35,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": null
                }
              ],
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 76,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 76,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 132,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 116,
                      "end": 131,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 116,
                        "end": 125,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 116,
                          "end": 121
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 125,
                          "decorators": [],
                          "name": "baz",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 94,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 88,
                      "end": 94
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 96,
                  "end": 104,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 98,
                      "end": 104
                    }
                  }
                }
              ],
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
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 141,
      "end": 296,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 296,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 176,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 203,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 189,
                    "end": 197,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 189,
                      "end": 196,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 189,
                        "end": 194
                      },
                      "optional": false,
                      "typeArguments": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 243,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 212,
              "end": 243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 215,
                "end": 243,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 225,
                    "end": 237,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 225,
                      "end": 236,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 225,
                        "end": 234,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 225,
                          "end": 230
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 234,
                          "decorators": [],
                          "name": "foo",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 294,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 252,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 252,
              "end": 294,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 294,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 265,
                    "end": 288,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 265,
                      "end": 287,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 275,
                          "end": 282,
                          "raw": "\"hello\"",
                          "value": "hello",
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "Literal",
                          "start": 284,
                          "end": 286,
                          "raw": "10",
                          "value": 10,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 265,
                        "end": 274,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 265,
                          "end": 270
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 274,
                          "decorators": [],
                          "name": "baz",
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 157,
        "end": 158,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
