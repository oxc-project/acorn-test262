declarationEmitFBoundedTypeParams.ts
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
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 87,
                "end": 98,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "result",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 98,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 111,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 124,
              "decorators": [],
              "name": "result",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "decorators": [],
        "name": "append",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 64,
          "decorators": [],
          "name": "result",
          "optional": false,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 74,
          "decorators": [],
          "name": "value",
          "optional": false,
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
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 51,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
