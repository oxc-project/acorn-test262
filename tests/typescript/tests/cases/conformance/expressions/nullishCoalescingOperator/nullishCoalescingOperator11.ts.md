__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 48,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 48,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 19,
                "end": 48,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 19,
                    "end": 20,
                    "literal": {
                      "type": "Literal",
                      "start": 19,
                      "end": 20,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 24,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 27,
                    "end": 29,
                    "literal": {
                      "type": "Literal",
                      "start": 27,
                      "end": 29,
                      "raw": "''",
                      "value": ""
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 32,
                    "end": 36
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 39,
                    "end": 48
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
      "start": 51,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "decorators": [],
            "name": "g11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 61,
            "end": 81,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 68,
              "end": 81,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 79,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 71,
                  "decorators": [],
                  "name": "f11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 79,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
