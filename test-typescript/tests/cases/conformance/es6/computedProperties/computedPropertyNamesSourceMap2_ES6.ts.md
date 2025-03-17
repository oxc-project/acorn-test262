__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 87,
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
            "end": 87,
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
                "start": 51,
                "end": 85,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 56,
                  "end": 65,
                  "value": "goodbye",
                  "raw": "\"goodbye\""
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 66,
                  "end": 85,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 85,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 73,
                        "end": 82,
                        "argument": {
                          "type": "Literal",
                          "start": 80,
                          "end": 81,
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
