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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 144
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 190,
                  "end": 192
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 187,
                "end": 192
              }
            ],
            "start": 185,
            "end": 194
          },
          "definite": false,
          "start": 143,
          "end": 195
        }
      ],
      "declare": false,
      "start": 137,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 222
          },
          "optional": false,
          "computed": false,
          "start": 211,
          "end": 222
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 226
                },
                "optional": false,
                "computed": false,
                "start": 223,
                "end": 226
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 234
              },
              "optional": false,
              "computed": false,
              "start": 223,
              "end": 234
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 223,
            "end": 236
          }
        ],
        "optional": false,
        "start": 211,
        "end": 237
      },
      "directive": null,
      "start": 211,
      "end": 238
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "optional": false,
            "computed": false,
            "start": 264,
            "end": 267
          },
          "definite": false,
          "start": 260,
          "end": 267
        }
      ],
      "declare": false,
      "start": 256,
      "end": 268
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 137,
  "end": 268
}
```
