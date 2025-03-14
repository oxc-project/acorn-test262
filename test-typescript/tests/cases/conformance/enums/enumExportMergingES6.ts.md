__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 32,
        "body": {
          "type": "TSEnumBody",
          "start": 20,
          "end": 32,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 30,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "Cat",
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "raw": "1",
                "value": 1
              }
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
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 40,
        "end": 65,
        "body": {
          "type": "TSEnumBody",
          "start": 53,
          "end": 65,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 56,
              "end": 63,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 59,
                "decorators": [],
                "name": "Dog",
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "raw": "2",
                "value": 2
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 52,
          "decorators": [],
          "name": "Animals",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 109,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 73,
        "end": 109,
        "body": {
          "type": "TSEnumBody",
          "start": 86,
          "end": 109,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 89,
              "end": 107,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 95,
                "decorators": [],
                "name": "CatDog",
                "optional": false
              },
              "initializer": {
                "type": "BinaryExpression",
                "start": 98,
                "end": 107,
                "operator": "|",
                "left": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 101,
                  "decorators": [],
                  "name": "Cat",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 107,
                  "decorators": [],
                  "name": "Dog",
                  "optional": false
                }
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 78,
          "end": 85,
          "decorators": [],
          "name": "Animals",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
