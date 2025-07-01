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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
            "type": "ReturnStatement",
            "argument": {
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
                    "start": 30,
                    "end": 31
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 33,
                    "end": 34
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 30,
                  "end": 34
                }
              ],
              "start": 28,
              "end": 36
            },
            "start": 21,
            "end": 37
          }
        ],
        "start": 15,
        "end": 39
      },
      "expression": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 45,
          "end": 50
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        },
        "optional": false,
        "computed": false,
        "start": 45,
        "end": 52
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 56,
        "end": 58
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 71,
                "end": 76
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "optional": false,
              "computed": false,
              "start": 71,
              "end": 78
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 82,
              "end": 84
            },
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 101
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 107
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 104,
                          "end": 109
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 110,
                          "end": 111
                        },
                        "optional": false,
                        "computed": false,
                        "start": 104,
                        "end": 111
                      },
                      "definite": false,
                      "start": 100,
                      "end": 111
                    }
                  ],
                  "declare": false,
                  "start": 96,
                  "end": 112
                }
              ],
              "start": 86,
              "end": 118
            },
            "start": 66,
            "end": 118
          }
        ],
        "start": 60,
        "end": 120
      },
      "start": 40,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
