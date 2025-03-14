checkInfiniteExpansionTermination.ts
```json
{
  "type": "Program",
  "start": 80,
  "end": 335,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 156,
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 156,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 111,
            "end": 131,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 130,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 125,
                  "end": 130,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 126,
                      "end": 129,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 126,
                        "end": 127,
                        "typeName": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 125,
                  "decorators": [],
                  "name": "IObservable",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 101,
        "decorators": [],
        "name": "IObservable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 216,
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 216,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 198,
          "end": 212,
          "expression": {
            "type": "Identifier",
            "start": 198,
            "end": 209,
            "decorators": [],
            "name": "IObservable",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 209,
            "end": 212,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 210,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 186,
        "decorators": [],
        "name": "ISubject",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 186,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 188,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
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
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 237,
      "body": {
        "type": "TSInterfaceBody",
        "start": 232,
        "end": 237,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 234,
            "end": 235,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 231,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 257,
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 257,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 254,
            "end": 255,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 251,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 287,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 287,
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 287,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 287,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 282,
                  "end": 287,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 283,
                      "end": 286,
                      "typeName": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 286,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 282,
                  "decorators": [],
                  "name": "IObservable",
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
      "type": "VariableDeclaration",
      "start": 289,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 315,
            "decorators": [],
            "name": "values2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 315,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 310,
                  "end": 315,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 311,
                      "end": 314,
                      "typeName": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 314,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 310,
                  "decorators": [],
                  "name": "ISubject",
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
      "type": "ExpressionStatement",
      "start": 317,
      "end": 334,
      "expression": {
        "type": "AssignmentExpression",
        "start": 317,
        "end": 333,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 317,
          "end": 323,
          "decorators": [],
          "name": "values",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 326,
          "end": 333,
          "decorators": [],
          "name": "values2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
