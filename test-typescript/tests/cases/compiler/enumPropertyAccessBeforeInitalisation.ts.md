__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 64,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 64,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 18,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 31,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 28,
              "end": 31,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 47,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 41,
              "end": 47,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 43,
                "end": 46,
                "raw": "\"C\"",
                "value": "C"
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 53,
            "end": 62,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 57,
              "end": 62,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 57,
                "end": 58,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "D",
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
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
