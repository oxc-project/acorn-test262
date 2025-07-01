__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "a/",
                "raw": "\"a/\"",
                "start": 11,
                "end": 15
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 23
              },
              "optional": false,
              "computed": false,
              "start": 11,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/.[/]/",
                "regex": {
                  "pattern": ".[/]",
                  "flags": ""
                },
                "start": 24,
                "end": 30
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 32,
                "end": 34
              }
            ],
            "optional": false,
            "start": 11,
            "end": 35
          },
          "definite": false,
          "start": 4,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 45
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "a//",
                "raw": "\"a//\"",
                "start": 48,
                "end": 53
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 48,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/.[//]/g",
                "regex": {
                  "pattern": ".[//]",
                  "flags": "g"
                },
                "start": 62,
                "end": 70
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 72,
                "end": 74
              }
            ],
            "optional": false,
            "start": 48,
            "end": 75
          },
          "definite": false,
          "start": 41,
          "end": 75
        }
      ],
      "declare": false,
      "start": 37,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "a/",
                "raw": "\"a/\"",
                "start": 88,
                "end": 92
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 100
              },
              "optional": false,
              "computed": false,
              "start": 88,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/.[/no sleep /till/]/",
                "regex": {
                  "pattern": ".[/no sleep /till/]",
                  "flags": ""
                },
                "start": 101,
                "end": 122
              },
              {
                "type": "Literal",
                "value": "bugfix",
                "raw": "\"bugfix\"",
                "start": 124,
                "end": 132
              }
            ],
            "optional": false,
            "start": 88,
            "end": 133
          },
          "definite": false,
          "start": 81,
          "end": 133
        }
      ],
      "declare": false,
      "start": 77,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
