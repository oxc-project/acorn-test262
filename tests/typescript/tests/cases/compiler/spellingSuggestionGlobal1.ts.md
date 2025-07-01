__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    },
                    "start": 34,
                    "end": 39
                  },
                  "start": 33,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 33,
                "end": 39
              }
            ],
            "declare": false,
            "start": 27,
            "end": 39
          }
        ],
        "start": 25,
        "end": 41
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 10,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 48
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 50
        },
        "optional": false,
        "computed": false,
        "start": 42,
        "end": 50
      },
      "directive": null,
      "start": 42,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
