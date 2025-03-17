__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 207,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 69,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 69,
                  "decorators": [],
                  "name": "TG",
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
        "start": 32,
        "end": 43,
        "decorators": [],
        "name": "TestGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 46,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "decorators": [],
              "name": "TG",
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
      "start": 73,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 86,
            "decorators": [],
            "name": "removeF",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 89,
            "end": 147,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 130,
              "end": 147,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 134,
                  "end": 145,
                  "argument": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 145,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 94,
                "end": 125,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 96,
                    "end": 97,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 99,
                    "end": 106,
                    "argument": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 106,
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 125,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 121,
                      "end": 125,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 122,
                          "end": 124,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 124,
                            "decorators": [],
                            "name": "TX",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 121,
                      "decorators": [],
                      "name": "TestGeneric",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 89,
              "end": 93,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 90,
                  "end": 92,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 92,
                    "decorators": [],
                    "name": "TX",
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
      "type": "VariableDeclaration",
      "start": 149,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 169,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 169,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 163,
                "end": 169
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 172,
            "end": 206,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 172,
              "end": 204,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 188,
                  "end": 203,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 190,
                      "end": 195,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 193,
                        "end": 195,
                        "raw": "''",
                        "value": ""
                      }
                    },
                    {
                      "type": "Property",
                      "start": 197,
                      "end": 201,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 198,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 200,
                        "end": 201,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 179,
                "decorators": [],
                "name": "removeF",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 179,
                "end": 187,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 180,
                    "end": 186
                  }
                ]
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
