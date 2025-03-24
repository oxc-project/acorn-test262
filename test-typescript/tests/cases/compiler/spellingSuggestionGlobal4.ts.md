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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 39,
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 39,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 37,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 37,
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 48,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 40,
        "end": 48,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 40,
          "end": 46,
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
