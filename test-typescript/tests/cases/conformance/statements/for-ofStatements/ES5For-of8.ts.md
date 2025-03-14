ES5For-of8.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 97,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 97,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 95,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 94,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 87,
                  "end": 94,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 87,
                    "end": 92,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 90,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "left": {
        "type": "MemberExpression",
        "start": 45,
        "end": 52,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 45,
          "end": 50,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 56,
        "end": 71,
        "elements": [
          {
            "type": "Literal",
            "start": 57,
            "end": 60,
            "raw": "'a'",
            "value": "a"
          },
          {
            "type": "Literal",
            "start": 62,
            "end": 65,
            "raw": "'b'",
            "value": "b"
          },
          {
            "type": "Literal",
            "start": 67,
            "end": 70,
            "raw": "'c'",
            "value": "c"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
