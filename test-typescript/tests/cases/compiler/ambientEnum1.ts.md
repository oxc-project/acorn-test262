__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 143,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 4,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 30,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 34,
            "end": 38,
            "value": 4.23,
            "raw": "4.23"
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 44,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 34,
              "end": 38,
              "value": 4.23,
              "raw": "4.23"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 95,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 121,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 125,
            "end": 137,
            "object": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "value": "foo",
              "raw": "'foo'"
            },
            "property": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 111,
        "end": 143,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 121,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 125,
              "end": 137,
              "object": {
                "type": "Literal",
                "start": 125,
                "end": 130,
                "value": "foo",
                "raw": "'foo'"
              },
              "property": {
                "type": "Identifier",
                "start": 131,
                "end": 137,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
