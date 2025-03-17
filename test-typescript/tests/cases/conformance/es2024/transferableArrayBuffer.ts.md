__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "name": "buffer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 15,
            "end": 33,
            "callee": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "name": "ArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "value": 8,
                "raw": "8"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "name": "buffer2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 51,
            "end": 68,
            "callee": {
              "type": "MemberExpression",
              "start": 51,
              "end": 66,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 57,
                "name": "buffer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 66,
                "name": "transfer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 87,
      "expression": {
        "type": "MemberExpression",
        "start": 71,
        "end": 86,
        "object": {
          "type": "Identifier",
          "start": 71,
          "end": 77,
          "name": "buffer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 78,
          "end": 86,
          "name": "detached",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 105,
      "expression": {
        "type": "MemberExpression",
        "start": 88,
        "end": 104,
        "object": {
          "type": "Identifier",
          "start": 88,
          "end": 95,
          "name": "buffer2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 104,
          "name": "detached",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
