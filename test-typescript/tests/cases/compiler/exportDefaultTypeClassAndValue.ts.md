__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 14,
      "end": 32,
      "declaration": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 33,
      "end": 60,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 48,
        "end": 60,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 60,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 72,
        "end": 74,
        "members": []
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 75,
      "end": 93,
      "declaration": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
