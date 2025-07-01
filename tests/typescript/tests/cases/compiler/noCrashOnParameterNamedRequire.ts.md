__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 34
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 50
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "require",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 60
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "./mod",
                          "raw": "\"./mod\"",
                          "start": 61,
                          "end": 68
                        }
                      ],
                      "optional": false,
                      "start": 53,
                      "end": 69
                    },
                    "definite": false,
                    "start": 47,
                    "end": 69
                  }
                ],
                "declare": false,
                "start": 41,
                "end": 70
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 78
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 82
                  },
                  "optional": false,
                  "computed": false,
                  "start": 75,
                  "end": 82
                },
                "directive": null,
                "start": 75,
                "end": 83
              }
            ],
            "start": 35,
            "end": 85
          },
          "expression": false,
          "start": 1,
          "end": 85
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 87,
            "end": 91
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 93,
            "end": 97
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 99,
            "end": 103
          }
        ],
        "optional": false,
        "start": 0,
        "end": 104
      },
      "directive": null,
      "start": 0,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
