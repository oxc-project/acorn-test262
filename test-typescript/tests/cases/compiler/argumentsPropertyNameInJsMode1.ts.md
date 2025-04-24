__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 36,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 19,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 21,
                  "end": 36,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 33,
                    "end": 36,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 22,
                      "end": 28,
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 59,
            "end": 88,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 59,
              "end": 87,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 66,
                  "end": 86,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 68,
                      "end": 69,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 71,
                      "end": 84,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 80,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 82,
                        "end": 84,
                        "elements": []
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 59,
                "end": 65,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 65,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 104,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 92,
        "end": 103,
        "arguments": [
          {
            "type": "Literal",
            "start": 95,
            "end": 96,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 98,
            "end": 99,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 101,
            "end": 102,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 92,
          "end": 94,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
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
