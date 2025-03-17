__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Utils",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 86,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "name": "fold",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 25,
              "end": 31,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 26,
                  "end": 27,
                  "name": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 29,
                  "end": 30,
                  "name": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "name": "S",
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
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 43,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 35,
                    "end": 43,
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 40,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 40,
                      "end": 43,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 41,
                          "end": 42,
                          "typeName": {
                            "type": "Identifier",
                            "start": 41,
                            "end": 42,
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
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 45,
                "end": 71,
                "name": "folder",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 54,
                    "end": 71,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 55,
                        "end": 59,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 56,
                          "end": 59,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 58,
                            "end": 59,
                            "typeName": {
                              "type": "Identifier",
                              "start": 58,
                              "end": 59,
                              "name": "S",
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
                        "start": 61,
                        "end": 65,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 65,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 65,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 65,
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
                      "start": 67,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 70,
                        "end": 71,
                        "typeName": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
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
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 73,
                "end": 81,
                "name": "init",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 80,
                    "end": 81,
                    "typeName": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
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
      "type": "VariableDeclaration",
      "start": 90,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "name": "utils",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "name": "Utils",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 122,
      "expression": {
        "type": "CallExpression",
        "start": 109,
        "end": 121,
        "callee": {
          "type": "MemberExpression",
          "start": 109,
          "end": 119,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 114,
            "name": "utils",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "name": "fold",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 149,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 148,
        "callee": {
          "type": "MemberExpression",
          "start": 132,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "name": "utils",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "name": "fold",
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
            "start": 143,
            "end": 147,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 184,
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 172,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 167,
            "name": "utils",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 168,
            "end": 172,
            "name": "fold",
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
            "start": 173,
            "end": 177,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 179,
            "end": 183,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 227,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 226,
        "callee": {
          "type": "MemberExpression",
          "start": 198,
          "end": 208,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 203,
            "name": "utils",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "name": "fold",
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
            "start": 209,
            "end": 213,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 215,
            "end": 219,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 221,
            "end": 225,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
