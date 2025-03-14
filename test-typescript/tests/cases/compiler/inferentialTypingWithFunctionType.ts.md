__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 52,
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
          "start": 27,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 31,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 47,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 47,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 36,
              "end": 47,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 40,
                      "end": 41,
                      "typeName": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
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
                "start": 43,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 47,
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
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
        "start": 48,
        "end": 51,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 50,
          "end": 51,
          "typeName": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 91,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "decorators": [],
        "name": "identity",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 86,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 86,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 87,
        "end": 90,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 89,
          "end": 90,
          "typeName": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "V",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 78,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 101,
            "end": 118,
            "arguments": [
              {
                "type": "Literal",
                "start": 105,
                "end": 107,
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Identifier",
                "start": 109,
                "end": 117,
                "decorators": [],
                "name": "identity",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
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
  "sourceType": "script",
  "hashbang": null
}
```
