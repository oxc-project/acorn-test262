__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 57,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 17,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 24,
        "end": 56,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 39,
          "end": 56,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 41,
              "end": 54,
              "argument": {
                "type": "Literal",
                "start": 48,
                "end": 53,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 36,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 180,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 179,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 179,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 108,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 90,
                "end": 107,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 101,
                  "decorators": [],
                  "name": "packageName",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 104,
                  "end": 107,
                  "raw": "'.'",
                  "value": "."
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 119,
                "end": 176,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 130,
                  "decorators": [],
                  "name": "packageJson",
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 133,
                  "end": 176,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 139,
                    "end": 176,
                    "options": null,
                    "source": {
                      "type": "BinaryExpression",
                      "start": 146,
                      "end": 175,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 157,
                        "decorators": [],
                        "name": "packageName",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 160,
                        "end": 175,
                        "raw": "'/package.json'",
                        "value": "/package.json"
                      }
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "func",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
