__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 32,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "name": "before",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 50,
            "end": 54,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "using",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 62,
      "end": 88,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 77,
        "end": 88,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 85,
          "end": 88,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 57,
            "end": 61,
            "expression": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
