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
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 15,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": true,
      "declare": false,
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
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 34,
            "end": 37,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 52,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 52,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
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
