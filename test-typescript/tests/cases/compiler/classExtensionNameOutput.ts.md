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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
      "type": "IfStatement",
      "start": 11,
      "end": 93,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 21,
        "end": 93,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 45,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 43,
              "end": 45,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 58,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 61,
                  "end": 91,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 73,
                    "end": 91,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 79,
                        "end": 87,
                        "directive": null,
                        "expression": {
                          "type": "NewExpression",
                          "start": 79,
                          "end": 86,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "true",
        "value": true,
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
