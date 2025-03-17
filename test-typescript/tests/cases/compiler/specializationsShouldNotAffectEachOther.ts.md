__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 38,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 30,
                "end": 38,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
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
        "end": 16,
        "decorators": [],
        "name": "Series",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 61,
            "decorators": [],
            "name": "series",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 61,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 61,
                  "decorators": [],
                  "name": "Series",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 202,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 202,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 123,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 122,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 103,
                  "decorators": [],
                  "name": "seriesExtent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 106,
                  "end": 122,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 118,
                    "end": 122,
                    "raw": "null",
                    "value": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 107,
                      "end": 113,
                      "decorators": [],
                      "name": "series",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 129,
            "end": 151,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 133,
                "end": 150,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 150,
                  "decorators": [],
                  "name": "series2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 142,
                      "end": 150,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 142,
                        "end": 148
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 157,
            "end": 183,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 157,
              "end": 182,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 169,
                  "end": 181,
                  "decorators": [],
                  "name": "seriesExtent",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 168,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 164,
                  "decorators": [],
                  "name": "series2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 168,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 200,
            "argument": {
              "type": "Literal",
              "start": 195,
              "end": 199,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 226,
            "decorators": [],
            "name": "keyExtent2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 226,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 221,
                "end": 226,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 221,
                  "end": 224
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 229,
            "end": 280,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 245,
                "end": 279,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 266,
                  "end": 279,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 268,
                      "end": 277,
                      "argument": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 276,
                        "decorators": [],
                        "name": "d",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 255,
                    "end": 264,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 258,
                        "end": 264
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 229,
              "end": 244,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 229,
                "end": 240,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 235,
                  "decorators": [],
                  "name": "series",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 240,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 244,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
