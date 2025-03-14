collisionThisExpressionAndModuleInGlobal.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 44,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 42,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 42,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "implements": [],
            "superClass": null
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
        "name": "_this",
        "optional": false
      },
      "kind": "module"
    },
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
            "end": 50,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 53,
            "end": 63,
            "async": false,
            "body": {
              "type": "ThisExpression",
              "start": 59,
              "end": 63
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
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
