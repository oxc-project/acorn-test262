recursiveGenericSignatureInstantiation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 40,
            "argument": {
              "type": "CallExpression",
              "start": 34,
              "end": 39,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 34,
                "end": 36,
                "decorators": [],
                "name": "f6",
                "optional": false
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
        "end": 11,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
