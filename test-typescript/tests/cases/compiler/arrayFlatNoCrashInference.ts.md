arrayFlatNoCrashInference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 72,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 47,
            "end": 70,
            "argument": {
              "type": "CallExpression",
              "start": 54,
              "end": 69,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 68,
                  "decorators": [],
                  "name": "depth",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 54,
                "end": 62,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "decorators": [],
                  "name": "flat",
                  "optional": false
                }
              },
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 24,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 21,
              "end": 24,
              "elementType": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 22,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
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
          "start": 26,
          "end": 39,
          "decorators": [],
          "name": "depth",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
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
