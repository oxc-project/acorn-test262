__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 59,
  "end": 215,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 111,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 109,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 86,
              "end": 109,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 95,
                  "end": 98,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 96,
                      "end": 97,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 100,
                  "end": 103,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 101,
                      "end": 102,
                      "raw": "2",
                      "value": 2
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 105,
                  "end": 108,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 106,
                      "end": 107,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 86,
                "end": 94,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 70,
          "end": 78,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 192,
            "decorators": [],
            "name": "stringFromCharCode",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 195,
            "end": 214,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 202,
              "end": 214,
              "decorators": [],
              "name": "fromCharCode",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
