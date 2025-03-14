classOrder2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 44,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 44,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 31,
                    "end": 42,
                    "expression": {
                      "type": "CallExpression",
                      "start": 31,
                      "end": 41,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 31,
                        "end": 39,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 31,
                          "end": 35
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 39,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 74,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 74,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 71,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 71,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 85,
            "end": 92,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 103,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 102,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 95,
          "end": 100,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
