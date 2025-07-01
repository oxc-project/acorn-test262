__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 19
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 22,
                      "end": 28
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 33,
                    "end": 36
                  },
                  "id": null,
                  "generator": false,
                  "start": 21,
                  "end": 36
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 36
              }
            ],
            "start": 12,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 65
                },
                "optional": false,
                "computed": false,
                "start": 59,
                "end": 65
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 69
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 69
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 68,
                      "end": 69
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 80
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 82,
                        "end": 84
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 71,
                      "end": 84
                    }
                  ],
                  "start": 66,
                  "end": 86
                }
              ],
              "optional": false,
              "start": 59,
              "end": 87
            },
            "directive": null,
            "start": 59,
            "end": 88
          }
        ],
        "start": 55,
        "end": 90
      },
      "expression": false,
      "start": 40,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 94
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 95,
            "end": 96
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 98,
            "end": 99
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 101,
            "end": 102
          }
        ],
        "optional": false,
        "start": 92,
        "end": 103
      },
      "directive": null,
      "start": 92,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
