__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 30,
        "name": "bigInt64ArraySubarray",
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
        "start": 33,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 70,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 49,
                  "end": 70,
                  "callee": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 66,
                    "name": "BigInt64Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 69,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
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
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 88,
                  "name": "subarray",
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
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 108,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 129,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
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
              "optional": false,
              "typeArguments": null
            },
            "directive": null
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
