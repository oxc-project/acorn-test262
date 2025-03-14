parseArrowFunctionWithFunctionReturnType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 11,
            "end": 42,
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "start": 31,
              "end": 42,
              "expression": {
                "type": "Literal",
                "start": 31,
                "end": 35,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 27,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 19,
                "end": 26,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 25,
                    "end": 26,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            },
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
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
