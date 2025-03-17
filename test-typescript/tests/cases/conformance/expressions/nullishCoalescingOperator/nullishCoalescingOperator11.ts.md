__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 48,
            "name": "f11",
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
                      "value": 1,
                      "raw": "1"
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
                      "value": 0,
                      "raw": "0"
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
                      "value": "",
                      "raw": "''"
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "name": "g11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 61,
            "end": 81,
            "left": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "??",
            "right": {
              "type": "CallExpression",
              "start": 68,
              "end": 81,
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 79,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 71,
                  "name": "f11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 79,
                  "name": "toFixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
