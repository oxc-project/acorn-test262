__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 93,
  "end": 173,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 93,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 100,
        "decorators": [],
        "name": "U8",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 101,
        "end": 163,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 107,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "BIT_0",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 115,
              "end": 121,
              "left": {
                "type": "Literal",
                "start": 115,
                "end": 116,
                "value": 1,
                "raw": "1"
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 120,
                "end": 121,
                "value": 0,
                "raw": "0"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 127,
            "end": 141,
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 132,
              "decorators": [],
              "name": "BIT_1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 135,
              "end": 141,
              "left": {
                "type": "Literal",
                "start": 135,
                "end": 136,
                "value": 1,
                "raw": "1"
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 140,
                "end": 141,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 147,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "decorators": [],
              "name": "BIT_2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 155,
              "end": 161,
              "left": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "value": 1,
                "raw": "1"
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 160,
                "end": 161,
                "value": 2,
                "raw": "2"
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
      "type": "ExpressionStatement",
      "start": 165,
      "end": 173,
      "expression": {
        "type": "MemberExpression",
        "start": 165,
        "end": 173,
        "object": {
          "type": "Identifier",
          "start": 165,
          "end": 167,
          "decorators": [],
          "name": "U8",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 168,
          "end": 173,
          "decorators": [],
          "name": "bit_2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
