declarationEmitDestructuringPrivacyError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 78,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 30,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 30,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 76,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 42,
              "end": 76,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 75,
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 46,
                    "end": 55,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    ],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 58,
                    "end": 75,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 59,
                        "end": 61,
                        "raw": "10",
                        "value": 10
                      },
                      {
                        "type": "NewExpression",
                        "start": 63,
                        "end": 70,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      {
                        "type": "Literal",
                        "start": 72,
                        "end": 74,
                        "raw": "30",
                        "value": 30
                      }
                    ]
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
        "name": "m",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
