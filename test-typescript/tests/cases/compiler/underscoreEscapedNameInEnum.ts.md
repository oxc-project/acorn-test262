__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 24,
          "id": {
            "type": "Literal",
            "start": 13,
            "end": 20,
            "value": "__foo",
            "raw": "\"__foo\""
          },
          "initializer": {
            "type": "Literal",
            "start": 23,
            "end": 24,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 30,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 36,
            "end": 50,
            "left": {
              "type": "MemberExpression",
              "start": 36,
              "end": 46,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 38,
                "end": 45,
                "value": "__foo",
                "raw": "\"__foo\""
              },
              "computed": true,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 49,
              "end": 50,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 52,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Literal",
              "start": 13,
              "end": 20,
              "value": "__foo",
              "raw": "\"__foo\""
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 36,
              "end": 50,
              "left": {
                "type": "MemberExpression",
                "start": 36,
                "end": 46,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 38,
                  "end": 45,
                  "value": "__foo",
                  "raw": "\"__foo\""
                },
                "computed": true,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 49,
                "end": 50,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
