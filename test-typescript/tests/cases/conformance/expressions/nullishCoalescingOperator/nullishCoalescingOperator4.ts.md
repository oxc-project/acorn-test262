nullishCoalescingOperator4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 46,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 46,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 46,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 18,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 18,
                      "end": 27,
                      "raw": "'literal'",
                      "value": "literal"
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 30,
                    "end": 39
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 42,
                    "end": 46
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "aa1",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 59,
            "end": 81,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 65,
              "end": 81,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 65,
                "end": 79,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 67,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 79,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "aa2",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 94,
            "end": 122,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 100,
              "end": 122,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 100,
                "end": 120,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 102,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 120,
                  "decorators": [],
                  "name": "toLocaleUpperCase",
                  "optional": false
                }
              },
              "optional": false
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
