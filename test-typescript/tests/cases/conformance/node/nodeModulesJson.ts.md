__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 40,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "oops",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 33,
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 39,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          }
        }
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
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 26,
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 26,
                "members": []
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 28,
      "end": 52,
      "declaration": {
        "type": "Identifier",
        "start": 43,
        "end": 51,
        "decorators": [],
        "name": "_default",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
