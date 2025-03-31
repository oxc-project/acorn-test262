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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 23,
                    "end": 29,
                    "typeName": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
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
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 53,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 43,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 86,
        "name": "returnSomeGlobalValue",
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
