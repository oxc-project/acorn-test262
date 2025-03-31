__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 472,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 406,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 127,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "name": "U",
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
                "start": 120,
                "end": 127,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 58,
                "end": 113,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 101,
                    "end": 112,
                    "name": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 112,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 112,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 210,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 151,
              "name": "staticmethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 210,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 201,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 200,
                      "end": 201,
                      "typeName": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 201,
                        "name": "U",
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
                "start": 203,
                "end": 210,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 151,
                "end": 196,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 194,
                    "end": 195,
                    "name": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "name": "U",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 306,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 237,
              "name": "privatemethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 306,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 293,
                  "end": 297,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 294,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 296,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "name": "U",
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
                "start": 299,
                "end": 306,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 237,
                "end": 292,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 280,
                    "end": 291,
                    "name": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 311,
            "end": 404,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 345,
              "name": "privatestaticmethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 404,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 395,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 392,
                    "end": 395,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 395,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
                        "name": "U",
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
                "start": 397,
                "end": 404,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 345,
                "end": 390,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 388,
                    "end": 389,
                    "name": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 389,
                      "name": "U",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
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
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 424,
        "name": "compare",
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
          "start": 437,
          "end": 441,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 441,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
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
          "start": 443,
          "end": 447,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 444,
            "end": 447,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 446,
              "end": 447,
              "typeName": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
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
        "start": 449,
        "end": 472,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 455,
            "end": 470,
            "argument": {
              "type": "BinaryExpression",
              "start": 462,
              "end": 469,
              "left": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 424,
        "end": 436,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 434,
            "end": 435,
            "name": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
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
