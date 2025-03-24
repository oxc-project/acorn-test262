__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "name": "doSomething",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ForOfStatement",
      "start": 26,
      "end": 108,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 37,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 41,
        "end": 43,
        "elements": []
      },
      "body": {
        "type": "ForOfStatement",
        "start": 49,
        "end": 108,
        "await": false,
        "left": {
          "type": "VariableDeclaration",
          "start": 54,
          "end": 60,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 58,
              "end": 60,
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 60,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 64,
          "end": 76,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "name": "someArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ExpressionStatement",
          "start": 86,
          "end": 108,
          "expression": {
            "type": "CallExpression",
            "start": 86,
            "end": 107,
            "callee": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 98,
                "end": 106,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 106,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
