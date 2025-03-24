__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 313,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 59,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
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
              "start": 34,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 44,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 46,
                  "end": 52,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 50,
                    "end": 52,
                    "raw": "10",
                    "value": 10
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
        "start": 23,
        "end": 24,
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
      "start": 60,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
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
              "start": 87,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
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
            "start": 98,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
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
              "start": 101,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 149,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 133,
                      "end": 148,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 133,
                          "end": 138
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 142,
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
                  "start": 102,
                  "end": 111,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 105,
                      "end": 111
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 121,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 115,
                      "end": 121
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
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
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
      "start": 158,
      "end": 313,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 313,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 220,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 193,
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
              "start": 193,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 220,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 206,
                    "end": 214,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 206,
                      "end": 213,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 206,
                        "end": 211
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
            "start": 226,
            "end": 260,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
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
              "start": 229,
              "end": 260,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 232,
                "end": 260,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 242,
                    "end": 254,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 242,
                      "end": 253,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 251,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 242,
                          "end": 247
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 251,
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
            "start": 266,
            "end": 311,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
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
              "start": 269,
              "end": 311,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 311,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 282,
                    "end": 305,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 282,
                      "end": 304,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 292,
                          "end": 299,
                          "raw": "\"hello\"",
                          "value": "hello"
                        },
                        {
                          "type": "Literal",
                          "start": 301,
                          "end": 303,
                          "raw": "10",
                          "value": 10
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 282,
                        "end": 291,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 282,
                          "end": 287
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 291,
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
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
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
