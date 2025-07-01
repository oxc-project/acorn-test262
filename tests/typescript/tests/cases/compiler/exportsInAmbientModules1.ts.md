__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                },
                "start": 12,
                "end": 20
              },
              "start": 11,
              "end": 20
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 20
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "M",
        "raw": "\"M\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "exportKind": "value",
                "start": 33,
                "end": 34
              }
            ],
            "source": {
              "type": "Literal",
              "value": "external",
              "raw": "\"external\"",
              "start": 41,
              "end": 51
            },
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 51
          }
        ],
        "start": 19,
        "end": 53
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
