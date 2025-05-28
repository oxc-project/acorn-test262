__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
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
      },
      "const": true,
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 49,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 49,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 45,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
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
