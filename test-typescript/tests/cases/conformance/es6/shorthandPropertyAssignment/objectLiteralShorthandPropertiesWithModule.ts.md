objectLiteralShorthandPropertiesWithModule.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 123,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 40,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 44,
                  "end": 45,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
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
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 50,
      "end": 122,
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 122,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 65,
            "end": 75,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 69,
                "end": 74,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 80,
            "end": 120,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 119,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 88,
                  "end": 119,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 98,
                      "end": 102,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 112,
                      "end": 113,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
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
