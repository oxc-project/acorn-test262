__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 37
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "POINT",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 62,
                        "end": 68
                      },
                      "start": 60,
                      "end": 68
                    },
                    "start": 55,
                    "end": 68
                  },
                  "init": null,
                  "definite": false,
                  "start": 55,
                  "end": 68
                }
              ],
              "declare": false,
              "start": 49,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 42,
            "end": 69
          }
        ],
        "start": 38,
        "end": 71
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 11,
      "end": 71
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 95
      },
      "exportKind": "value",
      "start": 72,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 97
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": null,
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
                "value": "Point",
                "raw": "'Point'",
                "start": 90,
                "end": 97
              },
              "start": 31,
              "end": 99
            }
          ],
          "start": 27,
          "end": 101
        },
        "expression": false,
        "start": 15,
        "end": 101
      },
      "exportKind": "value",
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
