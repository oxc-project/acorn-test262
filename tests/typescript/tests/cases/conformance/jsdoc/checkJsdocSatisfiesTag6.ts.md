__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 137,
  "end": 268,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 185,
            "end": 194,
            "properties": [
              {
                "type": "Property",
                "start": 187,
                "end": 192,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 190,
                  "end": 192,
                  "value": 10,
                  "raw": "10"
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
      "start": 211,
      "end": 238,
      "expression": {
        "type": "CallExpression",
        "start": 211,
        "end": 237,
        "callee": {
          "type": "MemberExpression",
          "start": 211,
          "end": 222,
          "object": {
            "type": "Identifier",
            "start": 211,
            "end": 218,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 222,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 223,
            "end": 236,
            "callee": {
              "type": "MemberExpression",
              "start": 223,
              "end": 234,
              "object": {
                "type": "MemberExpression",
                "start": 223,
                "end": 226,
                "object": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 227,
                "end": 234,
                "decorators": [],
                "name": "toFixed",
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
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 268,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 264,
            "end": 267,
            "object": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
