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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 24,
        "end": 56,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 36,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 101,
                  "name": "packageName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 104,
                  "end": 107,
                  "value": ".",
                  "raw": "'.'"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 130,
                  "name": "packageJson",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "source": {
                      "type": "BinaryExpression",
                      "start": 146,
                      "end": 175,
                      "left": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 157,
                        "name": "packageName",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 160,
                        "end": 175,
                        "value": "/package.json",
                        "raw": "'/package.json'"
                      }
                    },
                    "options": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
