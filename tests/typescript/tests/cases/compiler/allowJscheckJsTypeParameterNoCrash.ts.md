__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 26,
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "V",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 77,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "watch",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 49,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 58,
                      "end": 75,
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 70,
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 70,
                        "end": 75,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          }
                        ]
                      }
                    }
                  ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 80,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 97,
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 103,
        "end": 119,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 104,
            "end": 110,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 112,
          "end": 119,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 115,
            "end": 119
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 121,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 144,
        "decorators": [],
        "name": "extend",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 174,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 170,
                "decorators": [],
                "name": "ComponentOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 170,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 171,
                    "end": 173,
                    "members": []
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 181,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 177,
          "end": 181
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 183,
      "end": 211,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 190,
        "end": 211,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 194,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 201,
              "decorators": [],
              "name": "vextend",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "vextend",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "vextend",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 30,
        "value": "./func",
        "raw": "'./func'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 161,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 161,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 67,
              "end": 160,
              "callee": {
                "type": "Identifier",
                "start": 67,
                "end": 74,
                "decorators": [],
                "name": "vextend",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 75,
                  "end": 159,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 79,
                      "end": 157,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 84,
                        "decorators": [],
                        "name": "watch",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 86,
                        "end": 157,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 92,
                            "end": 132,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 97,
                              "decorators": [],
                              "name": "data1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 97,
                              "end": 132,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 101,
                                  "decorators": [],
                                  "name": "val",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 103,
                                "end": 132,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 111,
                                    "end": 126,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 111,
                                      "end": 125,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 111,
                                        "end": 121,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 111,
                                          "end": 115
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 116,
                                          "end": 121,
                                          "decorators": [],
                                          "name": "data2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 124,
                                        "end": 125,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 138,
                            "end": 152,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 143,
                              "decorators": [],
                              "name": "data2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 143,
                              "end": 152,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 144,
                                  "end": 147,
                                  "decorators": [],
                                  "name": "val",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 149,
                                "end": 152,
                                "body": []
                              },
                              "expression": false
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
