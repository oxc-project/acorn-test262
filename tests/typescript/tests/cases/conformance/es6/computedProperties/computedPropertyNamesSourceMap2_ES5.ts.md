__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 15,
                  "end": 22
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "DebuggerStatement",
                        "start": 36,
                        "end": 45
                      }
                    ],
                    "start": 26,
                    "end": 48
                  },
                  "expression": false,
                  "start": 23,
                  "end": 48
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 14,
                "end": 48
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Literal",
                  "value": "goodbye",
                  "raw": "\"goodbye\"",
                  "start": 59,
                  "end": 68
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 83,
                          "end": 84
                        },
                        "start": 76,
                        "end": 85
                      }
                    ],
                    "start": 72,
                    "end": 88
                  },
                  "expression": false,
                  "start": 69,
                  "end": 88
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 54,
                "end": 88
              }
            ],
            "start": 8,
            "end": 90
          },
          "definite": false,
          "start": 4,
          "end": 90
        }
      ],
      "declare": false,
      "start": 0,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
