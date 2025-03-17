__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "globalThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 62,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 63,
                          "end": 66,
                          "value": "x",
                          "raw": "\"x\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
