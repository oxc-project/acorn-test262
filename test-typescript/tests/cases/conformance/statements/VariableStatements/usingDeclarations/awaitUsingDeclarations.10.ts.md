__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 32,
      "end": 87,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 87,
        "body": [
          {
            "type": "IfStatement",
            "start": 57,
            "end": 85,
            "alternate": null,
            "consequent": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 85,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 76,
                  "end": 84,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 80,
                    "end": 84,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "await using"
            },
            "test": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "f",
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
