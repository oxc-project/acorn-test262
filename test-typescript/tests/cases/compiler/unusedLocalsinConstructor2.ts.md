__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 131,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 131,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 60,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 59,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 54,
                          "decorators": [],
                          "name": "unused",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 57,
                          "end": 59,
                          "raw": "20",
                          "value": 20
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 69,
                    "end": 88,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 73,
                        "end": 87,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 77,
                          "decorators": [],
                          "name": "used",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 80,
                          "end": 87,
                          "raw": "\"dummy\"",
                          "value": "dummy"
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 125,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 97,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 101,
                        "decorators": [],
                        "name": "used",
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 104,
                        "end": 124,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 108,
                          "decorators": [],
                          "name": "used",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 111,
                          "end": 124,
                          "raw": "\"second part\"",
                          "value": "second part"
                        }
                      }
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
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
