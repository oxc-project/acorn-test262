__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
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
            "optional": false,
            "typeAnnotation": null
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
      "type": "ExportDefaultDeclaration",
      "start": 62,
      "end": 86,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 77,
        "end": 86,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 83,
          "end": 86,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": null,
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
