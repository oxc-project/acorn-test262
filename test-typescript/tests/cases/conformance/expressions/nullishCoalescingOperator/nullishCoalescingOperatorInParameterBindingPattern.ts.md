__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 88,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 88,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 140,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 139,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 136,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 136,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 105,
              "end": 129,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 107,
                  "end": 127,
                  "computed": true,
                  "key": {
                    "type": "LogicalExpression",
                    "start": 108,
                    "end": 118,
                    "operator": "??",
                    "left": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 111,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 115,
                      "end": 118,
                      "raw": "\"d\"",
                      "value": "d"
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 121,
                    "end": 127,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                }
              ]
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
