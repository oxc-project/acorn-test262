__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 33,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 33,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 26,
              "end": 33,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "T",
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
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 39,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 84,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 45,
            "end": 57,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 48,
                "decorators": [],
                "name": "e1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 50,
                "end": 52,
                "decorators": [],
                "name": "e2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 54,
                "end": 56,
                "decorators": [],
                "name": "e3",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 60,
            "end": 84,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 62,
                "end": 83,
                "async": false,
                "body": {
                  "type": "ArrayExpression",
                  "start": 68,
                  "end": 83,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 69,
                      "end": 70,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 72,
                      "end": 76,
                      "raw": "\"hi\"",
                      "value": "hi"
                    },
                    {
                      "type": "Literal",
                      "start": 78,
                      "end": 82,
                      "raw": "true",
                      "value": true
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
