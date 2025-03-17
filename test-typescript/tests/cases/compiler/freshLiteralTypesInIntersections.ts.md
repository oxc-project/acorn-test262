__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 160,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "name": "func",
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
          "start": 75,
          "end": 79,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 79,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 81,
          "end": 87,
          "name": "b",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 109,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 90,
          "end": 109,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 91,
              "end": 100,
              "name": "ab",
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 100,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
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
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 121,
            "end": 150,
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 126,
                "end": 142,
                "expression": {
                  "type": "Literal",
                  "start": 126,
                  "end": 129,
                  "value": "x",
                  "raw": "\"x\""
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
                        "value": "x",
                        "raw": "\"x\""
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
                        "value": "y",
                        "raw": "\"y\""
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
                    "value": "x",
                    "raw": "\"x\""
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 158,
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "name": "q",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 154,
            "end": 157,
            "value": "x",
            "raw": "\"x\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
