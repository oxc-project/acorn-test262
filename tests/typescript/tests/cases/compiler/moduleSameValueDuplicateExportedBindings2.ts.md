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
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 21,
      "end": 41,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 40,
        "value": "./c",
        "raw": "\"./c\""
      },
      "attributes": [],
      "exportKind": "value"
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Animals",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Animals",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "./c",
        "raw": "\"./c\""
      },
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
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 34,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 20,
          "end": 34,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 26,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 29,
              "end": 32,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 32,
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
