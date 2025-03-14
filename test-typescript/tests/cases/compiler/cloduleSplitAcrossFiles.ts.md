cloduleSplitAcrossFiles_class.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 12,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
cloduleSplitAcrossFiles_module.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 37,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 35,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 35,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 34,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 34,
                    "raw": "\"hi\"",
                    "value": "hi"
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
        "end": 8,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 42,
      "expression": {
        "type": "MemberExpression",
        "start": 38,
        "end": 41,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
