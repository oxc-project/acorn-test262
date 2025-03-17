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
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 111,
            "end": 131,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "type": "TSInterfaceDeclaration",
      "start": 134,
      "end": 182,
      "body": {
        "type": "TSInterfaceBody",
        "start": 179,
        "end": 182,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 164,
          "end": 178,
          "expression": {
            "type": "Identifier",
            "start": 164,
            "end": 175,
            "decorators": [],
            "name": "IObservable",
            "optional": false,
            "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 152,
        "decorators": [],
        "name": "ISubject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 152,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 154,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
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
      "type": "TSDeclareFunction",
      "start": 184,
      "end": 255,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 214,
        "decorators": [],
        "name": "combineLatest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 223,
          "end": 247,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 237,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 244,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 244,
                        "decorators": [],
                        "name": "TOther",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 237,
                  "decorators": [],
                  "name": "IObservable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 248,
        "end": 254,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 250,
          "end": 254
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 222,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 221,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 221,
              "decorators": [],
              "name": "TOther",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 256,
      "end": 295,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 286,
        "decorators": [],
        "name": "combineLatest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 288,
        "end": 294,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 290,
          "end": 294
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 297,
      "end": 427,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 347,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
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
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 340,
                          "decorators": [],
                          "name": "ISubject",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 350,
                  "end": 352,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 400,
            "end": 425,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 400,
              "end": 424,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 423,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 400,
                "end": 413,
                "decorators": [],
                "name": "combineLatest",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 308,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 308,
        "end": 311,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 309,
            "end": 310,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
