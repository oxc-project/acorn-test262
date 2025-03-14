usingDeclarationsWithLegacyClassDecorators.6.ts
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
      "type": "VariableDeclaration",
      "start": 35,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "before",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 50,
            "end": 54,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 73,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 57,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 93,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 84,
          "end": 90,
          "exported": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "D",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
