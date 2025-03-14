awaitClassExpression_es5.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
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
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 133,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 92,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 131,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 124,
              "end": 131,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
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
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "func",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 91,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 78,
          "end": 91,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
