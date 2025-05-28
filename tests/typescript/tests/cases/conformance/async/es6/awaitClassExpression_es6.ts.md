__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 19,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
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
        "start": 16,
        "end": 19,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 53,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 52,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 42,
                  "end": 52,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 43,
                      "end": 51,
                      "exprName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 91,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 78,
          "end": 91,
          "typeName": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 85,
            "end": 91,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 86,
                "end": 90
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 92,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 131,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "AwaitExpression",
              "start": 115,
              "end": 122,
              "argument": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 124,
              "end": 131,
              "body": []
            },
            "abstract": false,
            "declare": false
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
