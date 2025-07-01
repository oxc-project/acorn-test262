__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 31,
                "end": 36
              },
              "start": 24,
              "end": 37
            }
          ],
          "start": 22,
          "end": 39
        },
        "expression": false,
        "start": 7,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 75
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "packageName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 101
                },
                "init": {
                  "type": "Literal",
                  "value": ".",
                  "raw": "'.'",
                  "start": 104,
                  "end": 107
                },
                "definite": false,
                "start": 90,
                "end": 107
              }
            ],
            "declare": false,
            "start": 84,
            "end": 108
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "packageJson",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 130
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "packageName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 157
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "/package.json",
                        "raw": "'/package.json'",
                        "start": 160,
                        "end": 175
                      },
                      "start": 146,
                      "end": 175
                    },
                    "options": null,
                    "phase": null,
                    "start": 139,
                    "end": 176
                  },
                  "start": 133,
                  "end": 176
                },
                "definite": false,
                "start": 119,
                "end": 176
              }
            ],
            "declare": false,
            "start": 113,
            "end": 177
          }
        ],
        "start": 78,
        "end": 179
      },
      "expression": false,
      "start": 56,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 179
}
```
