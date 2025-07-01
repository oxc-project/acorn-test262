__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "init": null,
            "definite": false,
            "start": 35,
            "end": 37
          }
        ],
        "declare": false,
        "start": 31,
        "end": 37
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 41,
        "end": 43
      },
      "body": {
        "type": "ForOfStatement",
        "await": false,
        "left": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 60
              },
              "init": null,
              "definite": false,
              "start": 58,
              "end": 60
            }
          ],
          "declare": false,
          "start": 54,
          "end": 60
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          },
          "optional": false,
          "computed": false,
          "start": 64,
          "end": 76
        },
        "body": {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 106
                },
                "id": null,
                "generator": false,
                "start": 98,
                "end": 106
              }
            ],
            "optional": false,
            "start": 86,
            "end": 107
          },
          "directive": null,
          "start": 86,
          "end": 108
        },
        "start": 49,
        "end": 108
      },
      "start": 26,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
