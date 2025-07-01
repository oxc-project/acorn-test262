__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Series",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                },
                "start": 30,
                "end": 38
              },
              "start": 28,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 39
          }
        ],
        "start": 18,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "series",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Series",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 61
                },
                "typeArguments": null,
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "start": 47,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 61
        }
      ],
      "declare": false,
      "start": 43,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 77
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "seriesExtent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 103
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
                      "name": "series",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 113
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 118,
                    "end": 122
                  },
                  "id": null,
                  "generator": false,
                  "start": 106,
                  "end": 122
                },
                "definite": false,
                "start": 91,
                "end": 122
              }
            ],
            "declare": false,
            "start": 87,
            "end": 123
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
                  "name": "series2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 142,
                        "end": 148
                      },
                      "start": 142,
                      "end": 150
                    },
                    "start": 140,
                    "end": 150
                  },
                  "start": 133,
                  "end": 150
                },
                "init": null,
                "definite": false,
                "start": 133,
                "end": 150
              }
            ],
            "declare": false,
            "start": 129,
            "end": 151
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "series2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 168
                },
                "optional": false,
                "computed": false,
                "start": 157,
                "end": 168
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "seriesExtent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 181
                }
              ],
              "optional": false,
              "start": 157,
              "end": 182
            },
            "directive": null,
            "start": 157,
            "end": 183
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 195,
              "end": 199
            },
            "start": 188,
            "end": 200
          }
        ],
        "start": 80,
        "end": 202
      },
      "expression": false,
      "start": 65,
      "end": 202
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
            "name": "keyExtent2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 221,
                  "end": 224
                },
                "start": 221,
                "end": 226
              },
              "start": 219,
              "end": 226
            },
            "start": 209,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "series",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 235
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 240
                },
                "optional": false,
                "computed": false,
                "start": 229,
                "end": 240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 244
              },
              "optional": false,
              "computed": false,
              "start": 229,
              "end": 244
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 258,
                        "end": 264
                      },
                      "start": 256,
                      "end": 264
                    },
                    "start": 255,
                    "end": 264
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      },
                      "start": 268,
                      "end": 277
                    }
                  ],
                  "start": 266,
                  "end": 279
                },
                "expression": false,
                "start": 245,
                "end": 279
              }
            ],
            "optional": false,
            "start": 229,
            "end": 280
          },
          "definite": false,
          "start": 209,
          "end": 280
        }
      ],
      "declare": false,
      "start": 205,
      "end": 281
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 281
}
```
