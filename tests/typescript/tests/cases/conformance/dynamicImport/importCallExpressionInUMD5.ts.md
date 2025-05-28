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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 179,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 108,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 90,
                "end": 107,
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
                  "value": ".",
                  "raw": "'.'"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 177,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 119,
                "end": 176,
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
                    "source": {
                      "type": "BinaryExpression",
                      "start": 146,
                      "end": 175,
                      "left": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 157,
                        "decorators": [],
                        "name": "packageName",
                        "optional": false,
                        "typeAnnotation": null
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
                    "options": null,
                    "phase": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
