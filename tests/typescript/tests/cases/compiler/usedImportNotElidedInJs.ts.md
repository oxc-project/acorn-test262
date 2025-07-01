__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moment",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 30
          },
          "start": 19,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "moment",
        "raw": "'moment'",
        "start": 36,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 12,
      "end": 45
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "rollupMoment__default",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 74
          },
          "start": 53,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "moment",
        "raw": "'moment'",
        "start": 80,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 46,
      "end": 89
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 109
            },
            "init": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rollupMoment__default",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 133
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "moment",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 143
              },
              "start": 112,
              "end": 143
            },
            "definite": false,
            "start": 103,
            "end": 143
          }
        ],
        "declare": false,
        "start": 97,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 144
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 12,
  "end": 144
}
```
