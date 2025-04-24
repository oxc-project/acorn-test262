__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 14,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 36,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 27,
                  "decorators": [],
                  "name": "doSomething",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 29,
                  "end": 36,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 34,
                    "end": 36,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 77,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 67,
            "end": 75,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 73,
              "end": 75,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 40,
          "end": 57,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 57,
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
