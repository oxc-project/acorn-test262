__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 165,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 50,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 50,
        "callee": {
          "type": "Identifier",
          "start": 33,
          "end": 46,
          "name": "importScripts",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 47,
            "end": 49,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 116,
              "name": "FormData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 119,
      "end": 164,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 124,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 130,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 130,
              "end": 137,
              "name": "element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 164,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 162,
            "expression": {
              "type": "MemberExpression",
              "start": 148,
              "end": 162,
              "object": {
                "type": "Identifier",
                "start": 148,
                "end": 155,
                "name": "element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
