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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Series",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 62,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 61,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 61,
                  "decorators": [],
                  "name": "Series",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 202,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 123,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 122,
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
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Literal",
                    "start": 118,
                    "end": 122,
                    "value": null,
                    "raw": "null"
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
            "start": 129,
            "end": 151,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 133,
                "end": 150,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 157,
            "end": 183,
            "expression": {
              "type": "CallExpression",
              "start": 157,
              "end": 182,
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 168,
                "object": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 164,
                  "decorators": [],
                  "name": "series2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 168,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 200,
            "argument": {
              "type": "Literal",
              "start": 195,
              "end": 199,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 281,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 280,
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
            "callee": {
              "type": "MemberExpression",
              "start": 229,
              "end": 244,
              "object": {
                "type": "MemberExpression",
                "start": 229,
                "end": 240,
                "object": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 235,
                  "decorators": [],
                  "name": "series",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 240,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 244,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 245,
                "end": 279,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "expression": false
              }
            ],
            "optional": false
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
