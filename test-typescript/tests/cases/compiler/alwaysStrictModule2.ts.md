a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 70,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 45,
                    "end": 64,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 49,
                        "end": 63,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 58,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 61,
                          "end": 63,
                          "elements": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "params": []
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
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 71,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 71,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 46,
                    "end": 65,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 50,
                        "end": 64,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 59,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 62,
                          "end": 64,
                          "elements": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "decorators": [],
                "name": "f2",
                "optional": false
              },
              "params": []
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
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
