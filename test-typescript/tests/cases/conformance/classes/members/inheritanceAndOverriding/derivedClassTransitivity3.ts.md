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
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 122,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 127,
                  "name": "x",
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
                },
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 133,
                  "name": "y",
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
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 138,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 142,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 212,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 185,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 180,
                  "name": "x",
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
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 185,
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
      "implements": [],
      "abstract": false,
      "declare": false,
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
    {
      "type": "ClassDeclaration",
      "start": 214,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 233,
        "end": 234,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 269,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "name": "x",
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
                },
                {
                  "type": "Identifier",
                  "start": 254,
                  "end": 264,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 258,
                      "end": 264
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 269,
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
      "implements": [],
      "abstract": false,
      "declare": false,
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
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 322,
            "name": "c",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 340,
            "name": "d",
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
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 342,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 358,
            "name": "e",
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
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 364,
          "end": 365,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 372,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 380,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 396,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 401,
                "end": 404,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
