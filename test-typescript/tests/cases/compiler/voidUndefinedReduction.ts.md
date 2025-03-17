__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 244,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 40,
        "name": "isDefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 78,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 78,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 51,
              "end": 78,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 51,
                  "end": 52,
                  "typeName": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 55,
                  "end": 64
                },
                {
                  "type": "TSNullKeyword",
                  "start": 67,
                  "end": 71
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 74,
                  "end": 78
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 92,
        "end": 143,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 96,
            "end": 141,
            "argument": {
              "type": "LogicalExpression",
              "start": 103,
              "end": 140,
              "left": {
                "type": "BinaryExpression",
                "start": 103,
                "end": 122,
                "left": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 122,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 126,
                "end": 140,
                "left": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 131,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 136,
                  "end": 140,
                  "value": null,
                  "raw": "null"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 91,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 81,
          "end": 91,
          "parameterName": {
            "type": "Identifier",
            "start": 81,
            "end": 86,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 91,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 182,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 182,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 164,
                "end": 182,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 173,
                    "end": 182
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 185,
      "end": 243,
      "test": {
        "type": "CallExpression",
        "start": 189,
        "end": 203,
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 198,
          "name": "isDefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 199,
            "end": 202,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 205,
        "end": 243,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 240,
            "expression": {
              "type": "CallExpression",
              "start": 209,
              "end": 239,
              "callee": {
                "type": "MemberExpression",
                "start": 209,
                "end": 220,
                "object": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 216,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 220,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 221,
                  "end": 238,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 221,
                    "end": 236,
                    "object": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 224,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 236,
                      "name": "toUpperCase",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
