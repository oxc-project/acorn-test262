__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 58,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 56,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "name": "groupBy",
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
              "end": 28,
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
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 32,
                "end": 55,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 34,
                    "end": 53,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 35,
                        "end": 46,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 38,
                          "end": 46,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 52,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 49,
                        "end": 52,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 49,
                          "end": 50,
                          "typeName": {
                            "type": "Identifier",
                            "start": 49,
                            "end": 50,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 59,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "f",
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
      "type": "VariableDeclaration",
      "start": 69,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 77,
            "end": 88,
            "callee": {
              "type": "MemberExpression",
              "start": 77,
              "end": 86,
              "object": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 79,
                "end": 86,
                "name": "groupBy",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "name": "groupBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 171,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 165,
                    "argument": {
                      "type": "Literal",
                      "start": 160,
                      "end": 164,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 112,
                "end": 115,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 113,
                    "end": 114,
                    "name": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 119,
                  "end": 142,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 121,
                      "end": 140,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 122,
                          "end": 133,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 125,
                            "end": 133,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 139,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 136,
                          "end": 139,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 136,
                            "end": 137,
                            "typeName": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 183,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "name": "c",
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
      "type": "VariableDeclaration",
      "start": 185,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 206,
            "callee": {
              "type": "MemberExpression",
              "start": 194,
              "end": 204,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 196,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 197,
                "end": 204,
                "name": "groupBy",
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
