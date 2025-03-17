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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 19,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 52,
            "name": "p",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 92,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "AwaitExpression",
              "start": 115,
              "end": 122,
              "argument": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "ClassBody",
              "start": 124,
              "end": 131,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
