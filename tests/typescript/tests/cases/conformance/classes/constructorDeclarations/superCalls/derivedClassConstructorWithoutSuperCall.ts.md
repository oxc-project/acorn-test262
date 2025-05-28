__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 609,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 86,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 153,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 151,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 132,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 151,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 151,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 155,
      "end": 183,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 166,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 183,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 181,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 185,
      "end": 388,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 199,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 211,
        "end": 216,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 216,
        "end": 219,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 217,
            "end": 218,
            "typeName": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 220,
        "end": 388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 386,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 237,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 386,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 386,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 305,
                    "end": 328,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 309,
                        "end": 327,
                        "id": {
                          "type": "Identifier",
                          "start": 309,
                          "end": 311,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 314,
                          "end": 327,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "start": 320,
                            "end": 327,
                            "callee": {
                              "type": "Super",
                              "start": 320,
                              "end": 325
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 390,
      "end": 512,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 404,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 404,
        "end": 407,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 405,
            "end": 406,
            "name": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 416,
        "end": 421,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 421,
        "end": 424,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 422,
            "end": 423,
            "typeName": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 425,
        "end": 512,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 510,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 442,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 442,
              "end": 510,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 445,
                "end": 510,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 464,
                    "end": 495,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 468,
                        "end": 495,
                        "id": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 469,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 472,
                          "end": 495,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 484,
                            "end": 495,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 486,
                                "end": 493,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 486,
                                  "end": 493,
                                  "callee": {
                                    "type": "Super",
                                    "start": 486,
                                    "end": 491
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 514,
      "end": 609,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 528,
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 528,
        "end": 531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 529,
            "end": 530,
            "name": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 540,
        "end": 545,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 545,
        "end": 548,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 546,
            "end": 547,
            "typeName": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 549,
        "end": 609,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 555,
            "end": 607,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 566,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 566,
              "end": 607,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 569,
                "end": 607,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 579,
                    "end": 595,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 583,
                        "end": 594,
                        "id": {
                          "type": "Identifier",
                          "start": 583,
                          "end": 584,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 587,
                          "end": 594,
                          "callee": {
                            "type": "Super",
                            "start": 587,
                            "end": 592
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
