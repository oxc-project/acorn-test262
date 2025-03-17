__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 90,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 48,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 15,
                  "end": 22,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 23,
                  "end": 48,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 26,
                    "end": 48,
                    "body": [
                      {
                        "type": "DebuggerStatement",
                        "start": 36,
                        "end": 45
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 54,
                "end": 88,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 59,
                  "end": 68,
                  "value": "goodbye",
                  "raw": "\"goodbye\""
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 69,
                  "end": 88,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 72,
                    "end": 88,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 76,
                        "end": 85,
                        "argument": {
                          "type": "Literal",
                          "start": 83,
                          "end": 84,
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
