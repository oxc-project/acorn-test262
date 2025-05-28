__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 11,
            "end": 42,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 11,
              "end": 14,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 12,
                  "end": 13,
                  "name": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 27,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 19,
                "end": 26,
                "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "body": {
              "type": "TSAsExpression",
              "start": 31,
              "end": 42,
              "expression": {
                "type": "Literal",
                "start": 31,
                "end": 35,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
