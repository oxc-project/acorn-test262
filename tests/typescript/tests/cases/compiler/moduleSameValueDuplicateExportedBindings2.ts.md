__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 14,
        "end": 19
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 20
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./c",
        "raw": "\"./c\"",
        "start": 35,
        "end": 40
      },
      "attributes": [],
      "exportKind": "value",
      "start": 21,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "Animals",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animals",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "exportKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./c",
        "raw": "\"./c\"",
        "start": 22,
        "end": 27
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 19
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 26
              },
              "initializer": null,
              "computed": false,
              "start": 23,
              "end": 26
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 32
              },
              "initializer": null,
              "computed": false,
              "start": 29,
              "end": 32
            }
          ],
          "start": 20,
          "end": 34
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    },
    {
      "type": "EmptyStatement",
      "start": 34,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
