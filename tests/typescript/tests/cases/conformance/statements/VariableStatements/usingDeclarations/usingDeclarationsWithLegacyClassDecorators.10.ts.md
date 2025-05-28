__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 32,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 40,
      "end": 64,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 55,
        "end": 64,
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
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 61,
          "end": 64,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 85,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "decorators": [],
            "name": "after",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 84,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
