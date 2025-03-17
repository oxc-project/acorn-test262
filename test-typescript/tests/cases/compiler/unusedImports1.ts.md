__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 28,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 28,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "Calculator",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
