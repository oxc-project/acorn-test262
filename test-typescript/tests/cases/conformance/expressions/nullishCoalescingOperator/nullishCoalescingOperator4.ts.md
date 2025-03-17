__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 46,
            "name": "a1",
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
                      "value": "literal",
                      "raw": "'literal'"
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
      "start": 47,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "name": "aa1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 59,
            "end": 81,
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "??",
            "right": {
              "type": "CallExpression",
              "start": 65,
              "end": 81,
              "callee": {
                "type": "MemberExpression",
                "start": 65,
                "end": 79,
                "object": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 67,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 79,
                  "name": "toLowerCase",
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "name": "aa2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 94,
            "end": 122,
            "left": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "CallExpression",
              "start": 100,
              "end": 122,
              "callee": {
                "type": "MemberExpression",
                "start": 100,
                "end": 120,
                "object": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 102,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 120,
                  "name": "toLocaleUpperCase",
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
