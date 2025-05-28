__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 561,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 20,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 152,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 152,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 117,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "decorators": [],
                  "name": "private",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 117,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 85,
                    "end": 111,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 85,
                      "end": 110,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 92,
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "AssignmentExpression",
                        "start": 95,
                        "end": 110,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 101,
                          "decorators": [],
                          "name": "public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 110,
                          "decorators": [],
                          "name": "static",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 135,
              "decorators": [],
              "name": "banana",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 150,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 136,
                  "end": 145,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 139,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 145,
                        "decorators": [],
                        "name": "public",
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
                "start": 147,
                "end": 150,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 352,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 352,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 207,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 179,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 207,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 180,
                  "end": 193,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 193,
                    "decorators": [],
                    "name": "public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 195,
                  "end": 198,
                  "decorators": [],
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 207,
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
          },
          {
            "type": "MethodDefinition",
            "start": 212,
            "end": 312,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 216,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 312,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 217,
                  "end": 224,
                  "decorators": [],
                  "name": "private",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 232,
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 240,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 312,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 252,
                    "end": 270,
                    "id": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 264,
                      "decorators": [],
                      "name": "let",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 267,
                      "end": 270,
                      "body": []
                    },
                    "expression": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 279,
                    "end": 306,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 283,
                        "end": 305,
                        "id": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 287,
                          "end": 305,
                          "id": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 299,
                            "decorators": [],
                            "name": "let",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 302,
                            "end": 305,
                            "body": []
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 318,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 331,
              "decorators": [],
              "name": "pulbic",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 337,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 334,
                "end": 337,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 354,
      "end": 381,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 361,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 368,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 368,
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 370,
            "end": 377,
            "name": {
              "type": "Identifier",
              "start": 370,
              "end": 377,
              "decorators": [],
              "name": "private",
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
        "start": 378,
        "end": 381,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 383,
      "end": 412,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 390,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 402,
          "end": 408,
          "expression": {
            "type": "Identifier",
            "start": 402,
            "end": 408,
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 412,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 414,
      "end": 453,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 421,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 433,
          "end": 449,
          "expression": {
            "type": "MemberExpression",
            "start": 433,
            "end": 449,
            "object": {
              "type": "MemberExpression",
              "start": 433,
              "end": 447,
              "object": {
                "type": "Identifier",
                "start": 433,
                "end": 439,
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 440,
                "end": 447,
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 450,
        "end": 453,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 454,
      "end": 503,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 462,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 474,
          "end": 499,
          "expression": {
            "type": "MemberExpression",
            "start": 474,
            "end": 499,
            "object": {
              "type": "MemberExpression",
              "start": 474,
              "end": 488,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 480,
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 481,
                "end": 488,
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 489,
              "end": 499,
              "decorators": [],
              "name": "implements",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 500,
        "end": 503,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 504,
      "end": 531,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 511,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 520,
        "end": 527,
        "decorators": [],
        "name": "package",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 528,
        "end": 531,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 532,
      "end": 561,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 539,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 548,
        "end": 557,
        "object": {
          "type": "Identifier",
          "start": 548,
          "end": 555,
          "decorators": [],
          "name": "package",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 556,
          "end": 557,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 558,
        "end": 561,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
