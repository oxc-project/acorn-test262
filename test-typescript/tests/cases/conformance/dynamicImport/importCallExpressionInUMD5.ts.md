__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 39,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 36,
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
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
  "end": 179,
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
                  "optional": false,
                  "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
