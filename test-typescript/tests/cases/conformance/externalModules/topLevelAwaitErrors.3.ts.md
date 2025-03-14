topLevelAwaitErrors.3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 83,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 64,
            "end": 71,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 65,
                "end": 70,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "await",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "await",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 83,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 82,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 80,
                  "decorators": [],
                  "name": "await",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
