__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
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
      "start": 11,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
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
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 125,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 125,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 104,
          "end": 121,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ClassExpression",
            "start": 108,
            "end": 121,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 119,
              "end": 121,
              "body": []
            },
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 108,
                "end": 112,
                "expression": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 112,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ]
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
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
