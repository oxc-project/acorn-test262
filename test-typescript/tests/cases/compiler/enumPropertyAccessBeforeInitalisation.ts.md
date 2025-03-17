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
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 24,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 28,
            "end": 31,
            "object": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 37,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 41,
            "end": 47,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 43,
              "end": 46,
              "value": "C",
              "raw": "\"C\""
            },
            "computed": true,
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 53,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 57,
            "end": 62,
            "left": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "end": 64,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 31,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 28,
              "end": 31,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 41,
              "end": 47,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 43,
                "end": 46,
                "value": "C",
                "raw": "\"C\""
              },
              "computed": true,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 53,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 57,
              "end": 62,
              "left": {
                "type": "Literal",
                "start": 57,
                "end": 58,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
