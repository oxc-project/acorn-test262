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
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 69,
            "end": 142,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 85,
                "name": "names",
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ChainExpression",
              "start": 121,
              "end": 142,
              "expression": {
                "type": "CallExpression",
                "start": 121,
                "end": 142,
                "callee": {
                  "type": "MemberExpression",
                  "start": 121,
                  "end": 134,
                  "object": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 126,
                    "name": "names",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 134,
                    "name": "filter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 135,
                    "end": 141,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
