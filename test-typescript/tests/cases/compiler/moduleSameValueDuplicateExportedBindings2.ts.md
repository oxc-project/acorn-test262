__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./b\"",
        "value": "./b",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 21,
      "end": 41,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 40,
        "raw": "\"./c\"",
        "value": "./c",
        "regex": null,
        "bigint": null
      }
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
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"./c\"",
        "value": "./c",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 15,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Animals",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Animals",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 34,
        "body": {
          "type": "TSEnumBody",
          "start": 20,
          "end": 34,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 26,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 29,
              "end": 32,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 32,
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 34,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
