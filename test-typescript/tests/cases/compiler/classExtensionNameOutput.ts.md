__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "IfStatement",
      "start": 11,
      "end": 93,
      "test": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 21,
        "end": 93,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 43,
              "end": 45,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 49,
            "end": 91,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 55,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 58,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 61,
                  "end": 91,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 73,
                    "end": 91,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 79,
                        "end": 87,
                        "expression": {
                          "type": "NewExpression",
                          "start": 79,
                          "end": 86,
                          "callee": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
