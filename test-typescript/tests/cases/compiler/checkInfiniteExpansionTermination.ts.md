__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 101,
        "name": "IObservable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 125,
                  "name": "IObservable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 186,
        "name": "ISubject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 198,
          "end": 212,
          "expression": {
            "type": "Identifier",
            "start": 198,
            "end": 209,
            "name": "IObservable",
            "typeAnnotation": null,
            "decorators": [],
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 186,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 188,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 216,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 231,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 251,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 287,
            "name": "values",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 287,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 287,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 282,
                  "name": "IObservable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Foo",
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 315,
            "name": "values2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 310,
                  "name": "ISubject",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Bar",
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
      "declare": false
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
          "name": "values",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 326,
          "end": 333,
          "name": "values2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
