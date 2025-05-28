__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 8,
        "end": 31,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "c",
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
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 41,
        "end": 83,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 63,
              "end": 68,
              "left": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 67,
                "end": 68,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 74,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 78,
              "end": 80,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 85,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 92,
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 93,
        "end": 139,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 99,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 103,
              "end": 105,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 111,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 115,
              "end": 122,
              "object": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 122,
                "decorators": [],
                "name": "PI",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 128,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 132,
              "end": 137,
              "left": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 136,
                "end": 137,
                "value": 3,
                "raw": "3"
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 141,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 149,
        "end": 191,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 155,
            "end": 156,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 162,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 169,
            "end": 170,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 176,
            "end": 182,
            "id": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 180,
              "end": 182,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 188,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "e",
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
    {
      "type": "TSEnumDeclaration",
      "start": 193,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 200,
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 201,
        "end": 267,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 207,
            "end": 215,
            "id": {
              "type": "Literal",
              "start": 207,
              "end": 215,
              "value": "Friday",
              "raw": "\"Friday\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 221,
            "end": 231,
            "id": {
              "type": "Literal",
              "start": 221,
              "end": 231,
              "value": "Saturday",
              "raw": "\"Saturday\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 237,
            "end": 245,
            "id": {
              "type": "Literal",
              "start": 237,
              "end": 245,
              "value": "Sunday",
              "raw": "\"Sunday\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 251,
            "end": 265,
            "id": {
              "type": "Literal",
              "start": 251,
              "end": 265,
              "value": "Weekend days",
              "raw": "\"Weekend days\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
