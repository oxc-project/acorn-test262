__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 37
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 40,
                      "end": 42
                    },
                    "definite": false,
                    "start": 36,
                    "end": 42
                  }
                ],
                "declare": false,
                "start": 32,
                "end": 43
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 43
            }
          ],
          "start": 19,
          "end": 45
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 65
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "start": 83,
                "end": 86
              },
              "importKind": "value",
              "start": 72,
              "end": 87
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bVal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 107
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "definite": false,
                    "start": 103,
                    "end": 111
                  }
                ],
                "declare": false,
                "start": 99,
                "end": 112
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 92,
              "end": 112
            }
          ],
          "start": 66,
          "end": 114
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 54,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 47,
      "end": 114
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "optional": false,
              "computed": false,
              "start": 131,
              "end": 134
            },
            "definite": false,
            "start": 127,
            "end": 134
          }
        ],
        "declare": false,
        "start": 123,
        "end": 135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 116,
      "end": 135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
