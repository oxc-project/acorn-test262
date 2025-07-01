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
            "name": "buffer",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 8,
                "raw": "8",
                "start": 31,
                "end": 32
              }
            ],
            "start": 15,
            "end": 33
          },
          "definite": false,
          "start": 6,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buffer2",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 48
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 66
              },
              "optional": false,
              "computed": false,
              "start": 51,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 51,
            "end": 68
          },
          "definite": false,
          "start": 41,
          "end": 68
        }
      ],
      "declare": false,
      "start": 35,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "buffer",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 77
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 86
        },
        "optional": false,
        "computed": false,
        "start": 71,
        "end": 86
      },
      "directive": null,
      "start": 71,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "buffer2",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 95
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 104
        },
        "optional": false,
        "computed": false,
        "start": 88,
        "end": 104
      },
      "directive": null,
      "start": 88,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
