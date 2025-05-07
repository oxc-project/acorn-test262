__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 159,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 110,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 79,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 79,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 81,
          "end": 87,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 87,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 84,
              "end": 87,
              "elementType": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 109,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 90,
          "end": 109,
          "params": [
            {
              "type": "Identifier",
              "start": 91,
              "end": 100,
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 95,
                  "end": 100,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 95,
                      "end": 96,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 100,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 109,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 105,
              "end": 109
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 60,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 73,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 121,
            "end": 150,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 126,
                "end": 142,
                "expression": {
                  "type": "Literal",
                  "start": 126,
                  "end": 129,
                  "raw": "\"x\"",
                  "value": "x",
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 133,
                  "end": 142,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 133,
                      "end": 136,
                      "literal": {
                        "type": "Literal",
                        "start": 133,
                        "end": 136,
                        "raw": "\"x\"",
                        "value": "x",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 139,
                      "end": 142,
                      "literal": {
                        "type": "Literal",
                        "start": 139,
                        "end": 142,
                        "raw": "\"y\"",
                        "value": "y",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "ArrayExpression",
                "start": 144,
                "end": 149,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 145,
                    "end": 148,
                    "raw": "\"x\"",
                    "value": "x",
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 159,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 158,
        "arguments": [
          {
            "type": "Literal",
            "start": 154,
            "end": 157,
            "raw": "\"x\"",
            "value": "x",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
