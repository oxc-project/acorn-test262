__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
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
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 27,
                            "end": 28,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 113,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 63,
        "end": 113,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 96,
          "end": 113,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 102,
              "end": 111,
              "argument": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 93,
          "decorators": [],
          "name": "returnSomeGlobalValue",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
