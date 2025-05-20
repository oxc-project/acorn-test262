__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 89,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1,
          "end": 86,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 7,
            "end": 86,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 13,
                "end": 32,
                "abstract": true,
                "body": {
                  "type": "ClassBody",
                  "start": 30,
                  "end": 32,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              {
                "type": "ClassDeclaration",
                "start": 37,
                "end": 57,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 55,
                  "end": 57,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "typeParameters": null
              },
              {
                "type": "ExpressionStatement",
                "start": 62,
                "end": 70,
                "directive": null,
                "expression": {
                  "type": "NewExpression",
                  "start": 62,
                  "end": 69,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "ReturnStatement",
                "start": 75,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
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
