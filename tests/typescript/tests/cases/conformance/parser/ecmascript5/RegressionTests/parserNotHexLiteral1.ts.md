__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 11,
                  "decorators": [],
                  "name": "e0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 18,
                  "value": "cat",
                  "raw": "'cat'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 20,
                "end": 29,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 22,
                  "decorators": [],
                  "name": "x0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 24,
                  "end": 29,
                  "value": "dog",
                  "raw": "'dog'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "info",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 46,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "x0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 181,
            "end": 185,
            "decorators": [],
            "name": "info",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 187,
            "end": 191,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 189,
              "end": 191,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
