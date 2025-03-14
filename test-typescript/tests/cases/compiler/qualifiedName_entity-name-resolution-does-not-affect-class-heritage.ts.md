qualifiedName_entity-name-resolution-does-not-affect-class-heritage.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 38,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 37,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 37,
                    "raw": "100",
                    "value": 100
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Alpha",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "Beta",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 61,
        "end": 68,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 61,
          "end": 66,
          "decorators": [],
          "name": "Alpha",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
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
