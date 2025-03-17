__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "replace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "replace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "replace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
