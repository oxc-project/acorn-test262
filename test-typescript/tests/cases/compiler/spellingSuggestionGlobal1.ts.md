spellingSuggestionGlobal1.ts
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 41,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
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
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 50,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 50,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 48,
          "decorators": [],
          "name": "global",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
