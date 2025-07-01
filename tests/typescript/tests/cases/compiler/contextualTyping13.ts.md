__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 11,
                        "end": 17
                      },
                      "start": 10,
                      "end": 17
                    },
                    "start": 9,
                    "end": 17
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 18,
                  "end": 26
                },
                "start": 8,
                "end": 26
              },
              "start": 7,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 49
                  },
                  "start": 41,
                  "end": 49
                }
              ],
              "start": 40,
              "end": 50
            },
            "expression": false,
            "start": 29,
            "end": 50
          },
          "definite": false,
          "start": 4,
          "end": 50
        }
      ],
      "declare": false,
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
