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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 28,
            "end": 62,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 59,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "Foo",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
