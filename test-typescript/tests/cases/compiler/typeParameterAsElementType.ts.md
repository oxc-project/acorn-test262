__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 58,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 58,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 32,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 31,
                      "end": 32,
                      "typeName": {
                        "type": "Identifier",
                        "start": 31,
                        "end": 32,
                        "decorators": [],
                        "name": "T",
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
            "type": "VariableDeclaration",
            "start": 38,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 42,
                "end": 55,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 48,
                  "end": 55,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "t",
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 52,
                      "end": 54,
                      "raw": "\"\"",
                      "value": ""
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
        "name": "fee",
        "optional": false
      },
      "params": [],
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
  "sourceType": "script",
  "hashbang": null
}
```
