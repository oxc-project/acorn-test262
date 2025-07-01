__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 78
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 94
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 96,
                      "end": 97
                    }
                  ],
                  "start": 95,
                  "end": 98
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 101,
                      "end": 102
                    }
                  ],
                  "start": 100,
                  "end": 103
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 106,
                      "end": 107
                    }
                  ],
                  "start": 105,
                  "end": 108
                }
              ],
              "optional": false,
              "start": 86,
              "end": 109
            },
            "directive": null,
            "start": 86,
            "end": 109
          }
        ],
        "start": 80,
        "end": 111
      },
      "expression": false,
      "start": 59,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringFromCharCode",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 192
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 201
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromCharCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 214
            },
            "optional": false,
            "computed": false,
            "start": 195,
            "end": 214
          },
          "definite": false,
          "start": 174,
          "end": 214
        }
      ],
      "declare": false,
      "start": 170,
      "end": 215
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 215
}
```
