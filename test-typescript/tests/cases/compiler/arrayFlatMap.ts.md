__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 21,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 21,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 13,
                "end": 21,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 13,
                  "end": 19
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 24,
            "end": 26,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 70,
            "decorators": [],
            "name": "readonlyArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 70,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 62,
                  "end": 70,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 62,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 75,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 124,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 123,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 91,
            "end": 122,
            "async": false,
            "body": {
              "type": "ArrayExpression",
              "start": 120,
              "end": 122,
              "elements": []
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 116,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 108,
                  "end": 116,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 108,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 90,
            "decorators": [],
            "name": "flatMap",
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
      "start": 131,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 185,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 184,
            "async": false,
            "body": {
              "type": "ArrayExpression",
              "start": 182,
              "end": 184,
              "elements": []
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 178,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 170,
                  "end": 178,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 171,
                      "end": 177
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 170,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 131,
          "end": 152,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 131,
            "end": 144,
            "decorators": [],
            "name": "readonlyArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 152,
            "decorators": [],
            "name": "flatMap",
            "optional": false,
            "typeAnnotation": null
          }
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
