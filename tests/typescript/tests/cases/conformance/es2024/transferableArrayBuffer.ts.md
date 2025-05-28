__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "buffer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 15,
            "end": 33,
            "callee": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "ArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "value": 8,
                "raw": "8"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "decorators": [],
            "name": "buffer2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 66,
                "decorators": [],
                "name": "transfer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "buffer",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 78,
          "end": 86,
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "buffer2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 104,
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
