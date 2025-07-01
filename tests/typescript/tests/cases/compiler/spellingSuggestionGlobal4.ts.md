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
            "kind": "var",
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
                      "start": 34,
                      "end": 37
                    },
                    "start": 32,
                    "end": 37
                  },
                  "start": 31,
                  "end": 37
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 37
              }
            ],
            "declare": false,
            "start": 27,
            "end": 37
          }
        ],
        "start": 25,
        "end": 39
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 10,
      "end": 39
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
          "start": 40,
          "end": 46
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 48
        },
        "optional": false,
        "computed": false,
        "start": 40,
        "end": 48
      },
      "directive": null,
      "start": 40,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
