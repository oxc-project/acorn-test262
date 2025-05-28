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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 119,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 19,
            "end": 29,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 27,
              "end": 29,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 34,
            "end": 45,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 44,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 40,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 68,
                  "end": 70,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              {
                "type": "VariableDeclaration",
                "start": 79,
                "end": 90,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 83,
                    "end": 89,
                    "id": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 85,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
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
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 116,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
