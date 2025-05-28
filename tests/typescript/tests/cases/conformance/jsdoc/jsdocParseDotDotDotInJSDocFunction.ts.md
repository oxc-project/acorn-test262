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
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 111,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 109,
            "expression": {
              "type": "CallExpression",
              "start": 86,
              "end": 109,
              "callee": {
                "type": "Identifier",
                "start": 86,
                "end": 94,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "value": 1,
                      "raw": "1"
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
                      "value": 2,
                      "raw": "2"
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
                      "value": 3,
                      "raw": "3"
                    }
                  ]
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
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 215,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 214,
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
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 202,
              "end": 214,
              "decorators": [],
              "name": "fromCharCode",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
