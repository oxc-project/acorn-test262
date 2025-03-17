__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 32,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 51,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 35,
          "end": 39,
          "expression": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 71,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 62,
          "end": 68,
          "exported": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 84,
            "decorators": [],
            "name": "after",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 87,
            "end": 91,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "using"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
