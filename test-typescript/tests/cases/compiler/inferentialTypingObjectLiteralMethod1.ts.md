__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Int",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 26,
            "end": 42,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 32,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
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
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "U",
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
      "type": "TSDeclareFunction",
      "start": 45,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "name": "foo",
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
          "start": 72,
          "end": 76,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 76,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 76,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
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
          "start": 78,
          "end": 90,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 90,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "name": "Int",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 84,
                "end": 90,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 88,
                    "end": 89,
                    "typeName": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "U",
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
          "start": 92,
          "end": 104,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 95,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "name": "Int",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 104,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 102,
                    "end": 103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
            "start": 69,
            "end": 70,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 105,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 107,
          "end": 108,
          "typeName": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 192,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 191,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 113,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 114,
            "end": 116,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "ObjectExpression",
            "start": 118,
            "end": 153,
            "properties": [
              {
                "type": "Property",
                "start": 120,
                "end": 151,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 126,
                  "end": 151,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 127,
                      "end": 129,
                      "name": "p1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 131,
                    "end": 151,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 133,
                        "end": 149,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 140,
                          "end": 149,
                          "object": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 142,
                            "name": "p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 149,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 155,
            "end": 190,
            "properties": [
              {
                "type": "Property",
                "start": 157,
                "end": 188,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 163,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 163,
                  "end": 188,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 164,
                      "end": 166,
                      "name": "p2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 168,
                    "end": 188,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 170,
                        "end": 186,
                        "argument": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 186,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
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
