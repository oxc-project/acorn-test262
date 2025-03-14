exportDefaultFunctionInNamespace.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 59,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 28,
            "end": 57,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 43,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 57,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "ns_function",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 61,
      "end": 132,
      "body": {
        "type": "TSModuleBlock",
        "start": 89,
        "end": 132,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 95,
            "end": 130,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 110,
              "end": 130,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 130,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 88,
        "decorators": [],
        "name": "ns_async_function",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
