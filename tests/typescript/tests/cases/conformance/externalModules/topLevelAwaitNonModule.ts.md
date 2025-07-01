__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 6,
          "end": 7
        },
        "start": 0,
        "end": 7
      },
      "directive": null,
      "start": 0,
      "end": 8
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 23,
                    "end": 30
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 38
                  },
                  "optional": false,
                  "computed": false,
                  "start": 23,
                  "end": 38
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 23,
                "end": 40
              }
            ],
            "start": 22,
            "end": 41
          },
          "definite": false,
          "start": 16,
          "end": 41
        }
      ],
      "declare": false,
      "start": 10,
      "end": 42
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 65
            },
            "init": null,
            "definite": false,
            "start": 61,
            "end": 65
          }
        ],
        "declare": false,
        "start": 55,
        "end": 65
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "directive": null,
            "start": 78,
            "end": 83
          }
        ],
        "start": 74,
        "end": 85
      },
      "start": 44,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
