__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 177,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "f",
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
        "start": 31,
        "end": 177,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 79,
                "id": {
                  "type": "ObjectPattern",
                  "start": 41,
                  "end": 54,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 43,
                      "end": 52,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 57,
                  "end": 79,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 59,
                      "end": 77,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 68,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 70,
                        "end": 77,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 85,
            "end": 146,
            "test": {
              "type": "CallExpression",
              "start": 89,
              "end": 102,
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 100,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 104,
              "end": 146,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 114,
                  "end": 140,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 121,
                    "end": 139,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "MemberExpression",
                      "start": 127,
                      "end": 139,
                      "object": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 136,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 137,
                        "end": 138,
                        "value": 0,
                        "raw": "0"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 164,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 167,
                  "end": 174,
                  "value": "world",
                  "raw": "\"world\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
