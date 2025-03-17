__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 23,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 27,
            "end": 28,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 21,
        "end": 29,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 49,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 45,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
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
