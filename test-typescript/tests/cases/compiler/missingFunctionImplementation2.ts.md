__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 99,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 62,
        "value": "./missingFunctionImplementation2_b",
        "raw": "\"./missingFunctionImplementation2_b\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 99,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 67,
            "end": 97,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 74,
              "end": 97,
              "id": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 90,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 92,
                  "end": 96
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
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
