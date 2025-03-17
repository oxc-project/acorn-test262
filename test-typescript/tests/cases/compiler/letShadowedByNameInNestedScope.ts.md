__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "name": "foo",
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
        "start": 22,
        "end": 113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 38,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 37,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 111,
            "expression": {
              "type": "CallExpression",
              "start": 43,
              "end": 110,
              "callee": {
                "type": "FunctionExpression",
                "start": 44,
                "end": 107,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 56,
                  "end": 107,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 66,
                      "end": 77,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 70,
                          "end": 76,
                          "id": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 72,
                            "name": "_x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 75,
                            "end": 76,
                            "value": 1,
                            "raw": "1"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 86,
                      "end": 101,
                      "expression": {
                        "type": "CallExpression",
                        "start": 86,
                        "end": 100,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 86,
                          "end": 97,
                          "object": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 93,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 97,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
              },
              "arguments": [],
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
