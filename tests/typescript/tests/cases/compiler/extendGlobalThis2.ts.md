__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "globalThis",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 70,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 34,
              "end": 70,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 70,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 51,
                    "end": 68,
                    "expression": {
                      "type": "CallExpression",
                      "start": 51,
                      "end": 67,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 51,
                        "end": 62,
                        "object": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 58,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 62,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 63,
                          "end": 66,
                          "value": "x",
                          "raw": "\"x\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
