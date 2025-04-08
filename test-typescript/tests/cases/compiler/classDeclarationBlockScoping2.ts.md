__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 119,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 19,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 27,
              "end": 29,
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
            "start": 34,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 44,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 40,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "BlockStatement",
            "start": 50,
            "end": 96,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 60,
                "end": 70,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 68,
                  "end": 70,
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
                "start": 79,
                "end": 90,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 83,
                    "end": 89,
                    "id": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 85,
                      "name": "c2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 101,
            "end": 117,
            "argument": {
              "type": "BinaryExpression",
              "start": 108,
              "end": 116,
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 116,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
