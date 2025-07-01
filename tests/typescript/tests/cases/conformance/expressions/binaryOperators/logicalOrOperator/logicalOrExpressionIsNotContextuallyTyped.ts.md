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
            "name": "a",
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
                        "type": "TSStringKeyword",
                        "start": 269,
                        "end": 275
                      },
                      "start": 267,
                      "end": 275
                    },
                    "start": 266,
                    "end": 275
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 280,
                    "end": 286
                  },
                  "start": 277,
                  "end": 286
                },
                "start": 265,
                "end": 286
              },
              "start": 263,
              "end": 286
            },
            "start": 262,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 262,
          "end": 286
        }
      ],
      "declare": false,
      "start": 258,
      "end": 287
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 308
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 312
            },
            "operator": "||",
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 319
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 325
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toLowerCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 337
                  },
                  "optional": false,
                  "computed": false,
                  "start": 324,
                  "end": 337
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 324,
                "end": 339
              },
              "id": null,
              "generator": false,
              "start": 317,
              "end": 339
            },
            "start": 311,
            "end": 340
          },
          "definite": false,
          "start": 307,
          "end": 340
        }
      ],
      "declare": false,
      "start": 303,
      "end": 341
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 258,
  "end": 341
}
```
