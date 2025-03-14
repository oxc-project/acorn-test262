classDeclaredBeforeClassFactory.ts
```json
{
  "type": "Program",
  "start": 32,
  "end": 129,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 72,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 54,
        "end": 69,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 67,
          "decorators": [],
          "name": "makeBaseClass",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 128,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 128,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 105,
            "end": 126,
            "argument": {
              "type": "ClassExpression",
              "start": 112,
              "end": 125,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 123,
                "end": 125,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "Base",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 96,
        "decorators": [],
        "name": "makeBaseClass",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
