stringMatchAll.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "matches",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 16,
            "end": 42,
            "arguments": [
              {
                "type": "Literal",
                "start": 36,
                "end": 41,
                "raw": "/\\w/g",
                "regex": {
                  "flags": "g",
                  "pattern": "\\w"
                },
                "value": {}
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 16,
              "end": 35,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 16,
                "end": 26,
                "raw": "\"matchAll\"",
                "value": "matchAll"
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 35,
                "decorators": [],
                "name": "matchAll",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 58,
            "end": 70,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 59,
                "end": 69,
                "argument": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 69,
                  "decorators": [],
                  "name": "matches",
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
      "type": "VariableDeclaration",
      "start": 72,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 105,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 78,
            "end": 94,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 80,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
                  "decorators": [],
                  "name": "index",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
                  "decorators": [],
                  "name": "index",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 87,
                "end": 92,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 92,
                  "decorators": [],
                  "name": "input",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 92,
                  "decorators": [],
                  "name": "input",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "MemberExpression",
            "start": 97,
            "end": 105,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 97,
              "end": 102,
              "decorators": [],
              "name": "array",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 103,
              "end": 104,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
