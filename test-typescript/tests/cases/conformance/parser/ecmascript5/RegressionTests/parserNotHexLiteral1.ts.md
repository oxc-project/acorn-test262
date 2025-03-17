__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 9,
                "end": 18,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 11,
                  "name": "e0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 18,
                  "value": "cat",
                  "raw": "'cat'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 20,
                "end": 29,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 22,
                  "name": "x0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 24,
                  "end": 29,
                  "value": "dog",
                  "raw": "'dog'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 51,
        "callee": {
          "type": "MemberExpression",
          "start": 32,
          "end": 44,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 39,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "name": "info",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 46,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "name": "x0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 192,
        "callee": {
          "type": "MemberExpression",
          "start": 173,
          "end": 185,
          "object": {
            "type": "Identifier",
            "start": 173,
            "end": 180,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 181,
            "end": 185,
            "name": "info",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 187,
            "end": 191,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 189,
              "end": 191,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
