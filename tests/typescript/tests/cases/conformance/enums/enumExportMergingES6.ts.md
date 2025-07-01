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
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 29,
                "end": 30
              },
              "computed": false,
              "start": 23,
              "end": 30
            }
          ],
          "start": 20,
          "end": 32
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
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
          "start": 45,
          "end": 52
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 59
              },
              "initializer": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 62,
                "end": 63
              },
              "computed": false,
              "start": 56,
              "end": 63
            }
          ],
          "start": 53,
          "end": 65
        },
        "const": false,
        "declare": false,
        "start": 40,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 65
    },
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
          "start": 78,
          "end": 85
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CatDog",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 95
              },
              "initializer": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 101
                },
                "operator": "|",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 107
                },
                "start": 98,
                "end": 107
              },
              "computed": false,
              "start": 89,
              "end": 107
            }
          ],
          "start": 86,
          "end": 109
        },
        "const": false,
        "declare": false,
        "start": 73,
        "end": 109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
