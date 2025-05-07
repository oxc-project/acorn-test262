__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 270,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 169,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 18,
              "end": 169,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 24,
                  "end": 52,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 31,
                    "end": 37,
                    "name": "field"
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "start": 40,
                    "end": 51,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 40,
                      "end": 49,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 42,
                        "end": 49,
                        "name": "method"
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 57,
                  "end": 88,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 64,
                    "end": 71,
                    "name": "method"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 71,
                    "end": 88,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 88,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 76,
                          "end": 86,
                          "argument": {
                            "type": "Literal",
                            "start": 83,
                            "end": 85,
                            "raw": "42",
                            "value": 42,
                            "regex": null,
                            "bigint": null
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
                  "start": 93,
                  "end": 124,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 108,
                    "decorators": [],
                    "name": "getClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 108,
                    "end": 124,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 111,
                      "end": 124,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 113,
                          "end": 122,
                          "argument": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null
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
                  "start": 129,
                  "end": 166,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 144,
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 144,
                    "end": 166,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 147,
                      "end": 166,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 149,
                          "end": 164,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 156,
                            "end": 164,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 158,
                              "end": 164,
                              "name": "field"
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
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 208,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 171,
        "end": 207,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 183,
            "end": 206,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 183,
              "end": 204,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 183,
                "end": 195,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 193,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 193,
                    "decorators": [],
                    "name": "getClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 204,
                "decorators": [],
                "name": "getField",
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
          "start": 171,
          "end": 182,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 171,
            "end": 178,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 179,
            "end": 182,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 209,
        "end": 229,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 209,
          "end": 221,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 209,
            "end": 219,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 219,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 222,
          "end": 229,
          "name": "method"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 260,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 240,
        "end": 259,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 240,
          "end": 252,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 240,
            "end": 250,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 242,
              "end": 250,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 253,
          "end": 259,
          "name": "field"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
