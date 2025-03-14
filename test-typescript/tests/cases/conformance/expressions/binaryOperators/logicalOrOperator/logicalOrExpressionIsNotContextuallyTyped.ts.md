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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 311,
            "end": 340,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 317,
              "end": 339,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 324,
                "end": 339,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 324,
                  "end": 337,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 337,
                    "decorators": [],
                    "name": "toLowerCase",
                    "optional": false
                  }
                },
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
