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
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 40
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
            "start": 49,
            "end": 55
          },
          "typeArguments": null,
          "start": 49,
          "end": 55
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
              "start": 58,
              "end": 59
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 59
          }
        ],
        "start": 56,
        "end": 61
      },
      "declare": false,
      "start": 23,
      "end": 61
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Elephant",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 80
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
            "start": 89,
            "end": 95
          },
          "typeArguments": null,
          "start": 89,
          "end": 95
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
              "name": "y2",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 100
          }
        ],
        "start": 96,
        "end": 102
      },
      "declare": false,
      "start": 62,
      "end": 102
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
                        "start": 113,
                        "end": 114
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 129
                        },
                        "typeArguments": null,
                        "start": 123,
                        "end": 129
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 113,
                      "end": 129
                    }
                  ],
                  "start": 112,
                  "end": 130
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
                          "start": 134,
                          "end": 135
                        },
                        "typeArguments": null,
                        "start": 134,
                        "end": 135
                      },
                      "start": 132,
                      "end": 135
                    },
                    "start": 131,
                    "end": 135
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
                          "start": 140,
                          "end": 141
                        },
                        "typeArguments": null,
                        "start": 140,
                        "end": 141
                      },
                      "start": 138,
                      "end": 141
                    },
                    "start": 137,
                    "end": 141
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 146,
                    "end": 150
                  },
                  "start": 143,
                  "end": 150
                },
                "start": 112,
                "end": 150
              },
              "start": 110,
              "end": 150
            },
            "start": 108,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 150
        }
      ],
      "declare": false,
      "start": 104,
      "end": 151
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
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 172
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 172
                      },
                      "start": 163,
                      "end": 172
                    },
                    "start": 162,
                    "end": 172
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Elephant",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 185
                        },
                        "typeArguments": null,
                        "start": 177,
                        "end": 185
                      },
                      "start": 175,
                      "end": 185
                    },
                    "start": 174,
                    "end": 185
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 190,
                    "end": 194
                  },
                  "start": 187,
                  "end": 194
                },
                "start": 161,
                "end": 194
              },
              "start": 159,
              "end": 194
            },
            "start": 157,
            "end": 194
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 194
        }
      ],
      "declare": false,
      "start": 153,
      "end": 195
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
          "start": 196,
          "end": 198
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 203
        },
        "start": 196,
        "end": 203
      },
      "directive": null,
      "start": 196,
      "end": 204
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
                    "name": "g1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 276,
                          "end": 283
                        },
                        "typeArguments": null,
                        "start": 276,
                        "end": 283
                      },
                      "start": 274,
                      "end": 283
                    },
                    "start": 272,
                    "end": 283
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Giraffe",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 289,
                          "end": 296
                        },
                        "typeArguments": null,
                        "start": 289,
                        "end": 296
                      },
                      "start": 287,
                      "end": 296
                    },
                    "start": 285,
                    "end": 296
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 301,
                    "end": 305
                  },
                  "start": 298,
                  "end": 305
                },
                "start": 271,
                "end": 305
              },
              "start": 269,
              "end": 305
            },
            "start": 267,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 267,
          "end": 305
        }
      ],
      "declare": false,
      "start": 263,
      "end": 306
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
          "start": 307,
          "end": 309
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 314
        },
        "start": 307,
        "end": 314
      },
      "directive": null,
      "start": 307,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 419
}
```
