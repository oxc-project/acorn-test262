__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 164,
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
          "decorators": [],
          "name": "importScripts",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 47,
            "end": 49,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 118,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 116,
              "decorators": [],
              "name": "FormData",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 130,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 130,
              "end": 137,
              "decorators": [],
              "name": "element",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
