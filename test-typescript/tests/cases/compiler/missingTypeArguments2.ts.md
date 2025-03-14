__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 30,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 23,
                "end": 30,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 29,
                    "end": 30,
                    "typeName": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
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
      "start": 32,
      "end": 46,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 32,
        "end": 45,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 42,
          "end": 45,
          "body": []
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 37,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 58,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 55,
                  "end": 58,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 56,
                      "end": 57,
                      "typeName": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "start": 60,
      "end": 74,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 60,
        "end": 73,
        "async": false,
        "body": {
          "type": "Literal",
          "start": 69,
          "end": 73,
          "raw": "null",
          "value": null
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 62,
          "end": 65,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 64,
            "end": 65,
            "typeName": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
