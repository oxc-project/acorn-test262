__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
        "start": 15,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 37,
            "argument": {
              "type": "ObjectExpression",
              "start": 28,
              "end": 36,
              "properties": [
                {
                  "type": "Property",
                  "start": 30,
                  "end": 34,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 120,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 45,
        "end": 52,
        "object": {
          "type": "CallExpression",
          "start": 45,
          "end": 50,
          "callee": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 56,
        "end": 58,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 120,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 66,
            "end": 118,
            "await": false,
            "left": {
              "type": "MemberExpression",
              "start": 71,
              "end": 78,
              "object": {
                "type": "CallExpression",
                "start": 71,
                "end": 76,
                "callee": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 82,
              "end": 84,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 86,
              "end": 118,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 96,
                  "end": 112,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 100,
                      "end": 111,
                      "id": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 104,
                        "end": 111,
                        "object": {
                          "type": "CallExpression",
                          "start": 104,
                          "end": 109,
                          "callee": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 107,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
