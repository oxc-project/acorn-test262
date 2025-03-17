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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "name": "TestGeneric",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "name": "TG",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 69,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 69,
                  "name": "TG",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 86,
            "name": "removeF",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 89,
            "end": 147,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 94,
                "end": 125,
                "properties": [
                  {
                    "type": "Property",
                    "start": 96,
                    "end": 97,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 99,
                    "end": 106,
                    "argument": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 106,
                      "name": "rest",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 125,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 121,
                      "name": "TestGeneric",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 121,
                      "end": 125,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 122,
                          "end": 124,
                          "typeName": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 124,
                            "name": "TX",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
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
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 89,
              "end": 93,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 90,
                  "end": 92,
                  "name": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 92,
                    "name": "TX",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 169,
            "name": "result",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 169,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 163,
                "end": 169
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 172,
            "end": 206,
            "object": {
              "type": "CallExpression",
              "start": 172,
              "end": 204,
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 179,
                "name": "removeF",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 193,
                        "end": 195,
                        "value": "",
                        "raw": "''"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 197,
                      "end": 201,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 198,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 200,
                        "end": 201,
                        "value": 3,
                        "raw": "3"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
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
            "property": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
