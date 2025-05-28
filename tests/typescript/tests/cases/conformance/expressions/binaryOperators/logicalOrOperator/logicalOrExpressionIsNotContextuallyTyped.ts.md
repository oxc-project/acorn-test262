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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 286,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 275,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 269,
                        "end": 275
                      }
                    }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 341,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 311,
            "end": 340,
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 317,
              "end": 339,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 337,
                    "decorators": [],
                    "name": "toLowerCase",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "id": null,
              "generator": false
            }
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
