__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 412,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 140,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
        "start": 113,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 122,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 127,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 127,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 133,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 138,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
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
      "start": 142,
      "end": 212,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
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
        "start": 161,
        "end": 162,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 163,
            "end": 164,
            "typeName": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
        "start": 166,
        "end": 212,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 185,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 180,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 185,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
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
      "start": 214,
      "end": 304,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 221,
        "end": 224,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 222,
            "end": 223,
            "name": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
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
        "start": 233,
        "end": 234,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 234,
        "end": 237,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 235,
            "end": 236,
            "typeName": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
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
        "start": 238,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 269,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 251,
                      "end": 252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 254,
                  "end": 264,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 258,
                      "end": 264
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 269,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "VariableDeclaration",
      "start": 306,
      "end": 323,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 322,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 322,
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 314,
                  "end": 322,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 315,
                      "end": 321
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 341,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 340,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 332,
                  "end": 340,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 333,
                      "end": 339
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 342,
      "end": 359,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 358,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 358,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 350,
                  "end": 358,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 351,
                      "end": 357
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 360,
      "end": 366,
      "expression": {
        "type": "AssignmentExpression",
        "start": 360,
        "end": 365,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 364,
          "end": 365,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 372,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 375,
            "end": 388,
            "callee": {
              "type": "MemberExpression",
              "start": 375,
              "end": 380,
              "object": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 380,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 381,
                "end": 383,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 385,
                "end": 387,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 412,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 396,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 399,
            "end": 411,
            "callee": {
              "type": "MemberExpression",
              "start": 399,
              "end": 404,
              "object": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 401,
                "end": 404,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 405,
                "end": 407,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 409,
                "end": 410,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
