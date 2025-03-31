__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Alpha",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 38,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 37,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 37,
                    "value": 100,
                    "raw": "100"
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "name": "Beta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 81,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 60,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 71,
              "end": 78,
              "left": {
                "type": "Identifier",
                "start": 71,
                "end": 76,
                "name": "Alpha",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 92,
            "end": 99,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "name": "Alpha",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "x",
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
