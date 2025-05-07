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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 195,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 190,
                  "end": 192,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 238,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 211,
        "end": 237,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 223,
            "end": 236,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 223,
              "end": 234,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 223,
                "end": 226,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 227,
                "end": 234,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 211,
          "end": 222,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 211,
            "end": 218,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 222,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 267,
          "definite": false,
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
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
