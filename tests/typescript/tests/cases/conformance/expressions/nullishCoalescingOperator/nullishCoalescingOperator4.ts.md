__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "literal",
                      "raw": "'literal'",
                      "start": 18,
                      "end": 27
                    },
                    "start": 18,
                    "end": 27
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
                ],
                "start": 18,
                "end": 46
              },
              "start": 16,
              "end": 46
            },
            "start": 14,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 46
        }
      ],
      "declare": true,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa1",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 56
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 61
            },
            "operator": "??",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 67
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 79
                },
                "optional": false,
                "computed": false,
                "start": 65,
                "end": 79
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 65,
              "end": 81
            },
            "start": 59,
            "end": 81
          },
          "definite": false,
          "start": 53,
          "end": 81
        }
      ],
      "declare": false,
      "start": 47,
      "end": 81
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa2",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 91
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 96
            },
            "operator": "||",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 102
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLocaleUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 120
                },
                "optional": false,
                "computed": false,
                "start": 100,
                "end": 120
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 100,
              "end": 122
            },
            "start": 94,
            "end": 122
          },
          "definite": false,
          "start": 88,
          "end": 122
        }
      ],
      "declare": false,
      "start": 82,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
