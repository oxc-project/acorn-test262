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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "a1",
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
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 58,
              "end": 60,
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 60,
                "decorators": [],
                "name": "a2",
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
          "type": "MemberExpression",
          "start": 64,
          "end": 76,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "someArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 98,
                "end": 106,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 106,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
