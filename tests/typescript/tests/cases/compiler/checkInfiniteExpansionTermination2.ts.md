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
        "name": "IObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 101
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
              "start": 102,
              "end": 103
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 103
          }
        ],
        "start": 101,
        "end": 104
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IObservable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 125
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 127
                        },
                        "typeArguments": null,
                        "start": 126,
                        "end": 127
                      },
                      "start": 126,
                      "end": 129
                    }
                  ],
                  "start": 125,
                  "end": 130
                },
                "start": 114,
                "end": 130
              },
              "start": 112,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 111,
            "end": 131
          }
        ],
        "start": 105,
        "end": 133
      },
      "declare": false,
      "start": 80,
      "end": 133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISubject",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 152
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
              "start": 153,
              "end": 154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 154
          }
        ],
        "start": 152,
        "end": 155
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IObservable",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 175
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
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              }
            ],
            "start": 175,
            "end": 178
          },
          "start": 164,
          "end": 178
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 179,
        "end": 182
      },
      "declare": false,
      "start": 134,
      "end": 182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combineLatest",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 214
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOther",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 221
          }
        ],
        "start": 214,
        "end": 222
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IObservable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 237
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOther",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 244
                      },
                      "typeArguments": null,
                      "start": 238,
                      "end": 244
                    }
                  ],
                  "start": 237,
                  "end": 245
                },
                "start": 226,
                "end": 245
              },
              "start": 226,
              "end": 247
            },
            "start": 224,
            "end": 247
          },
          "start": 223,
          "end": 247
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 250,
          "end": 254
        },
        "start": 248,
        "end": 254
      },
      "body": null,
      "expression": false,
      "start": 184,
      "end": 255
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combineLatest",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 290,
          "end": 294
        },
        "start": 288,
        "end": 294
      },
      "body": null,
      "expression": false,
      "start": 256,
      "end": 295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 308
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 309,
              "end": 310
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 309,
            "end": 310
          }
        ],
        "start": 308,
        "end": 311
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ISubject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 340
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 341,
                              "end": 344
                            }
                          ],
                          "start": 340,
                          "end": 345
                        },
                        "start": 332,
                        "end": 345
                      },
                      "start": 332,
                      "end": 347
                    },
                    "start": 330,
                    "end": 347
                  },
                  "start": 324,
                  "end": 347
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 350,
                  "end": 352
                },
                "definite": false,
                "start": 324,
                "end": 352
              }
            ],
            "declare": false,
            "start": 320,
            "end": 353
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "combineLatest",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 413
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
                      "start": 414,
                      "end": 415
                    },
                    "typeArguments": null,
                    "start": 414,
                    "end": 415
                  }
                ],
                "start": 413,
                "end": 416
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 423
                }
              ],
              "optional": false,
              "start": 400,
              "end": 424
            },
            "directive": null,
            "start": 400,
            "end": 425
          }
        ],
        "start": 314,
        "end": 427
      },
      "expression": false,
      "start": 297,
      "end": 427
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 427
}
```
