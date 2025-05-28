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
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 104,
        "callee": {
          "type": "FunctionExpression",
          "start": 1,
          "end": 85,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          "body": {
            "type": "BlockStatement",
            "start": 35,
            "end": 85,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 41,
                "end": 70,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 47,
                    "end": 69,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 60,
                        "decorators": [],
                        "name": "require",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 61,
                          "end": 68,
                          "value": "./mod",
                          "raw": "\"./mod\""
                        }
                      ],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 75,
                "end": 83,
                "expression": {
                  "type": "MemberExpression",
                  "start": 75,
                  "end": 82,
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 78,
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 82,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "directive": null
              }
            ]
          },
          "expression": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 87,
            "end": 91,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 93,
            "end": 97,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
