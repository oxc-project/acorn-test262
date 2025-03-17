__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 128,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "name": "append",
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
          "start": 53,
          "end": 64,
          "name": "result",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 64,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 61,
              "end": 64,
              "elementType": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "name": "a",
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
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 74,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 106,
            "expression": {
              "type": "CallExpression",
              "start": 87,
              "end": 105,
              "callee": {
                "type": "MemberExpression",
                "start": 87,
                "end": 98,
                "object": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 98,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 111,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 124,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 51,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "a",
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
        "start": 75,
        "end": 80,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 77,
          "end": 80,
          "elementType": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
