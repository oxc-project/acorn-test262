__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 41,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 39,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 39,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 50,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 50,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 48,
          "name": "global",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
