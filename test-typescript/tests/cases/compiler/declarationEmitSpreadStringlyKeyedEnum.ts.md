__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "AgeGroups",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 17,
          "end": 23,
          "id": {
            "type": "Literal",
            "start": 17,
            "end": 23,
            "value": "0-17",
            "raw": "\"0-17\""
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 26,
          "end": 33,
          "id": {
            "type": "Literal",
            "start": 26,
            "end": 33,
            "value": "18-22",
            "raw": "\"18-22\""
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 36,
          "end": 43,
          "id": {
            "type": "Literal",
            "start": 36,
            "end": 43,
            "value": "23-27",
            "raw": "\"23-27\""
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 46,
          "end": 53,
          "id": {
            "type": "Literal",
            "start": 46,
            "end": 53,
            "value": "28-34",
            "raw": "\"28-34\""
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 56,
          "end": 63,
          "id": {
            "type": "Literal",
            "start": 56,
            "end": 63,
            "value": "35-44",
            "raw": "\"35-44\""
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 66,
          "end": 73,
          "id": {
            "type": "Literal",
            "start": 66,
            "end": 73,
            "value": "45-59",
            "raw": "\"45-59\""
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 76,
          "end": 84,
          "id": {
            "type": "Literal",
            "start": 76,
            "end": 84,
            "value": "60-150",
            "raw": "\"60-150\""
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 86,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 23,
            "id": {
              "type": "Literal",
              "start": 17,
              "end": 23,
              "value": "0-17",
              "raw": "\"0-17\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "id": {
              "type": "Literal",
              "start": 26,
              "end": 33,
              "value": "18-22",
              "raw": "\"18-22\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 36,
            "end": 43,
            "id": {
              "type": "Literal",
              "start": 36,
              "end": 43,
              "value": "23-27",
              "raw": "\"23-27\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 53,
            "id": {
              "type": "Literal",
              "start": 46,
              "end": 53,
              "value": "28-34",
              "raw": "\"28-34\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 63,
            "id": {
              "type": "Literal",
              "start": 56,
              "end": 63,
              "value": "35-44",
              "raw": "\"35-44\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 73,
            "id": {
              "type": "Literal",
              "start": 66,
              "end": 73,
              "value": "45-59",
              "raw": "\"45-59\""
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 76,
            "end": 84,
            "id": {
              "type": "Literal",
              "start": 76,
              "end": 84,
              "value": "60-150",
              "raw": "\"60-150\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 139,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 94,
        "end": 139,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 100,
            "end": 138,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 119,
              "name": "SpotifyAgeGroupEnum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 122,
              "end": 138,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 124,
                  "end": 136,
                  "argument": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 136,
                    "name": "AgeGroups",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
