__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
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
      "end": 66,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 55,
        "end": 66,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 63,
          "end": 66,
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
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "decorators": [],
            "name": "after",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 82,
            "end": 86,
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
