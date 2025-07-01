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
        "name": "bigInt64ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 30
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 46
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 66
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 67,
                      "end": 69
                    }
                  ],
                  "start": 49,
                  "end": 70
                },
                "definite": false,
                "start": 43,
                "end": 70
              }
            ],
            "declare": false,
            "start": 39,
            "end": 71
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 88
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 88
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 76,
              "end": 90
            },
            "directive": null,
            "start": 76,
            "end": 91
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 99
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 108
                },
                "optional": false,
                "computed": false,
                "start": 96,
                "end": 108
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 109,
                  "end": 110
                }
              ],
              "optional": false,
              "start": 96,
              "end": 111
            },
            "directive": null,
            "start": 96,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 120
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 129
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 129
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 130,
                  "end": 131
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 133,
                  "end": 135
                }
              ],
              "optional": false,
              "start": 117,
              "end": 136
            },
            "directive": null,
            "start": 117,
            "end": 137
          }
        ],
        "start": 33,
        "end": 139
      },
      "expression": false,
      "start": 0,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
