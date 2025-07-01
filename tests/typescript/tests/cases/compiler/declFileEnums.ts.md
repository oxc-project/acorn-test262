__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "initializer": null,
            "computed": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 8,
        "end": 31
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 51,
              "end": 53
            },
            "computed": false,
            "start": 47,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 67,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "computed": false,
            "start": 59,
            "end": 68
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 78,
              "end": 80
            },
            "computed": false,
            "start": 74,
            "end": 80
          }
        ],
        "start": 41,
        "end": 83
      },
      "const": false,
      "declare": false,
      "start": 33,
      "end": 83
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 92
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 103,
              "end": 105
            },
            "computed": false,
            "start": 99,
            "end": 105
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 119
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "PI",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 122
              },
              "optional": false,
              "computed": false,
              "start": 115,
              "end": 122
            },
            "computed": false,
            "start": 111,
            "end": 122
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 136,
                "end": 137
              },
              "start": 132,
              "end": 137
            },
            "computed": false,
            "start": 128,
            "end": 137
          }
        ],
        "start": 93,
        "end": 139
      },
      "const": false,
      "declare": false,
      "start": 85,
      "end": 139
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "initializer": null,
            "computed": false,
            "start": 155,
            "end": 156
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "initializer": null,
            "computed": false,
            "start": 162,
            "end": 163
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "initializer": null,
            "computed": false,
            "start": 169,
            "end": 170
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 180,
              "end": 182
            },
            "computed": false,
            "start": 176,
            "end": 182
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "initializer": null,
            "computed": false,
            "start": 188,
            "end": 189
          }
        ],
        "start": 149,
        "end": 191
      },
      "const": false,
      "declare": false,
      "start": 141,
      "end": 191
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 200
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Friday",
              "raw": "\"Friday\"",
              "start": 207,
              "end": 215
            },
            "initializer": null,
            "computed": false,
            "start": 207,
            "end": 215
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Saturday",
              "raw": "\"Saturday\"",
              "start": 221,
              "end": 231
            },
            "initializer": null,
            "computed": false,
            "start": 221,
            "end": 231
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Sunday",
              "raw": "\"Sunday\"",
              "start": 237,
              "end": 245
            },
            "initializer": null,
            "computed": false,
            "start": 237,
            "end": 245
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Weekend days",
              "raw": "\"Weekend days\"",
              "start": 251,
              "end": 265
            },
            "initializer": null,
            "computed": false,
            "start": 251,
            "end": 265
          }
        ],
        "start": 201,
        "end": 267
      },
      "const": false,
      "declare": false,
      "start": 193,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 269
}
```
