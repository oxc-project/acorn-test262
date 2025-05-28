__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 86,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 5,
        "value": 1,
        "raw": "1"
      },
      "consequent": {
        "type": "TSEnumDeclaration",
        "start": 11,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 24,
          "end": 27,
          "members": []
        },
        "const": true,
        "declare": false
      },
      "alternate": {
        "type": "IfStatement",
        "start": 33,
        "end": 86,
        "test": {
          "type": "Literal",
          "start": 37,
          "end": 38,
          "value": 2,
          "raw": "2"
        },
        "consequent": {
          "type": "TSEnumDeclaration",
          "start": 44,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "body": {
            "type": "TSEnumBody",
            "start": 57,
            "end": 60,
            "members": []
          },
          "const": true,
          "declare": false
        },
        "alternate": {
          "type": "TSEnumDeclaration",
          "start": 70,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "body": {
            "type": "TSEnumBody",
            "start": 83,
            "end": 86,
            "members": []
          },
          "const": true,
          "declare": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
