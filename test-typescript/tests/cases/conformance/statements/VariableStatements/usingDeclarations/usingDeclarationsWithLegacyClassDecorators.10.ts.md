__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
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
      "type": "ExportDefaultDeclaration",
      "start": 40,
      "end": 64,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 55,
        "end": 64,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 61,
          "end": 64,
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
              "optional": false
            }
          }
        ],
        "id": null,
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "decorators": [],
            "name": "after",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 84,
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
