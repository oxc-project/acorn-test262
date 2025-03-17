__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 428,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 133,
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
        "end": 133,
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
      "start": 134,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 152,
        "name": "ISubject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 164,
          "end": 178,
          "expression": {
            "type": "Identifier",
            "start": 164,
            "end": 175,
            "name": "IObservable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 175,
            "end": 178,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
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
        "start": 152,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
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
        "start": 179,
        "end": 182,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 184,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 214,
        "name": "combineLatest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 223,
          "end": 247,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 224,
            "end": 247,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 226,
              "end": 247,
              "elementType": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 237,
                  "name": "IObservable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 237,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 244,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 244,
                        "name": "TOther",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 222,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 221,
              "name": "TOther",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 248,
        "end": 254,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 250,
          "end": 254
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 256,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 286,
        "name": "combineLatest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 288,
        "end": 294,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 290,
          "end": 294
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 297,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 308,
        "name": "fn",
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
        "start": 314,
        "end": 427,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 352,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 347,
                  "name": "values",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 330,
                    "end": 347,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 332,
                      "end": 347,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 332,
                        "end": 345,
                        "typeName": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 340,
                          "name": "ISubject",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 340,
                          "end": 345,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 341,
                              "end": 344
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 350,
                  "end": 352,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 400,
            "end": 425,
            "expression": {
              "type": "CallExpression",
              "start": 400,
              "end": 424,
              "callee": {
                "type": "Identifier",
                "start": 400,
                "end": 413,
                "name": "combineLatest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 423,
                  "name": "values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 413,
                "end": 416,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 308,
        "end": 311,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 309,
            "end": 310,
            "name": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
