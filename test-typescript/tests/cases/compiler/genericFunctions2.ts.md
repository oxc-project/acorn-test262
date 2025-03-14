genericFunctions2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 63,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "map",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 40,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 37,
              "end": 40,
              "elementType": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 56,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 56,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 45,
              "end": 56,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 50,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 49,
                      "end": 50,
                      "typeName": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 62,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 59,
          "end": 62,
          "elementType": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 26,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 86,
            "decorators": [],
            "name": "myItems",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 86,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 78,
                "end": 86,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 78,
                  "end": 84
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
      "type": "VariableDeclaration",
      "start": 88,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 99,
            "decorators": [],
            "name": "lengths",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 129,
            "arguments": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 113,
                "decorators": [],
                "name": "myItems",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 115,
                "end": 128,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 120,
                  "end": 128,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 128,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
