__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
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
        "start": 13,
        "end": 159,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 62,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 61,
                "id": {
                  "type": "ObjectPattern",
                  "start": 23,
                  "end": 36,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 25,
                      "end": 34,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 39,
                  "end": 61,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 41,
                      "end": 59,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 50,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 52,
                        "end": 59,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 67,
            "end": 128,
            "test": {
              "type": "CallExpression",
              "start": 71,
              "end": 84,
              "callee": {
                "type": "MemberExpression",
                "start": 71,
                "end": 82,
                "object": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 86,
              "end": 128,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 96,
                  "end": 122,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 103,
                    "end": 121,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 109,
                      "end": 121,
                      "object": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 118,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 119,
                        "end": 120,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 157,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 149,
                  "end": 156,
                  "value": "world",
                  "raw": "\"world\""
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
