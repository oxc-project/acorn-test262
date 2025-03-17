__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 182,
  "end": 473,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 196,
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 199,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
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
        "start": 200,
        "end": 221,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 206,
            "end": 219,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 214,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 214,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 218,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 320,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 267,
            "end": 318,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 270,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 270,
              "end": 318,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 271,
                  "end": 280,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 272,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 274,
                      "end": 280
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 290,
                "end": 318,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 300,
                    "end": 312,
                    "argument": {
                      "type": "Literal",
                      "start": 307,
                      "end": 311,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 281,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 283,
                  "end": 289
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 229,
        "end": 232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 230,
            "end": 231,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 244,
          "end": 251,
          "expression": {
            "type": "Identifier",
            "start": 244,
            "end": 248,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 248,
            "end": 251,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 249,
                "end": 250,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 322,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 337,
        "name": "IFoo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 337,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
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
        "start": 341,
        "end": 362,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 347,
            "end": 360,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 351,
                "end": 355,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 352,
                  "end": 355,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 354,
                    "end": 355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 356,
              "end": 359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 358,
                "end": 359,
                "typeName": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 363,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 473,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 410,
            "end": 471,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 413,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 413,
              "end": 471,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 433,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 433,
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 433,
                        "name": "Tstring",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 443,
                "end": 471,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 453,
                    "end": 465,
                    "argument": {
                      "type": "Literal",
                      "start": 460,
                      "end": 464,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 413,
                "end": 422,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 414,
                    "end": 421,
                    "name": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 421,
                      "name": "Tstring",
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
                "start": 434,
                "end": 442,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 436,
                  "end": 442
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 386,
          "end": 394,
          "expression": {
            "type": "Identifier",
            "start": 386,
            "end": 391,
            "name": "IFoo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 391,
            "end": 394,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 392,
                "end": 393,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
