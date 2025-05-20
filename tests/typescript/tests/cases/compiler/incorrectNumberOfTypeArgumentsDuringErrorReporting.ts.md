__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "ObjA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 66,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 49,
            "end": 65,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 60,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 65,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 62,
                "end": 65
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 47,
        "decorators": [],
        "name": "ObjB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 99,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 94,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 98,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "B",
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
        "start": 78,
        "end": 82,
        "decorators": [],
        "name": "Opts",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 109,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 112,
            "end": 188,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 185,
              "end": 188,
              "raw": "'Z'",
              "value": "Z"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 158,
                "end": 173,
                "decorators": [],
                "name": "opts",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 173,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 163,
                    "end": 173,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 167,
                      "end": 173,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 168,
                          "end": 169,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 169,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 171,
                          "end": 172,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 171,
                            "end": 172,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 167,
                      "decorators": [],
                      "name": "Opts",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 181,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 175,
                "end": 181
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 112,
              "end": 157,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 116,
                  "end": 130,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 130,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 130,
                      "decorators": [],
                      "name": "ObjA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 134,
                  "end": 155,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 144,
                    "end": 148,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 148,
                      "decorators": [],
                      "name": "ObjB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 155,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 155,
                      "decorators": [],
                      "name": "ObjB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 190,
      "end": 222,
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 222,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 220,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 219,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 213,
                "end": 219
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 206,
        "decorators": [],
        "name": "MyObjA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 271,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 271,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 235,
            "end": 270,
            "properties": [
              {
                "type": "Property",
                "start": 239,
                "end": 258,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 242,
                  "end": 258,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 243,
                      "end": 249,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 244,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 246,
                        "end": 249,
                        "raw": "'X'",
                        "value": "X"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 251,
                      "end": 257,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 254,
                        "end": 257,
                        "raw": "'Y'",
                        "value": "Y"
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 262,
                "end": 267,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 265,
                  "end": 267,
                  "properties": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 226,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 226,
          "end": 234,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 227,
              "end": 233,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 227,
                "end": 233,
                "decorators": [],
                "name": "MyObjA",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
