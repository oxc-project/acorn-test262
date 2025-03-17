__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 144,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 69,
            "end": 142,
            "async": false,
            "body": {
              "type": "ChainExpression",
              "start": 121,
              "end": 142,
              "expression": {
                "type": "CallExpression",
                "start": 121,
                "end": 142,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 135,
                    "end": 141,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 121,
                  "end": 134,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 126,
                    "decorators": [],
                    "name": "names",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 134,
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 85,
                "decorators": [],
                "name": "names",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 77,
                    "end": 85,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
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
