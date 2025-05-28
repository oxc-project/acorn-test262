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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
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
            "callee": {
              "type": "MemberExpression",
              "start": 11,
              "end": 23,
              "object": {
                "type": "Literal",
                "start": 11,
                "end": 15,
                "value": "a/",
                "raw": "\"a/\""
              },
              "property": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 30,
                "value": null,
                "raw": "/.[/]/",
                "regex": {
                  "flags": "",
                  "pattern": ".[/]"
                }
              },
              {
                "type": "Literal",
                "start": 32,
                "end": 34,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 76,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 75,
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
            "callee": {
              "type": "MemberExpression",
              "start": 48,
              "end": 61,
              "object": {
                "type": "Literal",
                "start": 48,
                "end": 53,
                "value": "a//",
                "raw": "\"a//\""
              },
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 61,
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 62,
                "end": 70,
                "value": null,
                "raw": "/.[//]/g",
                "regex": {
                  "flags": "g",
                  "pattern": ".[//]"
                }
              },
              {
                "type": "Literal",
                "start": 72,
                "end": 74,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 133,
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
            "callee": {
              "type": "MemberExpression",
              "start": 88,
              "end": 100,
              "object": {
                "type": "Literal",
                "start": 88,
                "end": 92,
                "value": "a/",
                "raw": "\"a/\""
              },
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 100,
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 101,
                "end": 122,
                "value": null,
                "raw": "/.[/no sleep /till/]/",
                "regex": {
                  "flags": "",
                  "pattern": ".[/no sleep /till/]"
                }
              },
              {
                "type": "Literal",
                "start": 124,
                "end": 132,
                "value": "bugfix",
                "raw": "\"bugfix\""
              }
            ],
            "optional": false
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
