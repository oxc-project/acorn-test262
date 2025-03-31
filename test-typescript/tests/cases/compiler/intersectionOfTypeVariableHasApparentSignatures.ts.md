__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "P",
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
        "start": 23,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "name": "props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 77,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 36,
                "end": 77,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 47,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 44,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 44,
                      "end": 47,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 45,
                          "end": 46,
                          "typeName": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 46,
                            "name": "P",
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
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 58,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 58,
                      "end": 77,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 59,
                          "end": 76,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 61,
                              "end": 74,
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 61,
                                "end": 69,
                                "name": "children",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 70,
                                "end": 74,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 72,
                                  "end": 74,
                                  "members": []
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
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
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 97,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 145,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 143,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 112,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 143,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 115,
                "end": 143,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 116,
                    "end": 134,
                    "name": "items",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 121,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 123,
                        "end": 134,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 124,
                            "end": 133,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 125,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 125,
                              "end": 133,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 127,
                                "end": 133
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 139,
                    "end": 143
                  }
                }
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
      "type": "TSDeclareFunction",
      "start": 147,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "name": "f",
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
          "start": 183,
          "end": 198,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 198,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 195,
                "name": "Component",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 195,
                "end": 198,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
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
        "start": 165,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 181,
                "name": "Props",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 199,
        "end": 205,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 201,
          "end": 205
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 269,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 268,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 210,
            "end": 267,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 265,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 221,
                  "name": "props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 223,
                  "end": 265,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 233,
                      "end": 259,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 241,
                        "name": "children",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 244,
                        "end": 258,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "ObjectPattern",
                            "start": 245,
                            "end": 250,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 247,
                                "end": 248,
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 247,
                                  "end": 248,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 247,
                                  "end": 248,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ],
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 255,
                          "end": 258,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
