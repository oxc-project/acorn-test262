__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 39,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 37,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 37,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
      "start": 40,
      "end": 48,
      "expression": {
        "type": "MemberExpression",
        "start": 40,
        "end": 48,
        "object": {
          "type": "Identifier",
          "start": 40,
          "end": 46,
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
