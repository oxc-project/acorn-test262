__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 17,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TallThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 42
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 47
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 47
          }
        ],
        "start": 43,
        "end": 49
      },
      "declare": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 82
          },
          "typeArguments": null,
          "start": 76,
          "end": 82
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TallThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 93
          },
          "typeArguments": null,
          "start": 84,
          "end": 93
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 94,
        "end": 99
      },
      "declare": false,
      "start": 50,
      "end": 99
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 111
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 127
                        },
                        "typeArguments": null,
                        "start": 120,
                        "end": 127
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 110,
                      "end": 127
                    }
                  ],
                  "start": 109,
                  "end": 128
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 133
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 133
                      },
                      "start": 130,
                      "end": 133
                    },
                    "start": 129,
                    "end": 133
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 139
                        },
                        "typeArguments": null,
                        "start": 138,
                        "end": 139
                      },
                      "start": 136,
                      "end": 139
                    },
                    "start": 135,
                    "end": 139
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 144,
                    "end": 148
                  },
                  "start": 141,
                  "end": 148
                },
                "start": 109,
                "end": 148
              },
              "start": 107,
              "end": 148
            },
            "start": 105,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 105,
          "end": 148
        }
      ],
      "declare": false,
      "start": 101,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 169
                        },
                        "typeArguments": null,
                        "start": 163,
                        "end": 169
                      },
                      "start": 161,
                      "end": 169
                    },
                    "start": 160,
                    "end": 169
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TallThing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 183
                        },
                        "typeArguments": null,
                        "start": 174,
                        "end": 183
                      },
                      "start": 172,
                      "end": 183
                    },
                    "start": 171,
                    "end": 183
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 188,
                    "end": 192
                  },
                  "start": 185,
                  "end": 192
                },
                "start": 159,
                "end": 192
              },
              "start": 157,
              "end": 192
            },
            "start": 155,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 192
        }
      ],
      "declare": false,
      "start": 151,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 196
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 201
        },
        "start": 194,
        "end": 201
      },
      "directive": null,
      "start": 194,
      "end": 202
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 350
                        },
                        "typeArguments": null,
                        "start": 344,
                        "end": 350
                      },
                      "start": 342,
                      "end": 350
                    },
                    "start": 340,
                    "end": 350
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 356,
                          "end": 362
                        },
                        "typeArguments": null,
                        "start": 356,
                        "end": 362
                      },
                      "start": 354,
                      "end": 362
                    },
                    "start": 352,
                    "end": 362
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 367,
                    "end": 371
                  },
                  "start": 364,
                  "end": 371
                },
                "start": 339,
                "end": 371
              },
              "start": 337,
              "end": 371
            },
            "start": 335,
            "end": 371
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 371
        }
      ],
      "declare": false,
      "start": 331,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "h2",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 375
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 380
        },
        "start": 373,
        "end": 380
      },
      "directive": null,
      "start": 373,
      "end": 381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 495
}
```
