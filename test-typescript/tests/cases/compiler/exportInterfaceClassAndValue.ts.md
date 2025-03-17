__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 48,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 28,
        "end": 48,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 48,
          "body": []
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 56,
        "end": 72,
        "body": {
          "type": "TSInterfaceBody",
          "start": 70,
          "end": 72,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
