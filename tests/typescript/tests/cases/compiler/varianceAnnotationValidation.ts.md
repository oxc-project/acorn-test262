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
        "name": "Controller",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 81
      },
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
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 82,
            "end": 87
          }
        ],
        "start": 81,
        "end": 88
      },
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
              "name": "createAnimal",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 113
                    },
                    "typeArguments": null,
                    "start": 112,
                    "end": 113
                  },
                  "start": 109,
                  "end": 113
                },
                "start": 106,
                "end": 113
              },
              "start": 104,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "animal",
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
                          "start": 130,
                          "end": 131
                        },
                        "typeArguments": null,
                        "start": 130,
                        "end": 131
                      },
                      "start": 128,
                      "end": 131
                    },
                    "start": 122,
                    "end": 131
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 136,
                    "end": 140
                  },
                  "start": 133,
                  "end": 140
                },
                "start": 121,
                "end": 140
              },
              "start": 119,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 141
          }
        ],
        "start": 89,
        "end": 143
      },
      "declare": false,
      "start": 61,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 161
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 168
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 172,
                "end": 176
              },
              "start": 170,
              "end": 176
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 165,
            "end": 177
          }
        ],
        "start": 162,
        "end": 179
      },
      "declare": false,
      "start": 145,
      "end": 179
    },
    {
      "type": "EmptyStatement",
      "start": 179,
      "end": 180
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 191
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 209
          },
          "typeArguments": null,
          "start": 203,
          "end": 209
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 219,
                "end": 221
              },
              "expression": false,
              "start": 216,
              "end": 221
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 221
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bark",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 228
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 231,
                "end": 233
              },
              "expression": false,
              "start": 228,
              "end": 233
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 224,
            "end": 233
          }
        ],
        "start": 210,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 182,
      "end": 236
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalContainer",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 263
      },
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
              "start": 264,
              "end": 265
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 264,
            "end": 265
          }
        ],
        "start": 263,
        "end": 266
      },
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
              "name": "controller",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Controller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 292
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 294
                      },
                      "typeArguments": null,
                      "start": 293,
                      "end": 294
                    }
                  ],
                  "start": 292,
                  "end": 295
                },
                "start": 282,
                "end": 295
              },
              "start": 280,
              "end": 295
            },
            "accessibility": null,
            "static": false,
            "start": 270,
            "end": 296
          }
        ],
        "start": 267,
        "end": 298
      },
      "declare": false,
      "start": 238,
      "end": 298
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ca",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalContainer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 331
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 338
                      },
                      "typeArguments": null,
                      "start": 332,
                      "end": 338
                    }
                  ],
                  "start": 331,
                  "end": 339
                },
                "start": 316,
                "end": 339
              },
              "start": 314,
              "end": 339
            },
            "start": 312,
            "end": 339
          },
          "init": null,
          "definite": false,
          "start": 312,
          "end": 339
        }
      ],
      "declare": true,
      "start": 300,
      "end": 340
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalContainer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 372
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dog",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 376
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 376
                    }
                  ],
                  "start": 372,
                  "end": 377
                },
                "start": 357,
                "end": 377
              },
              "start": 355,
              "end": 377
            },
            "start": 353,
            "end": 377
          },
          "init": null,
          "definite": false,
          "start": 353,
          "end": 377
        }
      ],
      "declare": true,
      "start": 341,
      "end": 378
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ca",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 382
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "cd",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 387
        },
        "start": 380,
        "end": 387
      },
      "directive": null,
      "start": 380,
      "end": 388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "cd",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 398
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ca",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 403
        },
        "start": 396,
        "end": 403
      },
      "directive": null,
      "start": 396,
      "end": 404
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 414
}
```
