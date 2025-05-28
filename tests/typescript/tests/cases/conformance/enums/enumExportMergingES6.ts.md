__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 32,
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
          "end": 32,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 30,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "value": 1,
                "raw": "1"
              },
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
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 65,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 40,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 52,
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 53,
          "end": 65,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 56,
              "end": 63,
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 59,
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "value": 2,
                "raw": "2"
              },
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
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 109,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 73,
        "end": 109,
        "id": {
          "type": "Identifier",
          "start": 78,
          "end": 85,
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 86,
          "end": 109,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 89,
              "end": 107,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 95,
                "decorators": [],
                "name": "CatDog",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "BinaryExpression",
                "start": 98,
                "end": 107,
                "left": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 101,
                  "decorators": [],
                  "name": "Cat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "|",
                "right": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 107,
                  "decorators": [],
                  "name": "Dog",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
