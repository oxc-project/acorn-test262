__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 30,
        "decorators": [],
        "name": "bigInt64ArraySubarray",
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
        "start": 33,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 71,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 70,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 49,
                  "end": 70,
                  "callee": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 66,
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 69,
                      "value": 10,
                      "raw": "10"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 91,
            "expression": {
              "type": "CallExpression",
              "start": 76,
              "end": 90,
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 79,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 88,
                  "decorators": [],
                  "name": "subarray",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 112,
            "expression": {
              "type": "CallExpression",
              "start": 96,
              "end": 111,
              "callee": {
                "type": "MemberExpression",
                "start": 96,
                "end": 108,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 108,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 137,
            "expression": {
              "type": "CallExpression",
              "start": 117,
              "end": 136,
              "callee": {
                "type": "MemberExpression",
                "start": 117,
                "end": 129,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 120,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 129,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 130,
                  "end": 131,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 133,
                  "end": 135,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false
            },
            "directive": null
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
