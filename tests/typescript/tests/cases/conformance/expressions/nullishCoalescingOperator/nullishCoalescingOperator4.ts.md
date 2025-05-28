__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 46,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 81,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "aa1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 59,
            "end": 81,
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 79,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 122,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "aa2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 94,
            "end": 122,
            "left": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 120,
                  "decorators": [],
                  "name": "toLocaleUpperCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
