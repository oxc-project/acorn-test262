__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 62,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 28,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "name": "Foo",
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
              "start": 43,
              "end": 62,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 49,
                  "end": 60,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 53,
                      "end": 59,
                      "id": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 59,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 54,
                          "end": 59,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 56,
                            "end": 59,
                            "typeName": {
                              "type": "Identifier",
                              "start": 56,
                              "end": 59,
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                  "declare": false
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
