logicalAssignment10.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "count",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 25,
            "end": 27,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 68,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 66,
            "argument": {
              "type": "UpdateExpression",
              "start": 58,
              "end": 65,
              "argument": {
                "type": "Identifier",
                "start": 60,
                "end": 65,
                "decorators": [],
                "name": "count",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 42,
        "decorators": [],
        "name": "incr",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "oobj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 83,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 89,
                "end": 92,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 96,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 118,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 107,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 99,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 100,
            "end": 106,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "incr",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 112,
          "end": 118,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 112,
            "end": 116,
            "decorators": [],
            "name": "incr",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 150,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 120,
          "end": 139,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 120,
            "end": 131,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "oobj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "raw": "\"obj\"",
              "value": "obj"
            }
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 132,
            "end": 138,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "incr",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 144,
          "end": 150,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 144,
            "end": 148,
            "decorators": [],
            "name": "incr",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
