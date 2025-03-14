funduleOfFunctionWithoutReturnTypeAnnotation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 34,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 34,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 20,
            "end": 32,
            "argument": {
              "type": "MemberExpression",
              "start": 27,
              "end": 31,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 27,
                "end": 29,
                "decorators": [],
                "name": "fn",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 70,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 58,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 66,
                    "end": 67,
                    "raw": "1",
                    "value": 1
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
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
