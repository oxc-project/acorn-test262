__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "importScripts",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 46
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 47,
            "end": 49
          }
        ],
        "optional": false,
        "start": 33,
        "end": 50
      },
      "directive": null,
      "start": 33,
      "end": 50
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FormData",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 116
            },
            "typeArguments": null,
            "arguments": [],
            "start": 104,
            "end": 118
          },
          "definite": false,
          "start": 100,
          "end": 118
        }
      ],
      "declare": false,
      "start": 94,
      "end": 118
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "element",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 137
            },
            "init": null,
            "definite": false,
            "start": 130,
            "end": 137
          }
        ],
        "declare": false,
        "start": 124,
        "end": 137
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 142
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 162
              },
              "optional": false,
              "computed": false,
              "start": 148,
              "end": 162
            },
            "directive": null,
            "start": 148,
            "end": 162
          }
        ],
        "start": 144,
        "end": 164
      },
      "start": 119,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 164
}
```
