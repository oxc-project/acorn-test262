selfReference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 50,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "asFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 39,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 39,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
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
        "start": 40,
        "end": 49,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 42,
          "end": 49,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
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
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 83,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 82,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 81,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 68,
              "end": 81,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 70,
                  "end": 79,
                  "argument": {
                    "type": "Literal",
                    "start": 77,
                    "end": 78,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 61,
          "decorators": [],
          "name": "asFunction",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
