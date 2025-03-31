__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 35,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 35,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 34,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 29,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 34,
                    "value": 10,
                    "raw": "10"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 50,
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 50,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 64,
            "end": 69,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 66,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
