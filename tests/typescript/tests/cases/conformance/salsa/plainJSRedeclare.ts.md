__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "decorators": [],
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 32,
            "end": 41,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "Literal",
              "start": 36,
              "end": 41,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 65,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 63,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "decorators": [],
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 63,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
