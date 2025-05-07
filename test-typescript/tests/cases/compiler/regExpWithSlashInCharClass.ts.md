__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 35,
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 30,
                "raw": "/.[/]/",
                "regex": {
                  "flags": "",
                  "pattern": ".[/]"
                },
                "value": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 32,
                "end": 34,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 11,
              "end": 23,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 11,
                "end": 15,
                "raw": "\"a/\"",
                "value": "a/",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 48,
            "end": 75,
            "arguments": [
              {
                "type": "Literal",
                "start": 62,
                "end": 70,
                "raw": "/.[//]/g",
                "regex": {
                  "flags": "g",
                  "pattern": ".[//]"
                },
                "value": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 72,
                "end": 74,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 48,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 48,
                "end": 53,
                "raw": "\"a//\"",
                "value": "a//",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 61,
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 88,
            "end": 133,
            "arguments": [
              {
                "type": "Literal",
                "start": 101,
                "end": 122,
                "raw": "/.[/no sleep /till/]/",
                "regex": {
                  "flags": "",
                  "pattern": ".[/no sleep /till/]"
                },
                "value": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 124,
                "end": 132,
                "raw": "\"bugfix\"",
                "value": "bugfix",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 88,
              "end": 100,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 88,
                "end": 92,
                "raw": "\"a/\"",
                "value": "a/",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 100,
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
