__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 144,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 12,
      "end": 45,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 19,
          "end": 30,
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "moment",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 44,
        "value": "moment",
        "raw": "'moment'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 89,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 53,
          "end": 74,
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 74,
            "decorators": [],
            "name": "rollupMoment__default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 88,
        "value": "moment",
        "raw": "'moment'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 144,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 97,
        "end": 144,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "decorators": [],
              "name": "moment",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "LogicalExpression",
              "start": 112,
              "end": 143,
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 133,
                "decorators": [],
                "name": "rollupMoment__default",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "decorators": [],
                "name": "moment",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
