__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 42,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 38,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "item",
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
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
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
