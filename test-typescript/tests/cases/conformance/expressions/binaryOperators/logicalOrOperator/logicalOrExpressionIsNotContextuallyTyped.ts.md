__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 258,
  "end": 341,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 286,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 286,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 265,
                "end": 286,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 266,
                    "end": 275,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 275,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 269,
                        "end": 275
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 277,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 280,
                    "end": 286
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 311,
            "end": 340,
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 317,
              "end": 339,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 324,
                "end": 339,
                "callee": {
                  "type": "MemberExpression",
                  "start": 324,
                  "end": 337,
                  "object": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 337,
                    "name": "toLowerCase",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
