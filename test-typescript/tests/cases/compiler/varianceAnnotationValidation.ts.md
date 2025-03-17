__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 415,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 81,
        "name": "Controller",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 114,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 104,
              "name": "createAnimal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 113,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 106,
                "end": 113,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 109,
                  "end": 113,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 113,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 141,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "name": "run",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 140,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 121,
                "end": 140,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 122,
                    "end": 131,
                    "name": "animal",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 128,
                      "end": 131,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 130,
                        "end": 131,
                        "typeName": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
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
                  "start": 133,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 136,
                    "end": 140
                  }
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
      "start": 145,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 161,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 162,
        "end": 179,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 165,
            "end": 177,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 168,
              "name": "run",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 176,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 172,
                "end": 176
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
      "type": "EmptyStatement",
      "start": 179,
      "end": 180
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 191,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 221,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "name": "run",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 221,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 221,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 233,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 228,
              "name": "bark",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 228,
              "end": 233,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 233,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 203,
          "end": 209,
          "expression": {
            "type": "Identifier",
            "start": 203,
            "end": 209,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 263,
        "name": "AnimalContainer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 263,
        "end": 266,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 264,
            "end": 265,
            "name": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
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
        "start": 267,
        "end": 298,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 270,
            "end": 296,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 280,
              "name": "controller",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 282,
                "end": 295,
                "typeName": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 292,
                  "name": "Controller",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 292,
                  "end": 295,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 293,
                      "end": 294,
                      "typeName": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 294,
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 339,
            "name": "ca",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 339,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 339,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 331,
                  "name": "AnimalContainer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 331,
                  "end": 339,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 332,
                      "end": 338,
                      "typeName": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 338,
                        "name": "Animal",
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 377,
            "name": "cd",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 377,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 357,
                "end": 377,
                "typeName": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 372,
                  "name": "AnimalContainer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 372,
                  "end": 377,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 376,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 376,
                        "name": "Dog",
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 388,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 387,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 380,
          "end": 382,
          "name": "ca",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 385,
          "end": 387,
          "name": "cd",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 396,
      "end": 404,
      "expression": {
        "type": "AssignmentExpression",
        "start": 396,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 396,
          "end": 398,
          "name": "cd",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 401,
          "end": 403,
          "name": "ca",
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
