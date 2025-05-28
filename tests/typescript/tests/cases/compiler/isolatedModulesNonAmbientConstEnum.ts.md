__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 24,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "value": 100,
              "raw": "100"
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 24,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 38,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 34,
            "end": 37,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 52,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 52,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
