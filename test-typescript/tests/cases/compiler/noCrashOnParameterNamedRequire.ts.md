__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 104,
        "arguments": [
          {
            "type": "Literal",
            "start": 87,
            "end": 91,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 93,
            "end": 97,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 1,
          "end": 85,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 35,
            "end": 85,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 41,
                "end": 70,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 47,
                    "end": 69,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "decorators": [],
                      "name": "mod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 53,
                      "end": 69,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 61,
                          "end": 68,
                          "raw": "\"./mod\"",
                          "value": "./mod",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 60,
                        "decorators": [],
                        "name": "require",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "ExpressionStatement",
                "start": 75,
                "end": 83,
                "directive": null,
                "expression": {
                  "type": "MemberExpression",
                  "start": 75,
                  "end": 82,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 78,
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 82,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 27,
              "end": 34,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
