__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "AwaitExpression",
        "start": 0,
        "end": 7,
        "argument": {
          "type": "Identifier",
          "start": 6,
          "end": 7,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 22,
            "end": 41,
            "elements": [
              {
                "type": "CallExpression",
                "start": 23,
                "end": 40,
                "callee": {
                  "type": "MemberExpression",
                  "start": 23,
                  "end": 38,
                  "object": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 30,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 38,
                    "name": "resolve",
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
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 44,
      "end": 85,
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "start": 55,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "name": "item",
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
        "start": 69,
        "end": 72,
        "name": "arr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
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
