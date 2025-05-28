__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 76,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 75,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 62,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 75,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 124,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 123,
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 90,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 90,
            "decorators": [],
            "name": "flatMap",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 91,
            "end": 122,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 108,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "body": {
              "type": "ArrayExpression",
              "start": 120,
              "end": 122,
              "elements": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 185,
        "callee": {
          "type": "MemberExpression",
          "start": 131,
          "end": 152,
          "object": {
            "type": "Identifier",
            "start": 131,
            "end": 144,
            "decorators": [],
            "name": "readonlyArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 152,
            "decorators": [],
            "name": "flatMap",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 184,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 170,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "body": {
              "type": "ArrayExpression",
              "start": 182,
              "end": 184,
              "elements": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
