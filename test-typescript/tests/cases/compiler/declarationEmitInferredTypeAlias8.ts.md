__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 32,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 14,
        "end": 31,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 14,
            "end": 15,
            "typeName": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 18,
            "end": 31,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 20,
                "end": 29,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 23,
                    "end": 29,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 26,
                      "end": 29,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 27,
                          "end": 28,
                          "typeName": {
                            "type": "Identifier",
                            "start": 27,
                            "end": 28,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 53,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 53,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 43,
                  "end": 53,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 44,
                      "end": 52,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 43,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 106,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 89,
        "end": 106,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 95,
            "end": 104,
            "argument": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 86,
        "decorators": [],
        "name": "returnSomeGlobalValue",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
