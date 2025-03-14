__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 39,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "payload",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "GenericClass",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "decorators": [],
            "name": "genericObject",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 63,
            "end": 103,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 79,
              "decorators": [],
              "name": "GenericClass",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 79,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 80,
                  "end": 100,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 82,
                      "end": 98,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 90,
                        "decorators": [],
                        "name": "greeting",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 90,
                        "end": 98,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 92,
                          "end": 98
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 197,
            "end": 222,
            "expression": {
              "type": "CallExpression",
              "start": 197,
              "end": 221,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 220,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 212,
                    "decorators": [],
                    "name": "object",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 220,
                    "decorators": [],
                    "name": "payload",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 197,
                "end": 205,
                "decorators": [],
                "name": "callback",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 130,
        "decorators": [],
        "name": "genericFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 134,
          "end": 157,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 157,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 154,
                "end": 157,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 154,
                "decorators": [],
                "name": "GenericClass",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 189,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 189,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 169,
              "end": 189,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 180,
                  "decorators": [],
                  "name": "payload",
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 185,
                  "end": 189
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 133,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 132,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 358,
      "expression": {
        "type": "CallExpression",
        "start": 226,
        "end": 357,
        "arguments": [
          {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "decorators": [],
            "name": "genericObject",
            "optional": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 356,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 273,
              "end": 356,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 279,
                  "end": 316,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 283,
                      "end": 315,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 287,
                        "end": 315,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 287,
                          "end": 313,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 287,
                            "end": 295,
                            "decorators": [],
                            "name": "greeting",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 313,
                            "decorators": [],
                            "name": "toLocaleLowerCase",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 258,
                "end": 268,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 259,
                    "end": 267,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 267,
                      "decorators": [],
                      "name": "greeting",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 267,
                      "decorators": [],
                      "name": "greeting",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 226,
          "end": 241,
          "decorators": [],
          "name": "genericFunction",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
